"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * The System Line — the site's single visual signature. A thin path that draws
 * itself into view and carries a travelling signal, representing the journey
 * from an idea to a working product. It changes shape by context.
 */
export function SystemLine({
  variant = "divider",
  className,
  animate = true,
  signal = true,
}: {
  variant?: "divider" | "vertical" | "flow";
  className?: string;
  animate?: boolean;
  signal?: boolean;
}) {
  const reduced = useReducedMotion();
  const doAnimate = animate && !reduced;

  if (variant === "vertical") {
    return (
      <svg
        aria-hidden
        className={cn("h-full w-px overflow-visible", className)}
        preserveAspectRatio="none"
        viewBox="0 0 2 100"
      >
        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2="100"
          stroke="var(--border-strong)"
          strokeWidth="1"
          initial={doAnimate ? { pathLength: 0 } : false}
          whileInView={doAnimate ? { pathLength: 1 } : undefined}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1.1, ease: EASE }}
        />
      </svg>
    );
  }

  if (variant === "flow") {
    return (
      <svg
        aria-hidden
        className={cn("w-full overflow-visible", className)}
        viewBox="0 0 400 80"
        fill="none"
      >
        <motion.path
          d="M0 40 C 90 40, 110 8, 200 8 S 310 72, 400 72"
          stroke="var(--accent)"
          strokeWidth="1.25"
          strokeLinecap="round"
          initial={doAnimate ? { pathLength: 0, opacity: 0 } : false}
          whileInView={doAnimate ? { pathLength: 1, opacity: 1 } : undefined}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1.4, ease: EASE }}
        />
      </svg>
    );
  }

  // divider (default): horizontal line + travelling pulse
  return (
    <div className={cn("relative h-px w-full", className)}>
      <div className="absolute inset-0 bg-border" />
      <motion.div
        className="absolute inset-y-0 left-0 bg-accent"
        initial={doAnimate ? { scaleX: 0 } : { scaleX: 1 }}
        whileInView={doAnimate ? { scaleX: 1 } : undefined}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 1.2, ease: EASE }}
        style={{ transformOrigin: "left", width: "100%" }}
      />
      {signal && !reduced && (
        <motion.span
          className="absolute top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_8px_2px_var(--glow)]"
          initial={{ left: "0%" }}
          animate={{ left: ["0%", "100%"] }}
          transition={{
            duration: 4.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1.5,
          }}
        />
      )}
    </div>
  );
}
