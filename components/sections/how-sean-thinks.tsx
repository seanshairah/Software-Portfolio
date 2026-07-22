import { Workflow, MonitorSmartphone, Server, Target, ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";

const layers = [
  {
    icon: Workflow,
    title: "Human workflows",
    body: "How people and organisations actually do the work — the messy, real process before any software touches it.",
  },
  {
    icon: MonitorSmartphone,
    title: "Software interfaces",
    body: "The screens each role uses — designed so the interface fits the workflow, not the other way around.",
  },
  {
    icon: Server,
    title: "Data & infrastructure",
    body: "The model, permissions, integrations and services underneath — the part users never see but always feel.",
  },
  {
    icon: Target,
    title: "Business outcomes",
    body: "The result the product exists to produce — fewer errors, faster hand-offs, decisions people can trust.",
  },
];

export function HowSeanThinks() {
  return (
    <Section
      world="dark"
      data-nav-dark
      className="overflow-hidden py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" aria-hidden />
      <div className="relative">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow index="04">How Sean Thinks</Eyebrow>
            <h2 className="mt-6 text-balance text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-[1.05] tracking-[-0.02em] text-foreground">
              A product is only the top layer. The work is connecting all of them.
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">
              Most projects fail in the gaps between these layers. Sean designs
              them as one continuous system, so an interface decision traces
              straight back to a real workflow and forward to a real outcome.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {layers.map((layer, i) => (
            <StaggerItem key={layer.title}>
              <div className="group relative h-full rounded-2xl border border-border bg-surface p-6">
                {/* connector arrow between cards on desktop */}
                {i < layers.length - 1 && (
                  <ArrowRight className="absolute -right-[1.15rem] top-1/2 z-10 hidden size-5 -translate-y-1/2 text-border-strong lg:block" />
                )}
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-xl border border-border bg-surface-muted text-accent">
                    <layer.icon className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-faint">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-base font-medium tracking-tight text-foreground">
                  {layer.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {layer.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
