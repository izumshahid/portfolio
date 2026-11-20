"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { SITE } from "@/data/site";

const BOOT = [
  "init portfolio.sys --view=lab",
  "mounting projects/ ............ ok",
  "attaching timeline ............ ok",
];

export default function TechHero({ count }) {
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(reduced ? BOOT.length : 0);

  useEffect(() => {
    if (reduced) return;
    const timers = BOOT.map((_, i) => setTimeout(() => setShown(i + 1), 450 * (i + 1)));
    return () => timers.forEach(clearTimeout);
  }, [reduced]);

  const ready = shown >= BOOT.length;

  return (
    <section className="relative z-10 mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-center px-6 pb-16 pt-28">
      <div className="t-mono min-h-[4.5rem] space-y-1 text-[12px] text-faint sm:text-[13px]">
        {BOOT.slice(0, shown).map((line) => (
          <p key={line}>
            <span className="t-lime">&gt;</span> {line}
          </p>
        ))}
      </div>

      <motion.div
        initial={reduced ? false : { opacity: 0, y: 24 }}
        animate={ready ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ opacity: reduced || ready ? undefined : 0 }}
      >
        <h1 className="t-mono mt-8 text-[clamp(2.6rem,9vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
          <span className="bg-gradient-to-r from-[var(--t-cyan)] via-white to-[var(--t-lime)] bg-clip-text text-transparent">
            {SITE.name}
          </span>
          <span className="t-caret" />
        </h1>
        <p className="t-mono mt-4 text-sm text-[var(--t-cyan)] sm:text-base">
          // {SITE.role}
        </p>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">{SITE.intro}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#timeline" className="t-btn">
            ./traverse-timeline <span aria-hidden="true">↓</span>
          </a>
          <span className="t-mono text-xs text-faint">
            {count} projects · scroll to run
          </span>
        </div>
      </motion.div>
    </section>
  );
}
