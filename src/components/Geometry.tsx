import { useId } from "react";

/** Decorative linework echoing the interlocking geometry of the Origin7 symbol. Not a logo substitute. */
export function Interlock({ className = "", strokeWidth = 1 }: { className?: string; strokeWidth?: number }) {
  const id = useId();
  return (
    <svg viewBox="0 0 400 400" fill="none" aria-hidden className={className}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--o7-violet-bright)" />
          <stop offset="1" stopColor="var(--o7-magenta)" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${id})`} strokeWidth={strokeWidth} vectorEffect="non-scaling-stroke">
        <path d="M200 20 L380 200 L200 380 L20 200 Z" />
        <path d="M200 70 L330 200 L200 330 L70 200 Z" />
        <path d="M200 20 L200 70 M380 200 L330 200 M200 380 L200 330 M20 200 L70 200" />
        <path d="M200 120 L280 200 L200 280 L120 200 Z" />
        <path d="M200 70 L120 150 M330 200 L250 120 M200 330 L280 250 M70 200 L150 280" />
      </g>
    </svg>
  );
}

export function Linkedin({ className = "" }: { className?: string; "aria-hidden"?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.83v1.5h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13v5.43h-4v-4.82c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.9h-4v-11Z" />
    </svg>
  );
}

export function GridMarks({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden className={className} fill="none" stroke="currentColor">
      <path d="M0 60 H120 M60 0 V120" strokeWidth="0.75" />
      <circle cx="60" cy="60" r="18" strokeWidth="0.75" />
      <circle cx="60" cy="60" r="2" fill="currentColor" />
    </svg>
  );
}
