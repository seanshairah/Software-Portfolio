import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { ContactCta } from "@/components/sections/contact-cta";
import { uses } from "@/content/uses";

export const metadata: Metadata = {
  title: "Uses",
  description: "The tools, stack and materials Sean Muchenje builds with.",
  alternates: { canonical: "/uses" },
};

export default function UsesPage() {
  return (
    <>
      <PageHero
        eyebrow="Uses"
        index="01"
        titleLines={["The tools behind", "the work."]}
        lead="A short, honest list of what I design and build with — chosen for the smallest effective set, not the longest."
      />

      <Section className="pb-8">
        <div className="border-t border-border">
          {uses.map((group, i) => (
            <Reveal key={group.category}>
              <div className="grid grid-cols-1 gap-6 border-b border-border py-10 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  <h2 className="mt-2 text-xl font-medium tracking-tight text-foreground">
                    {group.category}
                  </h2>
                </div>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-9">
                  {group.items.map((item) => (
                    <li key={item.name} className="rounded-xl border border-border bg-surface p-4">
                      <p className="text-sm font-medium text-foreground">{item.name}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{item.note}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
