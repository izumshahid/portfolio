"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import Timeline from "./Timeline";
import ExploreMap from "./ExploreMap";
import { TiltCard } from "./Interactive";

const KEY = "tech-layout";
const OPTIONS = [
  { id: "timeline", label: "timeline" },
  { id: "grid", label: "grid" },
  { id: "explore", label: "explore" },
];

/** Lets the visitor pick how the projects are laid out. Remembered per tab. */
export default function ProjectsView({ projects }) {
  const [layout, setLayout] = useState("timeline");

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(KEY);
      if (saved === "grid" || saved === "timeline") setLayout(saved);
    } catch {}
  }, []);

  const choose = (id) => {
    setLayout(id);
    if (id === "explore") return; // the map is never the remembered default
    try {
      sessionStorage.setItem(KEY, id);
    } catch {}
  };

  return (
    <>
      <div className="relative z-10 mx-auto flex max-w-6xl justify-start px-6 pb-10">
        <div role="group" aria-label="Project layout" className="t-window inline-flex p-1">
          {OPTIONS.map((o) => {
            const on = layout === o.id;
            return (
              <button
                key={o.id}
                type="button"
                aria-pressed={on}
                onClick={() => choose(o.id)}
                className={`t-mono rounded-md px-4 py-1.5 text-xs transition-colors ${
                  on
                    ? "bg-[var(--t-cyan)] text-[rgb(4_7_10)]"
                    : "text-muted hover:text-primary"
                }`}
              >
                {o.label}
              </button>
            );
          })}
        </div>
      </div>

      {layout === "timeline" && <Timeline projects={projects} />}
      {layout === "grid" && <ProjectGrid projects={projects} />}
      {layout === "explore" && <ExploreMap projects={projects} />}
    </>
  );
}

function ProjectGrid({ projects }) {
  const reduced = useReducedMotion();
  return (
    <div className="relative z-10 mx-auto max-w-6xl px-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.07, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <TiltCard className="group h-full">
              <div className="t-window__bar">
                <span className="t-dot" />
                <span className="t-dot" />
                <span className="t-dot" />
                <span className="ml-2 truncate">~/work/{p.slug}</span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.cover}
                  alt={`${p.title} cover`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 380px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="t-scanlines pointer-events-none absolute inset-0" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(4_7_10/0.6)] to-transparent" />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [box-shadow:inset_0_0_0_1px_rgb(45_226_255/0.9),inset_0_0_60px_rgb(45_226_255/0.35)]" />
              </div>
              <div className="p-5">
                <p className="t-mono text-[11px] text-faint">{p.category}</p>
                <h3 className="t-mono mt-1 text-lg font-semibold tracking-tight text-primary">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.tagline}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 3).map((t) => (
                    <span key={t} className="t-chip">
                      {t}
                    </span>
                  ))}
                  {p.stack.length > 3 && <span className="t-chip">+{p.stack.length - 3}</span>}
                </div>
                <Link
                  href={`/work/${p.slug}`}
                  className="t-mono mt-4 inline-flex items-center gap-2 text-[13px] text-[var(--t-cyan)] after:absolute after:inset-0 after:content-['']"
                >
                  $ open case-study
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
      <p className="t-mono pt-10 text-xs text-faint">EOF: more shipping soon</p>
    </div>
  );
}
