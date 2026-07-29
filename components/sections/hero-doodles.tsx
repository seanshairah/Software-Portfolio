/**
 * Hero doodles — soft, hand-drawn marks scattered through the hero's negative
 * space to give it personality without shouting. All strokes use `currentColor`
 * at low opacity so the set reads the same in the light and dark worlds; a
 * couple of accent marks add a quiet pop. Purely decorative and non-interactive;
 * the gentle drift is disabled under `prefers-reduced-motion` (see globals.css).
 */

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Doodle({
  className,
  style,
  float,
  children,
  label,
}: {
  className?: string;
  style?: React.CSSProperties;
  float?: "a" | "b" | "c";
  children: React.ReactNode;
  label: string;
}) {
  return (
    <svg
      aria-hidden
      role="img"
      data-label={label}
      className={`absolute ${float ? `doodle-float-${float}` : ""} ${className ?? ""}`}
      style={style}
      viewBox="0 0 60 60"
    >
      {children}
    </svg>
  );
}

export function HeroDoodles() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* sparkle — top right, accent */}
      <Doodle label="sparkle" float="a" className="right-[6%] top-[16%] size-10 text-accent/45 sm:size-12">
        <path {...stroke} d="M30 8C30 20 32 28 52 30C32 32 30 40 30 52C30 40 28 32 8 30C28 28 30 20 30 8Z" />
      </Doodle>

      {/* bezier curve with handles — mid right, a nod to the craft */}
      <Doodle label="bezier" float="b" className="right-[10%] top-[42%] size-24 text-foreground/[0.14] sm:right-[14%]">
        <path {...stroke} d="M8 46C8 22 52 40 52 14" />
        <circle {...stroke} cx="8" cy="46" r="3" />
        <circle {...stroke} cx="52" cy="14" r="3" />
        <path {...stroke} strokeDasharray="2 4" d="M8 46L20 30M52 14L40 30" />
      </Doodle>

      {/* squiggly underline — far right lower */}
      <Doodle label="squiggle" float="c" className="right-[7%] bottom-[16%] h-8 w-28 text-foreground/[0.13]">
        <path {...stroke} d="M4 34C10 24 16 44 22 34S34 24 40 34 52 44 56 34" />
      </Doodle>

      {/* little sun — Harare — top, subtle */}
      <Doodle label="sun" float="b" className="left-[42%] top-[10%] hidden size-12 text-accent/35 lg:block">
        <circle {...stroke} cx="30" cy="30" r="9" />
        <path {...stroke} d="M30 8V14M30 46V52M8 30H14M46 30H52M14 14L18 18M46 46L42 42M46 14L42 18M14 46L18 42" />
      </Doodle>

      {/* dotted orbit — bottom left */}
      <Doodle label="orbit" float="a" className="left-[3%] bottom-[12%] hidden size-20 text-foreground/[0.12] md:block">
        <ellipse {...stroke} strokeDasharray="1.5 5" cx="30" cy="30" rx="24" ry="11" transform="rotate(-24 30 30)" />
        <circle fill="currentColor" stroke="none" cx="12" cy="38" r="2.4" className="text-accent/50" />
      </Doodle>

      {/* hand-drawn arrow — points toward the work */}
      <Doodle label="arrow" float="c" className="right-[24%] bottom-[7%] hidden h-10 w-16 text-foreground/[0.16] lg:block">
        <path {...stroke} d="M6 12C22 10 40 18 50 40" />
        <path {...stroke} d="M42 38L50 42L52 33" />
      </Doodle>

      {/* tiny asterisk — near the eyebrow, top left */}
      <Doodle label="asterisk" float="b" className="left-[1%] top-[30%] hidden size-7 text-foreground/[0.16] sm:block">
        <path {...stroke} d="M30 14V46M16 22L44 38M44 22L16 38" />
      </Doodle>
    </div>
  );
}
