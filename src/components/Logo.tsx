import Image from "next/image";
import Link from "next/link";

type Props = { variant?: "light" | "dark"; className?: string; priority?: boolean };

export function Logo({ variant = "light", className = "", priority }: Props) {
  return (
    <Link href="/" aria-label="Origin7 — home" className={`group inline-flex items-center gap-3 ${className}`}>
      <Image
        src={variant === "dark" ? "/brand/origin7-logo-transparent.png" : "/brand/origin7-logo.png"}
        alt="Origin7"
        width={540}
        height={91}
        priority={priority}
        className="h-9 w-auto sm:h-10 md:h-11"
      />
      <span
        className={`hidden border-l pl-3 font-mono text-[0.62rem] leading-tight tracking-[0.16em] uppercase lg:block ${
          variant === "dark" ? "border-white/20 text-white/60" : "border-line text-muted"
        }`}
      >
        BIM & Digital
        <br />
        Construction
      </span>
    </Link>
  );
}
