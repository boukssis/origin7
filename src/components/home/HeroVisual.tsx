"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

const S = 46;
const CX = 300;
const CY = 300;
const H = 0.78;
const iso = (x: number, y: number, z = 0): [number, number] => [CX + (x - y) * 0.866 * S, CY + (x + y) * 0.5 * S - z * H * S];
const pt = (p: [number, number]) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`;
const rect = (x0: number, y0: number, x1: number, y1: number, z: number) =>
  `M${pt(iso(x0, y0, z))} L${pt(iso(x1, y0, z))} L${pt(iso(x1, y1, z))} L${pt(iso(x0, y1, z))} Z`;
const seg = (a: [number, number, number], b: [number, number, number]) => `M${pt(iso(...a))} L${pt(iso(...b))}`;

const W = 4;
const D = 3;
const FLOORS = 6;
const ease = [0.22, 1, 0.36, 1] as const;

const ground = [
  ...Array.from({ length: 11 }, (_, i) => seg([i - 3, -3, 0], [i - 3, 6, 0])),
  ...Array.from({ length: 10 }, (_, i) => seg([-3, i - 3, 0], [7, i - 3, 0])),
];

const columns: string[] = [];
for (let x = 0; x <= W; x++)
  for (let y = 0; y <= D; y++) if (x === 0 || y === 0 || x === W || y === D) columns.push(seg([x, y, 0], [x, y, FLOORS - 2]));

const slabs = Array.from({ length: FLOORS - 1 }, (_, i) => rect(0, 0, W, D, i));
const designSlabs = [rect(0, 0, W, D, FLOORS - 1), rect(0.5, 0.5, W - 0.5, D - 0.5, FLOORS - 0.4)];
const designCols = [0, W].flatMap((x) => [0, D].map((y) => seg([x, y, FLOORS - 2], [x, y, FLOORS - 1])));

const core = { x0: 1.4, y0: 1, x1: 2.4, y1: 2, z: FLOORS - 1 };
const corePaths = [
  rect(core.x0, core.y0, core.x1, core.y1, 0),
  rect(core.x0, core.y0, core.x1, core.y1, core.z),
  seg([core.x1, core.y0, 0], [core.x1, core.y0, core.z]),
  seg([core.x0, core.y1, 0], [core.x0, core.y1, core.z]),
  seg([core.x1, core.y1, 0], [core.x1, core.y1, core.z]),
];
const coreFace = `M${pt(iso(core.x1, core.y0, 0))} L${pt(iso(core.x1, core.y1, 0))} L${pt(iso(core.x1, core.y1, core.z))} L${pt(iso(core.x1, core.y0, core.z))} Z`;
const coreFace2 = `M${pt(iso(core.x0, core.y1, 0))} L${pt(iso(core.x1, core.y1, 0))} L${pt(iso(core.x1, core.y1, core.z))} L${pt(iso(core.x0, core.y1, core.z))} Z`;

type Node = { at: [number, number, number]; label: string; sub: string; side: "l" | "r"; dy: number };
const nodes: Node[] = [
  { at: [W, 0, FLOORS - 1], label: "CDE", sub: "ISO 19650", side: "r", dy: -22 },
  { at: [0, 0, 3], label: "MODEL", sub: "Federated", side: "l", dy: -16 },
  { at: [W, D, 1], label: "ASSET", sub: "COBie · AIR", side: "r", dy: 18 },
  { at: [0.2, 2.2, 0.4], label: "CAPTURE", sub: "Point cloud", side: "l", dy: 28 },
];

/** Fewer points on mobile-capable paths — still reads as a cloud. */
const cloud = Array.from({ length: 22 }, (_, i) => {
  const a = (i * 137.5 * Math.PI) / 180;
  const r = 0.25 + ((i * 7) % 11) / 13;
  return iso(-1.6 + Math.cos(a) * r, 4.4 + Math.sin(a) * r * 0.8, ((i * 3) % 5) * 0.08);
});

function Draw({
  d,
  delay,
  duration = 1.2,
  className,
  dashed,
  animate,
}: {
  d: string;
  delay: number;
  duration?: number;
  className?: string;
  dashed?: boolean;
  animate: boolean;
}) {
  if (!animate || dashed) {
    return <path d={d} className={className} strokeDasharray={dashed ? "4 5" : undefined} />;
  }
  return (
    <motion.path
      d={d}
      className={className}
      initial={{ pathLength: 0, opacity: 0.2 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ pathLength: { duration, delay, ease }, opacity: { duration: 0.4, delay } }}
    />
  );
}

function useLightMode(reduce: boolean | null) {
  const [light, setLight] = useState(true);
  useEffect(() => {
    if (reduce) {
      setLight(true);
      return;
    }
    const mq = window.matchMedia("(max-width: 1023px), (pointer: coarse), (prefers-reduced-motion: reduce)");
    const sync = () => setLight(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [reduce]);
  return light;
}

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const light = useLightMode(reduce);
  const [play, setPlay] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const far = { x: useTransform(sx, (v) => v * -8), y: useTransform(sy, (v) => v * -6) };
  const mid = { x: useTransform(sx, (v) => v * 6), y: useTransform(sy, (v) => v * 4) };
  const near = { x: useTransform(sx, (v) => v * 16), y: useTransform(sy, (v) => v * 10) };

  useEffect(() => {
    if (light || reduce) return;
    const id = window.requestAnimationFrame(() => setPlay(true));
    return () => window.cancelAnimationFrame(id);
  }, [light, reduce]);

  useEffect(() => {
    if (light || reduce || !window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: PointerEvent) => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      mx.set(((e.clientX - (r.left + r.width / 2)) / window.innerWidth) * 2);
      my.set(((e.clientY - (r.top + r.height / 2)) / window.innerHeight) * 2);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [light, reduce, mx, my]);

  const animate = play && !light;

  const groundLayer = ground.map((d, i) => (
    <Draw key={i} d={d} delay={0.1 + i * 0.025} duration={1.4} animate={animate} />
  ));

  const midLayer = (
    <>
      <g stroke="rgb(255 255 255 / 0.55)" strokeWidth="1">
        {slabs.map((d, i) => (
          <Draw key={i} d={d} delay={0.5 + i * 0.16} duration={1.1} animate={animate} />
        ))}
      </g>
      <g stroke="rgb(255 255 255 / 0.22)" strokeWidth="0.8">
        {columns.map((d, i) => (
          <Draw key={i} d={d} delay={0.9 + i * 0.03} duration={0.9} animate={animate} />
        ))}
      </g>
      {light ? (
        <>
          <path d={coreFace} fill="url(#hv-core)" />
          <path d={coreFace2} fill="url(#hv-core)" opacity={0.6} />
        </>
      ) : (
        <>
          <motion.path d={coreFace} fill="url(#hv-core)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1, duration: 1 }} />
          <motion.path d={coreFace2} fill="url(#hv-core)" initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 2.2, duration: 1 }} />
        </>
      )}
      <g stroke="url(#hv-brand)" strokeWidth="1.6">
        {corePaths.map((d, i) => (
          <Draw key={i} d={d} delay={1.8 + i * 0.08} duration={1} animate={animate} />
        ))}
      </g>
      <g stroke="var(--o7-magenta)" strokeWidth="1.1">
        {[...designSlabs, ...designCols].map((d, i) => (
          <Draw key={i} d={d} delay={2.3 + i * 0.1} dashed animate={animate} />
        ))}
      </g>
      <g fill="var(--o7-violet-bright)">
        {cloud.map(([x, y], i) =>
          light ? (
            <circle key={i} cx={x} cy={y} r={1.3} opacity={0.25 + (i % 4) * 0.15} />
          ) : (
            <motion.circle key={i} cx={x} cy={y} r={1.3} initial={{ opacity: 0 }} animate={{ opacity: 0.25 + (i % 4) * 0.15 }} transition={{ delay: 2 + i * 0.015 }} />
          ),
        )}
      </g>
    </>
  );

  const nearLayer = nodes.map((n, i) => {
    const [x, y] = iso(...n.at);
    const lx = n.side === "r" ? x + 36 : x - 36;
    const ly = y + n.dy;
    const d = 2.9 + i * 0.22;
    return (
      <g key={n.label}>
        <Draw d={`M${x} ${y} L${lx} ${ly} L${lx + (n.side === "r" ? 26 : -26)} ${ly}`} delay={d} duration={0.6} className="stroke-magenta" animate={animate} />
        <circle cx={x} cy={y} r={4.5} className="fill-ink stroke-magenta-bright" strokeWidth="1.5" />
        <circle cx={x} cy={y} r={1.8} className="fill-magenta-bright" />
        <g>
          <text x={n.side === "r" ? lx + 20 : lx - 20} y={ly - 2} textAnchor={n.side === "r" ? "start" : "end"} className="fill-white font-mono text-[10px] font-medium tracking-[0.12em]">
            {n.label}
          </text>
          <text x={n.side === "r" ? lx + 20 : lx - 20} y={ly + 12} textAnchor={n.side === "r" ? "start" : "end"} className="fill-white/50 font-mono text-[9px] tracking-[0.08em]">
            {n.sub}
          </text>
        </g>
      </g>
    );
  });

  return (
    <div ref={ref} className="relative aspect-[640/620] w-full select-none [contain:layout_paint]">
      <svg viewBox="-20 0 640 620" className="h-full w-full" role="img" aria-label="Illustrative isometric BIM model with connected information layers">
        <defs>
          <linearGradient id="hv-brand" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="var(--o7-violet-bright)" />
            <stop offset="1" stopColor="var(--o7-magenta)" />
          </linearGradient>
          <linearGradient id="hv-core" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="var(--o7-magenta)" stopOpacity="0.32" />
            <stop offset="1" stopColor="var(--o7-violet)" stopOpacity="0.04" />
          </linearGradient>
          <radialGradient id="hv-glow" cx="0.5" cy="0.55" r="0.5">
            <stop stopColor="var(--o7-violet)" stopOpacity="0.45" />
            <stop offset="1" stopColor="var(--o7-violet)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="300" cy="330" r="290" fill="url(#hv-glow)" className="max-lg:opacity-60" />

        {light ? (
          <g stroke="var(--o7-violet-soft)" strokeOpacity="0.28" strokeWidth="0.75" fill="none">
            {groundLayer}
          </g>
        ) : (
          <motion.g style={far} stroke="var(--o7-violet-soft)" strokeOpacity="0.28" strokeWidth="0.75" fill="none">
            {groundLayer}
          </motion.g>
        )}

        {light ? (
          <g fill="none" strokeLinecap="round">
            {midLayer}
          </g>
        ) : (
          <motion.g style={mid} fill="none" strokeLinecap="round">
            {midLayer}
          </motion.g>
        )}

        {light ? <g fill="none">{nearLayer}</g> : <motion.g style={near} fill="none">{nearLayer}</motion.g>}
      </svg>

      <div className="absolute bottom-[3%] left-[2%] hidden items-center gap-3 font-mono text-[0.62rem] tracking-[0.14em] text-white/45 uppercase sm:flex">
        <span className="flex items-center gap-1.5">
          <span className="h-px w-4 bg-white/50" />
          Published
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-px w-4 border-t border-dashed border-magenta-bright" />
          In design
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-magenta-bright" />
          Information node
        </span>
      </div>
    </div>
  );
}
