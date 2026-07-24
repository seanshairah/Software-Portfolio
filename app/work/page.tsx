import type { Metadata } from "next";
import { WorkIndex } from "@/components/portfolio/work-index";
import { ContactCta } from "@/components/sections/contact-cta";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Case studies from Sean Muchenje — logistics & customs, student housing, a family operating system, intelligent transport, farm ERP and resilient payment architecture.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const years = projects.map((p) => Number(p.year)).filter(Boolean);
  const range = `${Math.min(...years)}—${Math.max(...years)}`;

  return (
    <>
      <header className="shell pt-36 pb-14 md:pt-44 md:pb-20">
        <p className="label mb-6">Selected work</p>
        <h1 className="max-w-2xl text-balance text-[clamp(2rem,4.6vw,3.1rem)] font-medium leading-[1.05] tracking-[-0.03em] text-foreground">
          Systems, shown the way they actually work.
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
          Products across logistics, property, family care, transport,
          agriculture and payments — each a complete system of workflows,
          interfaces and architecture, not just a screen.
        </p>
        <div className="mt-10 flex items-center gap-4 border-t border-border pt-5">
          <span className="label">{projects.length} projects</span>
          <span className="h-3 w-px bg-border-strong" />
          <span className="label">{range}</span>
        </div>
      </header>

      <WorkIndex />
      <ContactCta />
    </>
  );
}
