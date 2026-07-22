import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { ContactCta } from "@/components/sections/contact-cta";
import { projects } from "@/content/projects";
import { pad } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Archive",
  description: "A complete, compact index of every project by Sean Muchenje.",
  alternates: { canonical: "/archive" },
};

export default function ArchivePage() {
  return (
    <>
      <PageHero
        eyebrow="Archive"
        index="01"
        titleLines={["Everything,", "in one index."]}
        lead="A dense, complete list of every project — with category, industry, year and status."
      />

      <Section className="pb-24">
        <div className="border-t border-border">
          {/* Header row */}
          <div className="hidden grid-cols-12 gap-4 border-b border-border py-3 lg:grid">
            <span className="col-span-1 label">#</span>
            <span className="col-span-4 label">Project</span>
            <span className="col-span-3 label">Industry</span>
            <span className="col-span-2 label">Year</span>
            <span className="col-span-2 label">Status</span>
          </div>

          {projects.map((p, i) => (
            <Reveal key={p.slug}>
              <Link
                href={`/work/${p.slug}`}
                className="group grid grid-cols-1 gap-1 border-b border-border py-5 transition-colors hover:bg-surface lg:grid-cols-12 lg:items-center lg:gap-4 lg:px-2"
              >
                <span className="col-span-1 font-mono text-xs text-faint">{pad(i + 1)}</span>
                <span className="col-span-4 flex items-center gap-2 text-base font-medium text-foreground">
                  <span className="size-2 rounded-full" style={{ background: p.accent }} />
                  {p.title}
                  <ArrowUpRight className="size-4 text-faint opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
                <span className="col-span-3 text-sm text-muted">{p.industry}</span>
                <span className="col-span-2 text-sm text-muted tabular">{p.year}</span>
                <span className="col-span-2 text-sm text-muted">{p.status}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
