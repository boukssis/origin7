"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const overDark = pathname === "/" && !scrolled && !open;
  const solid = !overDark;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,color] duration-500 ${
        solid ? "border-line bg-white text-ink" : "border-transparent bg-transparent text-white"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="shell flex h-[var(--header-h)] items-center justify-between gap-6">
        <Logo variant={overDark ? "dark" : "light"} priority />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative px-3 py-2 text-[0.875rem] font-medium transition-colors after:absolute after:inset-x-3 after:bottom-0.5 after:h-px after:origin-left after:bg-magenta after:transition-transform after:duration-300 ${
                    isActive(item.href)
                      ? overDark
                        ? "text-white after:scale-x-100"
                        : "text-ink after:scale-x-100"
                      : overDark
                        ? "text-white/70 after:scale-x-0 hover:text-white hover:after:scale-x-100"
                        : "text-ink/65 after:scale-x-0 hover:text-ink hover:after:scale-x-100"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={`group hidden items-center gap-2 rounded-full px-5 py-2.5 font-mono text-[0.7rem] font-medium tracking-[0.14em] uppercase transition-colors sm:inline-flex ${
              overDark ? "bg-magenta text-white hover:bg-magenta-bright" : "bg-ink text-white hover:bg-magenta"
            }`}
          >
            Let&apos;s Talk
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`relative grid size-11 place-items-center rounded-full transition-colors lg:hidden ${
              overDark ? "bg-white/10 hover:bg-white/15" : "bg-ink/5 hover:bg-ink/10"
            }`}
          >
            <span
              className={`absolute h-[1.5px] w-5 transition-transform duration-300 ${overDark ? "bg-white" : "bg-ink"} ${open ? "rotate-45" : "-translate-y-[4px]"}`}
            />
            <span
              className={`absolute h-[1.5px] w-5 transition-transform duration-300 ${overDark ? "bg-white" : "bg-ink"} ${open ? "-rotate-45" : "translate-y-[4px]"}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[var(--header-h)] bottom-0 flex flex-col overflow-y-auto bg-white lg:hidden"
          >
            <nav aria-label="Mobile" className="shell flex-1 pt-6">
              <ul>
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.045, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-line"
                  >
                    <Link href={item.href} onClick={() => setOpen(false)} aria-current={isActive(item.href) ? "page" : undefined} className="flex items-baseline gap-5 py-4">
                      <span className="font-mono text-xs text-magenta">{String(i + 1).padStart(2, "0")}</span>
                      <span className={`font-display text-[clamp(1.75rem,7vw,2.5rem)] font-semibold tracking-tight ${isActive(item.href) ? "text-magenta" : "text-ink"}`}>
                        {item.label}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.45 }}
              className="shell pt-8 pb-[max(2rem,env(safe-area-inset-bottom))]"
            >
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-magenta font-mono text-sm font-medium tracking-[0.14em] text-white uppercase"
              >
                Let&apos;s Talk <ArrowRight className="size-4" aria-hidden />
              </Link>
              <a href={`mailto:${site.email}`} className="mt-4 block text-center text-sm text-muted">
                {site.email}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
