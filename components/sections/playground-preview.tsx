import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ExperimentCard } from "@/components/portfolio/experiment-card";
import { experiments } from "@/content/playground";

export function PlaygroundPreview() {
  return (
    <Section id="playground" className="py-16 md:py-24">
      <Reveal>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <Eyebrow index="08">Playground</Eyebrow>
            <h2 className="mt-6 text-balance text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-[1.05] tracking-[-0.02em]">
              Experimental, but disciplined.
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted">
              Where the interaction language and rendering techniques used across
              this site get worked out.
            </p>
          </div>
          <Link
            href="/playground"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            All experiments
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Reveal>

      <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {experiments.slice(0, 3).map((exp) => (
          <StaggerItem key={exp.id} className="h-full">
            <ExperimentCard experiment={exp} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
