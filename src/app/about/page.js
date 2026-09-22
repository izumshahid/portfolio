import Image from "next/image";
import Contact from "@/components/Contact";
import Section from "@/components/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import {
  CERTIFICATIONS,
  EDUCATION,
  INTERESTS,
  SITE,
  SKILL_GROUPS,
} from "@/data/site";

export const metadata = {
  title: "About",
  description: SITE.intro,
};

const FACTS = [
  { label: "Based in", value: SITE.location },
  { label: "Role", value: SITE.role },
  { label: "Languages", value: "English, Urdu, Hindi" },
  { label: "Availability", value: "Contract & full-time" },
];

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-36 sm:pt-44">
        <div className="grid items-end gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <span className="label">About</span>
            <h1 className="mt-6 text-[clamp(2.4rem,6vw,4rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-primary">
              Full-stack engineer,
              <br />
              commerce specialist.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
              I work across the whole stack — React and Next.js on the front,
              Node and Express behind it, MongoDB or Postgres underneath, and
              deploys on EC2, DigitalOcean or Vercel. Most of what I have built
              lives in commerce: storefronts, Shopify apps and themes, and the
              inventory, fulfilment and QA systems that keep them running.
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              I like the unglamorous half of a product. A configurator that
              refuses an incompatible build, a queue that sequences work by due
              date, a procurement view that answers how many parts to buy — that
              is the work I find most satisfying.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass relative mx-auto w-full max-w-xs overflow-hidden rounded-[2rem] p-2.5 glow-violet lg:max-w-none">
              <Image
                src={SITE.photo}
                alt={SITE.name}
                priority
                sizes="(max-width: 1024px) 20rem, 24rem"
                className="w-full rounded-[1.6rem] object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {FACTS.map((fact) => (
            <StaggerItem key={fact.label}>
              <div className="glass h-full rounded-2xl px-5 py-4">
                <p className="label">{fact.label}</p>
                <p className="mt-1.5 text-sm font-medium text-primary">
                  {fact.value}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <Section number="01 / Toolkit" title="Technologies.">
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

      <Section number="02 / Credentials" title="Education & certifications.">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="label">Education</h3>
            <Stagger className="mt-6 space-y-px">
              {EDUCATION.map((item) => (
                <StaggerItem key={item.institution}>
                  <div className="flex items-baseline justify-between gap-6 border-b py-4 hairline">
                    <span className="font-medium text-primary">
                      {item.institution}
                    </span>
                    <span className="shrink-0 text-right text-sm text-muted">
                      {item.credential}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div>
            <h3 className="label">Certifications</h3>
            <Stagger className="mt-6 space-y-px">
              {CERTIFICATIONS.map((cert) => (
                <StaggerItem key={`${cert.title}-${cert.provider}`}>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-baseline justify-between gap-6 border-b py-4 transition-colors hairline hover:border-[rgb(var(--hairline-strong))]"
                  >
                    <span className="font-medium text-primary">
                      {cert.title}
                      <span className="ml-2 text-sm font-normal text-faint">
                        {cert.provider}
                      </span>
                    </span>
                    <span className="shrink-0 text-right text-sm text-muted">
                      {cert.issued}
                    </span>
                  </a>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Section>

      <Section number="03 / Off the clock" title="Outside of work.">
        <Stagger className="flex flex-wrap gap-2.5">
          {INTERESTS.map((interest) => (
            <StaggerItem key={interest}>
              <span className="glass inline-block rounded-full px-5 py-2.5 text-sm text-muted">
                {interest}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Contact />
    </>
  );
}
