import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { BrandMark } from "@/components/ui/brand";
import { profile } from "@/content/profile";

export function AboutPreview() {
  return (
    <Section id="about" className="py-16 md:py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow index="07">About</Eyebrow>
            <p className="mt-8 text-balance text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.02em] text-foreground">
              {profile.bio[0]}
            </p>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted">
              {profile.bio[1]}
            </p>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <span className="relative">
                More about Sean
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </span>
              <ArrowUpRight className="size-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
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
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
