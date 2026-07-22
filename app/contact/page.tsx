import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal, MaskLines } from "@/components/motion/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { CopyEmail } from "@/components/ui/copy-email";
import { StatusDot } from "@/components/ui/badge";
import { profile } from "@/content/profile";
import { socials } from "@/content/socials";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have a complex software idea? Start a project with Sean Muchenje — software designer and full-stack product developer in Harare, Zimbabwe.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Section as="div" contained={false} className="pt-36 pb-24 md:pt-44">
      <div className="shell">
        <Reveal>
          <Eyebrow index="01">Start a Project</Eyebrow>
        </Reveal>
        <MaskLines
          as="h1"
          trigger="mount"
          delay={0.1}
          lines={["Have a complex software idea?", "Let's design the system behind it."]}
          className="mt-6 max-w-4xl text-balance text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.02] tracking-[-0.03em] text-foreground"
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Info column */}
          <div className="lg:col-span-4">
            <Reveal delay={0.15}>
              <div className="lg:sticky lg:top-28">
                <p className="text-pretty leading-relaxed text-muted">
                  Tell me about the workflow, the users and the outcome you're
                  after. I'll help you shape it into a product worth building.
                </p>

                <div className="mt-8 space-y-5 border-t border-border pt-8">
                  <div>
                    <p className="label mb-2">Email</p>
                    <a href={`mailto:${profile.email}`} className="text-lg font-medium text-foreground hover:text-accent">
                      {profile.email}
                    </a>
                    <div className="mt-3">
                      <CopyEmail email={profile.email} />
                    </div>
                  </div>

                  <div className="border-t border-border pt-5">
                    <p className="label mb-2">Based in</p>
                    <p className="text-foreground">{profile.location}</p>
                    <p className="text-sm text-muted">{profile.timezone}</p>
                  </div>

                  <div className="border-t border-border pt-5">
                    <p className="label mb-2">Availability</p>
                    <StatusDot label={profile.hero.availability.label} />
                  </div>

                  <div className="border-t border-border pt-5">
                    <p className="label mb-3">Elsewhere</p>
                    <div className="flex flex-wrap gap-4">
                      {socials.map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          className="text-sm text-muted transition-colors hover:text-foreground"
                          {...(s.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                        >
                          {s.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form column */}
          <div className="lg:col-span-8">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border bg-surface-raised p-6 shadow-soft md:p-9">
                <ContactForm />
              </div>
              <p className="mt-4 px-1 text-xs leading-relaxed text-faint">
                Prefer email? Reach me directly at{" "}
                <a href={`mailto:${profile.email}`} className="text-muted hover:text-foreground">
                  {profile.email}
                </a>
                . This form stores your message securely so I don't lose it.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
