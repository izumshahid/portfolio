"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { NAV_LINKS, SITE, TECH_ACCESS } from "@/data/site";

// Contact lives in the tech footer under its own id (the public page has its
// own #contact, hidden in this view, so the ids must not collide).
const LINKS = NAV_LINKS.map((l) =>
  l.href === "/#contact" ? { ...l, href: "/#t-contact" } : l
);

export default function TechNav() {
  const pathname = usePathname();
  const router = useRouter();

  // Next skips its scroll-to-top when the page's first element is a hidden
  // mode wrapper, so land at the top ourselves on every route change.
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  const exit = () => {
    try {
      sessionStorage.setItem(TECH_ACCESS.storageKey, "normal");
    } catch {}
    document.documentElement.dataset.mode = "normal";
    if (new URLSearchParams(window.location.search).has(TECH_ACCESS.param)) {
      router.replace(pathname);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-[rgb(4_7_10/0.82)] backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-4 sm:gap-4 sm:px-6">
        <Link href="/" className="t-mono flex items-center gap-2 text-[13px] text-primary">
          <span className="t-lime">●</span>
          <span className="hidden sm:inline">
            {SITE.name.split(" ")[0].toLowerCase()}@lab
            <span className="text-faint">:</span>
            <span className="t-cyan">~{pathname === "/" ? "" : pathname}</span>
            <span className="text-faint">$</span>
            <span className="t-caret" />
          </span>
          <span className="hidden min-[400px]:inline sm:hidden">irzum@lab</span>
        </Link>

        <div className="ml-auto flex items-center gap-1 sm:gap-3">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="t-mono t-glitch px-1.5 py-1 text-[11px] sm:px-2 sm:text-[12px] text-muted transition-colors hover:text-[var(--t-cyan)]"
            >
              ./{link.label.toLowerCase()}
            </Link>
          ))}
          <button
            type="button"
            onClick={exit}
            className="t-mono ml-1 rounded border px-2.5 py-1 text-[11px] text-faint transition-colors hover:border-[var(--t-pink)] hover:text-[var(--t-pink)]"
            title="Return to the standard portfolio"
          >
            exit
          </button>
        </div>
      </nav>
    </header>
  );
}
