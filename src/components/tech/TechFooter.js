import SocialIcon from "../SocialIcon";
import { SITE, SOCIALS } from "@/data/site";

export default function TechFooter() {
  return (
    <footer id="t-contact" className="relative z-10 mx-auto max-w-6xl scroll-mt-20 px-6 pb-12 pt-24">
      <div className="t-window">
        <div className="t-window__bar">
          <span className="t-dot" />
          <span className="t-dot" />
          <span className="t-dot" />
          <span className="ml-2">contact.sh</span>
        </div>
        <div className="p-6 sm:p-10">
          <p className="t-mono text-xs text-faint">$ ./open-channel --to {SITE.name.split(" ")[0].toLowerCase()}</p>
          <h2 className="t-mono mt-4 text-[clamp(1.8rem,4.5vw,3rem)] font-semibold leading-tight tracking-tight text-primary">
            Have a system that
            <br />
            <span className="t-cyan">needs to hold up?</span>
          </h2>
          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="t-mono t-glitch group flex items-baseline gap-3 rounded border border-transparent px-3 py-2 text-[13px] transition-colors hover:border-[rgb(var(--hairline))] hover:bg-[rgb(45_226_255/0.05)]"
                >
                  <SocialIcon name={s.label} className="h-4 w-4 shrink-0 self-center text-[var(--t-cyan)]" />
                  <span className="text-primary">{s.label}</span>
                  <span className="truncate text-faint">{s.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="t-mono mt-8 text-[11px] text-faint">
        © {new Date().getFullYear()} {SITE.name} — {SITE.location} · tech view
      </p>
    </footer>
  );
}
