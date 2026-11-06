import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HeroIntro } from "@/components/home/HeroIntro";
import { HeroVisual } from "@/components/home/HeroVisual";
import { LayerStack } from "@/components/home/LayerStack";
import { Button, Eyebrow, SectionIndex, TextLink } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Interlock } from "@/components/Geometry";
import { CtaBand } from "@/components/CtaBand";
import { featuredServiceIds, services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { awards, site } from "@/lib/site";
import { steps } from "@/lib/approach";

export default function Home() {
  const featured = featuredServiceIds.map((id) => services.find((s) => s.id === id)!);

  return (
    <>
      {/* 01 — Hero */}
      <section className="relative overflow-x-clip bg-ink pt-[var(--header-h)] text-white">
        <div className="blueprint-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black_60%,transparent)] max-md:opacity-40" aria-hidden />
        <div className="absolute -top-32 left-1/2 hidden size-[720px] -translate-x-1/4 rounded-full bg-violet/25 blur-[160px] md:block" aria-hidden />
        <div className="absolute right-0 bottom-0 hidden size-[480px] rounded-full bg-magenta/15 blur-[140px] md:block" aria-hidden />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,rgb(102_42_132/0.35),transparent_70%)] md:hidden" aria-hidden />
        <div className="shell relative grid min-h-[calc(100svh-var(--header-h))] items-center gap-8 pt-8 pb-16 lg:grid-cols-12 lg:gap-6 lg:pt-4 lg:pb-12">
          <div className="relative z-10 lg:col-span-6 xl:col-span-6">
            <HeroIntro />
          </div>
          <div className="relative lg:col-span-6 lg:-mr-8 xl:-mr-12">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* 02 — Awards strip */}
      <section aria-labelledby="awards-strip" className="border-y border-line bg-white">
        <div className="shell grid gap-0 md:grid-cols-[auto_1fr_1fr]">
          <h2 id="awards-strip" className="eyebrow flex items-center gap-3 py-6 text-muted md:border-r md:border-line md:pr-10">
            <span className="size-1.5 rotate-45 bg-magenta" aria-hidden /> Recognition · 2026
          </h2>
          {awards.map((a, i) => (
            <a
              key={a.category}
              href={a.source}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-between gap-6 border-t border-line py-6 md:border-t-0 md:px-10 ${i === 0 ? "md:border-r" : ""}`}
            >
              <div>
                <p className="font-mono text-[0.68rem] tracking-[0.14em] text-magenta uppercase">
                  {a.result} · {a.programme}
                </p>
                <p className="mt-1.5 font-display text-lg leading-tight font-semibold tracking-tight sm:text-xl">{a.category}</p>
              </div>
              <ArrowUpRight className="size-5 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-magenta" aria-hidden />
              <span className="sr-only">(official announcement, opens in a new tab)</span>
            </a>
          ))}
        </div>
      </section>

      {/* 03 — Introduction */}
      <section className="section">
        <div className="shell">
          <SectionIndex n="01" label="Who we are" />
          <div className="mt-14 grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <h2 className="h2">
                Making digital construction work in the <span className="text-gradient">real world.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5 lg:pt-3">
              <p className="lead text-muted">
                Since {site.founded}, Origin7 has helped construction businesses, asset owners and project teams move beyond BIM theory —
                adopting practical, effective digital methods that improve how information is created, shared and used.
              </p>
              <p className="mt-6 text-muted">
                We work alongside your people, not around them. The result is BIM that becomes business as usual: clear workflows,
                better information and technology that earns its place.
              </p>
            </Reveal>
          </div>
          <ul className="mt-20 grid border-t border-line sm:grid-cols-2 lg:grid-cols-5">
            {["Information quality", "Collaboration", "Clear workflows", "Technology integration", "Practical implementation"].map((f, i) => (
              <Reveal as="li" key={f} delay={i * 0.06} className="border-b border-line py-6 sm:pr-6 lg:border-r lg:border-b-0 lg:px-6 lg:first:pl-0 lg:last:border-r-0">
                <span className="font-mono text-xs text-magenta">0{i + 1}</span>
                <p className="mt-3 font-display text-lg font-semibold tracking-tight">{f}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 04 — Featured services */}
      <section className="section bg-white" aria-labelledby="services-h">
        <div className="shell">
          <SectionIndex n="02" label="Expertise" />
          <div className="mt-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 id="services-h" className="h2 max-w-3xl">
              Expertise across the <span className="text-magenta">information</span> lifecycle.
            </h2>
            <TextLink href="/services" className="text-ink">All eight services</TextLink>
          </div>
          <ol className="mt-16 border-t border-ink">
            {featured.map((s, i) => (
              <Reveal as="li" key={s.id} delay={i * 0.04}>
                <Link
                  href={`/services#${s.id}`}
                  className="group relative grid grid-cols-[3rem_1fr_auto] items-center gap-x-4 gap-y-2 border-b border-line py-7 transition-colors md:grid-cols-[6rem_1.1fr_1fr_auto] md:py-9"
                >
                  <span className="absolute inset-y-0 left-0 w-0 bg-tint-magenta/70 transition-[width] duration-500 ease-[var(--ease-out)] group-hover:w-full" aria-hidden />
                  <span className="relative font-mono text-sm text-magenta">{s.number}</span>
                  <span className="relative font-display text-[clamp(1.35rem,2.6vw,2.25rem)] leading-tight font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                    {s.title}
                  </span>
                  <span className="relative col-span-3 col-start-2 row-start-2 max-w-md text-sm leading-relaxed text-muted md:col-span-1 md:col-start-3 md:row-start-1">
                    {s.short}
                  </span>
                  <span className="relative col-start-3 row-start-1 grid size-11 place-items-center rounded-full border border-line transition-colors group-hover:border-magenta group-hover:bg-magenta group-hover:text-white md:col-start-4">
                    <ArrowRight className="size-4" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 05 — Showcase */}
      <section className="section relative overflow-hidden bg-ink text-white" aria-labelledby="showcase-h">
        <div className="blueprint-dark absolute inset-0 max-md:opacity-40" aria-hidden />
        <div className="absolute -top-40 left-1/3 hidden size-[640px] rounded-full bg-violet/30 blur-[140px] md:block" aria-hidden />
        <div className="shell relative">
          <SectionIndex n="03" label="Digital construction" dark />
          <div className="mt-14 grid gap-8 lg:grid-cols-12">
            <h2 id="showcase-h" className="h2 lg:col-span-7">
              Where digital thinking meets the <span className="text-magenta-bright">built world.</span>
            </h2>
            <p className="lead text-white/65 lg:col-span-5 lg:pt-3">
              Every asset is also an information model. We help connect the layers — from strategy and requirements to models, the CDE and
              the asset data that lives on long after handover.
            </p>
          </div>
          <div className="mt-16">
            <LayerStack />
          </div>
          <p className="mt-8 font-mono text-[0.65rem] tracking-[0.14em] text-white/40 uppercase">Illustrative diagram</p>
        </div>
      </section>

      {/* 06 — Approach */}
      <section className="section" aria-labelledby="approach-h">
        <div className="shell">
          <SectionIndex n="04" label="How we work" />
          <div className="mt-14 grid gap-8 lg:grid-cols-12">
            <h2 id="approach-h" className="h2 lg:col-span-6">
              From strategy to <span className="text-gradient">real-world</span> delivery.
            </h2>
            <div className="lg:col-span-5 lg:col-start-8 lg:pt-3">
              <p className="lead text-muted">A practical engagement moves from understanding to continuous improvement — at a pace your teams can sustain.</p>
              <TextLink href="/approach" className="mt-6 text-ink">Explore our approach</TextLink>
            </div>
          </div>
          <ol className="relative mt-20 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.08} className="group relative bg-paper p-7 transition-colors hover:bg-white lg:min-h-72">
                <span className="font-mono text-xs text-magenta">{s.n}</span>
                <span className="absolute top-8 right-7 left-14 h-px origin-left scale-x-50 bg-line transition-transform duration-500 group-hover:scale-x-100 group-hover:bg-magenta" aria-hidden />
                <h3 className="mt-10 font-display text-2xl font-semibold tracking-tight uppercase">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.short}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 07 — Industries */}
      <section className="section bg-white" aria-labelledby="ind-h">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionIndex n="05" label="Sectors" />
            <h2 id="ind-h" className="h2 mt-10">Built for the whole <span className="text-magenta">asset lifecycle.</span></h2>
            <p className="mt-6 text-muted">Our expertise applies wherever construction information needs to be reliable, shared and useful.</p>
            <TextLink href="/industries" className="mt-8 text-ink">Industries & applications</TextLink>
          </div>
          <ul className="lg:col-span-7 lg:col-start-6">
            {industries.map((ind, i) => (
              <Reveal as="li" key={ind.id} delay={i * 0.05}>
                <Link href={`/industries#${ind.id}`} className="group flex items-start gap-6 border-b border-line py-6 first:border-t">
                  <span className="pt-2 font-mono text-xs text-muted transition-colors group-hover:text-magenta">{ind.number}</span>
                  <span className="flex-1">
                    <span className="block font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold tracking-tight transition-colors group-hover:text-magenta">{ind.title}</span>
                    <span className="mt-1 block text-sm text-muted">{ind.audience}</span>
                  </span>
                  <ArrowRight className="mt-3 size-5 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" aria-hidden />
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 08 — Founder */}
      <section className="section relative overflow-hidden" aria-labelledby="founder-h">
        <div className="shell grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="relative lg:col-span-5">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[var(--radius-md)] bg-tint-violet">
              <Image
                src="/images/melanie-dawson.webp"
                alt="Melanie Dawson FICE, Founder and Managing Director of Origin7"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[50%_20%] transition-transform duration-[1.4s] ease-[var(--ease-out)] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/50 to-transparent" aria-hidden />
            </div>
            <Interlock className="absolute -top-10 -right-10 hidden w-48 opacity-70 lg:block" strokeWidth={1.2} />
            <div className="absolute -bottom-6 left-6 rounded-[var(--radius-sm)] bg-white px-5 py-4 shadow-[0_20px_50px_-20px_rgb(21_19_34/0.35)]">
              <p className="font-mono text-[0.65rem] tracking-[0.14em] text-magenta uppercase">Founder & MD</p>
              <p className="font-display font-semibold">Melanie Dawson FICE</p>
            </div>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionIndex n="06" label="Leadership" />
            <Reveal>
              <blockquote className="mt-10 font-display text-[clamp(1.8rem,3.4vw,3rem)] leading-[1.05] font-semibold tracking-tight">
                <span className="text-magenta">“</span>Let&apos;s make BIM business as usual.<span className="text-magenta">”</span>
              </blockquote>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 id="founder-h" className="mt-8 text-sm font-semibold">
                Melanie Dawson FICE <span className="font-normal text-muted">— Founder & Managing Director</span>
              </h2>
              <p className="mt-5 text-muted">
                Melanie leads Origin7 with extensive industry experience in construction and digital transformation. A Fellow of the
                Institution of Civil Engineers, she is known for making BIM and information management practical — and for investing in the
                skills of the people who deliver it, as Founder and Director of Origin7 Digital Academy.
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {["Digital construction leadership", "ISO 19650", "Digital transformation", "Education & skills"].map((t) => (
                  <li key={t} className="rounded-full border border-line px-3 py-1.5 font-mono text-[0.66rem] tracking-[0.1em] text-ink/75 uppercase">{t}</li>
                ))}
              </ul>
              <TextLink href="/about" className="mt-10 text-ink">Meet the founder</TextLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 09 — Academy */}
      <section className="section relative overflow-hidden bg-tint-violet" aria-labelledby="academy-h">
        <Interlock className="pointer-events-none absolute -bottom-48 -left-40 w-[620px] opacity-40" />
        <div className="shell relative grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Eyebrow>Origin7 Digital Academy</Eyebrow>
            <h2 id="academy-h" className="h2 mt-8">
              Expertise worth <span className="text-gradient">sharing.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="lead text-ink/75">
              Origin7 Digital Academy is the educational wing of Origin7 — practical online and live learning in BIM, information
              management and digital construction tools, built on real project experience.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-sm)] border border-violet/15 bg-violet/15 text-sm">
              {["Fundamentals of BIM & IM", "COBie", "Revit", "Navisworks", "Matterport 3D scanning", "Live & self-paced"].map((c) => (
                <li key={c} className="bg-tint-violet px-4 py-3 font-medium">{c}</li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={site.academy} external>Explore Digital Academy</Button>
              <Button href="/academy" variant="outline">About the Academy</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 10 — CTA */}
      <CtaBand title={<>Ready to make digital <span className="text-magenta-bright">work for you?</span></>} button="Start a conversation" />
    </>
  );
}
