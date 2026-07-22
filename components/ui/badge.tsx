import { cn } from "@/lib/utils";

type Tone = "default" | "accent" | "outline" | "success" | "danger";

const tones: Record<Tone, string> = {
  default: "bg-surface-muted text-muted border-transparent",
  accent: "bg-accent-soft text-accent border-transparent",
  outline: "bg-transparent text-muted border-border",
  success: "bg-transparent text-signal-green border-border",
  danger: "bg-transparent text-signal-red border-border",
};

export function Badge({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.14em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Small pulsing availability indicator. */
export function StatusDot({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted",
        className,
      )}
    >
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal-green opacity-60 [animation-duration:2.4s]" />
        <span className="relative inline-flex size-2 rounded-full bg-signal-green" />
      </span>
      {label}
    </span>
  );
}
