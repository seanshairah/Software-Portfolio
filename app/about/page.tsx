import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { ContactCta } from "@/components/sections/contact-cta";
import { BrandMark } from "@/components/ui/brand";
import { StatusDot } from "@/components/ui/badge";
import { profile } from "@/content/profile";
import { capabilities } from "@/content/skills";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sean Muchenje — a software designer and mechatronics engineer in Harare, working across design, engineering and business operations.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        index="01"
        titleLines={["Design, engineering", "and how work works."]}
        lead={profile.primaryStatement}
      >
        <StatusDot label={profile.hero.availability.label} />
      </PageHero>

      <Section className="pb-8">
        <div className="grid grid-cols-1 gap-12 border-t border-border pt-12 lg:grid-cols-12 lg:gap-16">
          {/* Bio */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              {profile.bio.map((para, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p
                    className={
                      i === 0
                        ? "text-balance text-[clamp(1.25rem,2.4vw,1.75rem)] font-medium leading-[1.3] tracking-[-0.01em] text-foreground"
                        : "text-pretty text-lg leading-relaxed text-muted"
                    }
                  >
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Identity sidebar */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="lg:sticky lg:top-28">
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <div className="flex items-center justify-between">
                    <BrandMark className="size-9" animated />
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-faint">
                      {profile.monogram}
                    </span>
                  </div>
                  <div className="mt-6 space-y-3 border-t border-border pt-5">
                    {profile.facts.map((f) => (
                      <div key={f.label} className="flex items-center justify-between gap-4">
                        <span className="text-[0.6875rem] uppercase tracking-wide text-faint">
                          {f.label}
                        </span>
                        <span className="text-sm font-medium text-foreground">{f.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 border-t border-border pt-5">
                    <p className="label mb-3">Currently exploring</p>
                    <ul className="space-y-2">
                      {profile.exploring.map((e) => (
                        <li key={e} className="flex items-start gap-2 text-[0.8125rem] leading-relaxed text-muted">
                          <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent" />
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Roles / disciplines */}
      <Section className="py-16">
        <Reveal>
          <Eyebrow index="02">Disciplines</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-balance text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.1] tracking-[-0.02em]">
            One person, comfortable across the whole stack.
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <Reveal key={c.title}>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="text-base font-medium text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
          {profile.roles.map((r) => (
            <span key={r} className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-faint">
              {r}
            </span>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/services" className="group inline-flex items-center gap-2 text-sm font-medium text-foreground">
            How I can help
            <ArrowUpRight className="size-4 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link href="/work" className="group inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground">
            See the work
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
