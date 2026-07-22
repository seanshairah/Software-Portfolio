import { cn } from "@/lib/utils";

/**
 * Brand mark — the System Line condensed into a monogram. A node enters on the
 * left, travels through a processing square, and emerges as a resolved product
 * point on the right: "complex systems enter, clear products emerge".
 */
export function BrandMark({
  className,
  animated = false,
}: {
  className?: string;
  animated?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className={cn("size-7", className)}
    >
      <rect
        x="10"
        y="10"
        width="12"
        height="12"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-foreground"
      />
      <path
        d="M2 16 H10 M22 16 H30"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-foreground/60"
      />
      {/* Left node slides toward the system on wordmark hover — a signal
          entering. The right node then emerges as the resolved product. */}
      <circle
        cx="3"
        cy="16"
        r="1.6"
        fill="var(--accent)"
        className="transition-transform duration-500 ease-out-expo group-hover/wordmark:translate-x-[5px]"
      />
      <circle
        cx="29"
        cy="16"
        r="1.6"
        fill="var(--accent)"
        className={cn(
          "transition-transform duration-500 ease-out-expo group-hover/wordmark:scale-150",
          animated && "animate-[system-pulse_2.4s_ease-in-out_infinite]",
        )}
        style={{ transformOrigin: "29px 16px" }}
      />
    </svg>
  );
}

/** Text wordmark with the monogram. */
export function Wordmark({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("group/wordmark inline-flex items-center gap-2.5", className)}>
      <BrandMark />
      {!compact && (
        <span className="text-[0.95rem] font-medium tracking-tight text-foreground">
          Sean Muchenje
        </span>
      )}
      {compact && (
        <span className="font-mono text-sm font-medium tracking-tight text-foreground">
          SEAN/M
        </span>
      )}
    </span>
  );
}
