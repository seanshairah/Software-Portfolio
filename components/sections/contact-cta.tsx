import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal, MaskLines } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { CopyEmail } from "@/components/ui/copy-email";
import { StatusDot } from "@/components/ui/badge";
import { profile } from "@/content/profile";

export function ContactCta({ index = "09" }: { index?: string }) {
  return (
    <Section
      id="contact-cta"
      world="dark"
      data-nav-dark
      className="overflow-hidden py-24 md:py-36"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 size-[36rem] -translate-x-1/2 rounded-full opacity-50 blur-[130px]"
        style={{ background: "radial-gradient(circle, var(--glow), transparent 70%)" }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" aria-hidden />

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <div className="flex justify-center">
            <Eyebrow index={index}>Start a Project</Eyebrow>
          </div>
        </Reveal>

        <MaskLines
          as="h2"
          lines={["Have a complex software idea?", "Let's design the system behind it."]}
          className="mt-8 text-balance text-[clamp(1.875rem,5vw,3.75rem)] font-medium leading-[1.02] tracking-[-0.03em] text-foreground"
        />

        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
            Tell me about the workflow, the users and the outcome you're after.
            I'll help you shape it into a product worth building.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/contact" size="lg" withArrow data-cursor="Let's talk">
              Start a Project
            </ButtonLink>
            <ButtonLink href={`mailto:${profile.email}`} variant="secondary" size="lg">
              {profile.email}
            </ButtonLink>
            <CopyEmail email={profile.email} />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <StatusDot label={profile.hero.availability.label} />
            <span className="hidden h-3 w-px bg-border-strong sm:block" />
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-faint">
              {profile.location} · {profile.timezone}
            </span>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
