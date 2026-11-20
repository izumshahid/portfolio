"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { TiltCard } from "./Interactive";

const pad = (n) => String(n + 1).padStart(2, "0");

/** Position of `el` inside `root`, ignoring transforms (tilt / fly-in). */
function offsetWithin(el, root) {
  let x = 0;
  let y = 0;
  let n = el;
  while (n && n !== root) {
    x += n.offsetLeft;
    y += n.offsetTop;
    n = n.offsetParent;
  }
  return { x, y };
}

/** Index of the last sample whose y <= target (samples are y-monotonic). */
function lastAtY(pts, target) {
  let lo = 0;
  let hi = pts.length - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (pts[mid][2] <= target) lo = mid;
    else hi = mid - 1;
  }
  return lo;
}

/**
 * Curved timeline. One SVG path snakes down the page: it swings in from the
 * side, drops through each project image (which lights up as the line reaches
 * it), leaves from the bottom of the image and curves across to the next one.
 * Geometry is measured from the DOM so it follows the real layout at any width.
 */
export default function Timeline({ projects }) {
  const reduced = useReducedMotion();
  const wrapRef = useRef(null);
  const pathRef = useRef(null);
  const litRef = useRef(null);
  const headRef = useRef(null);
  const sampled = useRef({ pts: [], total: 0, entries: [] });
  const [geom, setGeom] = useState(null);
  const [reached, setReached] = useState(0);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start 60%", "end 60%"],
  });
  const spring = useSpring(scrollYProgress, { stiffness: 110, damping: 26, mass: 0.4 });
  const progress = reduced ? scrollYProgress : spring;

  const measure = useCallback(() => {
    const root = wrapRef.current;
    if (!root || !root.offsetWidth) return;
    const W = root.offsetWidth;
    const H = root.offsetHeight;
    const desktop = window.innerWidth >= 768;
    const covers = [...root.querySelectorAll("[data-tl-cover]")];
    const cards = [...root.querySelectorAll("[data-tl-card]")];
    const end = root.querySelector("[data-tl-end]");
    if (!covers.length || !end) return;

    const rect = (el) => {
      const o = offsetWithin(el, root);
      return { x: o.x, y: o.y, w: el.offsetWidth, h: el.offsetHeight };
    };
    const coverRects = covers.map(rect);
    const cardRects = cards.map(rect);
    const stops = coverRects.map((r, i) => ({
      x: r.x + r.w * (desktop ? 0.5 : i % 2 === 0 ? 0.3 : 0.7),
      top: r.y,
      bot: r.y + r.h,
    }));

    const swing = Math.min(W * (desktop ? 0.16 : 0.22), 180);
    const first = stops[0];
    const sx = desktop ? W / 2 : W * 0.88;
    const sdir = first.x >= sx ? 1 : -1;
    let d = `M ${sx} 0 C ${sx - sdir * swing} ${first.top * 0.3} ${first.x + sdir * swing} ${first.top * 0.7} ${first.x} ${first.top} L ${first.x} ${first.bot}`;
    for (let i = 1; i < stops.length; i++) {
      const a = stops[i - 1];
      const b = stops[i];
      const gap = b.top - a.bot;
      const dir = b.x >= a.x ? 1 : -1;
      // Control points overshoot sideways so the line loops out and back in.
      const c1x = a.x - dir * swing;
      const c2x = b.x + dir * swing;
      d += ` C ${c1x} ${a.bot + gap * 0.4} ${c2x} ${b.top - gap * 0.4} ${b.x} ${b.top} L ${b.x} ${b.bot}`;
    }
    const last = stops[stops.length - 1];
    const e = rect(end);
    const ex = e.x + e.w / 2;
    const ey = e.y + e.h / 2;
    const egap = ey - last.bot;
    const edir = ex >= last.x ? 1 : -1;
    d += ` C ${last.x - edir * swing} ${last.bot + egap * 0.4} ${ex + edir * swing * 0.5} ${ey - egap * 0.4} ${ex} ${ey}`;

    setGeom({ W, H, d, cards: cardRects, covers: coverRects });
  }, []);

  useLayoutEffect(() => {
    measure();
    const root = wrapRef.current;
    const ro = new ResizeObserver(measure);
    if (root) ro.observe(root);
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const update = useCallback(
    (v) => {
      const { pts, total, entries } = sampled.current;
      if (!geom || !pts.length) return;
      const y = Math.min(Math.max(v, 0), 1) * geom.H;
      const i = lastAtY(pts, y);
      const a = pts[i];
      const b = pts[Math.min(i + 1, pts.length - 1)];
      const t = b[2] > a[2] ? Math.min((y - a[2]) / (b[2] - a[2]), 1) : 0;
      const len = a[0] + (b[0] - a[0]) * t;
      const x = a[1] + (b[1] - a[1]) * t;
      const py = a[2] + (b[2] - a[2]) * t;
      if (litRef.current) litRef.current.style.strokeDasharray = `${len} ${total + 10}`;
      if (headRef.current) {
        headRef.current.setAttribute("transform", `translate(${x} ${py})`);
        headRef.current.style.opacity = v <= 0.002 || v >= 0.998 ? "0" : "1";
      }
      const n = entries.filter((e) => len >= e).length;
      setReached((prev) => (prev === n ? prev : n));
    },
    [geom],
  );

  // Sample the path once per layout so scroll updates are cheap lookups.
  useLayoutEffect(() => {
    const path = pathRef.current;
    if (!geom || !path) return;
    const total = path.getTotalLength();
    const pts = [];
    for (let l = 0; l < total; l += 4) {
      const p = path.getPointAtLength(l);
      pts.push([l, p.x, p.y]);
    }
    const p = path.getPointAtLength(total);
    pts.push([total, p.x, p.y]);
    const entries = geom.covers.map((c) => pts[lastAtY(pts, c.y)][0]);
    sampled.current = { pts, total, entries };
    update(progress.get());
  }, [geom, update, progress]);

  useMotionValueEvent(progress, "change", update);

  return (
    <div id="timeline" className="relative z-10 mx-auto max-w-6xl scroll-mt-20 px-6">
      <div ref={wrapRef} className="relative">
        {geom && (
          <svg
            aria-hidden="true"
            width={geom.W}
            height={geom.H}
            viewBox={`0 0 ${geom.W} ${geom.H}`}
            className="pointer-events-none absolute left-0 top-0 z-0 overflow-visible"
          >
            <defs>
              <linearGradient
                id="tl-grad"
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="0"
                x2="0"
                y2={geom.H}
              >
                <stop offset="0" stopColor="#2de2ff" />
                <stop offset="1" stopColor="#b6ff3c" />
              </linearGradient>
              {/* The line runs behind the cards: visible only in the gaps */}
              <mask id="tl-mask" maskUnits="userSpaceOnUse" x="0" y="0" width={geom.W} height={geom.H}>
                <rect width={geom.W} height={geom.H} fill="white" />
                {geom.cards.map((r, i) => (
                  <rect key={`c${i}`} x={r.x} y={r.y} width={r.w} height={r.h} fill="black" />
                ))}
              </mask>
            </defs>
            <g mask="url(#tl-mask)">
              <path
                ref={pathRef}
                d={geom.d}
                fill="none"
                stroke="rgb(var(--hairline-strong))"
                strokeWidth="1.5"
                strokeDasharray="3 6"
              />
              <path
                ref={litRef}
                d={geom.d}
                fill="none"
                stroke="url(#tl-grad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{
                  strokeDasharray: "0 100000",
                  filter: "drop-shadow(0 0 6px rgb(45 226 255 / 0.85))",
                }}
              />
              <g ref={headRef} style={{ opacity: 0 }}>
                <circle r="9" fill="rgb(45 226 255 / 0.25)" />
                <circle r="4.5" fill="#fff" style={{ filter: "drop-shadow(0 0 8px rgb(45 226 255))" }} />
              </g>
            </g>
          </svg>
        )}

        {projects.map((project, i) => (
          <TimelineItem
            key={project.slug}
            project={project}
            index={i}
            total={projects.length}
            lit={i < reached}
          />
        ))}

        <div className="relative grid grid-cols-[2.5rem_1fr] pb-4 pt-10 md:grid-cols-[1fr_5rem_1fr]">
          <div className="col-start-1 flex justify-center md:col-start-2">
            <span
              data-tl-end
              className="h-2.5 w-2.5 rounded-full bg-[var(--t-lime)] shadow-[0_0_14px_var(--t-lime)]"
            />
          </div>
          <p className="t-mono col-start-2 text-xs text-faint md:col-start-3">
            EOF: more shipping soon
          </p>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ project, index, total, lit }) {
  const reduced = useReducedMotion();
  const left = index % 2 === 0;
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  const fly = reduced ? { opacity: 0 } : { opacity: 0, x: left ? -64 : 64, filter: "blur(8px)" };
  const side = reduced ? { opacity: 0 } : { opacity: 0, x: left ? 40 : -40 };

  return (
    <div className="relative grid grid-cols-1 items-center py-12 md:grid-cols-[1fr_5rem_1fr] md:py-28">
      {/* Card */}
      <motion.div
        ref={cardRef}
        data-tl-card
        initial={fly}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className={`relative z-10 col-start-1 row-start-1 ${left ? "md:col-start-1" : "md:col-start-3"}`}
      >
        <div
          className="rounded-[10px] transition-shadow duration-700"
          style={{ boxShadow: lit ? "0 0 60px rgb(45 226 255 / 0.3)" : "0 0 0 rgb(45 226 255 / 0)" }}
        >
          <TiltCard className="group">
            <div className="t-window__bar">
              <span className="t-dot" />
              <span className="t-dot" />
              <span className="t-dot" />
              <span className="ml-2 truncate">~/work/{project.slug}</span>
              {project.exclusive && <span className="t-badge ml-auto">exclusive</span>}
            </div>

            <div data-tl-cover className="relative aspect-[16/9] overflow-hidden">
              <motion.div style={{ y: reduced ? 0 : imgY }} className="absolute inset-0 scale-[1.18]">
                <Image
                  src={project.cover}
                  alt={`${project.title} cover`}
                  fill
                  sizes="(max-width: 768px) 90vw, 520px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
              <div className="t-scanlines pointer-events-none absolute inset-0" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(4_7_10/0.7)] to-transparent" />
              {/* Lights up when the line reaches the image */}
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-700"
                style={{
                  opacity: lit ? 1 : 0,
                  boxShadow: "inset 0 0 0 1px rgb(45 226 255 / 0.95), inset 0 0 70px rgb(45 226 255 / 0.4)",
                }}
              />
            </div>

            {/* Phones: copy sits under the image */}
            <div className="p-5 sm:p-6 md:hidden">
              <Copy project={project} index={index} total={total} />
            </div>
          </TiltCard>
        </div>
        {/* Whole card is a link (desktop; on phones the CTA stretches instead) */}
        <Link
          href={`/work/${project.slug}`}
          aria-label={`Open ${project.title} case study`}
          tabIndex={-1}
          className="absolute inset-0 hidden md:block"
        />
      </motion.div>

      {/* Desktop: copy sits on the opposite side, clear of the line */}
      <motion.div
        initial={side}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className={`row-start-1 hidden md:block ${left ? "md:col-start-3 md:pl-6" : "md:col-start-1 md:pr-6"}`}
      >
        <Copy project={project} index={index} total={total} />
      </motion.div>
    </div>
  );
}

function Copy({ project, index, total }) {
  return (
    <div className="group/cta">
      <p className="t-mono text-[11px] text-faint md:text-xs">
        <span className="t-cyan">{pad(index)}</span> / {pad(total - 1)} · {project.category}
      </p>
      <h3 className="t-mono mt-1 text-xl font-semibold tracking-tight text-primary sm:text-2xl md:mt-2 md:text-3xl">
        {project.title}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{project.tagline}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((tech) => (
          <span key={tech} className="t-chip">
            {tech}
          </span>
        ))}
        {project.stack.length > 4 && <span className="t-chip">+{project.stack.length - 4}</span>}
      </div>
      <Link
        href={`/work/${project.slug}`}
        className="t-mono mt-5 inline-flex items-center gap-2 text-[13px] text-[var(--t-cyan)] max-md:after:absolute max-md:after:inset-0 max-md:after:content-['']"
      >
        $ open case-study
        <span className="transition-transform duration-300 group-hover/cta:translate-x-1">→</span>
      </Link>
    </div>
  );
}
