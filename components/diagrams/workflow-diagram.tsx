"use client";

import { motion, useReducedMotion } from "framer-motion";
import { pad } from "@/lib/utils";

/**
 * Workflow map — renders a project's workflow as a connected sequence of
 * stages. Horizontal track on desktop, vertical on mobile. The connecting line
 * is the System Line in its "curved / process" form.
 */
export function WorkflowDiagram({
  steps,
  accent = "var(--accent)",
}: {
  steps: string[];
  accent?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <div className="w-full">
      {/* Desktop */}
      <ol className="hidden md:grid" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
        {steps.map((step, i) => (
          <li key={i} className="relative flex flex-col items-center px-2 text-center">
            {/* connector */}
            {i < steps.length - 1 && (
              <span className="absolute left-1/2 top-3 h-px w-full bg-border" aria-hidden />
            )}
            {i < steps.length - 1 && !reduced && (
              <motion.span
                className="absolute left-1/2 top-3 h-px w-full origin-left"
                style={{ background: accent }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                aria-hidden
              />
            )}
            <motion.span
              className="relative z-10 flex size-6 items-center justify-center rounded-full border bg-surface-raised font-mono text-[0.625rem]"
              style={{ borderColor: accent, color: accent }}
              initial={reduced ? false : { scale: 0.4, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
            >
              {pad(i + 1)}
            </motion.span>
            <span className="mt-3 text-[0.75rem] font-medium leading-tight text-foreground">
              {step}
            </span>
          </li>
        ))}
      </ol>

      {/* Mobile */}
      <ol className="space-y-0 md:hidden">
        {steps.map((step, i) => (
          <li key={i} className="relative flex gap-3 pb-4 last:pb-0">
            <div className="flex flex-col items-center">
              <span
                className="flex size-6 shrink-0 items-center justify-center rounded-full border bg-surface-raised font-mono text-[0.625rem]"
                style={{ borderColor: accent, color: accent }}
              >
                {pad(i + 1)}
              </span>
              {i < steps.length - 1 && <span className="mt-1 w-px flex-1 bg-border" aria-hidden />}
            </div>
            <span className="pt-0.5 text-sm font-medium text-foreground">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
