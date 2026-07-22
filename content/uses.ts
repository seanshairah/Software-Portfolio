export interface UsesGroup {
  category: string;
  items: { name: string; note: string }[];
}

export const uses: UsesGroup[] = [
  {
    category: "Design",
    items: [
      { name: "Figma", note: "Interface design, systems and prototyping" },
      { name: "Geist type family", note: "The typographic system used across this site" },
      { name: "Real data, always", note: "Believable content over lorem ipsum in every mockup" },
    ],
  },
  {
    category: "Development",
    items: [
      { name: "Next.js + React", note: "App Router, server components by default" },
      { name: "TypeScript", note: "Typed end to end, front to back" },
      { name: "Tailwind CSS", note: "Token-driven design systems" },
      { name: "PostgreSQL", note: "Relational data modelling; Neon on serverless" },
      { name: "Three.js / R3F", note: "WebGL when it earns its place" },
    ],
  },
  {
    category: "Systems & AI",
    items: [
      { name: "Zod", note: "Runtime validation shared client and server" },
      { name: "Message queues", note: "Idempotent, retryable processing" },
      { name: "AI model integration", note: "Structured, reviewable, human-in-the-loop" },
    ],
  },
  {
    category: "Hardware & tooling",
    items: [
      { name: "Mechatronics background", note: "Sensors, control logic, actuators, feedback" },
      { name: "VS Code", note: "Primary editor" },
      { name: "Vercel", note: "Deployment and preview environments" },
    ],
  },
];
