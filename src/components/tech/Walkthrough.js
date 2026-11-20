"use client";

import Image from "next/image";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { tipsFor } from "@/data/tips";
import { TiltCard } from "./Interactive";

const fileName = (i, title) =>
  `${String(i + 1).padStart(2, "0")}-${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}.png`;

const pad = (n) => String(n).padStart(2, "0");

/**
 * Stepped walkthrough on a left rail. Same behaviour as the home timeline:
 * the rail fills with scroll, a glowing packet rides its head, each node
 * ignites as the rail reaches it, and steps slide in from alternating sides.
 */
export default function Walkthrough({ gallery, slug }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 26, mass: 0.4 });
  const headTop = useTransform(progress, (v) => `${v * 100}%`);

  return (
    <div ref={ref} className="relative mt-10">
      <div className="absolute bottom-0 left-0 top-0 w-px bg-[rgb(var(--hairline))]">
        <motion.div
          style={{ scaleY: progress }}
          className="absolute inset-0 origin-top bg-gradient-to-b from-[var(--t-cyan)] to-[var(--t-lime)] shadow-[0_0_12px_rgb(45_226_255/0.8)]"
        />
        <motion.div
          style={{ top: headTop }}
          className="absolute left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_18px_4px_rgb(45_226_255/0.9)]"
        />
      </div>

      {gallery.map((shot, i) => (
        <Step key={i} shot={shot} index={i} total={gallery.length} tips={tipsFor(slug)} />
      ))}
    </div>
  );
}

function Step({ shot, index: i, total, tips }) {
  const reduced = useReducedMotion();
  const nodeRef = useRef(null);
  const active = useInView(nodeRef, { once: true, margin: "0px 0px -42% 0px" });
  const flip = i % 2 === 1;

  return (
    <div className="relative pb-14 pl-6 sm:pl-10">
      <span
        ref={nodeRef}
        aria-hidden="true"
        className="absolute -left-[7px] top-1.5 block h-3.5 w-3.5 rotate-45 border transition-all duration-500"
        style={{
          borderColor: active ? "var(--t-cyan)" : "rgb(var(--hairline-strong))",
          background: active ? "var(--t-cyan)" : "var(--canvas)",
          boxShadow: active ? "0 0 18px rgb(45 226 255 / 0.9)" : "none",
          animation: active && !reduced ? "t-pulse 2.4s ease-out 1" : undefined,
        }}
      />
      {/* Connector from the node into the step */}
      <motion.span
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: active ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute left-2 top-[0.9rem] h-px w-4 origin-left bg-[var(--t-cyan)] shadow-[0_0_8px_var(--t-cyan)] sm:w-8"
      />

      <motion.div
        initial={reduced ? { opacity: 0 } : { opacity: 0, x: flip ? 56 : -56, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`grid items-start gap-6 lg:gap-10 ${
          flip ? "lg:grid-cols-[1fr_1.6fr]" : "lg:grid-cols-[1.6fr_1fr]"
        }`}
      >
        <TiltCard max={2} className={flip ? "lg:order-2" : ""}>
          <div className="t-window__bar">
            <span className="t-dot" />
            <span className="t-dot" />
            <span className="t-dot" />
            <span className="ml-2 truncate">{fileName(i, shot.title)}</span>
          </div>
          <Image
            src={shot.img}
            alt={shot.title}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="w-full object-cover"
          />
        </TiltCard>
        <div className={flip ? "lg:order-1" : ""}>
          {total === 1 && tips.length ? (
            <>
              <span className="t-mono t-cyan text-xs">tips.md</span>
              <h3 className="t-mono mt-2 text-xl font-semibold tracking-tight text-primary sm:text-2xl">
                Tips for this storefront
              </h3>
              <ol className="mt-4 space-y-4">
                {tips.map((tip, n) => (
                  <li key={tip.title} className="flex gap-3">
                    <span className="t-mono t-cyan pt-0.5 text-xs">{pad(n + 1)}</span>
                    <span>
                      <span className="block text-[15px] font-medium text-primary">{tip.title}</span>
                      <span className="mt-0.5 block text-sm leading-relaxed text-muted">{tip.body}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </>
          ) : (
            <>
              <span className="t-mono t-cyan text-xs">
                {pad(i + 1)} / {pad(total)}
              </span>
              <h3 className="t-mono mt-2 text-xl font-semibold tracking-tight text-primary sm:text-2xl">
                {shot.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{shot.desc}</p>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
