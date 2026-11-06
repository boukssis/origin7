import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { IndustryVisual } from "@/components/IndustryVisual";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { industries } from "@/lib/industries";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Industries — BIM for Construction, Infrastructure & Asset Owners",
  description:
    "Where Origin7's BIM and information management expertise applies: building and construction, civil engineering and infrastructure, asset owners, public sector delivery and digital transformation.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        index="03"
        eyebrow="Industries & applications"
        title={<>Wherever information shapes the <span className="text-gradient">built environment.</span></>}
        intro="From design teams and contractors to asset owners and public clients, the same principle applies: better information leads to better decisions. These are the sectors and situations where our expertise is most often applied."
      />
      <div className="shell py-20 md:py-28">
        {industries.map((ind, i) => (
          <section key={ind.id} id={ind.id} aria-labelledby={`${ind.id}-h`} className="grid items-center gap-10 border-b border-line py-16 first:pt-0 last:border-b-0 lg:grid-cols-12 lg:gap-16">
            <Reveal className={`lg:col-span-6 ${i % 2 ? "lg:order-2 lg:col-start-7" : ""}`}>
              <IndustryVisual kind={ind.visual} label={ind.title} />
            </Reveal>
            <Reveal delay={0.08} className={`lg:col-span-6 ${i % 2 ? "lg:order-1 lg:col-start-1 lg:row-start-1" : ""}`}>
              <span className="font-mono text-sm text-magenta">{ind.number}</span>
              <h2 id={`${ind.id}-h`} className="h2 mt-4 !text-[clamp(1.9rem,3.4vw,3.2rem)]">{ind.title}</h2>
              <p className="mt-3 font-medium text-ink/70">{ind.audience}</p>
              <p className="mt-6 leading-relaxed text-muted">{ind.intro}</p>
              <h3 className="eyebrow mt-8 text-muted">Common needs</h3>
              <ul className="mt-4 space-y-2.5">
                {ind.needs.map((n) => (
                  <li key={n} className="flex gap-3 text-ink/85">
                    <span className="mt-[0.7em] h-px w-4 shrink-0 bg-magenta" aria-hidden />
                    {n}
                  </li>
                ))}
              </ul>
              <h3 className="eyebrow mt-8 text-muted">Relevant services</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {ind.services.map((id) => {
                  const s = services.find((x) => x.id === id)!;
                  return (
                    <li key={id}>
                      <Link href={`/services#${id}`} className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line px-4 text-sm transition-colors hover:border-magenta hover:text-magenta">
                        <span className="font-mono text-[0.65rem] text-magenta">{s.number}</span>
                        {s.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </section>
        ))}
        <p className="mt-6 text-xs text-muted">Sectors describe where Origin7&apos;s expertise applies and are not a list of named client engagements.</p>
      </div>
      <CtaBand title={<>Let&apos;s talk about <span className="text-magenta-bright">your sector.</span></>} />
    </>
  );
}
