"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export interface WorkItem {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  role: string;
  industry: string;
  year: string;
  status: string;
  accent: string;
  preview: React.ReactNode;
}

const EASE = [0.16, 1, 0.3, 1] as const;

/** Editorial work index with a sticky interface preview that tracks the hovered
 *  (or focused) project. Mobile drops the preview for a clean, tappable list. */
export function SelectedWorkView({ items }: { items: WorkItem[] }) {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
      <ol className="lg:col-span-7">
        {items.map((p, i) => (
          <li key={p.slug}>
            <Link
              href={`/work/${p.slug}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group grid grid-cols-[1.75rem_1fr_auto] items-start gap-3 border-t border-border py-6 first:border-t-0 sm:gap-5"
            >
              <span className="pt-1.5 font-mono text-xs text-faint tabular">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                  <h3 className="text-xl font-medium tracking-[-0.02em] text-foreground transition-colors duration-300 group-hover:text-accent sm:text-[1.55rem]">
                    {p.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2 py-0.5 font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-faint">
                    <span className="size-1.5 rounded-full" style={{ background: p.accent }} />
                    {p.status}
                  </span>
                </div>
                <p className="mt-1.5 max-w-md text-pretty text-sm leading-relaxed text-muted">
                  {p.tagline}
                </p>
                <p className="mt-2.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-faint">
                  {p.year} · {p.category}
                </p>
              </div>
              <ArrowUpRight className="mt-1.5 size-4 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </Link>
          </li>
        ))}
      </ol>

      {/* Sticky preview — desktop only */}
      <div className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={reduced ? { duration: 0 } : { duration: 0.35, ease: EASE }}
            >
              <Link
                href={`/work/${items[active].slug}`}
                className="block overflow-hidden rounded-xl border border-border bg-surface shadow-soft transition-transform duration-500 ease-out-expo hover:-translate-y-1"
                aria-label={`Open ${items[active].title} case study`}
              >
                {items[active].preview}
              </Link>
              <div className="mt-4 flex items-center justify-between gap-4 border-t border-border pt-3">
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-faint">
                  {items[active].industry}
                </p>
                <p className="truncate text-xs text-muted">{items[active].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
