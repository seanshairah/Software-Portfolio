"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "@/content/profile";
import { ButtonLink } from "@/components/ui/button";
import { StatusDot } from "@/components/ui/badge";
import { MaskLines } from "@/components/motion/reveal";
import { WebGLFallback } from "@/components/three/webgl-fallback";
import { detectTier, type PerfTier } from "@/lib/performance";

const ProductEngine = dynamic(
  () => import("@/components/three/product-engine"),
  { ssr: false, loading: () => <WebGLFallback animate /> },
);

function EngineViewport({ active }: { active: boolean }) {
  const [tier, setTier] = useState<PerfTier | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    setTier(detectTier());
  }, []);

  // Before detection, and on the lightweight tier, show the static system.
  // Never animate the SVG fallback for reduced-motion visitors.
  if (tier === null) return <WebGLFallback />;
  if (tier === "lightweight") return <WebGLFallback animate={!reduced} />;
  return <ProductEngine tier={tier} active={active} />;
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(true);
  const reduced = useReducedMotion();

  // Pause the render loop when the hero leaves the viewport or the tab hides.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let visible = true;
    let onScreen = true;
    const update = () => setActive(visible && onScreen);

    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        update();
      },
      { threshold: 0.05 },
    );
    io.observe(el);

    const onVis = () => {
      visible = document.visibilityState === "visible";
      update();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-world="dark"
      data-nav-dark
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-background pt-28 pb-16"
    >
      {/* Ambient grid + glow */}
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -right-40 top-1/4 size-[42rem] rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--glow), transparent 70%)" }}
        aria-hidden
      />

      {/* Desktop engine — right-weighted background */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[60%] lg:block" aria-hidden>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/40 to-transparent" />
        <EngineViewport active={active} />
      </div>

      <div className="shell relative z-20 w-full">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 xl:col-span-6">
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-7 flex flex-wrap items-center gap-4"
            >
              <span className="label text-faint">
                {profile.location} · {profile.timezone}
              </span>
              <span className="h-3 w-px bg-border-strong" />
              <StatusDot label={profile.hero.availability.label} />
            </motion.div>

            <MaskLines
              as="h1"
              trigger="mount"
              delay={0.15}
              lines={["I design the systems", "behind products people", "actually enjoy using."]}
              className="text-balance text-[clamp(2.5rem,6.6vw,5.25rem)] font-medium leading-[0.96] tracking-[-0.035em] text-foreground"
            />

            <motion.p
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted"
            >
              {profile.hero.supporting}
            </motion.p>

            <motion.p
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.68 }}
              className="mt-5 flex items-center gap-2 font-mono text-xs text-faint"
            >
              <span aria-hidden className="text-accent">
                {"//"}
              </span>
              {profile.hero.personalityLine}
            </motion.p>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.78, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <ButtonLink href={profile.hero.primaryCta.href} size="lg" withArrow data-cursor="Work">
                {profile.hero.primaryCta.label}
              </ButtonLink>
              <ButtonLink
                href={profile.hero.secondaryCta.href}
                variant="secondary"
                size="lg"
              >
                {profile.hero.secondaryCta.label}
              </ButtonLink>
            </motion.div>

            {/* Mobile engine viewport */}
            <div className="mt-12 lg:hidden">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-surface/40">
                <div className="absolute left-3 top-3 z-10 label text-faint">
                  Product Engine
                </div>
                <EngineViewport active={active} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corner technical labels */}
      <div className="shell pointer-events-none absolute inset-x-0 bottom-6 z-20 hidden items-end justify-between lg:flex">
        <div className="flex items-center gap-3">
          <ArrowDown className="size-4 animate-bounce text-faint [animation-duration:2s]" />
          <span className="label text-faint">Scroll to assemble</span>
        </div>
        <div className="text-right">
          <p className="label text-faint">SYS.01 / PRODUCT ENGINE</p>
          <p className="label mt-1 text-faint/70">17.83°S · 31.05°E · HARARE</p>
        </div>
      </div>

      {/* Screen-reader description of the interactive scene */}
      <p className="sr-only">
        An interactive visualisation titled the Product Engine shows a digital
        system assembling from three layers — interface, logic and data, and
        infrastructure — with user, database, API, AI, payment and automation
        nodes connected by pathways along which data signals travel.
      </p>
    </section>
  );
}
