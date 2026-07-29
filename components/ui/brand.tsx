import { cn } from "@/lib/utils";

/**
 * Brand mark — a hand-drawn little guy. It's Sean: a scribbled portrait that
 * gives the site a human, personal signature instead of an abstract logo.
 * Monoline and drawn with `currentColor`, so it reads cleanly in both the
 * light and dark worlds. On wordmark hover he tilts his head; with `animated`
 * he blinks now and then.
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
      className={cn("size-7 text-foreground", className)}
    >
      <g
        className="origin-bottom transition-transform duration-500 ease-out-expo group-hover/wordmark:-rotate-[7deg]"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* jaw / chin */}
        <path d="M8 15.2C8 20.4 11.4 23.8 16 23.8C20.6 23.8 24 20.4 24 15.2" />
        {/* scribbled hair across the crown */}
        <path d="M8 15.2C7.3 10.2 9.4 6.3 12 6.1C11.7 7.6 13.2 8 14 6.4C14.9 8 17.1 8 18 6.4C18.8 8 20.3 7.6 20 6.1C22.6 6.3 24.7 10.2 24 15.2" />
        {/* smile */}
        <path d="M12.8 18C14.2 19.8 17.8 19.8 19.2 18" />
      </g>
      {/* eyes — filled dots; blink slowly when animated */}
      <g
        fill="currentColor"
        className={cn("text-foreground", animated && "animate-[doodle-blink_4s_ease-in-out_infinite]")}
        style={{ transformOrigin: "center 15px" }}
      >
        <circle cx="13" cy="14.6" r="1.05" />
        <circle cx="19" cy="14.6" r="1.05" />
      </g>
    </svg>
  );
}

/** Text wordmark with the doodle mark. */
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
