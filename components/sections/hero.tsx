"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/content/profile";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Home hero — restrained and precise. States who, what, where, the areas of
 * strength, and availability, then gives one primary route into the work and
 * one way to connect. No 3D, no glow — the type does the work.
 */
export function Hero() {
  const reduced = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: reduced ? { duration: 0 } : { duration: 0.7, delay, ease: EASE },
  });

  return (
    <section className="shell pt-36 pb-16 md:pt-44 md:pb-24">
      <div className="max-w-3xl">
        <motion.p {...rise(0)} className="mb-8 flex items-center gap-2.5 label">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal-green opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-signal-green" />
          </span>
          Available for select projects · 2026
        </motion.p>

        <motion.h1
          {...rise(0.06)}
          className="text-balance text-[clamp(2.15rem,5.4vw,3.75rem)] font-medium leading-[1.06] tracking-[-0.032em] text-foreground"
        >
          I design and engineer intelligent software.
        </motion.h1>

        <motion.p
          {...rise(0.14)}
          className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted"
        >
          Sean Muchenje — a software designer and engineer based in Harare,
          Zimbabwe. I work across product design, full-stack engineering and AI
          systems, taking complex ideas from first sketch to a shipped,
          resilient product.
        </motion.p>

        <motion.p {...rise(0.2)} className="mt-5 font-mono text-[0.8125rem] text-faint">
          <span className="text-accent">{"// "}</span>
          {profile.hero.personalityLine}
        </motion.p>

        <motion.div {...rise(0.28)} className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform duration-300 ease-out-expo hover:-translate-y-0.5"
          >
            Selected work
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-surface-muted"
          >
            Get in touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
