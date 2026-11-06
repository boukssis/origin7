"use client";

import { site } from "@/lib/site";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="flex min-h-[70svh] items-center pt-[var(--header-h)]">
      <div className="shell">
        <p className="eyebrow text-magenta">Something went wrong</p>
        <h1 className="h2 mt-6 max-w-2xl">We hit an unexpected issue loading this page.</h1>
        <div className="mt-8 flex flex-wrap gap-4">
          <button onClick={reset} className="min-h-12 rounded-full bg-magenta px-6 font-mono text-[0.75rem] tracking-[0.12em] text-white uppercase hover:bg-magenta-deep">
            Try again
          </button>
          <a href={`mailto:${site.email}`} className="inline-flex min-h-12 items-center rounded-full border border-ink/20 px-6 font-mono text-[0.75rem] tracking-[0.12em] uppercase">
            Email us
          </a>
        </div>
      </div>
    </section>
  );
}
