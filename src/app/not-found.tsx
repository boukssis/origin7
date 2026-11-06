import { Button } from "@/components/ui";
import { Interlock } from "@/components/Geometry";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden pt-[var(--header-h)]">
      <div className="blueprint absolute inset-0" aria-hidden />
      <Interlock className="pointer-events-none absolute top-1/2 right-[-10%] w-[640px] -translate-y-1/2 opacity-50" />
      <div className="shell relative">
        <p className="eyebrow text-magenta">Error 404 · Element not found</p>
        <h1 className="h1 mt-6 max-w-3xl">This page isn&apos;t in the <span className="text-gradient">model.</span></h1>
        <p className="lead mt-6 max-w-lg text-muted">The page you&apos;re looking for may have moved or no longer exists.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="outline">Contact us</Button>
        </div>
      </div>
    </section>
  );
}
