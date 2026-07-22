# Design System — The Digital Systems Studio

The visual and interaction system behind Sean Muchenje's portfolio. One
concept, one signature, two worlds. Every component is world-agnostic: it reads
semantic tokens that resolve differently in the light editorial world and the
dark cinematic world.

---

## 1. Creative concept

> **Complex systems enter. Clear products emerge.**

The site is an interactive studio where messy human/business/technical
complexity is resolved into clean digital products. This is expressed through:

- **The Product Engine** — the WebGL hero where interface layers, user nodes,
  databases, APIs, AI points, payment routes and automation pathways assemble
  into a coherent product.
- **The System Line** — a single thin line that travels the whole experience,
  representing the journey from an idea to a working product. It is straight in
  editorial sections, networked in architecture, curved in process, refracted
  in WebGL, and condensed to a mark in the navigation.

No unrelated motifs. No decorative glowing spheres. Every visual supports the
idea that Sean designs the _system behind_ a product, not just the screen.

---

## 2. The two worlds

| World              | Where                                             | Character                                                             |
| ------------------ | ------------------------------------------------- | -------------------------------------------------------------------- |
| **Light Editorial** | About, Services, Process, project reading, contact | Warm neutral canvas, near-black type, fine grey borders, soft blue accent, generous negative space |
| **Dark Cinematic**  | Hero, WebGL, featured moments, transitions, final CTA | Near-black graphite surfaces, glass materials, chromatic edges, technical labels, high contrast |

Implementation: sections opt into the dark world with `data-world="dark"`. The
global theme toggle flips `:root`. Both resolve the same token contract, so a
component never needs to know which world it is in.

---

## 3. Colour tokens

Semantic, not literal. Defined in `app/globals.css` for both worlds.

| Token                  | Light        | Dark         | Use                          |
| ---------------------- | ------------ | ------------ | ---------------------------- |
| `--background`         | `#f3f2ee`    | `#0b0c0e`    | Page canvas                  |
| `--surface`            | `#fcfbf8`    | `#15171a`    | Cards, panels                |
| `--surface-muted`      | `#e8e7e2`    | `#202328`    | Recessed fills               |
| `--surface-raised`     | `#ffffff`    | `#1b1e22`    | Elevated product containers  |
| `--foreground`         | `#111214`    | `#f7f5ef`    | Primary text                 |
| `--muted`              | `#5c5d63`    | `#9da4ad`    | Secondary text               |
| `--faint`              | `#929398`    | `#676d75`    | Tertiary text / labels       |
| `--border`             | 10% ink      | 12% bone     | Hairlines                    |
| `--border-strong`      | 20% ink      | 26% bone     | Emphasised dividers          |
| `--accent`             | `#1268f3`    | `#3c7dff`    | Primary action, links        |
| `--signal-red/blue/green` | see file  | see file     | System states — used sparingly |

Signal colours only appear inside product mockups, diagrams and status pills —
never as decoration.

---

## 4. Typography

Two families only.

- **Geist** (`--font-sans`) — display and body. Weights 300–600; headings use
  500 with `-0.02em` tracking and balanced wrapping.
- **Geist Mono** (`--font-mono`) — technical labels, eyebrows, code, data
  annotations, coordinates. Set via the `.label` utility (11px, `0.18em`,
  uppercase).

Type scale (fluid via `clamp` in components): display 3.25–6rem · h1 2.5–4rem ·
h2 1.75–2.75rem · h3 1.25–1.5rem · body 1–1.125rem · small 0.8125rem.

Rules: no more than two families; body never below 15px; limited weights; large
headlines; restrained bold.

---

## 5. Spacing, grid & breakpoints

- **Spacing**: Tailwind 4-based scale. Section rhythm uses `py-24`→`py-40`.
- **Container**: `.shell` — `max-width: 88rem`, responsive inline padding
  (20px → 40px → 64px).
- **Grid**: 12 columns desktop, 8 tablet, 4 mobile. Editorial asymmetry — content
  is deliberately off-centre; sections are not all centred.
- **Breakpoints** tested: 320, 375, 390, 430, 768, 1024, 1280, 1440, 1920.

---

## 6. Radius, borders, shadows

- **Radius**: `sm 6px · md 10px · lg 16px · xl 24px · 2xl 32px · 3xl 44px`.
  Product containers use `xl`–`2xl`.
- **Borders**: 1px hairlines are the primary separation device. Shadows are
  minimal in the light world.
- **Shadows**: `--shadow-soft` for resting cards, `--shadow-raised` for lifted
  product mockups. The dark world leans on light and border, not shadow.

---

## 7. Motion principles

Precise · mechanical · smooth · spatial · purposeful. Every animation must
explain, guide or reinforce.

- Easing: `--ease-out-expo` (reveals), `--ease-in-out-quint` (transitions).
- Techniques: masked typography, layered reveals, depth transitions, shared
  layout, magnetic controls, path animation (System Line), scroll-linked
  storytelling.
- Banned: bouncing, constant floating, typewriter, long loaders, animation on
  every element, scroll hijacking.
- Smooth scroll (Lenis) on desktop only; native on touch and reduced-motion.

---

## 8. WebGL behaviour

- **Product Engine** (R3F) renders the hero system. Pointer parallax, scroll
  layer separation, sequenced node activation, travelling data signals.
- **Tiers** (`lib/performance.ts`): `premium` (full), `balanced` (reduced
  geometry, capped DPR), `lightweight` (static SVG fallback).
- Guards: WebGL support detection, DPR ceilings, viewport + tab-visibility
  pausing, proper Three.js disposal, reduced-motion → fallback.
- Every fact shown in WebGL also exists in accessible HTML (`WebGLFallback`).

---

## 9. Interaction states

- Focus: 2px accent outline, 3px offset, always visible (`:focus-visible`).
- Hover: subtle lift / border-strengthen / accent reveal — never the only way
  to access information.
- Active route: indicated in nav via the System Line mark + label weight.
- Touch targets: ≥44px. No hover-only functionality.

---

## 10. Accessibility

Semantic HTML, correct heading order, skip link, keyboard operability, visible
focus, labelled forms, reduced-motion handling, descriptive alt text, HTML
equivalents for canvas content, no flashing. Target WCAG AA contrast in both
worlds.

---

## 11. Performance strategy

Server components by default; client only where interaction demands it. Dynamic
import + Suspense for WebGL. Lazy media, viewport pausing, DPR limits, package
import optimisation, no unnecessary libraries. The site is fully usable with
JavaScript-heavy features disabled and with motion off.
