import { cn } from "@/lib/utils";
import type { MockupPreset } from "@/content/projects/types";

/**
 * AppIcon — a bespoke, Apple-style app icon for each product.
 *
 * A true superellipse "squircle" tile (not a plain rounded rect) carries a
 * per-project accent gradient with a specular top highlight and a fine glass
 * inner edge, wrapping a hand-drawn glyph unique to each system. White glyph on
 * a coloured tile — the iOS/macOS home-screen language, tuned to this palette.
 */

// Apple-style superellipse (n≈5), normalised to a 0–100 box. Generated once.
const SQUIRCLE =
  "M100.0,50.0 L100.0,65.4 L99.9,70.3 L99.8,73.8 L99.6,76.7 L99.3,79.1 L99.0,81.3 L98.6,83.2 L98.2,84.9 L97.7,86.5 L97.2,87.9 L96.6,89.2 L95.9,90.4 L95.2,91.5 L94.4,92.6 L93.5,93.5 L92.6,94.4 L91.5,95.2 L90.4,95.9 L89.2,96.6 L87.9,97.2 L86.5,97.7 L84.9,98.2 L83.2,98.6 L81.3,99.0 L79.1,99.3 L76.7,99.6 L73.8,99.8 L70.3,99.9 L65.4,100.0 L50.0,100.0 L34.6,100.0 L29.7,99.9 L26.2,99.8 L23.3,99.6 L20.9,99.3 L18.7,99.0 L16.8,98.6 L15.1,98.2 L13.5,97.7 L12.1,97.2 L10.8,96.6 L9.6,95.9 L8.5,95.2 L7.4,94.4 L6.5,93.5 L5.6,92.6 L4.8,91.5 L4.1,90.4 L3.4,89.2 L2.8,87.9 L2.3,86.5 L1.8,84.9 L1.4,83.2 L1.0,81.3 L0.7,79.1 L0.4,76.7 L0.2,73.8 L0.1,70.3 L0.0,65.4 L0.0,50.0 L0.0,34.6 L0.1,29.7 L0.2,26.2 L0.4,23.3 L0.7,20.9 L1.0,18.7 L1.4,16.8 L1.8,15.1 L2.3,13.5 L2.8,12.1 L3.4,10.8 L4.1,9.6 L4.8,8.5 L5.6,7.4 L6.5,6.5 L7.4,5.6 L8.5,4.8 L9.6,4.1 L10.8,3.4 L12.1,2.8 L13.5,2.3 L15.1,1.8 L16.8,1.4 L18.7,1.0 L20.9,0.7 L23.3,0.4 L26.2,0.2 L29.7,0.1 L34.6,0.0 L50.0,0.0 L65.4,0.0 L70.3,0.1 L73.8,0.2 L76.7,0.4 L79.1,0.7 L81.3,1.0 L83.2,1.4 L84.9,1.8 L86.5,2.3 L87.9,2.8 L89.2,3.4 L90.4,4.1 L91.5,4.8 L92.6,5.6 L93.5,6.5 L94.4,7.4 L95.2,8.5 L95.9,9.6 L96.6,10.8 L97.2,12.1 L97.7,13.5 L98.2,15.1 L98.6,16.8 L99.0,18.7 L99.3,20.9 L99.6,23.3 L99.8,26.2 L99.9,29.7 L100.0,34.6 L100.0,50.0Z";

type RGB = [number, number, number];

function parseHex(hex: string): RGB {
  const h = hex.replace("#", "");
  const n =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h;
  return [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16)) as RGB;
}
function mix(a: RGB, b: RGB, t: number): RGB {
  return a.map((v, i) => Math.round(v + (b[i] - v) * t)) as RGB;
}
const css = (c: RGB) => `rgb(${c[0]},${c[1]},${c[2]})`;
const WHITE: RGB = [255, 255, 255];
const BLACK: RGB = [0, 0, 0];

/** The accent tile's vertical sheen (lighter top → darker bottom), as a CSS
 *  gradient string. Shared with the OG image cards so share previews match. */
export function appIconGradient(accent: string, angle = 150): string {
  const base = parseHex(accent);
  return `linear-gradient(${angle}deg, ${css(mix(base, WHITE, 0.22))}, ${css(mix(base, BLACK, 0.24))})`;
}

/**
 * Hand-drawn glyphs, one per system, designed in the 0–100 tile space. Filled
 * elements set their own fill; everything else inherits the white monoline.
 * Exported so the OG share cards can reuse the exact same marks.
 */
