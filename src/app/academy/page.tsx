import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button, SectionIndex } from "@/components/ui";
import { Interlock } from "@/components/Geometry";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Origin7 Digital Academy — BIM Training Northern Ireland & Online",
  description:
    "Origin7 Digital Academy is the educational wing of Origin7, offering practical BIM and information management training — from ISO 19650 fundamentals to COBie, Revit, Navisworks and Matterport.",
  alternates: { canonical: "/academy" },
};

const pathways = [
  { group: "Foundations", items: ["Fundamentals of BIM and Information Management"] },
  { group: "Lifecycle", items: ["Information Management and BIM in the Design & Construction phase", "Information Management in the Operational Phase of Assets"] },
  { group: "Asset data", items: ["COBie — live and self-paced"] },
  { group: "Software skills", items: ["Revit self-paced learning", "Navisworks self-paced learning"] },
  { group: "Capture & visualisation", items: ["Matterport 3D Scanning & Visualisation", "Kuula360 in Construction", "Enscape"] },
];

const formats = [
  { t: "Individuals", d: "Build recognised BIM and information management knowledge at your own pace, alongside your day job." },
  { t: "Small teams", d: "Bring a project team onto the same page with shared, practical learning and a common vocabulary." },
  { t: "Organisations", d: "Upskill across the business as part of a wider digital construction strategy, connected to Origin7 consultancy." },
];

const benefits = [
  "Learning grounded in real project experience, not theory alone",
  "Live and self-paced options to suit different schedules",
  "Coverage across design, construction and operational phases",
  "A direct line from training into practical implementation",
];

export default function AcademyPage() {
  return (
    <>
      <PageHero
        index="06"
        eyebrow="Origin7 Digital Academy"
        title={<>Empowering the next generation of <span className="text-gradient">digital construction.</span></>}
        intro="Origin7 Digital Academy is the educational wing of Origin7 — offering practical learning in BIM, information management and digital construction tools, built on the same industry experience behind the consultancy."
        aside={
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Button href={site.academyCourses} external>Explore courses</Button>
            <Button href={site.academy} external variant="outline">Visit Digital Academy</Button>
          </div>
        }
      />

      <section className="section" aria-labelledby="mission-h">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionIndex n="01" label="Mission" />
            <Reveal>
              <h2 id="mission-h" className="h2 mt-10">Simplifying the complex. <span className="text-magenta">Simple.</span></h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="space-y-5 text-muted lg:col-span-5 lg:col-start-8 lg:pt-16">
            <p className="lead text-ink/80">
              The Academy&apos;s mission is to make adopting BIM and digital construction business as usual through innovative, straightforward
              training.
            </p>
            <p>
              Courses are designed to make cutting-edge construction practice accessible — from foundational principles to hands-on tools — for
              professionals across the UK, Ireland and beyond.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="pathways-h">
        <div className="shell">
          <SectionIndex n="02" label="Learning pathways" />
          <div className="mt-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 id="pathways-h" className="h2 max-w-2xl">What you can <span className="text-gradient">learn.</span></h2>
            <p className="max-w-sm text-sm text-muted">Examples from the Academy&apos;s course list. Availability, dates and pricing are managed on the Academy website.</p>
          </div>
          <ol className="mt-14 border-t border-ink">
            {pathways.map((p, i) => (
              <Reveal as="li" key={p.group} delay={i * 0.05} className="grid gap-4 border-b border-line py-7 md:grid-cols-12">
                <div className="flex items-baseline gap-4 md:col-span-4">
                  <span className="font-mono text-xs text-magenta">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-xl font-semibold tracking-tight">{p.group}</h3>
                </div>
                <ul className="flex flex-wrap gap-2 md:col-span-8">
                  {p.items.map((c) => (
                    <li key={c} className="rounded-full border border-line bg-paper px-4 py-2 text-sm">{c}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-tint-violet" aria-labelledby="formats-h">
        <Interlock className="pointer-events-none absolute -top-40 -right-40 w-[600px] opacity-40" />
        <div className="shell relative">
          <SectionIndex n="03" label="Who it's for" />
          <h2 id="formats-h" className="h2 mt-12 max-w-3xl">Learning that scales from one person to the <span className="text-magenta">whole organisation.</span></h2>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-violet/15 bg-violet/15 md:grid-cols-3">
            {formats.map((f, i) => (
              <Reveal as="li" key={f.t} delay={i * 0.08} className="bg-tint-violet p-8 md:p-10">
                <span className="font-mono text-xs text-magenta">0{i + 1}</span>
                <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">{f.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{f.d}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="founder-link-h">
        <div className="shell grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="relative mx-auto aspect-square max-w-xs overflow-hidden rounded-full border-8 border-white shadow-[0_30px_60px_-30px_rgb(21_19_34/0.4)]">
              <Image src="/images/melanie-dawson.webp" alt="Melanie Dawson, Founder and Director of Origin7 Digital Academy" fill sizes="320px" className="object-cover object-[50%_25%]" />
            </div>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6">
            <SectionIndex n="04" label="Consultancy meets education" />
            <h2 id="founder-link-h" className="h2 mt-10 !text-[clamp(1.9rem,3.4vw,3rem)]">From the project floor to the classroom.</h2>
            <p className="mt-6 leading-relaxed text-muted">
              The Academy was founded by Melanie Dawson FICE, Founder and Director, and is led by Melanie Dawson and Erin O&apos;Kane. It draws on
              the practical knowledge gained through Origin7&apos;s consultancy work — designing, procuring, building and maintaining assets in the
              built environment.
            </p>
            <h3 className="eyebrow mt-10 text-muted">Why practical BIM education matters</h3>
            <ul className="mt-5 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3 text-ink/85">
                  <span className="mt-[0.7em] h-px w-4 shrink-0 bg-magenta" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-white" aria-label="Visit the Academy">
        <div className="blueprint-dark absolute inset-0" aria-hidden />
        <div className="shell relative flex flex-col gap-10 py-20 md:flex-row md:items-center md:justify-between md:py-28">
          <div>
            <p className="eyebrow text-violet-soft">origin7digital.com</p>
            <h2 className="h2 mt-6 max-w-2xl">Start learning with the <span className="text-magenta-bright">Academy.</span></h2>
            <p className="mt-5 max-w-lg text-sm text-white/60">Course enrolment, bookings and accounts are handled on the separate Origin7 Digital Academy website.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={site.academyCourses} external variant="light">Explore courses</Button>
            <Button href={site.academy} external variant="outline-light">Visit Digital Academy</Button>
          </div>
        </div>
      </section>
    </>
  );
}
