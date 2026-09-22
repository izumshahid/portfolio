import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-6 text-center">
      <span className="label">404</span>
      <h1 className="mt-6 text-[clamp(2.4rem,7vw,4.4rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-primary">
        Nothing here.
      </h1>
      <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
        That page does not exist — it may have moved when the site was rebuilt.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="btn-solid inline-flex items-center rounded-full px-6 py-3.5 text-sm font-medium"
        >
          Home
        </Link>
        <Link
          href="/work"
          className="glass inline-flex items-center rounded-full px-6 py-3.5 text-sm font-medium text-primary hover-surface"
        >
          View work
        </Link>
      </div>
    </section>
  );
}
