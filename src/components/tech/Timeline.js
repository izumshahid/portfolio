"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { TiltCard } from "./Interactive";

const pad = (n) => String(n + 1).padStart(2, "0");

/**
 * Vertical timeline. A rail fills as the page scrolls with a glowing packet
 * riding its head; each node ignites when the rail reaches it, and the project
 * cards fly in from alternating sides, tilt toward the cursor and light up
 * under it. Single column on phones, alternating on md and up.
 */
export default function Timeline({ projects }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 26, mass: 0.4 });
  const headTop = useTransform(progress, (v) => `${v * 100}%`);

  return (
    <div ref={ref} id="timeline" className="relative z-10 mx-auto max-w-6xl scroll-mt-20 px-6">
      <div className="relative">
        {/* Rail */}
        <div className="absolute bottom-0 left-5 top-0 w-px -translate-x-1/2 bg-[rgb(var(--hairline))] md:left-1/2">
          <motion.div
            style={{ scaleY: progress }}
            className="absolute inset-0 origin-top bg-gradient-to-b from-[var(--t-cyan)] to-[var(--t-lime)] shadow-[0_0_12px_rgb(45_226_255/0.8)]"
          />
          <motion.div
            style={{ top: headTop }}
            className="absolute left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_18px_4px_rgb(45_226_255/0.9)]"
          />
        </div>

        {projects.map((project, i) => (
          <TimelineItem key={project.slug} project={project} index={i} total={projects.length} />
        ))}

        <div className="relative grid grid-cols-[2.5rem_1fr] pb-4 pt-6 md:grid-cols-[1fr_5rem_1fr]">
          <div className="col-start-1 flex justify-center md:col-start-2">
            <span className="h-2 w-2 rounded-full bg-[var(--t-lime)] shadow-[0_0_12px_var(--t-lime)]" />
          </div>
          <p className="t-mono col-start-2 text-xs text-faint md:col-start-3">
            EOF: more shipping soon
          </p>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ project, index, total }) {
  const reduced = useReducedMotion();
  const left = index % 2 === 0;
  const nodeRef = useRef(null);
  const cardRef = useRef(null);
  const active = useInView(nodeRef, { once: true, margin: "0px 0px -42% 0px" });
  // True while this project's card sits in the middle band of the viewport.
  const current = useInView(cardRef, { margin: "-35% 0px -35% 0px" });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  const fly = reduced ? { opacity: 0 } : { opacity: 0, x: left ? -64 : 64, filter: "blur(8px)" };

  return (
    <div className="relative grid grid-cols-[2.5rem_1fr] items-start py-7 md:grid-cols-[1fr_5rem_1fr] md:py-12">
      {/* Node */}
      <div
        ref={nodeRef}
        className="col-start-1 row-start-1 flex justify-center pt-4 md:col-start-2"
      >
        <span
          className="relative block h-3.5 w-3.5 rotate-45 border transition-all duration-500"
          style={{
            borderColor: active ? "var(--t-cyan)" : "rgb(var(--hairline-strong))",
            background: active ? "var(--t-cyan)" : "var(--canvas)",
            boxShadow: active ? "0 0 18px rgb(45 226 255 / 0.9)" : "none",
            animation: active && !reduced ? "t-pulse 2.4s ease-out 1" : undefined,
          }}
        />
      </div>

      {/* Meta label on the empty side (md+) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className={`t-mono row-start-1 hidden pt-3.5 text-xs md:block ${
          left ? "md:col-start-3 md:pl-8" : "md:col-start-1 md:pr-8 md:text-right"
        }`}
      >
        <span className="t-cyan">{pad(index)}</span>
        <span className="text-faint"> / {pad(total - 1)}</span>
        <span className="block text-faint">{project.category}</span>
      </motion.div>

      {/* Card */}
      <motion.div
        ref={cardRef}
        initial={fly}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className={`relative col-start-2 row-start-1 ${
          left ? "md:col-start-1 md:pr-0" : "md:col-start-3"
        }`}
      >
        {/* Connector to the node */}
        <motion.span
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: active ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`absolute top-[1.45rem] hidden h-px w-10 bg-[var(--t-cyan)] shadow-[0_0_8px_var(--t-cyan)] md:block ${
            left ? "-right-10 origin-right" : "-left-10 origin-left"
          }`}
        />

        <div
          className="rounded-[10px] transition-shadow duration-700"
          style={{ boxShadow: current ? "0 0 60px rgb(45 226 255 / 0.3)" : "0 0 0 rgb(45 226 255 / 0)" }}
        >
        <TiltCard className="group">
          <div className="t-window__bar">
            <span className="t-dot" />
            <span className="t-dot" />
            <span className="t-dot" />
            <span className="ml-2 truncate">~/work/{project.slug}</span>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden">
            <motion.div
              style={{ y: reduced ? 0 : imgY, filter: current || reduced ? "blur(0px)" : "blur(10px)" }}
              className="absolute inset-0 scale-[1.18] transition-[filter] duration-700"
            >
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
            {/* Image glows while this project is the one on screen */}
            <div
              className="pointer-events-none absolute inset-0 transition-opacity duration-700"
              style={{
                opacity: current ? 1 : 0,
                boxShadow: "inset 0 0 0 1px rgb(45 226 255 / 0.95), inset 0 0 70px rgb(45 226 255 / 0.4)",
              }}
            />
          </div>

          <div className="p-5 sm:p-6">
            <p className="t-mono text-[11px] text-faint md:hidden">
              <span className="t-cyan">{pad(index)}</span> / {pad(total - 1)} · {project.category}
            </p>
            <h3 className="t-mono mt-1 text-xl font-semibold tracking-tight text-primary sm:text-2xl md:mt-0">
              {project.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{project.tagline}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.slice(0, 4).map((tech) => (
                <span key={tech} className="t-chip">
                  {tech}
                </span>
              ))}
              {project.stack.length > 4 && (
                <span className="t-chip">+{project.stack.length - 4}</span>
              )}
            </div>
            <Link
              href={`/work/${project.slug}`}
              className="t-mono mt-5 inline-flex items-center gap-2 text-[13px] text-[var(--t-cyan)] after:absolute after:inset-0 after:content-['']"
            >
              $ open case-study
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </TiltCard>
        </div>
      </motion.div>
    </div>
  );
}
