import { Eyebrow } from "@/components/ui/section";
import { Reveal, MaskLines } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/** Consistent inner-page header. Clears the fixed navbar. */
export function PageHero({
  eyebrow,
  index,
  titleLines,
  lead,
  children,
  className,
}: {
  eyebrow: string;
  index?: string;
  titleLines: string[];
  lead?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("shell pt-36 pb-12 md:pt-44 md:pb-16", className)}>
      <Reveal>
        <Eyebrow index={index}>{eyebrow}</Eyebrow>
      </Reveal>
      <MaskLines
        as="h1"
        trigger="mount"
        delay={0.1}
        lines={titleLines}
        className="mt-6 text-balance text-[clamp(2.25rem,5.5vw,4rem)] font-medium leading-[1.0] tracking-[-0.03em] text-foreground"
      />
      {lead && (
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
            {lead}
          </p>
        </Reveal>
      )}
      {children && (
        <Reveal delay={0.3}>
          <div className="mt-8">{children}</div>
        </Reveal>
      )}
    </header>
  );
}
