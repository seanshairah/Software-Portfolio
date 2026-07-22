import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/ui/section";
import { ContactCta } from "@/components/sections/contact-cta";
import { ButtonLink } from "@/components/ui/button";
import { profile } from "@/content/profile";
import { services } from "@/content/services";
import { capabilities } from "@/content/skills";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "A professional summary for Sean Muchenje — software designer, full-stack product developer and mechatronics engineer.",
  alternates: { canonical: "/resume" },
};

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-4 border-b border-border py-8 lg:grid-cols-12">
      <div className="lg:col-span-3">
        <span className="label">{label}</span>
      </div>
      <div className="lg:col-span-9">{children}</div>
    </div>
  );
}

export default function ResumePage() {
  return (
    <>
      <PageHero
        eyebrow="Résumé"
        index="01"
        titleLines={["Sean Muchenje"]}
        lead={profile.primaryStatement}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact" withArrow>Start a project</ButtonLink>
          <ButtonLink href={`mailto:${profile.email}`} variant="secondary">
            {profile.email}
          </ButtonLink>
        </div>
      </PageHero>

      <Section className="pb-8">
        <div className="border-t border-border">
          <Row label="Profile">
            <p className="text-pretty text-lg leading-relaxed text-muted">
              {profile.bio[0]}
            </p>
            <p className="mt-3 text-pretty leading-relaxed text-muted">{profile.bio[1]}</p>
          </Row>

          <Row label="Disciplines">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {capabilities.map((c) => (
                <div key={c.title}>
                  <p className="text-sm font-medium text-foreground">{c.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {c.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </Row>

          <Row label="What I do">
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.id} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                  <span className="w-56 shrink-0 text-sm font-medium text-foreground">{s.title}</span>
                  <span className="text-sm leading-relaxed text-muted">{s.summary}</span>
                </li>
              ))}
            </ul>
          </Row>

          <Row label="Selected work">
            <ul className="space-y-3">
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/work/${p.slug}`}
                    className="group flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <span className="text-sm font-medium text-foreground group-hover:text-accent">
                      {p.title}
                    </span>
                    <span className="text-sm text-muted">
                      {p.industry} · {p.year} · {p.status}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Row>

          <Row label="Background">
            <p className="text-sm leading-relaxed text-muted">
              Mechatronics engineering — systems thinking across sensors, control
              logic and feedback, carried into software design and full-stack
              development. Based in {profile.location} ({profile.timezone}),
              working with teams internationally.
            </p>
          </Row>

          <Row label="Currently exploring">
            <ul className="flex flex-wrap gap-2">
              {profile.exploring.map((e) => (
                <li key={e} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  {e}
                </li>
              ))}
            </ul>
          </Row>

          <Row label="Contact">
            <p className="text-sm text-muted">
              {profile.email} · {profile.location} · Available for select projects
            </p>
          </Row>
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
