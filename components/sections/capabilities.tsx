import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { capabilities } from "@/content/skills";
import { pad } from "@/lib/utils";

export function Capabilities() {
  return (
    <Section id="capabilities" className="py-16 md:py-24">
      <Reveal>
        <div className="max-w-3xl">
          <Eyebrow index="03">Capabilities</Eyebrow>
          <h2 className="mt-6 text-balance text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-[1.05] tracking-[-0.02em]">
            One person across the whole stack — from the first workflow sketch to
            the deployed system.
          </h2>
        </div>
      </Reveal>

      <Stagger className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((group, i) => (
          <StaggerItem key={group.title} className="h-full">
            <div className="flex h-full flex-col bg-surface p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs text-accent">{pad(i + 1)}</span>
                <span className="size-1.5 rounded-full bg-accent" />
              </div>
              <h3 className="text-lg font-medium tracking-tight text-foreground">
                {group.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {group.description}
              </p>
              <ul className="mt-5 space-y-2 border-t border-border pt-4">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[0.8125rem] text-muted">
                    <span className="size-1 shrink-0 rounded-full bg-border-strong" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
