/**
 * Hero doodles — a soft, hand-drawn field of software-design motifs (code tags,
 * a rocket, a gear, a lightbulb, a cloud, a terminal, a paper plane, a brain,
 * infinity, wifi, a target, braces, arrows…). It gives the hero personality in
 * the spirit of a doodle sketchbook without shouting.
 *
 * Everything is drawn with `currentColor` at low opacity, so the set reads the
 * same in the light and dark worlds; a few accent marks add a quiet pop. The
 * dense cluster lives in the hero's right-hand negative space (never behind the
 * headline/paragraph), with a light scattering across the top band. Purely
 * decorative (`aria-hidden`, `pointer-events-none`); the gentle drift is
 * disabled under `prefers-reduced-motion` (see globals.css).
 */

type Tone = "fg" | "accent";
type Float = "a" | "b" | "c";

function D({
  vb,
  className,
  float,
  tone = "fg",
  sw = 2.2,
  children,
}: {
  vb: string;
  className: string;
  float?: Float;
  tone?: Tone;
  sw?: number;
  children: React.ReactNode;
}) {
  return (
    <svg
      aria-hidden
      viewBox={vb}
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`absolute ${tone === "accent" ? "text-accent" : "text-foreground"} ${
        float ? `doodle-float-${float}` : ""
      } ${className}`}
    >
      {children}
    </svg>
  );
}

