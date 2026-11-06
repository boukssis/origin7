import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { Interlock, Linkedin } from "@/components/Geometry";
import { SectionIndex, TextLink } from "@/components/ui";
import { appointments, awards, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Origin7 — Melanie Dawson FICE & Award-Winning BIM Consultancy",
  description:
    "Founded in 2020, Origin7 is an award-winning BIM and digital construction consultancy led by Melanie Dawson FICE, serving Northern Ireland and Ireland.",
  alternates: { canonical: "/about" },
};

const expertise = [
  "Digital construction leadership",
  "BIM and information management",
  "Digital transformation",
  "Practical adoption of industry standards",
  "Construction innovation",
  "Education and skills development",
];

const facts = [
  { k: "Founded", v: String(site.founded) },
  { k: "Focus", v: "BIM, information management & digital construction" },
  { k: "Region", v: site.region },
  { k: "Base", v: "Magherafelt, Co. Londonderry" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        index="05"
        eyebrow="About Origin7"
        title={<>The people behind <span className="text-gradient">digital progress.</span></>}
        intro={`Origin7 was founded in ${site.founded} to help organisations adopt effective information management and innovative digital processes — making BIM practical, accessible and commercially useful.`}
        aside={
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-sm)] border border-line bg-line">
            {facts.map((f) => (
              <div key={f.k} className="bg-white p-5">
                <dt className="eyebrow text-muted">{f.k}</dt>
                <dd className="mt-2 text-sm font-medium">{f.v}</dd>
              </div>
            ))}
          </dl>
        }
      />

      <section className="section" aria-labelledby="mission-h">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionIndex n="01" label="Our purpose" />
            <h2 id="mission-h" className="h2 mt-10">
              Let&apos;s make BIM <span className="text-magenta">business as usual.</span>
            </h2>
          </div>
          <Reveal className="space-y-6 text-muted lg:col-span-6 lg:col-start-7 lg:pt-16">
            <p className="lead text-ink/80">
              Origin7 works with construction businesses, asset owners, project teams and other built-environment organisations to put
              digital construction processes into practice.
            </p>
            <p>
              Our work spans the full asset lifecycle — from BIM strategy and ISO 19650 information management, through Common Data Environments,
              coordination and reality capture, to asset information and digital handover.
            </p>
            <p>
              We believe sophisticated digital methods should be understandable and useful. That means plain-language guidance, processes that fit
              real programmes, and investing in the skills of the people who deliver them.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-white" aria-labelledby="founder-h">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <Reveal className="relative lg:col-span-5">
            <div className="relative aspect-[534/764] overflow-hidden rounded-[var(--radius-md)]">
              <Image
                src="/images/melanie-dawson.webp"
                alt="Portrait of Melanie Dawson FICE"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
                priority={false}
              />
            </div>
            <Interlock className="absolute -bottom-12 -left-12 hidden w-56 lg:block" strokeWidth={1.2} />
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionIndex n="02" label="Founder" />
            <Reveal>
              <p className="eyebrow mt-10 text-magenta">Founder & Managing Director</p>
              <h2 id="founder-h" className="h2 mt-4">Melanie Dawson <span className="text-gradient">FICE</span></h2>
            </Reveal>
            <Reveal delay={0.08} className="mt-8 space-y-5 text-muted">
              <p className="lead text-ink/80">
                Melanie founded Origin7 in {site.founded} and leads the consultancy as Managing Director, bringing extensive industry experience
                in construction and digital transformation.
              </p>
              <p>
                A Fellow of the Institution of Civil Engineers, Melanie focuses on the practical adoption of BIM and information management standards —
                helping organisations translate requirements into workflows that teams can genuinely use.
              </p>
              <p>
                She is also Founder and Director of Origin7 Digital Academy, established to bridge the gap between traditional education and the
                needs of the digital construction landscape, with a hands-on emphasis on practical, real-world skills.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <h3 className="eyebrow mt-12 text-muted">Appointments</h3>
              <ul className="mt-5 border-t border-line">
                {appointments.map((a) => (
                  <li key={a.org} className="flex flex-col gap-1 border-b border-line py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <span className="font-medium">{a.role}</span>
                    {"href" in a && a.href ? (
                      <a href={a.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-magenta">
                        {a.org} <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    ) : (
                      <span className="text-sm text-muted">{a.org}</span>
                    )}
                  </li>
                ))}
              </ul>
              <h3 className="eyebrow mt-12 text-muted">Areas of expertise</h3>
              <ul className="mt-5 grid border-t border-line sm:grid-cols-2">
                {expertise.map((e, i) => (
                  <li key={e} className="flex gap-4 border-b border-line py-3.5 text-[0.95rem] sm:odd:pr-6 sm:even:border-l sm:even:pl-6">
                    <span className="pt-0.5 font-mono text-[0.7rem] text-magenta">{String(i + 1).padStart(2, "0")}</span>
                    {e}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href={site.founderLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center gap-3 rounded-full bg-ink px-6 font-mono text-[0.72rem] tracking-[0.12em] text-white uppercase transition-colors hover:bg-magenta"
                >
                  <Linkedin className="size-4" aria-hidden /> Connect on LinkedIn <span className="sr-only">(opens in a new tab)</span>
                </a>
                <TextLink href="/academy" className="text-ink">Digital Academy</TextLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-paper" aria-labelledby="team-h">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionIndex n="03" label="People" />
            <h2 id="team-h" className="h2 mt-10">
              Leadership you can <span className="text-magenta">verify.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="lead text-muted">
              Origin7 publishes only roles that are publicly confirmed. Further colleagues are part of the practice; titles not independently
              verified are not listed here.
            </p>
            <ul className="mt-10 border-t border-ink">
              <li className="grid gap-2 border-b border-line py-7 md:grid-cols-12">
                <p className="font-display text-2xl font-semibold tracking-tight md:col-span-7">Melanie Dawson FICE</p>
                <p className="text-sm text-muted md:col-span-5 md:text-right">Founder &amp; Managing Director</p>
              </li>
              <li className="grid gap-2 border-b border-line py-7 md:grid-cols-12">
                <p className="font-display text-2xl font-semibold tracking-tight md:col-span-7">Chris Millar</p>
                <p className="text-sm text-muted md:col-span-5 md:text-right">Technical Lead</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-ink text-white" aria-labelledby="recognition-h">
        <div className="blueprint-dark absolute inset-0" aria-hidden />
        <div className="absolute -right-40 -bottom-40 size-[560px] rounded-full bg-magenta/20 blur-[140px]" aria-hidden />
        <div className="shell relative">
          <SectionIndex n="04" label="Recognition" dark />
          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            <h2 id="recognition-h" className="h2 lg:col-span-6">Recognised by <span className="text-magenta-bright">the industry.</span></h2>
            <p className="lead text-white/65 lg:col-span-5 lg:col-start-8 lg:pt-3">
              In 2026, Origin7 was named a winner at two industry award programmes — recognition of its work making digital construction practical
              across Northern Ireland and Ireland.
            </p>
          </div>
          <ul className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-md)] bg-white/10 md:grid-cols-2">
            {awards.map((a, i) => (
              <Reveal as="li" key={a.category} delay={i * 0.1} className="relative bg-ink-2 p-8 md:p-12">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.14em] text-magenta-bright uppercase">{a.result} · {a.year}</span>
                  <span className="font-display text-6xl leading-none font-semibold text-white/[0.06]" aria-hidden>{a.year}</span>
                </div>
                <p className="mt-10 font-display text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.05] font-semibold tracking-tight">{a.category}</p>
                <p className="mt-3 text-white/60">{a.programme} {a.year}</p>
                <a href={a.source} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.12em] text-white/70 uppercase hover:text-white">
                  Official announcement <ArrowUpRight className="size-4" aria-hidden /> <span className="sr-only">(opens in a new tab)</span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={<>Let&apos;s build something <span className="text-magenta-bright">smarter.</span></>} />
    </>
  );
}
