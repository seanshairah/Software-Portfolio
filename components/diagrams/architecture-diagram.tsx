"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { pad, cn } from "@/lib/utils";

/**
 * Interactive architecture map — the System Line as a networked spine linking
 * each layer of the system. Hovering (or focusing) a layer inspects it: the
 * node grows, the row lifts, and the rest recede. Fully usable without hover.
 */
export function ArchitectureDiagram({
  items,
  accent = "var(--accent)",
}: {
  items: string[];
  accent?: string;
}) {
  const reduced = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="relative" onMouseLeave={() => setActive(null)}>
      {/* spine */}
      <span
        className="absolute left-[0.6875rem] top-2 bottom-2 w-px"
        style={{ background: "var(--border)" }}
        aria-hidden
      />
      <ul className="space-y-2.5">
        {items.map((item, i) => {
          const isActive = active === i;
          const dimmed = active !== null && !isActive;
          return (
            <motion.li
              key={i}
              initial={reduced ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              tabIndex={0}
              data-cursor="Inspect"
              className={cn(
                "relative flex items-start gap-4 rounded-xl border bg-surface p-4 pl-5 outline-none transition-all duration-300",
                isActive
                  ? "-translate-y-0.5 border-transparent shadow-soft"
                  : "border-border",
                dimmed && "opacity-50",
              )}
              style={isActive ? { borderColor: accent } : undefined}
            >
              <span
                className="absolute left-[0.6875rem] top-6 -translate-x-1/2 rounded-full transition-all duration-300"
                style={{
                  background: accent,
                  width: isActive ? 12 : 8,
                  height: isActive ? 12 : 8,
                  boxShadow: isActive ? `0 0 0 4px ${accent}22` : "none",
                }}
                aria-hidden
              />
              <span className="ml-4 font-mono text-[0.625rem] text-faint">
                {pad(i + 1)}
              </span>
              <span className="text-sm leading-relaxed text-foreground">{item}</span>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
