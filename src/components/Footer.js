import Link from "next/link";
import { NAV_LINKS, SITE, SOCIALS } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-12">
      <div className="flex flex-col gap-6 border-t pt-8 hairline sm:flex-row sm:items-center sm:justify-between">
        <p className="label">
          © {new Date().getFullYear()} {SITE.name} — {SITE.location}
        </p>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          {SOCIALS.filter((s) => s.label !== "Email").map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted transition-colors hover:text-primary"
            >
              {social.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
