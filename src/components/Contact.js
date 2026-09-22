"use client";

import { SITE, SOCIALS } from "@/data/site";
import { Magnetic, Reveal, Stagger, StaggerItem } from "./Motion";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-24 sm:py-32">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-[2rem] px-7 py-14 text-center sm:px-14 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-1/2 left-1/2 h-[120%] w-[80%] -translate-x-1/2 opacity-40"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, var(--color-violet), transparent 65%)",
              filter: "blur(90px)",
            }}
          />

          <div className="relative">
            <span className="label">04 / Contact</span>

            <h2 className="mx-auto mt-6 max-w-2xl text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-primary">
              Have something that needs building?
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-muted">
              I take on contract work and full-time roles. Tell me what you are
              working on and I will come back to you.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Magnetic>
                <a
                  href={`mailto:${SITE.email}`}
                  className="btn-solid inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium transition-shadow hover:shadow-[0_0_44px_-8px_rgb(168_85_247/0.7)]"
                >
                  {SITE.email}
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={SITE.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="glass inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium text-primary hover-surface"
                >
                  Download resume
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </Reveal>

      <Stagger className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SOCIALS.map((social) => (
          <StaggerItem key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="glass group flex items-center justify-between gap-4 rounded-2xl px-5 py-4 hover-surface"
            >
              <span className="min-w-0">
                <span className="label block">{social.label}</span>
                <span className="mt-1 block truncate text-sm text-primary">
                  {social.handle}
                </span>
              </span>
              <svg
                viewBox="0 0 16 16"
                className="h-3.5 w-3.5 shrink-0 text-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 11 11 5M6 5h5v5" />
              </svg>
            </a>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
