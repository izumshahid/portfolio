"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/data/site";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // The menu is a full-screen overlay; stop the page behind it scrolling.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href) =>
    href === "/work" ? pathname.startsWith("/work") : pathname === href;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
        <nav
          className={`flex w-full max-w-3xl items-center gap-2 rounded-full px-2 py-2 transition-all duration-500 sm:px-3 ${
            scrolled || open ? "glass-strong shadow-xl shadow-black/10" : ""
          }`}
        >
          <Link
            href="/"
            className="group flex items-center gap-2.5 rounded-full py-1.5 pl-2 pr-3"
          >
            <span className="relative grid h-7 w-7 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-violet to-cyan text-[11px] font-bold text-white">
              IS
            </span>
            <span className="hidden text-sm font-medium tracking-tight text-primary sm:block">
              {SITE.name}
            </span>
          </Link>

          <div className="ml-auto hidden items-center gap-1 sm:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${
                  isActive(link.href)
                    ? "text-primary"
                    : "text-muted hover:text-primary"
                }`}
              >
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="control absolute inset-0 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-1 sm:ml-1">
            <ThemeToggle />
            <a
              href={SITE.resume}
              target="_blank"
              rel="noreferrer"
              className="control hover-surface hidden rounded-full px-4 py-2 text-sm font-medium text-primary md:block"
            >
              Resume
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-9 w-9 place-items-center rounded-full hover-surface sm:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 block h-px w-4 bg-current transition-transform duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-4 bg-current transition-transform duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="glass-strong fixed inset-0 z-40 flex flex-col justify-center px-8 sm:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i + 0.08, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  className="block border-b py-5 text-3xl font-medium tracking-tight text-primary hairline"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href={SITE.resume}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26, duration: 0.4 }}
              className="block py-5 text-3xl font-medium tracking-tight text-muted"
            >
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
