import { Button } from "@/components/ui";

const lines = [
  { text: "Building a", cls: "text-white" },
  { text: "Smarter", cls: "text-magenta-bright pr-[0.04em]" },
  { text: "Future.", cls: "text-white" },
];

export function HeroIntro() {
  return (
    <div>
      <p className="hero-rise eyebrow flex flex-wrap items-center gap-3 text-magenta-bright" style={{ animationDelay: "0ms" }}>
        <span className="h-px w-8 shrink-0 bg-current" aria-hidden />
        <span className="min-w-0">
          <span className="sm:hidden">Award-winning BIM consultancy</span>
          <span className="hidden sm:inline">Award-winning digital construction consultancy</span>
        </span>
      </p>

      <h1 className="display mt-7 text-[clamp(3.1rem,1.4rem+7.2vw,8rem)] lg:text-[clamp(4rem,0.5rem+6.6vw,8rem)]">
        {lines.map((l, i) => (
          <span key={l.text} className="block overflow-hidden pb-[0.06em]">
            <span className={`hero-line block ${l.cls}`} style={{ animationDelay: `${120 + i * 110}ms` }}>
              {l.text}
            </span>
            {i < lines.length - 1 && " "}
          </span>
        ))}
      </h1>

      <div className="hero-rise" style={{ animationDelay: "480ms" }}>
        <p className="lead mt-8 max-w-xl text-white/70">
          Origin7 helps organisations transform how they plan, manage and deliver construction projects through intelligent BIM,
          information management and practical digital solutions.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/services" variant="light">
            Explore our expertise
          </Button>
          <Button href="/contact" variant="outline-light">
            Let&apos;s talk
          </Button>
        </div>
        <p className="mt-9 font-mono text-[0.7rem] tracking-[0.14em] text-white/55 uppercase">
          Strategy <span className="text-magenta-bright">/</span> Information Management <span className="text-magenta-bright">/</span> Digital
          Delivery <span className="text-magenta-bright">/</span> Training
        </p>
        <a
          href="https://buildinginnovationawards.co.uk/2026-winners/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 py-1.5 pr-4 pl-1.5 text-xs text-white/90 transition-colors hover:border-magenta-bright/50 hover:bg-white/10"
        >
          <span className="rounded-full bg-magenta px-2.5 py-1 font-mono text-[0.62rem] tracking-[0.12em] text-white uppercase">Winner</span>
          <span className="font-medium">2026 · Professional Services Partner of the Year</span>
          <span className="sr-only">(Building Innovation Awards, opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
}
