import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { ExperimentCard } from "@/components/portfolio/experiment-card";
import { ContactCta } from "@/components/sections/contact-cta";
import { experiments } from "@/content/playground";

export const metadata: Metadata = {
  title: "Playground",
  description:
    "Creative technology experiments — shaders, motion, 3D, cursor and AI-interface studies that feed the interaction language of Sean's work.",
  alternates: { canonical: "/playground" },
};

export default function PlaygroundPage() {
  return (
    <>
      <PageHero
        eyebrow="Playground"
        index="01"
        titleLines={["Experimental,", "but disciplined."]}
        lead="Where the rendering techniques and interaction language used across this site get worked out. Each experiment has a responsive version and a reduced-motion fallback."
      />

      <Section className="pb-24">
        <Stagger className="grid grid-cols-1 gap-5 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-3">
          {experiments.map((exp) => (
            <StaggerItem key={exp.id} className="h-full">
              <ExperimentCard experiment={exp} />
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-faint">
          Every experiment is built to degrade gracefully: full effect on capable
          devices, a lighter version on mobile, and a static, accessible fallback
          when motion is reduced or WebGL is unavailable.
        </p>
      </Section>

      <ContactCta />
    </>
  );
}
