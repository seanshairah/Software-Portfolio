import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { FeaturedProject } from "@/components/portfolio/featured-project";
import { featuredProjects } from "@/content/projects";

export function SelectedSystems() {
  const flagship = featuredProjects.slice(0, 3);
  return (
    <Section id="work" className="py-16 md:py-24">
      <Reveal>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <Eyebrow index="02">Selected Systems</Eyebrow>
            <h2 className="mt-6 text-balance text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-[1.05] tracking-[-0.02em]">
              Three products, shown the way they actually work.
            </h2>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            All work
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Reveal>

      <div className="mt-14 space-y-20 md:space-y-28">
        {flagship.map((project, i) => (
          <FeaturedProject key={project.slug} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
