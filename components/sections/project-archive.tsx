import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/portfolio/project-card";
import { projects } from "@/content/projects";

export function ProjectArchive() {
  const rest = projects.slice(3);
  return (
    <Section id="archive" className="py-16 md:py-24">
      <Reveal>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <Eyebrow index="06">Project Archive</Eyebrow>
            <h2 className="mt-6 text-balance text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-[1.05] tracking-[-0.02em]">
              More systems in progress.
            </h2>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            View all six projects
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Reveal>

      <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((project, i) => (
          <StaggerItem key={project.slug} className="h-full">
            <ProjectCard project={project} index={i + 3} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
