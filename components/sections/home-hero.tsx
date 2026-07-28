"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { MaskLines } from "@/components/motion/reveal";
import { profile } from "@/content/profile";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Live Harare time — a small, human "he's a real person, in a real place" cue.
 *  Rendered only after mount to avoid an SSR/client mismatch. */
function HarareTime() {
  const [t, setT] = useState<string>("");
  useEffect(() => {
    const tick = () =>
      setT(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Africa/Harare",
          hour: "2-digit",
          minute: "2-digit",
        }).format(new Date()),
      );
    tick();
    const id = setInterval(tick, 20000);
    return () => clearInterval(id);
  }, []);
  if (!t) return null;
  return (
    <>
      <span className="text-faint/60">·</span>
      <span className="tabular">{t} local</span>
    </>
  );
}

/**
 * Home hero — the story opener, tightened to match the image-forward vibe:
 * personal and punchy, it states who Sean is and the through-line, then hands
 * off to the wall of work right below. Type-forward with a staged reveal.
 */
export function HomeHero() {
  const reduced = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: reduced ? { duration: 0 } : { duration: 0.65, delay, ease: EASE },
  });

  return (
    <section className="shell flex min-h-[82svh] flex-col justify-center pt-28 pb-14 md:min-h-[84svh] md:pt-32">
      <motion.div {...rise(0)} className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 label">
        <span className="inline-flex items-center gap-2">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal-green opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-signal-green" />
          </span>
          Available · 2026
        </span>
        <span className="hidden h-3 w-px bg-border-strong sm:block" />
        <span className="inline-flex items-center gap-2 text-faint">
          Harare, Zimbabwe <HarareTime />
        </span>
      </motion.div>

      <MaskLines
        as="h1"
        trigger="mount"
        delay={0.1}
        lines={["I'm Sean — I build the", "software real businesses", "run on."]}
        className="text-balance text-[clamp(2.4rem,6.6vw,5rem)] font-medium leading-[0.98] tracking-[-0.04em] text-foreground"
      />

      <motion.p
        {...rise(0.42)}
        className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted"
      >
        A designer and engineer in Harare. I trained in mechatronics, learned to
        think in whole systems, and now design and build the products real
        businesses run on — down to the failed payment and the offline path.
      </motion.p>

      <motion.p {...rise(0.52)} className="mt-5 font-mono text-[0.8125rem] text-faint">
        <span className="text-accent">{"// "}</span>
        {profile.hero.personalityLine}
      </motion.p>

      <motion.div {...rise(0.62)} className="mt-9 flex flex-wrap items-center gap-3">
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

      <motion.a
        href="#work"
        {...rise(0.82)}
        className="mt-14 inline-flex items-center gap-2.5 self-start font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-faint transition-colors hover:text-foreground"
        aria-label="Scroll to the work"
      >
        <motion.span
          animate={reduced ? undefined : { y: [0, 5, 0] }}
          transition={reduced ? undefined : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex size-7 items-center justify-center rounded-full border border-border"
        >
          <ArrowDown className="size-3.5" />
        </motion.span>
        The work — a wall of design, brand &amp; product
      </motion.a>
    </section>
  );
}
