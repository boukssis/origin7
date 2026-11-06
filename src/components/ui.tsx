import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light" | "outline-light";
  external?: boolean;
  className?: string;
};

const styles = {
  primary: "bg-magenta text-white hover:bg-magenta-deep",
  outline: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-white",
  light: "bg-white text-ink hover:bg-tint-magenta",
  "outline-light": "border border-white/30 text-white hover:border-white hover:bg-white hover:text-ink",
};

export function Button({ href, children, variant = "primary", external, className = "" }: BtnProps) {
  const Icon = external ? ArrowUpRight : ArrowRight;
  const cls = `group relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-full px-6 py-3 font-mono text-[0.75rem] font-medium tracking-[0.12em] uppercase transition-colors duration-300 ${styles[variant]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <span className="relative inline-flex size-4 overflow-hidden" aria-hidden>
        <Icon className="absolute size-4 transition-transform duration-300 ease-[var(--ease-out)] group-hover:translate-x-5" />
        <Icon className="absolute size-4 -translate-x-5 transition-transform duration-300 ease-[var(--ease-out)] group-hover:translate-x-0" />
      </span>
    </>
  );
  if (href.startsWith("mailto:"))
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  if (external)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function Eyebrow({ children, className = "", tone = "magenta" }: { children: ReactNode; className?: string; tone?: "magenta" | "light" | "muted" }) {
  const color = tone === "light" ? "text-violet-soft" : tone === "muted" ? "text-muted" : "text-magenta";
  return (
    <p className={`eyebrow flex items-center gap-3 ${color} ${className}`}>
      <span className="h-px w-8 bg-current" aria-hidden />
      {children}
    </p>
  );
}

export function SectionIndex({ n, label, dark }: { n: string; label: string; dark?: boolean }) {
  return (
    <div className={`eyebrow flex items-center gap-4 ${dark ? "text-white/50" : "text-muted"}`}>
      <span className="text-magenta">{n}</span>
      <span className={`h-px flex-1 ${dark ? "bg-white/15" : "bg-line"}`} aria-hidden />
      <span>{label}</span>
    </div>
  );
}

export function TextLink({ href, children, external, className = "" }: { href: string; children: ReactNode; external?: boolean; className?: string }) {
  const cls = `group inline-flex items-center gap-2 font-mono text-[0.75rem] font-medium tracking-[0.12em] uppercase ${className}`;
  const body = (
    <>
      <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
        {children}
      </span>
      {external ? (
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
      ) : (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
      )}
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {body}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  ) : (
    <Link href={href} className={cls}>
      {body}
    </Link>
  );
}