export const PROJECT_GLYPHS: Record<MockupPreset, React.ReactNode> = {
  // Frazier — freight cleared through a customs checkpoint, then moving on.
  logistics: [
    <circle key="a" cx="19" cy="50" r="5.4" fill="#fff" stroke="none" />,
    <path key="b" d="M25 50 H37" />,
    <path key="c" d="M50 34 L66 50 L50 66 L34 50 Z" />,
    <path key="d" d="M65 50 H77" />,
    <path key="e" d="M71 44 L81 50 L71 56" />,
  ],
  // Ivy House — a single gabled home with a lit window and a door.
  housing: [
    <path key="a" d="M26 54 L50 33 L74 54" />,
    <path key="b" d="M34 51 V74 H66 V51" />,
    <path key="c" d="M45 74 V63 H55 V74" />,
    <circle key="d" cx="50" cy="47" r="3.6" fill="#fff" stroke="none" />,
  ],
  // BlessBri — two residences of different heights: a multi-residence portfolio.
  blessbri: [
    <path key="a" d="M25 75 H75" />,
    <path key="b" d="M32 46 H48 V75 H32 Z" />,
    <path key="c" d="M54 55 H70 V75 H54 Z" />,
    <circle key="d" cx="40" cy="55" r="2.6" fill="#fff" stroke="none" />,
    <circle key="e" cx="40" cy="64.5" r="2.6" fill="#fff" stroke="none" />,
    <circle key="f" cx="62" cy="64.5" r="2.6" fill="#fff" stroke="none" />,
  ],
  // KinOS — a family in orbit: two crossing rings, a core, and members on them.
  kinos: [
    <ellipse key="a" cx="50" cy="50" rx="31" ry="12" transform="rotate(-24 50 50)" strokeWidth="5.5" />,
    <ellipse key="b" cx="50" cy="50" rx="31" ry="12" transform="rotate(24 50 50)" strokeWidth="5.5" />,
    <circle key="c" cx="50" cy="50" r="6.5" fill="#fff" stroke="none" />,
    <circle key="d" cx="78.3" cy="37.4" r="4" fill="#fff" stroke="none" />,
    <circle key="e" cx="21.7" cy="62.6" r="4" fill="#fff" stroke="none" />,
  ],
  // SAFE — a shield sensing its surroundings: waves rising from a source node.
  transport: [
    <path key="a" d="M50 29 L69 37 V53 C69 65 60 71 50 75 C40 71 31 65 31 53 V37 Z" />,
    <path key="b" d="M35 60 Q50 44 65 60" opacity="0.7" />,
    <path key="c" d="M41 58 Q50 48 59 58" />,
    <circle key="d" cx="50" cy="61" r="3.4" fill="#fff" stroke="none" />,
  ],
  // Msasa — a seedling rising from a furrowed field: land and growth at work.
  farming: [
    <path key="a" d="M50 68 V44" />,
    <path key="b" d="M50 54 C41 54 35 47 35.5 39 C44 40 50 47 50 54 Z" fill="#fff" stroke="none" />,
    <path key="c" d="M50 49 C59 49 65 42 64.5 34 C56 35 50 42 50 49 Z" fill="#fff" stroke="none" />,
    <path key="d" d="M30 72 Q50 66 70 72" />,
  ],
  // Payments — a padlock: value moving under guarantee.
  payments: [
    <rect key="a" x="36" y="52" width="28" height="23" rx="4.5" />,
    <path key="b" d="M43 52 V45.5 A7 7 0 0 1 57 45.5 V52" />,
    <circle key="c" cx="50" cy="60.5" r="3.3" fill="#fff" stroke="none" />,
    <path key="d" d="M50 61 V67" strokeWidth="4.5" />,
  ],
};

export function AppIcon({
  accent,
  preset,
  label,
  className,
  shadow = true,
}: {
  accent: string;
  preset: MockupPreset;
  label?: string;
  className?: string;
  /** Soft outer shadow that follows the squircle — lifts the tile on light surfaces. */
  shadow?: boolean;
}) {
  const base = parseHex(accent);
  const top = css(mix(base, WHITE, 0.22));
  const bottom = css(mix(base, BLACK, 0.24));
  // Deterministic, collision-free ids (accents are unique per project).
  const uid = `ai-${accent.replace("#", "").toLowerCase()}`;

  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("size-14 shrink-0", className)}
      role="img"
      aria-label={label ? `${label} app icon` : "App icon"}
      style={shadow ? { filter: "drop-shadow(0 2px 7px rgba(10,10,12,0.22))" } : undefined}
    >
      <defs>
        <linearGradient id={`${uid}-fill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={top} />
          <stop offset="1" stopColor={bottom} />
        </linearGradient>
        <linearGradient id={`${uid}-spec`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.32" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.05" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <clipPath id={`${uid}-clip`}>
          <path d={SQUIRCLE} />
        </clipPath>
      </defs>

      {/* Accent tile */}
      <path d={SQUIRCLE} fill={`url(#${uid}-fill)`} />

      {/* Specular highlight + glass inner edge, clipped to the squircle */}
      <g clipPath={`url(#${uid}-clip)`}>
        <path d={SQUIRCLE} fill={`url(#${uid}-spec)`} />
        <path d={SQUIRCLE} fill="none" stroke="rgba(255,255,255,0.30)" strokeWidth="1.4" />
      </g>

      {/* Glyph */}
      <g
        stroke="#fff"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.97"
      >
        {PROJECT_GLYPHS[preset]}
      </g>
    </svg>
  );
}
