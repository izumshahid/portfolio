import TechHero from "./TechHero";
import Timeline from "./Timeline";
import { Reveal, Stagger, StaggerItem } from "../Motion";
import { ALL_PROJECTS } from "@/data/projects";
import { SKILL_GROUPS } from "@/data/site";

export function SectionHead({ cmd, title, lead }) {
  return (
    <Reveal>
      <p className="t-mono text-xs text-faint">
        <span className="t-lime">$</span> {cmd}
      </p>
      <h2 className="t-mono mt-3 text-[clamp(1.8rem,4.5vw,3rem)] font-semibold leading-tight tracking-tight text-primary">
        {title}
      </h2>
      {lead && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{lead}</p>}
    </Reveal>
  );
}

export default function TechHome() {
  return (
    <>
      <TechHero count={ALL_PROJECTS.length} />

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-12 pt-10">
        <SectionHead
          cmd="ls ./projects --timeline"
          title="Shipped, in sequence."
          lead="Scroll to walk the timeline. Each node is a system that went into production."
        />
      </section>

      <Timeline projects={ALL_PROJECTS} />

      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-28">
        <SectionHead cmd="cat toolchain.json" title="What it runs on." />
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2" stagger={0.07}>
          {SKILL_GROUPS.map((group) => (
            <StaggerItem key={group.label}>
              <div className="t-window t-spot h-full">
                <div className="t-window__bar">
                  <span className="t-dot" />
                  <span className="t-dot" />
                  <span className="t-dot" />
                  <span className="ml-2">{group.label.toLowerCase().replace(/[^a-z]+/g, "_")}.json</span>
                </div>
                <div className="flex flex-wrap gap-1.5 p-5">
                  {group.items.map((item) => (
                    <span key={item} className="t-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
