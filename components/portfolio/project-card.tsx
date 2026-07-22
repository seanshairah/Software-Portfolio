import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { pad } from "@/lib/utils";

/** Lightweight abstract poster — an accent field with a hint of the interface. */
function Poster({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-surface">
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background: `radial-gradient(120% 80% at 15% 0%, ${project.accent}26, transparent 55%), radial-gradient(100% 100% at 100% 100%, ${project.accent}14, transparent 50%)`,
        }}
      />
      <div className="absolute inset-0 grid-lines opacity-40" />
      {/* abstract interface hint */}
      <div className="absolute inset-x-4 bottom-4 space-y-1.5">
        <span className="block h-1.5 w-1/3 rounded-full" style={{ background: project.accent }} />
        <span className="block h-1.5 w-2/3 rounded-full bg-border-strong" />
        <span className="block h-1.5 w-1/2 rounded-full bg-border" />
      </div>
      <span className="absolute left-3 top-3 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-faint">
        {project.category}
      </span>
    </div>
  );
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor="Open"
      className="group flex flex-col rounded-2xl border border-border bg-surface-raised p-4 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-soft"
    >
      <Poster project={project} />
      <div className="flex flex-1 flex-col px-1 pt-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-faint">{pad(index + 1)}</span>
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-faint">
            {project.year}
          </span>
        </div>
        <h3 className="mt-2 flex items-start justify-between gap-2 text-lg font-medium tracking-tight text-foreground">
          {project.title}
          <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
          {project.tagline}
        </p>
        <div className="mt-4 flex items-center gap-2 border-t border-border pt-3">
          <span className="size-2 rounded-full" style={{ background: project.accent }} />
          <span className="text-xs text-muted">{project.industry}</span>
        </div>
      </div>
    </Link>
  );
}