export function HeroDoodles() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* ——— top band: a light scattering across the whole width ——— */}

      {/* sparkle (accent) */}
      <D vb="0 0 32 32" tone="accent" float="a" className="left-[46%] top-[7%] size-8 opacity-45 sm:size-10">
        <path d="M16 3C16 11 17 15 29 16C17 17 16 21 16 29C16 21 15 17 3 16C15 15 16 11 16 3Z" />
      </D>
      {/* cloud */}
      <D vb="0 0 48 32" float="b" className="right-[34%] top-[8%] hidden w-16 opacity-[0.15] md:block">
        <path d="M12 25C6 25 5 16 11 15C11 8 22 7 24 13C31 9 38 15 34 22Z" />
      </D>
      {/* semicolon / slashes token */}
      <D vb="0 0 40 24" float="c" className="left-[6%] top-[9%] hidden w-12 opacity-[0.16] lg:block">
        <path d="M8 8H14M8 16H20M26 6L32 12L26 18" />
      </D>

      {/* ——— right-hand cluster: the dense doodle sketchbook ——— */}

      {/* code tag </> */}
      <D vb="0 0 48 32" float="b" sw={2.4} className="right-[30%] top-[15%] hidden w-16 opacity-[0.18] sm:block">
        <path d="M16 8L8 16L16 24M32 8L40 16L32 24M28 6L20 26" />
      </D>
      {/* rocket */}
      <D vb="0 0 40 40" float="a" className="right-[8%] top-[16%] hidden size-14 opacity-[0.17] sm:block">
        <path d="M20 4C27 10 27 20 24 27H16C13 20 13 10 20 4Z" />
        <circle cx="20" cy="15" r="3" />
        <path d="M16 25L11 31L15.5 29M24 25L29 31L24.5 29M17.5 28C18.5 32 21.5 32 22.5 28" />
      </D>
      {/* braces { } */}
      <D vb="0 0 40 40" float="c" className="right-[44%] top-[20%] hidden size-11 opacity-[0.15] lg:block">
        <path d="M16 6C12 6 13 16 8 20C13 24 12 34 16 34M24 6C28 6 27 16 32 20C27 24 28 34 24 34" />
      </D>
      {/* magnifier */}
      <D vb="0 0 36 36" float="b" className="right-[38%] top-[30%] hidden size-10 opacity-[0.16] md:block">
        <circle cx="15" cy="15" r="9" />
        <path d="M22 22L31 31" />
      </D>
      {/* gear (accent) */}
      <D vb="0 0 40 40" tone="accent" float="c" className="right-[20%] top-[30%] hidden size-12 opacity-40 sm:block">
        <circle cx="20" cy="20" r="7.5" />
        <circle cx="20" cy="20" r="2.6" />
        <path d="M20 5V9M20 31V35M5 20H9M31 20H35M10 10L13 13M27 27L30 30M30 10L27 13M10 30L13 27" />
      </D>
      {/* terminal window */}
      <D vb="0 0 44 34" float="a" sw={2} className="right-[6%] top-[40%] hidden w-16 opacity-[0.16] sm:block">
        <rect x="4" y="5" width="36" height="24" rx="3" />
        <path d="M4 12H40" />
        <circle cx="8.5" cy="8.5" r="0.9" />
        <circle cx="12" cy="8.5" r="0.9" />
        <path d="M9 18H17M21 18H31M9 23H15M19 23H27" />
      </D>
      {/* lightbulb (accent) */}
      <D vb="0 0 32 40" tone="accent" float="b" className="right-[34%] top-[42%] hidden h-12 opacity-40 md:block">
        <path d="M16 4C23 4 27 9 27 15C27 20 23 22 22 26H10C9 22 5 20 5 15C5 9 9 4 16 4Z" />
        <path d="M11 30H21M13 34H19" />
      </D>
      {/* wifi */}
      <D vb="0 0 36 28" float="c" className="right-[24%] top-[52%] hidden w-11 opacity-[0.16] lg:block">
        <path d="M6 12C12 5 24 5 30 12M10 17C15 12 21 12 26 17M14 21C16 19 20 19 22 21" />
        <circle cx="18" cy="24" r="1.3" fill="currentColor" stroke="none" />
      </D>
      {/* infinity */}
      <D vb="0 0 48 28" float="a" className="right-[12%] top-[54%] hidden w-16 opacity-[0.15] sm:block">
        <path d="M24 14C20 8 10 8 10 14C10 20 20 20 24 14C28 8 38 8 38 14C38 20 28 20 24 14Z" />
      </D>
      {/* bezier curve */}
      <D vb="0 0 40 40" float="b" className="right-[42%] top-[58%] hidden size-12 opacity-[0.14] lg:block">
        <path d="M6 32C6 14 34 26 34 8" />
        <circle cx="6" cy="32" r="2.4" />
        <circle cx="34" cy="8" r="2.4" />
        <path strokeDasharray="1.5 3" d="M6 32L15 22M34 8L25 18" />
      </D>
      {/* target */}
      <D vb="0 0 36 36" float="c" className="right-[30%] bottom-[20%] hidden size-11 opacity-[0.15] md:block">
        <circle cx="18" cy="18" r="13" />
        <circle cx="18" cy="18" r="7.5" />
        <circle cx="18" cy="18" r="2" fill="currentColor" stroke="none" />
      </D>
      {/* brain */}
      <D vb="0 0 40 36" float="a" sw={2} className="right-[7%] bottom-[12%] hidden w-14 opacity-[0.15] sm:block">
        <path d="M20 6C14 4 8 8 9 14C4 16 5 24 11 25C12 30 20 31 20 26" />
        <path d="M20 6C26 4 32 8 31 14C36 16 35 24 29 25C28 30 20 31 20 26" />
        <path d="M20 8V26M14 14C16 15 16 18 14 19M26 14C24 15 24 18 26 19" />
      </D>
      {/* paper plane (accent) */}
      <D vb="0 0 40 36" tone="accent" float="b" className="right-[44%] bottom-[16%] hidden w-12 opacity-40 lg:block">
        <path d="M4 18L36 4L24 32L18 22Z" />
        <path d="M4 18L18 22L36 4" />
      </D>
      {/* monitor */}
      <D vb="0 0 40 36" float="c" sw={2} className="right-[18%] bottom-[9%] hidden w-14 opacity-[0.15] md:block">
        <rect x="5" y="6" width="30" height="20" rx="2" />
        <path d="M16 26L15 31H25L24 26M12 31H28" />
      </D>
      {/* curved arrow toward the work */}
      <D vb="0 0 40 32" float="a" className="right-[36%] bottom-[7%] hidden w-14 opacity-[0.18] lg:block">
        <path d="M4 10C14 6 30 8 34 24" />
        <path d="M27 22L34 25L36 17" />
      </D>
    </div>
  );
}
