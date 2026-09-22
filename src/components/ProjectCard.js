"use client";

import Image from "next/image";
import Link from "next/link";
import { Tilt } from "./Motion";

export default function ProjectCard({ project, index, large = false }) {
  return (
    <Tilt className="h-full">
      <Link
        href={`/work/${project.slug}`}
        className="glass group flex h-full flex-col overflow-hidden rounded-3xl transition-shadow duration-500 hover:shadow-[0_24px_80px_-32px_rgb(168_85_247/0.5)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.cover}
            alt=""
            fill
            sizes={large ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 1024px) 100vw, 40vw"}
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, var(--canvas) 2%, transparent 55%)",
            }}
          />
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <div className="flex items-center gap-3">
            <span className="label">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px flex-1 bg-current opacity-10" />
            <span className="label">{project.category}</span>
          </div>

          <h3
            className={`mt-4 font-semibold tracking-tight text-primary ${
              large ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
            }`}
          >
            {project.title}
          </h3>

          <p className="mt-2.5 text-sm leading-relaxed text-muted">
            {project.tagline}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.slice(0, large ? 6 : 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border px-2.5 py-1 text-[11px] text-faint hairline"
              >
                {tech}
              </span>
            ))}
          </div>

          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            Case study
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
          </span>
        </div>
      </Link>
    </Tilt>
  );
}
