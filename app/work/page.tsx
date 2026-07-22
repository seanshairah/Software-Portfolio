import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/portfolio/project-card";
import { ContactCta } from "@/components/sections/contact-cta";
import { StatusDot } from "@/components/ui/badge";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Case studies from Sean Muchenje — logistics, student housing, AI writing, intelligent transport, smart farming and resilient payment systems.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        index="01"
        titleLines={["Systems, shown the way", "they actually work."]}
        lead="Six products across logistics, property, education, transport, agriculture and payments. Each one is a complete system — workflows, interfaces, architecture — not just a screen."
      >
        <StatusDot label={profile.hero.availability.label} />
      </PageHero>

      <Section className="pb-24">
        <Reveal>
          <div className="mb-8 flex items-center justify-between border-t border-border pt-6">
            <span className="label">{projects.length} projects</span>
            <span className="label">2024 — 2025</span>
          </div>
        </Reveal>
        <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <StaggerItem key={project.slug} className="h-full">
              <ProjectCard project={project} index={i} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <ContactCta />
    </>
  );
}
