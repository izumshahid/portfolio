"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SITE } from "@/data/site";
import { Magnetic } from "./Motion";

const MARQUEE_TECH = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Shopify",
  "GraphQL",
  "Tailwind CSS",
  "AWS",
];

export default function Hero() {
  const reduced = useReducedMotion();

  const rise = (delay) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 pb-20 pt-32 sm:pt-36">
      <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div>
          {SITE.available && (
            <motion.div
              {...rise(0)}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 hairline"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
              </span>
              <span className="label !text-[10px]">Available for work</span>
            </motion.div>
          )}

          <motion.h1
            {...rise(0.08)}
            className="text-[clamp(2.4rem,7vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-primary"
          >
            I build commerce
            <br />
            systems that{" "}
            <span className="bg-gradient-to-r from-violet via-magenta to-cyan bg-clip-text text-transparent">
              ship
            </span>
            .
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
          >
            {SITE.intro}
          </motion.p>

          <motion.div {...rise(0.24)} className="mt-10 flex flex-wrap gap-3">
            <Magnetic>
              <Link
                href="/work"
                className="btn-solid group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-shadow hover:shadow-[0_0_40px_-8px_rgb(168_85_247/0.6)]"
              >
                View work
                <svg
                  viewBox="0 0 16 16"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </Magnetic>

            <Magnetic>
              <a
                href={`mailto:${SITE.email}`}
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-primary hover-surface"
              >
                Get in touch
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Portrait — the one place a heavy glass frame earns its keep. */}
        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-xs lg:max-w-none"
        >
          <div className="glass relative overflow-hidden rounded-[2rem] p-2.5 glow-violet">
            <Image
              src={SITE.photo}
              alt={`${SITE.name}, ${SITE.role}`}
              priority
              sizes="(max-width: 1024px) 20rem, 26rem"
              className="w-full rounded-[1.6rem] object-cover"
            />
            <div className="pointer-events-none absolute inset-2.5 rounded-[1.6rem] ring-1 ring-inset ring-[rgb(var(--hairline))]" />
          </div>

          <div className="glass-strong absolute -bottom-6 -left-4 rounded-2xl px-4 py-3 shadow-lg shadow-black/10 sm:-left-7">
            <p className="label !text-[10px]">Based in</p>
            <p className="mt-0.5 text-sm font-medium text-primary">
              {SITE.location}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Tech marquee — masked at both edges so it dissolves rather than cuts. */}
      <motion.div
        {...rise(0.4)}
        className="relative mt-20 overflow-hidden border-y py-5 hairline"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee gap-10">
          {[...MARQUEE_TECH, ...MARQUEE_TECH].map((tech, i) => (
            <span key={i} className="label whitespace-nowrap !text-xs">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
