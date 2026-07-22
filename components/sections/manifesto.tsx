import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal, MaskLines } from "@/components/motion/reveal";
import { SystemLine } from "@/components/motion/system-line";
import { profile } from "@/content/profile";

export function Manifesto() {
  return (
    <Section className="py-24 md:py-32">
      <Eyebrow index="01">The Digital Systems Studio</Eyebrow>
      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <MaskLines
            as="h2"
            lines={["Complex systems enter.", "Clear products emerge."]}
            className="text-balance text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.02] tracking-[-0.03em] text-foreground"
          />
        </div>
        <div className="flex flex-col justify-end lg:col-span-5">
          <Reveal>
            <p className="text-pretty text-lg leading-relaxed text-muted">
              {profile.shortBio}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-faint">
              Sean does not only design screens or write code. He designs the
              full system behind a digital product — workflows, interfaces, data,
              AI, automation and infrastructure, working as one.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-16">
        <SystemLine variant="divider" />
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {profile.roles.map((r) => (
            <li key={r} className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-faint">
              {r}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
