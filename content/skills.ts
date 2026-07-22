export interface CapabilityGroup {
  title: string;
  description: string;
  items: string[];
}

export const capabilities: CapabilityGroup[] = [
  {
    title: "Design",
    description: "Turning complexity into interfaces people can actually use.",
    items: [
      "Product & UX design",
      "Design systems",
      "Interaction design",
      "Information architecture",
      "Responsive & mobile design",
      "Prototyping",
    ],
  },
  {
    title: "Engineering",
    description: "Building the product from interface to database.",
    items: [
      "TypeScript / React / Next.js",
      "Node & server logic",
      "PostgreSQL & data modelling",
      "REST & typed APIs",
      "Auth, roles & permissions",
      "WebGL / Three.js",
    ],
  },
  {
    title: "Systems",
    description: "Designing the architecture beneath the product.",
    items: [
      "Systems architecture",
      "Payment & transaction design",
      "Third-party integrations",
      "Failure & recovery strategy",
      "Performance & scalability",
      "Security fundamentals",
    ],
  },
  {
    title: "Intelligence",
    description: "Making software that thinks alongside its users.",
    items: [
      "AI-assisted workflows",
      "Agentic tooling",
      "Retrieval & structured generation",
      "Process automation",
      "Sensor & IoT systems",
      "Data & analytics",
    ],
  },
];

// Compact tech list for marquees / footers.
export const stack: string[] = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Three.js",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Python",
  "Figma",
  "Zod",
];
