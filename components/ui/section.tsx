import { cn } from "@/lib/utils";

/** Editorial content container with responsive gutters. */
export function Shell({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp: any = as;
  return <Comp className={cn("shell", className)}>{children}</Comp>;
}

/**
 * Section wrapper. `world` opts a section into the dark cinematic palette
 * regardless of the global theme; omit it to inherit the editorial world.
 */
export function Section({
  children,
  id,
  world,
  className,
  contained = true,
  as = "section",
}: {
  children: React.ReactNode;
  id?: string;
  world?: "dark" | "light";
  className?: string;
  contained?: boolean;
  as?: React.ElementType;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp: any = as;
  return (
    <Comp
      id={id}
      data-world={world}
      className={cn(
        "relative",
        world === "dark" && "bg-background text-foreground",
        className,
      )}
    >
      {contained ? <div className="shell">{children}</div> : children}
    </Comp>
  );
}

/** Monospace technical eyebrow with a leading index/tick. */
export function Eyebrow({
  children,
  index,
  className,
}: {
  children: React.ReactNode;
  index?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-faint",
        className,
      )}
    >
      <span className="inline-block h-px w-6 bg-border-strong" aria-hidden />
      {index && <span className="text-accent">{index}</span>}
      <span>{children}</span>
    </div>
  );
}

/** Large editorial section heading with optional lead. */
export function SectionHeading({
  title,
  lead,
  align = "left",
  className,
}: {
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <h2 className="text-balance text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-[1.05] tracking-[-0.02em]">
        {title}
      </h2>
      {lead && (
        <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">
          {lead}
        </p>
      )}
    </div>
  );
}
