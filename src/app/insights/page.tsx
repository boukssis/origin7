import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { Interlock } from "@/components/Geometry";
import { insights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights — ISO 19650, CDEs, Digital Handover & BIM Adoption Guides",
  description:
    "Practical guides to digital construction: understanding ISO 19650, Common Data Environments, digital handover and making BIM business as usual.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const guides = insights.filter((i) => i.kind === "Guide");
  const [lead, ...rest] = guides;
  const news = insights.filter((i) => i.kind === "Company news");

  return (
    <>
      <PageHero
        index="07"
        eyebrow="Insights"
        title={
          <>
            Thinking on <span className="text-gradient">digital construction.</span>
          </>
        }
        intro="Plain-language guides to the standards, processes and technologies shaping how the built environment is designed, delivered and operated."
      />

      <section className="section" aria-label="Guides">
        <div className="shell">
          <Reveal>
            <Link href={`/insights/${lead.slug}`} className="group relative grid overflow-hidden bg-ink text-white lg:grid-cols-12">
              <div className="relative min-h-64 overflow-hidden lg:col-span-5">
                <div className="blueprint-dark absolute inset-0" aria-hidden />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,color-mix(in_srgb,var(--o7-magenta)_45%,transparent),transparent_60%)]" aria-hidden />
                <Interlock className="absolute top-1/2 left-1/2 w-72 -translate-x-1/2 -translate-y-1/2 transition-transform duration-[1.2s] ease-[var(--ease-out)] group-hover:scale-110 group-hover:rotate-6" strokeWidth={1.2} />
              </div>
              <div className="flex flex-col justify-between p-8 md:p-12 lg:col-span-7">
                <div>
                  <p className="eyebrow text-violet-soft">
                    Featured guide · {lead.topic}
                  </p>
                  <h2 className="mt-6 font-display text-[clamp(1.8rem,3.4vw,3rem)] leading-[1.04] font-semibold tracking-tight">{lead.title}</h2>
                  <p className="mt-5 max-w-xl text-white/65">{lead.summary}</p>
                </div>
                <p className="mt-10 flex items-center gap-3 font-mono text-[0.72rem] tracking-[0.12em] uppercase">
                  Read guide · {lead.readingTime}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </p>
              </div>
            </Link>
          </Reveal>

          <ol className="mt-4 border-t border-ink">
            {rest.map((a, i) => (
              <Reveal as="li" key={a.slug} delay={i * 0.05}>
                <Link href={`/insights/${a.slug}`} className="group grid gap-4 border-b border-line py-8 md:grid-cols-12 md:items-baseline">
                  <span className="font-mono text-xs text-magenta md:col-span-1">{String(i + 2).padStart(2, "0")}</span>
                  <span className="md:col-span-4">
                    <span className="eyebrow block text-muted">{a.topic}</span>
                    <span className="mt-2 block font-display text-[clamp(1.35rem,2.2vw,1.85rem)] leading-tight font-semibold tracking-tight transition-colors group-hover:text-magenta">
                      {a.title}
                    </span>
                  </span>
                  <span className="text-sm leading-relaxed text-muted md:col-span-5">{a.summary}</span>
                  <span className="flex items-center gap-2 font-mono text-[0.68rem] tracking-[0.12em] text-muted uppercase md:col-span-2 md:justify-end">
                    {a.readingTime}
                    <ArrowRight className="size-4 text-ink transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ol>

          <div className="mt-24">
            <p className="eyebrow text-muted">Company news</p>
            <ul className="mt-6 border-t border-ink">
              {news.map((n) => (
                <li key={n.slug}>
                  <Link href={`/insights/${n.slug}`} className="group flex flex-col gap-2 border-b border-line py-7 md:flex-row md:items-center md:justify-between">
                    <span className="font-display text-[clamp(1.3rem,2.4vw,1.9rem)] font-semibold tracking-tight transition-colors group-hover:text-magenta">{n.title}</span>
                    <span className="flex items-center gap-3 text-sm text-muted">
                      {n.summary}
                      <ArrowRight className="size-4 shrink-0" aria-hidden />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-10 text-xs text-muted">Guides are general educational explainers and do not constitute project-specific advice.</p>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Have a question these guides <span className="text-magenta-bright">don&apos;t answer?</span>
          </>
        }
        button="Ask us"
      />
    </>
  );
}
