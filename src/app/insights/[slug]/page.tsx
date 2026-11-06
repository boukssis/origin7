import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Fragment } from "react";
import { CtaBand } from "@/components/CtaBand";
import { Interlock } from "@/components/Geometry";
import { getInsight, insights } from "@/lib/insights";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = getInsight(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.summary,
    alternates: { canonical: `/insights/${a.slug}` },
    openGraph: { type: "article", title: a.title, description: a.summary },
  };
}

function Inline({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : <Fragment key={i}>{part}</Fragment>,
      )}
    </>
  );
}

export default async function InsightPage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const a = getInsight(slug);
  if (!a) notFound();
  const idx = insights.indexOf(a);
  const next = insights[(idx + 1) % insights.length];

  return (
    <>
      <article>
        <header className="relative overflow-hidden border-b border-line pt-[var(--header-h)]">
          <div className="blueprint absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
          <Interlock className="pointer-events-none absolute -top-20 -right-40 w-[560px] opacity-40" />
          <div className="shell relative max-w-5xl pt-14 pb-16 md:pt-20">
            <Link href="/insights" className="inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.12em] text-muted uppercase hover:text-magenta">
              <ArrowLeft className="size-4" aria-hidden /> All insights
            </Link>
            <p className="eyebrow mt-10 text-magenta">{a.kind} · {a.topic} · {a.readingTime}</p>
            <h1 className="mt-6 font-display text-[clamp(2.2rem,1.4rem+3.6vw,4.5rem)] leading-[1] font-semibold tracking-tight text-balance">{a.title}</h1>
            <p className="lead mt-6 max-w-2xl text-muted">{a.summary}</p>
          </div>
        </header>

        <div className="shell max-w-5xl py-16 md:py-24">
          <div className="prose-o7 mx-auto max-w-[68ch] text-[1.05rem]">
            {a.body.map((b, i) =>
              b.type === "h2" ? (
                <h2 key={i}>{b.text}</h2>
              ) : b.type === "ul" ? (
                <ul key={i}>
                  {b.items.map((it) => (
                    <li key={it}><Inline text={it} /></li>
                  ))}
                </ul>
              ) : (
                <p key={i} className={i === 0 ? "!text-ink/85 text-[1.15rem]" : undefined}><Inline text={b.text} /></p>
              ),
            )}

            {a.sources && (
              <div className="mt-12 border-t border-line pt-8">
                <p className="eyebrow text-muted">Sources</p>
                <ul className="mt-4">
                  {a.sources.map((s) => (
                    <li key={s.href}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-ink underline decoration-magenta/40 underline-offset-4 hover:decoration-magenta">
                        {s.label} <ArrowUpRight className="size-3.5" aria-hidden /><span className="sr-only">(opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {a.kind === "Guide" && (
              <p className="mt-12 rounded-[var(--radius-sm)] bg-tint-violet p-5 text-sm !text-ink/70">
                This guide is general educational information and is not project-specific advice. For guidance on your organisation or project,{" "}
                <Link href="/contact" className="font-medium text-magenta underline underline-offset-4">get in touch</Link>.
              </p>
            )}
          </div>

          <Link href={`/insights/${next.slug}`} className="group mx-auto mt-20 flex max-w-[68ch] items-center justify-between gap-6 border-y border-ink py-8">
            <span>
              <span className="eyebrow block text-muted">Next</span>
              <span className="mt-2 block font-display text-xl font-semibold tracking-tight group-hover:text-magenta">{next.title}</span>
            </span>
            <ArrowRight className="size-5 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>
      </article>
      <CtaBand title={<>Put the theory <span className="text-magenta-bright">into practice.</span></>} />
    </>
  );
}
