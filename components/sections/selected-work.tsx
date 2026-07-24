import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import { ProjectMockup } from "@/components/mockups";
import { SelectedWorkView, type WorkItem } from "./selected-work-view";

/** Selected work — server wrapper that hands real interface previews to the
 *  interactive index. Strongest projects first (content is pre-ordered). */
export function SelectedWork() {
  const items: WorkItem[] = projects.map((p) => ({
    slug: p.slug,
    title: p.title,
    tagline: p.tagline,
    category: p.category,
    role: p.role,
    industry: p.industry,
    year: p.year,
    status: p.status,
    accent: p.accent,
    preset: p.mockup,
    preview: <ProjectMockup preset={p.mockup} />,
  }));

  return (
    <section id="work" className="shell border-t border-border py-16 md:py-24">
      <header className="mb-10 flex items-end justify-between gap-4 md:mb-14">
        <div>
          <p className="label mb-3">Selected work</p>
          <h2 className="max-w-xl text-balance text-[clamp(1.6rem,3.4vw,2.25rem)] font-medium tracking-[-0.02em] text-foreground">
            Complex systems, shipped as clear products.
          </h2>
        </div>
        <Link
          href="/work"
          className="group hidden shrink-0 items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground sm:inline-flex"
        >
          All work
          <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </header>

      <SelectedWorkView items={items} />
    </section>
  );
}
