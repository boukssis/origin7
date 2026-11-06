"use client";

import { motion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
};

export function Reveal({ children, delay = 0, className, as = "div" }: Props) {
  const Tag = as;
  return (
    <Tag className={`hero-rise ${className ?? ""}`} style={{ animationDelay: `${delay}s` }}>
      {children}
    </Tag>
  );
}

export function DrawLine({ className = "", vertical }: { className?: string; vertical?: boolean }) {
  return (
    <motion.span
      aria-hidden
      className={`block bg-current ${vertical ? "w-px origin-top" : "h-px origin-left"} ${className}`}
      initial={false}
      whileInView={vertical ? { scaleY: 1 } : { scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      style={vertical ? { scaleY: 1 } : { scaleX: 1 }}
    />
  );
}
