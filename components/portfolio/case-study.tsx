import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Eyebrow } from "@/components/ui/section";
import { pad } from "@/lib/utils";

/** Dark cinematic opener for a case study. */
export function CaseHero({ project }: { project: Project }) {
  return (
    <header
      data-world="dark"
      data-nav-dark
      className="relative overflow-hidden bg-background pt-36 pb-16 md:pt-44 md:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -top-32 right-0 size-[36rem] rounded-full opacity-40 blur-[130px]"
        style={{ background: `radial-gradient(circle, ${project.accent}44, transparent 70%)` }}
        aria-hidden
      />
      <div className="shell relative">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted"
            >
              <span className="size-2 rounded-full" style={{ background: project.accent }} />
              {project.category}
            </span>
            <Badge tone="outline">{project.industry}</Badge>
            <Badge tone="accent">{project.status}</Badge>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-8 max-w-4xl text-balance text-[clamp(2.25rem,5.5vw,4.25rem)] font-medium leading-[1.0] tracking-[-0.03em] text-foreground">
            {project.title}
          </h1>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mt-6 max-w-3xl text-pretty text-xl leading-relaxed text-muted">
            {project.openingStatement}
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-8 md:grid-cols-4">
            {[
              { k: "Role", v: project.role },
              { k: "Industry", v: project.industry },
              { k: "Year", v: project.year },
              { k: "Status", v: project.status },
            ].map((m) => (
              <div key={m.k}>
                <dt className="label mb-2">{m.k}</dt>
                <dd className="text-sm font-medium leading-snug text-foreground">{m.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </header>
  );
}

/** Editorial block with a sticky mono label rail on the left. */
export function CaseBlock({
  label,
  index,
  title,
  lead,
  children,
}: {
  label: string;
  index?: string;
  title?: React.ReactNode;
  lead?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="shell border-t border-border py-16 md:py-20">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-3">
          <div className="lg:sticky lg:top-28">
            <Eyebrow index={index}>{label}</Eyebrow>
          </div>
        </div>
        <div className="lg:col-span-9">
          {title && (
            <Reveal>
              <h2 className="max-w-3xl text-balance text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.1] tracking-[-0.02em] text-foreground">
                {title}
              </h2>
            </Reveal>
          )}
          {lead && (
            <Reveal delay={0.05}>
              <p className="mt-4 max-w-3xl text-pretty text-lg leading-relaxed text-muted">
                {lead}
              </p>
            </Reveal>
          )}
          <div className={title || lead ? "mt-8" : ""}>{children}</div>
        </div>
      </div>
    </section>
  );
}

export function BulletList({
  items,
  accent,
  columns = 1,
}: {
  items: string[];
  accent?: string;
  columns?: 1 | 2;
}) {
  return (
    <ul
      className={
        columns === 2
          ? "grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2"
          : "space-y-3"
      }
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-muted">
          <span
            className="mt-2 size-1.5 shrink-0 rounded-full"
            style={{ background: accent ?? "var(--accent)" }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ChipList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-muted"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function RoleTable({
  roles,
  accent,
}: {
  roles: { role: string; does: string }[];
  accent?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border">
      {roles.map((r, i) => (
        <div
          key={r.role}
          className={`grid grid-cols-1 gap-2 p-4 sm:grid-cols-12 sm:gap-6 sm:p-5 ${
            i > 0 ? "border-t border-border" : ""
          }`}
        >
          <div className="flex items-center gap-2.5 sm:col-span-3">
            <span className="size-2 rounded-full" style={{ background: accent ?? "var(--accent)" }} />
            <span className="text-sm font-medium text-foreground">{r.role}</span>
          </div>
          <p className="text-[0.9375rem] leading-relaxed text-muted sm:col-span-9">
            {r.does}
          </p>
        </div>
      ))}
    </div>
  );
}

export function KeyScreenList({
  screens,
  accent,
}: {
  screens: { title: string; description: string }[];
  accent?: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {screens.map((s, i) => (
        <Reveal key={s.title} delay={i * 0.05}>
          <div className="h-full rounded-2xl border border-border bg-surface p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="font-mono text-xs" style={{ color: accent }}>
                {pad(i + 1)}
              </span>
              <h3 className="text-base font-medium text-foreground">{s.title}</h3>
            </div>
            <p className="text-sm leading-relaxed text-muted">{s.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function NamedBlocks({
  blocks,
}: {
  blocks: { title: string; body: string }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {blocks.map((b, i) => (
        <Reveal key={b.title} delay={i * 0.05}>
          <div className="h-full rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-lg font-medium tracking-tight text-foreground">{b.title}</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{b.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function NextProject({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      data-world="dark"
      data-nav-dark
      data-cursor="Next"
      className="group relative block overflow-hidden bg-background"
    >
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(60% 120% at 80% 50%, ${project.accent}22, transparent 60%)` }}
        aria-hidden
      />
      <div className="shell relative flex flex-col gap-4 py-16 md:flex-row md:items-center md:justify-between md:py-24">
        <div>
          <p className="label mb-3">Next project</p>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-medium tracking-[-0.02em] text-foreground">
            {project.title}
          </h2>
          <p className="mt-2 max-w-xl text-muted">{project.tagline}</p>
        </div>
        <span className="flex size-16 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-transform duration-500 group-hover:translate-x-2">
          <ArrowUpRight className="size-7" />
        </span>
      </div>
    </Link>
  );
}
