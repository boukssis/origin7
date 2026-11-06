import type { Industry } from "@/lib/industries";

const iso = (x: number, y: number, z = 0) => `${200 + (x - y) * 26} ${150 + (x + y) * 15 - z * 22}`;
const box = (x: number, y: number, w: number, d: number, h: number) => [
  `M${iso(x, y, h)} L${iso(x + w, y, h)} L${iso(x + w, y + d, h)} L${iso(x, y + d, h)} Z`,
  `M${iso(x + w, y, 0)} L${iso(x + w, y, h)} M${iso(x, y + d, 0)} L${iso(x, y + d, h)} M${iso(x + w, y + d, 0)} L${iso(x + w, y + d, h)}`,
  `M${iso(x + w, y, 0)} L${iso(x + w, y + d, 0)} L${iso(x, y + d, 0)}`,
];

function Art({ kind }: { kind: Industry["visual"] }) {
  switch (kind) {
    case "building":
      return (
        <>
          {[0, 1, 2, 3, 4].map((z) => (
            <path key={z} d={`M${iso(-1, -1, z)} L${iso(2, -1, z)} L${iso(2, 2, z)} L${iso(-1, 2, z)} Z`} className="stroke-ink/40" />
          ))}
          {[-1, 2].flatMap((x) => [-1, 2].map((y) => <path key={`${x}${y}`} d={`M${iso(x, y, 0)} L${iso(x, y, 4)}`} className="stroke-ink/30" />))}
          {box(0, 0, 1, 1, 5.4).map((d, i) => <path key={i} d={d} className="stroke-magenta" strokeWidth={1.4} />)}
        </>
      );
    case "infrastructure":
      return (
        <>
          <path d={`M${iso(-5, 2, 0)} C ${iso(-1, 2, 0)} ${iso(0, -1, 0)} ${iso(5, -1, 0)}`} className="stroke-ink/40" strokeWidth={14} strokeLinecap="round" opacity={0.15} />
          <path d={`M${iso(-5, 2, 0)} C ${iso(-1, 2, 0)} ${iso(0, -1, 0)} ${iso(5, -1, 0)}`} className="stroke-magenta" strokeDasharray="6 6" />
          {[-3, -1, 1, 3].map((x) => (
            <path key={x} d={`M${iso(x, 0.5 - x * 0.3, 0)} L${iso(x, 0.5 - x * 0.3, 2.4)}`} className="stroke-ink/40" />
          ))}
          <path d={`M${iso(-4, 1.7, 2.4)} L${iso(4, -0.7, 2.4)}`} className="stroke-ink/60" strokeWidth={1.4} />
          {[-4, -2, 0, 2, 4].map((x) => <circle key={x} cx={iso(x, 1.2 - x * 0.3, 0).split(" ")[0]} cy={iso(x, 1.2 - x * 0.3, 0).split(" ")[1]} r={3} className="fill-violet-bright" />)}
        </>
      );
    case "asset":
      return (
        <>
          {box(-1, -1, 3, 2, 2).map((d, i) => <path key={i} d={d} className="stroke-ink/40" />)}
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <path d={`M${iso(-1 + i * 1.5, 0, 2)} L${iso(-1 + i * 1.5, 0, 4.5 + i * 0.4)}`} className="stroke-magenta" strokeDasharray="3 4" />
              <rect x={Number(iso(-1 + i * 1.5, 0, 4.5 + i * 0.4).split(" ")[0]) - 26} y={Number(iso(-1 + i * 1.5, 0, 4.5 + i * 0.4).split(" ")[1]) - 16} width={52} height={16} rx={2} className="fill-white stroke-magenta" />
            </g>
          ))}
        </>
      );
    case "public":
      return (
        <>
          {box(-2, -1, 4, 2.4, 1.6).map((d, i) => <path key={i} d={d} className="stroke-ink/40" />)}
          {[-1.4, -0.4, 0.6, 1.6].map((x) => <path key={x} d={`M${iso(x, -1, 0)} L${iso(x, -1, 1.6)}`} className="stroke-ink/30" />)}
          <path d={`M${iso(-2.2, -1.2, 1.6)} L${iso(0, 0.2, 3.2)} L${iso(2.2, 1.6, 1.6)}`} className="stroke-magenta" strokeWidth={1.4} />
        </>
      );
    case "transform":
      return (
        <>
          {[0, 1, 2, 3].map((i) => (
            <path key={i} d={`M${iso(-2 + i * 0.4, -2 + i * 0.4, i * 1.1)} L${iso(2 - i * 0.4, -2 + i * 0.4, i * 1.1)} L${iso(2 - i * 0.4, 2 - i * 0.4, i * 1.1)} L${iso(-2 + i * 0.4, 2 - i * 0.4, i * 1.1)} Z`} className={i === 3 ? "stroke-magenta" : "stroke-ink/35"} strokeWidth={i === 3 ? 1.5 : 1} />
          ))}
          <path d={`M${iso(-2, 2, 0)} L${iso(-0.8, 0.8, 3.3)}`} className="stroke-violet-bright" strokeDasharray="3 4" />
          <path d={`M${iso(2, 2, 0)} L${iso(0.8, 0.8, 3.3)}`} className="stroke-violet-bright" strokeDasharray="3 4" />
        </>
      );
  }
}

export function IndustryVisual({ kind, label }: { kind: Industry["visual"]; label: string }) {
  return (
    <figure className="group relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)] border border-line bg-white">
      <div className="blueprint absolute inset-0" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,var(--o7-tint-violet),transparent_65%)]" aria-hidden />
      <svg viewBox="0 0 400 300" fill="none" className="relative h-full w-full transition-transform duration-[1.2s] ease-[var(--ease-out)] group-hover:scale-[1.04]" role="img" aria-label={`Illustrative graphic: ${label}`}>
        <Art kind={kind} />
      </svg>
      <figcaption className="absolute bottom-4 left-4 font-mono text-[0.6rem] tracking-[0.14em] text-muted uppercase">Illustrative graphic</figcaption>
    </figure>
  );
}
