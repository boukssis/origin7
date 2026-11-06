"use client";

import { useEffect, useState } from "react";

type Item = { id: string; number: string; title: string };

export function ServiceIndex({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-label="Service index" className="sticky top-[calc(var(--header-h)+2rem)]">
      <p className="eyebrow text-muted">Service index</p>
      <ol className="mt-6 border-l border-line">
        {items.map((s) => {
          const on = s.id === active;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={on ? "true" : undefined}
                className={`relative -ml-px flex gap-4 border-l py-2.5 pl-5 text-sm transition-colors ${
                  on ? "border-magenta font-medium text-ink" : "border-transparent text-muted hover:text-ink"
                }`}
              >
                <span className={`font-mono text-xs ${on ? "text-magenta" : ""}`}>{s.number}</span>
                {s.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
