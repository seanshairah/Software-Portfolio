"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface Screen {
  label: string;
  node: React.ReactNode;
}

/**
 * Interactive gallery of real product screens. Tabs swap the featured screen
 * with a soft crossfade; the active tab has an animated pill. Mobile-friendly
 * (tabs scroll, one screen at a time) and reduced-motion aware.
 */
export function ScreenSwitcher({
  screens,
  accent = "var(--accent)",
}: {
  screens: Screen[];
  accent?: string;
}) {
  const [i, setI] = useState(0);
  const reduced = useReducedMotion();
  if (!screens?.length) return null;
  const single = screens.length === 1;

  return (
    <div>
      {!single && (
        <div
          className="mb-4 flex flex-nowrap gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none] sm:flex-wrap"
          role="tablist"
          aria-label="Product screens"
        >
          {screens.map((s, idx) => (
            <button
              key={s.label}
              role="tab"
              aria-selected={i === idx}
              onClick={() => setI(idx)}
              data-cursor="View"
              className={cn(
                "relative shrink-0 rounded-full px-3.5 py-1.5 text-[0.8125rem] font-medium transition-colors",
                i === idx ? "text-foreground" : "text-muted hover:text-foreground",
              )}
            >
              {i === idx && (
                <motion.span
                  layoutId="screen-tab"
                  className="absolute inset-0 -z-10 rounded-full"
                  style={{ background: `${accent}1f`, border: `1px solid ${accent}55` }}
                  transition={
                    reduced
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 380, damping: 32 }
                  }
                />
              )}
              {s.label}
            </button>
          ))}
        </div>
      )}

      <div className="relative">
        <div
          className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] opacity-40 blur-3xl"
          style={{ background: `radial-gradient(50% 50% at 50% 30%, ${accent}22, transparent)` }}
          aria-hidden
        />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={i}
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={reduced ? { duration: 0 } : { duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {screens[i].node}
          </motion.div>
        </AnimatePresence>
      </div>

      {!single && (
        <div className="mt-3 flex items-center gap-1.5" aria-hidden>
          {screens.map((s, idx) => (
            <span
              key={s.label}
              className="h-1 rounded-full transition-all duration-300"
              style={{
                width: i === idx ? 22 : 6,
                background: i === idx ? accent : "var(--border-strong)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
