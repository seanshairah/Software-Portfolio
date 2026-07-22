export interface Experiment {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  explores: string;
  kind:
    | "shader"
    | "motion"
    | "3d"
    | "cursor"
    | "typography"
    | "ai"
    | "diagram";
}

export const experiments: Experiment[] = [
  {
    id: "refraction-field",
    name: "Refraction Field",
    description:
      "A glass plane that bends the grid behind it, with subtle RGB dispersion at the edges — the visual language of the dark cinematic world.",
    technologies: ["Three.js", "GLSL", "R3F"],
    explores: "Chromatic refraction and how a material can feel engineered, not decorative.",
    kind: "shader",
  },
  {
    id: "system-signals",
    name: "System Signals",
    description:
      "Data packets travelling along a network of connectors, activating nodes in sequence — a study for the Product Engine.",
    technologies: ["SVG", "Motion", "Path animation"],
    explores: "Making data movement legible without turning it into noise.",
    kind: "motion",
  },
  {
    id: "magnetic-controls",
    name: "Magnetic Controls",
    description:
      "Buttons and handles that lean toward the cursor within a threshold, then snap back — precise, mechanical, never floaty.",
    technologies: ["Motion", "Pointer events"],
    explores: "How much magnetism feels helpful before it feels gimmicky.",
    kind: "cursor",
  },
  {
    id: "kinetic-headlines",
    name: "Kinetic Headlines",
    description:
      "Masked typography that reveals line by line on scroll, with per-word depth — the editorial reveal used across the site.",
    technologies: ["Motion", "Clip-path", "Intersection Observer"],
    explores: "Reveal timing that reads as intentional rather than delayed.",
    kind: "typography",
  },
  {
    id: "layer-explode",
    name: "Layer Explode",
    description:
      "An interface that separates into its stack — surface, data, logic, infrastructure — as you scroll through it.",
    technologies: ["R3F", "Scroll", "Depth"],
    explores: "Showing that a screen is only the top layer of a system.",
    kind: "3d",
  },
  {
    id: "assistant-canvas",
    name: "Assistant Canvas",
    description:
      "An AI writing surface where suggestions arrive as inline, acceptable diffs rather than a separate chat — human-in-the-loop by default.",
    technologies: ["React", "State machines", "AI UX"],
    explores: "AI interfaces that keep the person in control of the document.",
    kind: "ai",
  },
];
