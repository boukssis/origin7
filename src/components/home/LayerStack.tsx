"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

const layers = [
  { code: "L5", name: "Asset information", note: "AIR · COBie · O&M" },
  { code: "L4", name: "Common Data Environment", note: "WIP · Shared · Published" },
  { code: "L3", name: "Federated model", note: "Coordination · Clash review" },
  { code: "L2", name: "Information requirements", note: "OIR · PIR · EIR" },
  { code: "L1", name: "Strategy & standards", note: "ISO 19650 · BEP" },
];

const plate = (w: number, d: number) => {
  const p = (x: number, y: number) => `${(x - y) * 0.866} ${(x + y) * 0.5}`;
  return `M${p(0, 0)} L${p(w, 0)} L${p(w, d)} L${p(0, d)} Z`;
};

function Layer({ i, progress }: { i: number; progress: MotionValue<number> }) {
  const spread = useTransform(progress, [0, 1], [i * 22, i * 58]);
  const y = useTransform(spread, (v) => 360 - v - 40);
  const d = plate(220, 170);
  return (
    <motion.g style={{ y, x: 300 }}>
      <path d={d} transform="translate(-24 -84)" fill={i === 2 ? "url(#ls-fill)" : "rgb(255 255 255 / 0.03)"} stroke={i === 2 ? "url(#ls-stroke)" : "rgb(255 255 255 / 0.35)"} strokeWidth={i === 2 ? 1.5 : 1} />
      {i === 2 &&
        [40, 90, 140].map((x) => (
          <path key={x} d={`M${(x - 0) * 0.866 - 24} ${x * 0.5 - 84} l${-170 * 0.866} ${170 * 0.5}`} stroke="rgb(255 255 255 / 0.2)" />
        ))}
      {i === 0 &&
        [60, 120].map((y0) => (
          <path key={y0} d={`M${-y0 * 0.866 - 24} ${y0 * 0.5 - 84} l${220 * 0.866} ${220 * 0.5}`} stroke="rgb(255 255 255 / 0.18)" strokeDasharray="3 4" />
        ))}
    </motion.g>
  );
}

export function LayerStack() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const ordered = [...layers].reverse();

  return (
    <div ref={ref} className="grid items-center gap-10 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <svg viewBox="40 0 520 440" className="w-full" role="img" aria-label="Exploded diagram of five layers of construction information">
          <defs>
            <linearGradient id="ls-fill" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="var(--o7-violet-bright)" stopOpacity="0.45" />
              <stop offset="1" stopColor="var(--o7-magenta)" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id="ls-stroke" x1="0" y1="0" x2="1" y2="0">
              <stop stopColor="var(--o7-violet-soft)" />
              <stop offset="1" stopColor="var(--o7-magenta-bright)" />
            </linearGradient>
          </defs>
          {ordered.map((_, i) => (
            <Layer key={i} i={i} progress={scrollYProgress} />
          ))}
        </svg>
      </div>
      <ol className="space-y-0 lg:col-span-5">
        {layers.map((l, i) => (
          <motion.li
            key={l.code}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className={`flex items-baseline gap-5 border-t border-white/10 py-5 ${l.code === "L3" ? "text-white" : "text-white/75"}`}
          >
            <span className="font-mono text-xs text-magenta-bright">{l.code}</span>
            <span className="flex-1">
              <span className="block font-display text-xl font-semibold tracking-tight">{l.name}</span>
              <span className="mt-1 block font-mono text-[0.7rem] tracking-[0.12em] text-white/50 uppercase">{l.note}</span>
            </span>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
