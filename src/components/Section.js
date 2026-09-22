import { Reveal } from "./Motion";

export default function Section({
  id,
  number,
  title,
  lead,
  children,
  className = "",
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-6xl scroll-mt-28 px-6 py-24 sm:py-32 ${className}`}
    >
      <Reveal>
        <div className="flex items-center gap-4">
          {number && <span className="label">{number}</span>}
          <span className="h-px flex-1 bg-current opacity-10" />
        </div>
        <h2 className="mt-6 text-[clamp(1.9rem,4.5vw,3rem)] font-semibold tracking-[-0.03em] text-primary">
          {title}
        </h2>
        {lead && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {lead}
          </p>
        )}
      </Reveal>

      <div className="mt-14">{children}</div>
    </section>
  );
}
