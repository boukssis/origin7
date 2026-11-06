import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Interlock, Linkedin } from "@/components/Geometry";
import { awards, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Talk to a BIM Consultant in Northern Ireland & Ireland",
  description: "Tell Origin7 about your information management or digital construction challenge. BIM and ISO 19650 consultancy across Northern Ireland and Ireland.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  const { service } = await searchParams;

  return (
    <section className="relative overflow-hidden pt-[var(--header-h)]">
      <div className="blueprint absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" aria-hidden />
      <div className="shell relative grid gap-14 pt-14 pb-24 md:pt-20 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="eyebrow flex items-center gap-3 text-magenta"><span className="h-px w-8 bg-current" aria-hidden />Contact</p>
          <h1 className="h1 mt-8 !text-[clamp(2.4rem,1.2rem+4vw,5rem)]">
            Let&apos;s make your next project <span className="text-gradient">smarter.</span>
          </h1>
          <p className="lead mt-8 text-muted">
            Tell us about your information management or digital construction challenge. We&apos;d be happy to explore how we can help.
          </p>

          <ul className="mt-12 border-t border-line">
            <li className="border-b border-line">
              <a href={`mailto:${site.email}`} className="group flex items-center gap-4 py-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-tint-magenta text-magenta transition-colors group-hover:bg-magenta group-hover:text-white"><Mail className="size-4" aria-hidden /></span>
                <span className="min-w-0">
                  <span className="eyebrow block text-muted">Email</span>
                  <span className="block font-medium break-all">{site.email}</span>
                </span>
              </a>
            </li>
            <li className="border-b border-line">
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 py-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-tint-violet text-violet transition-colors group-hover:bg-violet group-hover:text-white"><Linkedin className="size-4" aria-hidden /></span>
                <span>
                  <span className="eyebrow block text-muted">LinkedIn</span>
                  <span className="block font-medium">Origin7 Limited <span className="sr-only">(opens in a new tab)</span></span>
                </span>
              </a>
            </li>
            <li className="flex items-center gap-4 border-b border-line py-5">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-paper text-ink ring-1 ring-line"><MapPin className="size-4" aria-hidden /></span>
              <span>
                <span className="eyebrow block text-muted">Region</span>
                <span className="block font-medium">Northern Ireland & Ireland</span>
              </span>
            </li>
          </ul>

          <div className="relative mt-12 overflow-hidden rounded-[var(--radius-md)] bg-ink p-7 text-white">
            <Interlock className="absolute -right-16 -bottom-16 w-48 opacity-50" />
            <p className="eyebrow text-violet-soft">Award-winning · 2026</p>
            <ul className="relative mt-4 space-y-2 text-sm">
              {awards.map((a) => (
                <li key={a.category}><span className="font-semibold">{a.category}</span> <span className="text-white/55">— {a.programme}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="rounded-[var(--radius-md)] border border-line bg-white p-6 shadow-[0_40px_80px_-50px_rgb(21_19_34/0.35)] sm:p-10">
            <h2 className="font-display text-2xl font-semibold tracking-tight">Start a conversation</h2>
            <p className="mt-2 text-sm text-muted">All fields are required unless marked optional.</p>
            <div className="mt-8">
              <ContactForm defaultService={typeof service === "string" ? service : undefined} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
