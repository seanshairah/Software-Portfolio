import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { ProjectMockup } from "@/components/mockups";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { pad, cn } from "@/lib/utils";

const signatureLabel: Record<string, string> = {
  "logistics-workflow": "Signature · animated logistics workflow",
  "booking-lifecycle": "Signature · mobile-to-dashboard journey",
  "document-workspace": "Signature · live document workspace",
  "vehicle-twin": "Signature · vehicle digital twin",
  "field-map": "Signature · switchable field map",
  "transaction-lifecycle": "Signature · transaction lifecycle",
};

export function FeaturedProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  // Vary presentation per flagship project.
  const layout = index % 3; // 0: text-left, 1: text-right, 2: stacked
  const stacked = layout === 2;
  const textRight = layout === 1;

  const Visual = (
    <Reveal
      y={30}
      className={cn(
        "relative",
        !stacked && "lg:col-span-7",
        textRight && "lg:order-1",
      )}
    >
      <div
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] opacity-40 blur-3xl"
        style={{ background: `radial-gradient(60% 60% at 50% 40%, ${project.accent}22, transparent)` }}
        aria-hidden
      />
      <Link
        href={`/work/${project.slug}`}
        aria-label={`Open ${project.title} case study`}
        data-cursor="Open"
        className="block rounded-xl transition-transform duration-500 ease-out-expo hover:-translate-y-1"
      >
        <ProjectMockup preset={project.mockup} />
      </Link>
      <p className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-faint">
        {signatureLabel[project.signature]}
      </p>
    </Reveal>
  );

  const Text = (
    <Reveal
      className={cn(
        "flex flex-col justify-center",
        !stacked && "lg:col-span-5",
        stacked && "max-w-2xl",
      )}
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="font-mono text-sm text-accent">{pad(index + 1)}</span>
        <span className="h-px w-8 bg-border-strong" />
        <span className="label">{project.category}</span>
      </div>

      <Link href={`/work/${project.slug}`} className="group/title inline-block">
        <h3 className="flex items-start gap-2 text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-foreground">
          {project.title}
          <ArrowUpRight className="mt-2 size-6 shrink-0 text-faint transition-all duration-300 group-hover/title:translate-x-1 group-hover/title:-translate-y-1 group-hover/title:text-accent" />
        </h3>
      </Link>

      <p className="mt-4 text-pretty text-lg leading-relaxed text-muted">
        {project.tagline}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <Badge tone="outline">{project.industry}</Badge>
        <Badge tone="outline">{project.year}</Badge>
        <Badge tone="accent">{project.status}</Badge>
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.features.slice(0, 4).map((f) => (
          <span
            key={f}
            className="rounded-full border border-border px-3 py-1 text-xs text-muted"
          >
            {f}
          </span>
        ))}
      </div>

      <Link
        href={`/work/${project.slug}`}
        className="group/link mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
      >
        <span className="relative">
          Read the case study
          <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover/link:scale-x-100" />
        </span>
        <ArrowUpRight className="size-4 text-accent transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
      </Link>
    </Reveal>
  );

  if (stacked) {
    return (
      <article className="border-t border-border pt-12">
        {Text}
        <div className="mt-10">{Visual}</div>
      </article>
    );
  }

  return (
    <article className="grid grid-cols-1 items-center gap-8 border-t border-border pt-12 lg:grid-cols-12 lg:gap-14">
      {Visual}
      {Text}
    </article>
  );
}
