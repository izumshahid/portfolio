import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import { Reveal } from "@/components/Motion";
import { PROJECTS } from "@/data/projects";

export const metadata = {
  title: "Work",
  description:
    "Selected projects — commerce platforms, inventory and fulfilment systems, Shopify apps and internal tooling.",
};

export default function WorkIndex() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-36 sm:pt-44">
        <Reveal>
          <span className="label">Archive</span>
          <h1 className="mt-6 text-[clamp(2.4rem,6vw,4rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-primary">
            Everything I have
            <br />
            shipped so far.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {PROJECTS.length} projects across commerce platforms, internal
            operations tooling, Shopify apps and custom themes.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.08}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <Contact />
    </>
  );
}
