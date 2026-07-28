"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { MaskLines } from "@/components/motion/reveal";
import { profile } from "@/content/profile";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Home hero — the story opener. First person and warm: who Sean is, where he
 * comes from, and the through-line from mechatronics to shipping real products.
 * Type-forward with a staged reveal and a scroll cue that invites the visitor
 * down into the wall of work.
 */
export function HomeHero() {
  const reduced = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: reduced ? { duration: 0 } : { duration: 0.7, delay, ease: EASE },
  });

  return (
    <section className="shell flex min-h-[92svh] flex-col justify-center pt-28 pb-16 md:pt-32">
      <motion.div {...rise(0)} className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2">
        <span className="inline-flex items-center gap-2.5 label">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal-green opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-signal-green" />
          </span>
          Available for select projects · 2026
        </span>
        <span className="hidden h-3 w-px bg-border-strong sm:block" />
        <span className="label text-faint">Harare, Zimbabwe</span>
      </motion.div>

      <MaskLines
        as="h1"
        trigger="mount"
        delay={0.12}
        lines={["I'm Sean — I turn how real", "businesses run into software", "people actually enjoy."]}
        className="max-w-[18ch] text-balance text-[clamp(2.3rem,6.2vw,4.6rem)] font-medium leading-[1.02] tracking-[-0.035em] text-foreground"
      />

      <motion.p
        {...rise(0.5)}
        className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted md:text-xl"
      >
        Trained as a mechatronics engineer, I learned to see everything as one
        system — sensors, logic, feedback. I carried that into software, and now
        I design and build the products behind logistics fleets, student
        housing, family care and commercial farms — caring as much about the
        failed payment and the offline path as the hero screen.
      </motion.p>

      <motion.p {...rise(0.6)} className="mt-6 font-mono text-sm text-faint">
        <span className="text-accent">{"// "}</span>
        {profile.hero.personalityLine}
      </motion.p>

      <motion.div {...rise(0.7)} className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#work"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform duration-300 ease-out-expo hover:-translate-y-0.5"
        >
          See the work
          <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
        </a>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-surface-muted"
        >
          Start a project
          <ArrowUpRight className="size-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#work"
        {...rise(0.95)}
        className="mt-16 inline-flex items-center gap-2 self-start font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-faint transition-colors hover:text-foreground"
        aria-label="Scroll to the work"
      >
        <motion.span
          animate={reduced ? undefined : { y: [0, 5, 0] }}
          transition={reduced ? undefined : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex size-7 items-center justify-center rounded-full border border-border"
        >
          <ArrowDown className="size-3.5" />
        </motion.span>
        The work — {profile.name.split(" ")[0]}&apos;s design &amp; product wall
      </motion.a>
    </section>
  );
}
