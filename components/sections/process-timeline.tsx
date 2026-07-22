import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { process } from "@/content/process";
import { pad } from "@/lib/utils";

export function ProcessTimeline({ heading = true }: { heading?: boolean }) {
  return (
    <Section id="process" className="py-16 md:py-24">
      {heading && (
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow index="05">Process</Eyebrow>
            <h2 className="mt-6 text-balance text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-[1.05] tracking-[-0.02em]">
              Six stages, from understanding the problem to refining the product.
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">
              The System Line runs through each phase — the same thread that turns
              a complex idea into a working product.
            </p>
          </div>
        </Reveal>
      )}

      <div className="mt-14 border-t border-border">
        {process.map((stage) => (
          <Reveal key={stage.key}>
            <div className="group grid grid-cols-1 gap-6 border-b border-border py-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-accent">{pad(stage.index)}</span>
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight text-foreground">
                      {stage.title}
                    </h3>
                    <p className="mt-1 text-sm italic leading-relaxed text-muted">
                      “{stage.question}”
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:col-span-8">
                <div>
                  <p className="label mb-3">Activities</p>
                  <ul className="space-y-1.5">
                    {stage.activities.map((a) => (
                      <li key={a} className="text-[0.8125rem] leading-relaxed text-muted">
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="label mb-3">Deliverables</p>
                  <ul className="flex flex-wrap gap-1.5">
                    {stage.deliverables.map((d) => (
                      <li
                        key={d}
                        className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="label mb-3">Outcome</p>
                  <p className="text-[0.8125rem] leading-relaxed text-foreground">
                    {stage.outcome}
                  </p>
                  <p className="mt-3 text-[0.6875rem] leading-relaxed text-faint">
                    Client involvement — {stage.clientInvolvement}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
