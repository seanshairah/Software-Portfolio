import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { ContactCta } from "@/components/sections/contact-cta";
import { LabEngine } from "@/components/lab/lab-engine";
import {
  MagneticButton,
  SpringDrag,
  Scramble,
  SignalGraph,
} from "@/components/lab/interactive";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "A working laboratory — interaction, motion and rendering studies where the language used across Sean Muchenje's work gets worked out.",
  alternates: { canonical: "/playground" },
};

const liveTiles = [
  {
    name: "Magnetic controls",
    note: "Pointer-reactive controls that lean in within a field, then spring back.",
    tech: ["Framer Motion", "Pointer"],
    demo: <MagneticButton />,
  },
  {
    name: "Spring physics",
    note: "Throwable UI that settles with real spring dynamics, never floaty.",
    tech: ["Framer Motion", "Drag"],
    demo: <SpringDrag />,
  },
  {
    name: "Kinetic type",
    note: "Text that decodes from noise on mount and on hover. Try it.",
    tech: ["React", "Interval"],
    demo: (
      <Scramble
        text="SYSTEMS"
        className="font-mono text-2xl font-medium tracking-tight text-foreground"
      />
    ),
  },
  {
    name: "System signals",
    note: "Data packets travelling a small network on a loop — legible, not noisy.",
    tech: ["SVG", "Motion"],
    demo: <SignalGraph />,
  },
];

const queued = [
  {
    name: "Refraction field",
    note: "A glass plane that bends the grid behind it, with subtle RGB dispersion at the edges.",
    tech: ["Three.js", "GLSL", "R3F"],
  },
  {
    name: "Layer explode",
    note: "An interface that separates into its stack — surface, data, logic, infrastructure — as you scroll.",
    tech: ["R3F", "Scroll", "Depth"],
  },
  {
    name: "Assistant canvas",
    note: "AI suggestions as inline, acceptable diffs rather than a chat — human-in-the-loop by default.",
    tech: ["React", "State machines", "AI UX"],
  },
];

function TechRow({ items }: { items: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {items.map((x) => (
        <span
          key={x}
          className="rounded-full border border-border px-2 py-0.5 font-mono text-[0.5625rem] uppercase tracking-[0.08em] text-faint"
        >
          {x}
        </span>
      ))}
    </div>
  );
}

export default function LabPage() {
  return (
    <>
      <PageHero
        eyebrow="Lab"
        titleLines={["A working", "laboratory."]}
        lead="Interaction, motion and rendering studies where the language used across this work gets figured out. Everything degrades gracefully — full effect on capable devices, a calmer version when motion is reduced."
      />

      {/* Featured 3D study */}
      <section className="shell pb-14 md:pb-16">
        <Reveal y={30}>
          <div
            data-world="dark"
            className="overflow-hidden rounded-2xl border border-border bg-background"
          >
            <div className="relative aspect-[16/9] w-full sm:aspect-[16/7]">
              <div className="absolute inset-0">
                <LabEngine />
              </div>
              <span className="absolute left-4 top-4 z-10 label text-faint">
                Orbital systems · WebGL
              </span>
            </div>
          </div>
        </Reveal>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-faint">
          The Product Engine — a luminous core inside concentric orbits, with
          live nodes and travelling data signals. Built on three / drei, with an
          SVG fallback for reduced-motion and lightweight devices.
        </p>
      </section>

      {/* Live interaction studies */}
      <section className="shell pb-10">
        <p className="label mb-6 border-t border-border pt-6">Interaction studies · live</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {liveTiles.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.04}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-4">
                <div className="mb-4 grid h-32 place-items-center overflow-hidden rounded-xl border border-border bg-surface-raised">
                  {t.demo}
                </div>
                <h3 className="text-sm font-medium text-foreground">{t.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">{t.note}</p>
                <TechRow items={t.tech} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Queued concepts */}
      <section className="shell pb-24 md:pb-32">
        <p className="label mb-6 border-t border-border pt-6">In the queue</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {queued.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.04}>
              <div className="h-full rounded-2xl border border-border bg-surface p-5">
                <h3 className="text-sm font-medium text-foreground">{t.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t.note}</p>
                <TechRow items={t.tech} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCta />
    </>
  );
}
