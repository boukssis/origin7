import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ServiceIndex } from "@/components/services/ServiceIndex";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { services, type Service } from "@/lib/services";

export const metadata: Metadata = {
  title: "BIM & Digital Construction Services — ISO 19650, CDE, Digital Handover",
  description:
    "BIM strategy and ISO 19650 consulting, BIM project delivery, Common Data Environment consultancy, digital construction technology, laser scanning, asset information and certification readiness support across Northern Ireland and Ireland.",
  alternates: { canonical: "/services" },
};

function CapabilityDiagram({ s }: { s: Service }) {
  return (
    <figure className="relative overflow-hidden rounded-[var(--radius-md)] border border-line bg-paper p-6 md:p-8">
      <div className="blueprint absolute inset-0 opacity-70" aria-hidden />
      <figcaption className="eyebrow relative text-muted">Typical deliverables</figcaption>
      <ol className="relative mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {s.deliverables.map((d, i) => (
          <li key={d} className="relative">
            <div className="flex items-center gap-3">
              <span className="grid size-8 shrink-0 place-items-center rounded-full border border-magenta bg-white font-mono text-[0.65rem] text-magenta">{i + 1}</span>
              <span className="hidden h-px flex-1 bg-gradient-to-r from-magenta/60 to-transparent xl:block" aria-hidden />
            </div>
            <p className="mt-3 text-sm font-medium">{d}</p>
          </li>
        ))}
      </ol>
    </figure>
  );
}

function ServiceSection({ s }: { s: Service }) {
  return (
    <section id={s.id} aria-labelledby={`${s.id}-h`} className="border-t border-ink pt-10 pb-24 first:border-t-0 first:pt-0">
      <Reveal>
        <div className="flex items-start gap-5 md:gap-8">
          <span className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-none font-semibold tracking-tighter text-transparent [-webkit-text-stroke:1px_var(--o7-magenta)]">
            {s.number}
          </span>
          <div className="pt-2">
            <h2 id={`${s.id}-h`} className="font-display text-[clamp(1.75rem,3.2vw,2.9rem)] leading-[1.02] font-semibold tracking-tight uppercase">
              {s.title}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.standards.map((t) => (
                <li key={t} className="rounded-full bg-tint-violet px-3 py-1 font-mono text-[0.65rem] tracking-[0.08em] text-violet">{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <Reveal>
          <h3 className="eyebrow text-muted">The challenge</h3>
          <p className="mt-4 leading-relaxed text-ink/80">{s.challenge}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h3 className="eyebrow text-magenta">How Origin7 helps</h3>
          <p className="mt-4 leading-relaxed text-ink/80">{s.support}</p>
        </Reveal>
      </div>

      <Reveal className="mt-12">
        <h3 className="eyebrow text-muted">Key activities</h3>
        <ul className="mt-5 grid border-t border-line sm:grid-cols-2">
          {s.activities.map((a, i) => (
            <li key={a} className="flex gap-4 border-b border-line py-3.5 text-[0.95rem] sm:odd:pr-6 sm:even:border-l sm:even:pl-6">
              <span className="pt-0.5 font-mono text-[0.7rem] text-magenta">{String(i + 1).padStart(2, "0")}</span>
              {a}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-10">
        <CapabilityDiagram s={s} />
      </Reveal>

      <div className="mt-10 grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <h3 className="eyebrow text-muted">The value</h3>
          <p className="mt-4 font-display text-xl leading-snug font-medium tracking-tight">{s.value}</p>
        </Reveal>
        <Reveal delay={0.08} className="md:col-span-7">
          <h3 className="eyebrow text-muted">Example applications</h3>
          <ul className="mt-4 space-y-3">
            {s.useCases.map((u) => (
              <li key={u} className="flex gap-3 text-ink/80">
                <span className="mt-[0.7em] h-px w-4 shrink-0 bg-magenta" aria-hidden />
                {u}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Link
        href={`/contact?service=${encodeURIComponent(s.title)}`}
        className="group mt-12 inline-flex items-center gap-3 rounded-full border border-ink px-6 py-3 font-mono text-[0.72rem] tracking-[0.12em] uppercase transition-colors hover:bg-ink hover:text-white"
      >
        Enquire about {s.title}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
      </Link>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        index="02"
        eyebrow="Services"
        title={<>Digital construction expertise, <span className="text-gradient">applied.</span></>}
        intro="Eight connected services spanning strategy, delivery, technology and operations — helping organisations across Northern Ireland and Ireland adopt BIM and information management that genuinely improves projects."
        aside={
          <nav aria-label="Jump to service" className="lg:hidden">
            <ol className="grid gap-px overflow-hidden rounded-[var(--radius-sm)] border border-line bg-line sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="flex min-h-12 items-center gap-3 bg-white px-4 py-3 text-sm hover:bg-tint-magenta">
                    <span className="font-mono text-xs text-magenta">{s.number}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        }
      />
      <div className="shell grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
        <aside className="hidden lg:col-span-3 lg:block">
          <ServiceIndex items={services.map(({ id, number, title }) => ({ id, number, title }))} />
        </aside>
        <div className="lg:col-span-9">
          {services.map((s) => (
            <ServiceSection key={s.id} s={s} />
          ))}
          <p className="border-t border-line pt-6 text-xs leading-relaxed text-muted">
            Software names are referenced descriptively and remain the trademarks of their owners; no vendor partnership is implied.
            Certification readiness support prepares organisations for assessment by an accredited certification body — Origin7 does not issue
            ISO certification.
          </p>
        </div>
      </div>
      <CtaBand title={<>Not sure where to <span className="text-magenta-bright">start?</span></>} button="Talk it through" text="A short conversation is often the quickest way to identify the right first step for your organisation or project." />
    </>
  );
}
