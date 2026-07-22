import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectMockup } from "@/components/mockups";
import { DesignNotes } from "@/components/portfolio/design-notes";
import { WorkflowDiagram } from "@/components/diagrams/workflow-diagram";
import { ArchitectureDiagram } from "@/components/diagrams/architecture-diagram";
import { ContactCta } from "@/components/sections/contact-cta";
import { Reveal } from "@/components/motion/reveal";
import {
  CaseHero,
  CaseBlock,
  BulletList,
  ChipList,
  RoleTable,
  KeyScreenList,
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

  return (
    <article>
      <CaseHero project={project} />

      {/* Signature visual */}
      <section className="shell -mt-8 pb-12 md:pb-16">
        <Reveal y={36}>
          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] opacity-40 blur-3xl"
              style={{ background: `radial-gradient(50% 50% at 50% 30%, ${a}22, transparent)` }}
              aria-hidden
            />
            <ProjectMockup preset={project.mockup} />
          </div>
        </Reveal>
        {project.designNotes && (
          <DesignNotes
            notes={project.designNotes}
            accent={project.accent}
            className="mt-8 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-3"
          />
        )}
      </section>

      {/* Overview: problem + solution */}
      <CaseBlock label="Overview" index="01">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-xl font-medium tracking-tight text-foreground">
              The problem
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted">
              {project.context}
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted">
              {project.challenge}
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-medium tracking-tight text-foreground">
              The product
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted">
              {project.solution}
            </p>
            <div className="mt-6">
              <p className="label mb-3">Summary</p>
              <p className="leading-relaxed text-foreground">{project.summary}</p>
            </div>
          </div>
        </div>
      </CaseBlock>

      {/* Users & roles */}
      <CaseBlock
        label="Users"
        index="02"
        title="Every role is a lens on the same system."
      >
        <div className="mb-8">
          <BulletList items={project.users} accent={a} columns={2} />
        </div>
        <RoleTable roles={project.roleMap} accent={a} />
      </CaseBlock>

      {/* Goals & discovery */}
      <CaseBlock label="Goals & discovery" index="03">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <p className="label mb-4">Product goals</p>
            <BulletList items={project.goals} accent={a} />
          </div>
          <div>
            <p className="label mb-4">Research & discovery</p>
            <BulletList items={project.research} accent={a} />
          </div>
        </div>
      </CaseBlock>

      {/* Workflow mapping */}
      <CaseBlock
        label="Workflow"
        index="04"
        title="Mapping the work, end to end."
        lead="Before designing screens, the real process is mapped as a sequence — the System Line in its process form."
      >
        <div className="rounded-2xl border border-border bg-surface p-6 md:p-10">
          <WorkflowDiagram steps={project.workflows} accent={a} />
        </div>
      </CaseBlock>

      {/* IA & journeys */}
      <CaseBlock label="Architecture of the experience" index="05">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <p className="label mb-4">Information architecture</p>
            <BulletList items={project.informationArchitecture} accent={a} />
          </div>
          <div>
            <p className="label mb-4">Key user journeys</p>
            <BulletList items={project.journeys} accent={a} />
          </div>
        </div>
      </CaseBlock>

      {/* Interface system */}
      <CaseBlock
        label="Interface system"
        index="06"
        title="Key screens, built to behave like real software."
        lead="Meaningful labels, believable data, and the states that actually matter — empty, pending, error — not just the happy path."
      >
        <KeyScreenList screens={project.keyScreens} accent={a} />
      </CaseBlock>

      {/* System architecture */}
      <CaseBlock
        label="System architecture"
        index="07"
        title="The system beneath the interface."
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <ArchitectureDiagram items={project.architecture} accent={a} />
          <div>
            <p className="label mb-4">Technology</p>
            <ChipList items={project.technologies} />
            {project.designDecisions.length > 0 && (
              <div className="mt-8">
                <p className="label mb-4">Design decisions</p>
                <BulletList items={project.designDecisions} accent={a} />
              </div>
            )}
          </div>
        </div>
      </CaseBlock>

      {/* Security & responsive */}
      {(project.security || project.responsive) && (
        <CaseBlock label="Security & responsive" index="08">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {project.security && (
              <div>
                <p className="label mb-4">Security</p>
                <BulletList items={project.security} accent={a} />
              </div>
            )}
            <div>
              <p className="label mb-4">Responsive behaviour</p>
              <p className="text-pretty text-lg leading-relaxed text-muted">
                {project.responsive}
              </p>
            </div>
          </div>
        </CaseBlock>
      )}

      {/* Challenges & decisions */}
      <CaseBlock
        label="Challenges"
        index="09"
        title="The decisions that actually mattered."
      >
        <NamedBlocks blocks={project.challenges} />
      </CaseBlock>

      {/* Outcomes */}
      <CaseBlock label="Outcomes & lessons" index="10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {project.outcomes && (
            <div>
              <p className="label mb-4">Expected outcomes</p>
              <BulletList items={project.outcomes} accent={a} />
            </div>
          )}
          {project.lessons && (
            <div>
              <p className="label mb-4">Lessons</p>
              <BulletList items={project.lessons} accent={a} />
            </div>
          )}
          {project.futureImprovements && (
            <div>
              <p className="label mb-4">Future development</p>
              <BulletList items={project.futureImprovements} accent={a} />
            </div>
          )}
        </div>
      </CaseBlock>

      <NextProject project={next} />
      <ContactCta index="→" />
    </article>
  );
}
