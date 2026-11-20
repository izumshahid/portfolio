import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../Motion";
import { TiltCard } from "./Interactive";
import Walkthrough from "./Walkthrough";
import { ALL_PROJECTS, getAdjacentProjects } from "@/data/projects";

function Bar({ children, right }) {
  return (
    <div className="t-window__bar">
      <span className="t-dot" />
      <span className="t-dot" />
      <span className="t-dot" />
      <span className="ml-2 truncate">{children}</span>
      {right}
    </div>
  );
}

/**
 * Detail page in the tech view. Same structure as the public case study but
 * dressed as a repo: README, package manifest, and a stepped walkthrough on a
 * rail. Quieter than the landing pages on purpose.
 */
export default function TechCaseStudy({ project }) {
  const { prev, next } = getAdjacentProjects(project.slug, ALL_PROJECTS);
  const index = ALL_PROJECTS.findIndex((p) => p.slug === project.slug);

  return (
    <article className="relative z-10 mx-auto max-w-6xl px-6 pb-8 pt-28 sm:pt-32">
      <Reveal>
        <Link
          href="/work"
          className="t-mono group inline-flex items-center gap-2 text-[13px] text-muted transition-colors hover:text-[var(--t-cyan)]"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
          cd ../work
        </Link>

        <p className="t-mono mt-8 text-xs text-faint">
          <span className="t-lime">$</span> cat ~/work/{project.slug}/README.md
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <h1 className="t-mono text-[clamp(2.4rem,7vw,4.6rem)] font-semibold leading-none tracking-[-0.04em] text-primary">
            {project.title}
          </h1>
          {project.exclusive && <span className="t-badge">exclusive</span>}
        </div>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-muted">{project.tagline}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="t-chip">
            {String(index + 1).padStart(2, "0")} / {String(ALL_PROJECTS.length).padStart(2, "0")}
          </span>
          <span className="t-chip">{project.category}</span>
          <span className="t-chip">{project.gallery.length} screens</span>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <TiltCard max={2.5} className="mt-10">
          <Bar>{project.slug}/cover.png</Bar>
          <Image
            src={project.cover}
            alt={`${project.title} cover`}
            priority
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="w-full object-cover"
          />
        </TiltCard>
      </Reveal>

      <section className="grid gap-8 py-16 lg:grid-cols-[1.5fr_1fr] lg:gap-10">
        <Reveal>
          <div className="t-window h-full">
            <Bar>README.md</Bar>
            <div className="p-6 sm:p-8">
              <h2 className="t-mono text-xs uppercase tracking-[0.14em] text-faint"># Overview</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{project.summary}</p>

              <h3 className="t-mono mt-10 text-xs uppercase tracking-[0.14em] text-faint">
                ## What I built
              </h3>
              <ul className="mt-4 space-y-3">
                {project.contributions.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="t-mono t-lime mt-0.5 text-sm">[x]</span>
                    <span className="leading-relaxed text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="t-window lg:sticky lg:top-24">
            <Bar>package.json</Bar>
            <pre className="t-mono overflow-x-auto p-6 text-[12.5px] leading-7 text-muted">
              <span className="text-faint">{"{"}</span>
              {"\n  "}
              <span className="t-cyan">&quot;name&quot;</span>: <span className="t-lime">&quot;{project.slug}&quot;</span>,
              {"\n  "}
              <span className="t-cyan">&quot;type&quot;</span>: <span className="t-lime">&quot;{project.category}&quot;</span>,
              {"\n  "}
              <span className="t-cyan">&quot;stack&quot;</span>: [
              {project.stack.map((tech, i) => (
                <span key={tech}>
                  {"\n    "}
                  <span className="t-lime">&quot;{tech}&quot;</span>
                  {i < project.stack.length - 1 ? "," : ""}
                </span>
              ))}
              {"\n  "}]
              {"\n"}
              <span className="text-faint">{"}"}</span>
            </pre>
          </div>
        </Reveal>
      </section>

      <section className="pb-20">
        <Reveal>
          <p className="t-mono text-xs text-faint">
            <span className="t-lime">$</span> ./walkthrough --steps={project.gallery.length}
          </p>
        </Reveal>

        <Walkthrough gallery={project.gallery} />
      </section>

      <nav className="grid gap-4 sm:grid-cols-2">
        {[
          { item: prev, label: "← prev", align: "" },
          { item: next, label: "next →", align: "sm:text-right" },
        ].map(({ item, label, align }) =>
          item ? (
            <Link
              key={label}
              href={`/work/${item.slug}`}
              className={`t-window t-spot block px-6 py-5 ${align}`}
            >
              <span className="t-mono text-xs text-faint">{label}</span>
              <p className="t-mono mt-1 text-lg text-primary">{item.title}</p>
            </Link>
          ) : null
        )}
      </nav>
    </article>
  );
}
