import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { ContactCta } from "@/components/sections/contact-cta";
import { services } from "@/content/services";
import { pad } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Product strategy & design, full-stack development, AI & automation, systems architecture and product audits — delivered as outcomes.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        index="01"
        titleLines={["Outcomes, not", "line items."]}
        lead="Five ways I help teams turn complex ideas into products that hold up — from the first workflow sketch to the deployed system."
      />

      <Section className="pb-8">
        <div className="border-t border-border">
          {services.map((service, i) => (
            <Reveal key={service.id}>
              <div className="group grid grid-cols-1 gap-8 border-b border-border py-12 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-4">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-sm text-accent">{pad(i + 1)}</span>
                    <div>
                      <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-surface text-accent">
                        <service.icon className="size-5" />
                      </span>
                      <h2 className="mt-4 text-2xl font-medium tracking-tight text-foreground">
                        {service.title}
                      </h2>
                      <p className="mt-3 text-pretty leading-relaxed text-muted">
                        {service.summary}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8">
                  <div>
                    <p className="label mb-2">What I do</p>
                    <p className="text-[0.9375rem] leading-relaxed text-muted">{service.whatIDo}</p>
                    <p className="label mb-2 mt-5">Who it helps</p>
                    <p className="text-[0.9375rem] leading-relaxed text-muted">{service.whoItHelps}</p>
                  </div>
                  <div>
                    <p className="label mb-2">The outcome</p>
                    <p className="text-[0.9375rem] leading-relaxed text-foreground">{service.outcome}</p>
                    <p className="label mb-3 mt-5">Typical deliverables</p>
                    <ul className="flex flex-wrap gap-1.5">
                      {service.deliverables.map((d) => (
                        <li
                          key={d}
                          className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <ProcessTimeline />
      <ContactCta />
    </>
  );
}
