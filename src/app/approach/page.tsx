import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { DrawLine, Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { SectionIndex } from "@/components/ui";
import { steps } from "@/lib/approach";

export const metadata: Metadata = {
  title: "Our Approach — From BIM Strategy to Real-World Delivery",
  description:
    "How a practical BIM and digital construction engagement can work: understand, define, implement, enable and improve — an illustrative framework for information management transformation.",
  alternates: { canonical: "/approach" },
};

const principles = [
  { t: "Practical over theoretical", d: "Processes are designed to be used on live projects, not just to satisfy a tender return." },
  { t: "People first", d: "Digital change succeeds when the people producing information understand why it matters." },
  { t: "Standards as a tool", d: "ISO 19650 provides structure; we apply it proportionately to your organisation and projects." },
  { t: "Workflow before software", d: "Define how information should flow first, then make the tools support it." },
];

export default function ApproachPage() {
  return (
    <>
      <PageHero
        index="04"
        eyebrow="Our approach"
        title={<>From strategy to <span className="text-gradient">real-world delivery.</span></>}
        intro="Every organisation starts from a different place. This illustrative framework shows how a practical digital transformation engagement can move from understanding current practice to continuous improvement."
      />

      <section className="section" aria-labelledby="framework-h">
        <div className="shell">
          <SectionIndex n="01" label="Engagement framework" />
          <h2 id="framework-h" className="sr-only">Engagement framework</h2>

          {/* Desktop: horizontal narrative */}
          <div className="relative mt-20 hidden lg:block">
            <div className="absolute top-[22px] right-0 left-0 text-line"><span className="block h-px bg-current" /></div>
            <div className="absolute top-[22px] right-0 left-0 text-magenta"><DrawLine /></div>
            <ol className="relative grid grid-cols-5 gap-8">
              {steps.map((s, i) => (
                <Reveal as="li" key={s.n} delay={0.2 + i * 0.15}>
                  <span className="relative z-10 grid size-11 place-items-center rounded-full border border-magenta bg-paper font-mono text-xs text-magenta">{s.n}</span>
                  <h3 className="mt-8 font-display text-3xl font-semibold tracking-tight uppercase">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.short}</p>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Mobile & tablet: vertical sequence */}
          <ol className="relative mt-14 border-l border-line pl-8 lg:hidden">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 0.05} className="relative pb-12 last:pb-0">
                <span className="absolute top-0 -left-[calc(2rem+22px)] grid size-11 place-items-center rounded-full border border-magenta bg-paper font-mono text-xs text-magenta">{s.n}</span>
                <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight uppercase">{s.title}</h3>
                <p className="mt-2 text-muted">{s.short}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line bg-white" aria-label="Framework stages in detail">
        <div className="shell">
          {steps.map((s, i) => (
            <Reveal key={s.n} className="grid gap-8 border-b border-line py-16 last:border-b-0 md:grid-cols-12 md:py-20">
              <div className="md:col-span-4">
                <span className="font-display text-[clamp(4rem,9vw,8rem)] leading-none font-semibold tracking-tighter text-transparent [-webkit-text-stroke:1px_var(--o7-magenta)]">{s.n}</span>
              </div>
              <div className="md:col-span-8 lg:col-span-7">
                <p className="eyebrow text-magenta">Stage {i + 1} of 5</p>
                <h2 className="h2 mt-4 !text-[clamp(2rem,4vw,3.25rem)]">{s.title}</h2>
                <p className="lead mt-6 text-muted">{s.detail}</p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {s.outputs.map((o) => (
                    <li key={o} className="rounded-full border border-line px-4 py-2 font-mono text-[0.68rem] tracking-[0.1em] uppercase">{o}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section relative overflow-hidden bg-ink text-white" aria-labelledby="principles-h">
        <div className="blueprint-dark absolute inset-0" aria-hidden />
        <div className="shell relative">
          <SectionIndex n="02" label="Principles" dark />
          <h2 id="principles-h" className="h2 mt-12 max-w-3xl">What guides <span className="text-magenta-bright">the work.</span></h2>
          <ul className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-md)] bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.t} delay={i * 0.06} className="bg-ink p-8">
                <span className="font-mono text-xs text-magenta-bright">0{i + 1}</span>
                <h3 className="mt-8 font-display text-xl font-semibold tracking-tight">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{p.d}</p>
              </Reveal>
            ))}
          </ul>
          <p className="mt-10 font-mono text-[0.65rem] tracking-[0.14em] text-white/40 uppercase">
            Illustrative framework — each engagement is shaped around the client&apos;s needs.
          </p>
        </div>
      </section>

      <CtaBand title={<>Where are you on the <span className="text-magenta-bright">journey?</span></>} button="Start a conversation" />
    </>
  );
}
