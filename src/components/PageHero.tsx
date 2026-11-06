import type { ReactNode } from "react";
import { Interlock } from "./Geometry";
import { Reveal } from "./Reveal";

type Props = { eyebrow: string; title: ReactNode; intro: ReactNode; aside?: ReactNode; index?: string };

export function PageHero({ eyebrow, title, intro, aside, index }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-[var(--header-h)]">
      <div className="blueprint absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
      <Interlock className="pointer-events-none absolute -top-24 -right-40 w-[520px] opacity-50 md:w-[680px]" />
      <div className="shell relative pt-16 pb-16 md:pt-24 md:pb-24">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-magenta">
            {index && <span className="text-muted">{index}</span>}
            <span className="h-px w-8 bg-current" aria-hidden />
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="h1 mt-8 max-w-5xl">{title}</h1>
        </Reveal>
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <Reveal delay={0.12} className="lg:col-span-6">
            <div className="lead text-muted">{intro}</div>
          </Reveal>
          {aside && (
            <Reveal delay={0.18} className="lg:col-span-5 lg:col-start-8">
              {aside}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
