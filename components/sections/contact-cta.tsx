import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal, MaskLines } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { EmailCopyChip } from "@/components/ui/copy-email";
import { StatusDot } from "@/components/ui/badge";
import { profile } from "@/content/profile";

export function ContactCta({ index = "09" }: { index?: string }) {
  return (
    <Section
      id="contact-cta"
      world="dark"
      data-nav-dark
      className="overflow-hidden py-20 md:py-32"
    >
      <div
        className="pointer-events-none absolute -left-24 top-0 size-[34rem] rounded-full opacity-40 blur-[130px]"
        style={{ background: "radial-gradient(circle, var(--glow), transparent 70%)" }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" aria-hidden />

      <div className="relative grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-12">
        {/* Left: the invitation */}
        <div className="lg:col-span-7 xl:col-span-8">
          <Reveal>
            <Eyebrow index={index}>Start a Project</Eyebrow>
          </Reveal>

          <h2 className="mt-7 flex flex-wrap items-end gap-x-3 text-[clamp(2rem,7vw,3.75rem)] font-medium leading-[1.0] tracking-[-0.03em] text-foreground">
            <MaskLines
              as="span"
              lines={["Have a complex", "software idea?", "Let's design the", "system behind it."]}
              className="block"
            />
            {/* A caret — the system waiting for you to start writing the brief. */}
            <span
              aria-hidden
              className="mb-[0.35em] hidden h-[0.9em] w-[3px] animate-pulse bg-accent sm:inline-block"
            />
          </h2>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted md:text-lg">
              Tell me about the workflow, the users and the outcome you're after.
              I'll help you shape it into a product worth building.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" size="lg" withArrow data-cursor="Let's talk">
                Start a Project
              </ButtonLink>
              <EmailCopyChip email={profile.email} />
            </div>
          </Reveal>
        </div>

        {/* Right: status, framed like a new project file being opened */}
        <div className="lg:col-span-5 lg:flex lg:flex-col lg:items-end lg:justify-end xl:col-span-4">
          <Reveal delay={0.15} className="w-full lg:max-w-[15rem]">
            <div className="rounded-2xl border border-border bg-surface/50 p-5">
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-faint">
                new-project.md
              </p>
              <div className="mt-4 space-y-3 border-t border-border pt-4">
                <StatusDot label={profile.hero.availability.label} />
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-faint">
                  {profile.location}
                </p>
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-faint">
                  {profile.timezone}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
