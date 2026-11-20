import ProjectsView from "./ProjectsView";
import { SectionHead } from "./TechHome";
import { ALL_PROJECTS } from "@/data/projects";

export default function TechWork() {
  return (
    <>
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-14 pt-32">
        <SectionHead
          cmd={`ls ./work  # ${ALL_PROJECTS.length} entries`}
          title="Everything I have shipped."
          lead="The full archive as a timeline, including projects that are not listed on the public site."
        />
      </section>
      <ProjectsView projects={ALL_PROJECTS} />
    </>
  );
}
