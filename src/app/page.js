import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { FEATURED_PROJECTS, PROJECTS } from "@/data/projects";
import { SKILL_GROUPS } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />

      <Section
        id="work"
        number="01 / Selected work"
        title="Things I have built."
        lead="Production systems for commerce and the operational tooling behind them — configurators, inventory, subscriptions and analytics."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {FEATURED_PROJECTS.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} index={i} large />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Link
            href="/work"
            className="glass group mt-6 flex items-center justify-between gap-4 rounded-2xl px-6 py-5 hover-surface"
          >
            <span className="text-sm text-primary">
              See all {PROJECTS.length} projects
            </span>
            <svg
              viewBox="0 0 16 16"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </Reveal>
      </Section>

      <Section
        id="skills"
        number="02 / Capabilities"
        title="What I work with."
        lead="Across the stack, with most of my depth in JavaScript on both sides of the wire and in the Shopify ecosystem."
      >
        <Stagger className="grid gap-4 sm:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <StaggerItem key={group.label}>
              <div className="glass h-full rounded-2xl p-6">
                <h3 className="label">{group.label}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border px-3 py-1.5 text-[13px] text-muted transition-colors hover:border-[rgb(var(--hairline-strong))] hover:text-primary hairline"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section
        id="approach"
        number="03 / Approach"
        title="How I work."
      >
        <Stagger className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Systems, not screens",
              body: "Most of my work sits behind the storefront — inventory, fulfilment, QA, procurement. I design for the operator who uses it forty times a day.",
            },
            {
              title: "Ship, then refine",
              body: "Get something real in front of people early, then iterate against how it actually gets used rather than how it was specified.",
            },
            {
              title: "Own the whole path",
              body: "From the Mongo schema to the deploy on EC2 behind NGINX. Fewer handoffs, fewer places for a feature to stall.",
            },
          ].map((item) => (
            <StaggerItem key={item.title}>
              <div className="glass h-full rounded-2xl p-7">
                <h3 className="text-lg font-semibold tracking-tight text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Contact />
    </>
  );
}
