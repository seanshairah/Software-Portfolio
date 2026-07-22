import type { Experiment } from "@/content/playground";
import { cn } from "@/lib/utils";

/** Distinct abstract poster per experiment kind — pure CSS/SVG, no libraries. */
function ExperimentVisual({ kind }: { kind: Experiment["kind"] }) {
  const base =
    "relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-border";
  switch (kind) {
    case "shader":
      return (
        <div className={cn(base, "bg-[#0b0c0e]")}>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 80% at 30% 30%, #3c7dff55, transparent 60%), radial-gradient(50% 70% at 75% 70%, #39ff8844, transparent 60%), radial-gradient(40% 60% at 60% 20%, #ff5a5a33, transparent 60%)",
            }}
          />
          <div className="absolute inset-0 dot-grid opacity-30" />
        </div>
      );
    case "motion":
      return (
        <div className={cn(base, "bg-surface")}>
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 160 90" fill="none">
            <path d="M0 45 C 40 45 40 20 80 20 S 120 70 160 70" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
            <circle r="3" fill="var(--accent)">
              <animateMotion dur="3.5s" repeatCount="indefinite" path="M0 45 C 40 45 40 20 80 20 S 120 70 160 70" />
            </circle>
          </svg>
        </div>
      );
    case "3d":
      return (
        <div className={cn(base, "bg-surface")}>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 h-12 w-24 -translate-x-1/2 -translate-y-1/2 rounded-md border border-accent/40"
              style={{ transform: `translate(-50%,-50%) rotateX(58deg) rotateZ(45deg) translateZ(${i * 12}px)`, transformStyle: "preserve-3d" }}
            />
          ))}
        </div>
      );
    case "cursor":
      return (
        <div className={cn(base, "bg-surface")}>
          <div className="absolute inset-0 grid-lines opacity-50" />
          <span className="absolute left-[40%] top-[45%] size-2 rounded-full bg-accent" />
          <span className="absolute left-[40%] top-[45%] size-8 -translate-x-3 -translate-y-3 rounded-full border border-accent/50" />
        </div>
      );
    case "typography":
      return (
        <div className={cn(base, "flex items-center justify-center bg-surface")}>
          <span className="text-5xl font-medium tracking-tighter text-foreground">Aa</span>
          <span className="absolute bottom-2 left-2 font-mono text-[0.5625rem] text-faint">GEIST · 300–600</span>
        </div>
      );
    case "ai":
      return (
        <div className={cn(base, "bg-surface p-3")}>
          <div className="space-y-1.5">
            <span className="block h-2 w-2/3 rounded bg-signal-red/30" />
            <span className="block h-2 w-3/4 rounded bg-signal-green/40" />
            <span className="block h-2 w-1/2 rounded bg-surface-muted" />
            <span className="block h-2 w-4/5 rounded bg-surface-muted" />
          </div>
        </div>
      );
    default:
      return (
        <div className={cn(base, "bg-surface")}>
          <div className="absolute inset-0 grid-lines opacity-40" />
        </div>
      );
  }
}

export function ExperimentCard({ experiment }: { experiment: Experiment }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface-raised p-4 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-soft">
      <ExperimentVisual kind={experiment.kind} />
      <div className="flex flex-1 flex-col px-1 pt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-medium tracking-tight text-foreground">
            {experiment.name}
          </h3>
          <span className="font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-faint">
            {experiment.kind}
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {experiment.description}
        </p>
        <p className="mt-3 text-[0.6875rem] leading-relaxed text-faint">
          Explores — {experiment.explores}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border pt-3">
          {experiment.technologies.map((t) => (
            <span key={t} className="font-mono text-[0.625rem] text-muted">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
