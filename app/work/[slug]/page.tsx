import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DesignNotes } from "@/components/portfolio/design-notes";
import { ScreenSwitcher } from "@/components/portfolio/screen-switcher";
import { projectScreens } from "@/components/mockups/screens";
import { WorkflowDiagram } from "@/components/diagrams/workflow-diagram";
import { ArchitectureDiagram } from "@/components/diagrams/architecture-diagram";
import { ContactCta } from "@/components/sections/contact-cta";
import { Reveal } from "@/components/motion/reveal";
import {
  CaseHero,
  CaseBlock,
  BulletList,
  ChipList,
  NamedBlocks,
  NextProject,
} from "@/components/portfolio/case-study";
import { projects, getProject, getAdjacentProject } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — Sean Muchenje`,
      description: project.tagline,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getAdjacentProject(slug);
  const a = project.accent;
  const screens = projectScreens[project.mockup];

  return (
    <article>
      <CaseHero project={project} />

      {/* Screens — the product, browsable. This is the case study's centrepiece. */}
      <section className="shell pb-14 md:pb-20">
        <Reveal y={36}>
          <ScreenSwitcher screens={screens} accent={a} />
        </Reveal>
        {project.designNotes && (
          <DesignNotes
            notes={project.designNotes.slice(0, 3)}
            accent={project.accent}
            className="mt-8 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3"
          />
        )}
      </section>

      {/* Overview — problem → product, tight */}
      <CaseBlock label="Overview" index="01">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-3 text-lg font-medium tracking-tight text-foreground">
              The problem
            </h2>
            <p className="text-pretty leading-relaxed text-muted">{project.context}</p>
          </div>
          <div>
            <h2 className="mb-3 text-lg font-medium tracking-tight text-foreground">
              The product
            </h2>
            <p className="text-pretty leading-relaxed text-muted">{project.solution}</p>
          </div>
        </div>
      </CaseBlock>

      {/* How it works — a visual, not prose */}
      <CaseBlock
        label="How it works"
        index="02"
        title="The work, mapped end to end."
      >
        <div className="rounded-2xl border border-border bg-surface p-6 md:p-10">
          <WorkflowDiagram steps={project.workflows} accent={a} />
        </div>
      </CaseBlock>

      {/* Under the hood — architecture visual + tech + a few decisions */}
      <CaseBlock
        label="Under the hood"
        index="03"
        title="The system beneath the interface."
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <ArchitectureDiagram items={project.architecture} accent={a} />
          <div>
            <p className="label mb-4">Built with</p>
            <ChipList items={project.technologies} />
            <div className="mt-8">
              <p className="label mb-4">Key decisions</p>
              <BulletList items={project.designDecisions.slice(0, 4)} accent={a} />
            </div>
          </div>
        </div>
      </CaseBlock>

      {/* What mattered — a couple of cards */}
      <CaseBlock label="What mattered" index="04">
        <NamedBlocks blocks={project.challenges} />
      </CaseBlock>

      <NextProject project={next} />
      <ContactCta index="→" />
    </article>
  );
}
