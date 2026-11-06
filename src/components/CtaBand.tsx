import type { ReactNode } from "react";
import { Button } from "./ui";
import { Interlock } from "./Geometry";
import { site } from "@/lib/site";

export function CtaBand({ title, button = "Start a conversation", text }: { title: ReactNode; button?: string; text?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink-2 text-white" aria-label="Get in touch">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,color-mix(in_srgb,var(--o7-magenta)_35%,transparent),transparent_55%),radial-gradient(ellipse_at_10%_100%,color-mix(in_srgb,var(--o7-violet)_50%,transparent),transparent_60%)]" aria-hidden />
      <div className="blueprint-dark absolute inset-0" aria-hidden />
      <Interlock className="pointer-events-none absolute top-1/2 -right-24 w-[420px] -translate-y-1/2 opacity-40 md:w-[560px]" />
      <div className="shell relative py-24 md:py-32">
        <h2 className="h1 max-w-4xl">{title}</h2>
        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-lg text-white/70">
            {text ?? "Tell us about your information management or digital construction challenge — we'd be happy to explore how we can help."}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="light">{button}</Button>
            <Button href={`mailto:${site.email}`} variant="outline-light" className="normal-case tracking-normal">Email Melanie</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
