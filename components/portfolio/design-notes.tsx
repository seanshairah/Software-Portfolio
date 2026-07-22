"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Sean's design decisions as margin notes — small, first-person annotations that
 * reveal how he thinks. Rendered beside or beneath a project's interface.
 */
export function DesignNotes({
  notes,
  accent = "var(--accent)",
  className,
}: {
  notes: string[];
  accent?: string;
  className?: string;
}) {
  const reduced = useReducedMotion();
  if (!notes?.length) return null;

  return (
    <ul className={className}>
      {notes.map((note, i) => (
        <motion.li
          key={i}
          initial={reduced ? false : { opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-3 py-2"
        >
          <span
            aria-hidden
            className="mt-[0.45rem] h-px w-5 shrink-0"
            style={{ background: accent }}
          />
          <span className="text-[0.8125rem] leading-relaxed text-muted">
            <span
              aria-hidden
              className="mr-1.5 font-mono text-[0.625rem] uppercase tracking-[0.14em]"
              style={{ color: accent }}
            >
              note
            </span>
            {note}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}
