import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import Contact from "@/components/Contact";
import { PROJECTS, getAdjacentProjects, getProject } from "@/data/projects";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      images: [project.cover.src],
    },
  };
}

export default async function CaseStudy({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const index = PROJECTS.findIndex((p) => p.slug === slug);

  return (
    <>
      <article>
        {/* Title block */}
        <header className="mx-auto max-w-6xl px-6 pb-14 pt-36 sm:pt-44">
          <Reveal>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
            >
              <svg
                viewBox="0 0 16 16"
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 8H3M7 4 3 8l4 4" />
              </svg>
              All work
            </Link>

            <div className="mt-8 flex items-center gap-4">
              <span className="label">{String(index + 1).padStart(2, "0")}</span>
              <span className="h-px flex-1 bg-current opacity-10" />
              <span className="label">{project.category}</span>
            </div>

            <h1 className="mt-6 text-[clamp(2.4rem,6.5vw,4.4rem)] font-semibold leading-[1.03] tracking-[-0.035em] text-primary">
              {project.title}
            </h1>

            <p className="mt-5 max-w-2xl text-xl leading-relaxed text-muted">
              {project.tagline}
            </p>
          </Reveal>
        </header>

        {/* Cover */}
        <Reveal>
          <div className="mx-auto max-w-6xl px-6">
            <div className="glass overflow-hidden rounded-[1.75rem] p-2 glow-violet">
              <Image
                src={project.cover}
                alt={`${project.title} cover`}
                priority
                sizes="(max-width: 1152px) 100vw, 1152px"
                className="w-full rounded-[1.35rem] object-cover"
              />
            </div>
          </div>
        </Reveal>

        {/* Overview + meta sidebar */}
        <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <Reveal>
              <h2 className="label">Overview</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
                {project.summary}
              </p>

              <h3 className="label mt-14">What I built</h3>
              <ul className="mt-6 space-y-4">
                {project.contributions.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-violet"
                    />
                    <span className="leading-relaxed text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass rounded-2xl p-6 lg:sticky lg:top-28">
                <h3 className="label">Stack</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border px-3 py-1.5 text-[13px] text-muted hairline"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="label mt-8">Category</h3>
                <p className="mt-3 text-sm text-primary">{project.category}</p>

                <h3 className="label mt-8">Screens</h3>
                <p className="mt-3 text-sm text-primary">
                  {project.gallery.length} documented
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Walkthrough — alternating so it reads as a narrative rather than a
            dump of stacked screenshots. */}
        <section className="mx-auto max-w-6xl px-6 pb-20 sm:pb-28">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="label">Walkthrough</span>
              <span className="h-px flex-1 bg-current opacity-10" />
            </div>
          </Reveal>

          <Stagger className="mt-14 space-y-20 sm:space-y-28" stagger={0.05}>
            {project.gallery.map((shot, i) => (
              <StaggerItem key={i}>
                <div
                  className={`grid items-center gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-14 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="glass overflow-hidden rounded-2xl p-1.5">
                    <Image
                      src={shot.img}
                      alt={shot.title}
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="w-full rounded-xl object-cover"
                    />
                  </div>

                  <div>
                    <span className="label">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-primary">
                      {shot.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-muted">
                      {shot.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Prev / next */}
        <nav className="mx-auto max-w-6xl px-6 pb-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { project: prev, label: "Previous", align: "left" },
              { project: next, label: "Next", align: "right" },
            ].map(({ project: item, label, align }) =>
              item ? (
                <Link
                  key={label}
                  href={`/work/${item.slug}`}
                  className={`glass group rounded-2xl px-6 py-6 hover-surface ${
                    align === "right" ? "sm:text-right" : ""
                  }`}
                >
                  <span className="label">{label}</span>
                  <p className="mt-2 text-lg font-medium tracking-tight text-primary">
                    {item.title}
                  </p>
                </Link>
              ) : null
            )}
          </div>
        </nav>
      </article>

      <Contact />
    </>
  );
}
