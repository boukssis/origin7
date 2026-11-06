import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { Interlock, Linkedin } from "./Geometry";
import { awards, nav, site } from "@/lib/site";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="blueprint-dark absolute inset-0 opacity-60" aria-hidden />
      <Interlock className="pointer-events-none absolute -right-32 -bottom-40 w-[560px] opacity-30 md:w-[760px]" />
      <div className="shell relative pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo variant="dark" />
            <p className="mt-10 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[0.95] font-semibold tracking-tight uppercase">
              Let&apos;s make BIM
              <br />
              <span className="text-gradient brightness-150">business as usual.</span>
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-dark">
              {site.legalName} — BIM, information management and digital construction consultancy for {site.region}.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h2 className="eyebrow text-white/45">Explore</h2>
              <ul className="mt-5 space-y-3 text-sm">
                {nav.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="text-white/80 transition-colors hover:text-magenta-bright">
                      {n.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/contact" className="text-white/80 transition-colors hover:text-magenta-bright">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="eyebrow text-white/45">Services</h2>
              <ul className="mt-5 space-y-3 text-sm">
                {services.map((s) => (
                  <li key={s.id}>
                    <Link href={`/services#${s.id}`} className="text-white/80 transition-colors hover:text-magenta-bright">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h2 className="eyebrow text-white/45">Connect</h2>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 break-all text-white/80 hover:text-magenta-bright">
                    <Mail className="size-4 shrink-0" aria-hidden /> {site.email}
                  </a>
                </li>
                <li>
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-magenta-bright">
                    <Linkedin className="size-4" aria-hidden /> LinkedIn <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
                <li>
                  <a href={site.academy} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-magenta-bright">
                    Digital Academy <ArrowUpRight className="size-3.5" aria-hidden /> <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              </ul>
              <h2 className="eyebrow mt-10 text-white/45">Recognition</h2>
              <ul className="mt-5 space-y-3 text-xs leading-relaxed text-white/65">
                {awards.map((a) => (
                  <li key={a.category}>
                    {a.year} {a.result} · {a.category}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 {site.legalName}. {site.location} · Serving {site.region}.
          </p>
          <p className="max-w-xl md:text-right">
            Design concept prepared for presentation. Not an official Origin7 publication.
          </p>
        </div>
      </div>
    </footer>
  );
}
