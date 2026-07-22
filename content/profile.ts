export const profile = {
  name: "Sean Muchenje",
  wordmark: "SEAN/M",
  monogram: "SM",
  location: "Harare, Zimbabwe",
  email: "seanshairah@gmail.com",
  timezone: "CAT · UTC+2",

  roles: [
    "Software Designer",
    "Product Designer",
    "Full-Stack Product Developer",
    "AI Systems Builder",
    "Creative Developer",
    "Systems Architect",
    "Mechatronics Engineer",
    "Intelligent Automation Specialist",
  ],

  // Positioning
  primaryStatement:
    "Software designer building intelligent products, AI systems and scalable digital platforms.",
  supportingStatement:
    "Based in Harare, Zimbabwe. Working across product strategy, interface design, full-stack engineering and intelligent automation.",

  // Hero
  hero: {
    headline: "I design the systems behind intelligent digital products.",
    supporting:
      "I'm Sean Muchenje, a software designer and full-stack product developer based in Harare. I turn complex workflows, business operations and technical ideas into clear, scalable software products.",
    primaryCta: { label: "View Selected Work", href: "/work" },
    secondaryCta: { label: "Start a Project", href: "/contact" },
    availability: {
      status: "available" as const,
      label: "Open to select projects — 2026",
    },
  },

  // Short bio used on the homepage
  shortBio:
    "My work sits at the intersection of design, engineering and business operations. I study how people and organisations actually work, turn those processes into clear product systems, and build the interfaces and infrastructure that support them.",

  // Long bio (about page) — grounded, no clichés
  bio: [
    "My work sits at the intersection of design, engineering and business operations. I study how people and organisations work, turn those processes into clear product systems, and build the interfaces and infrastructure that support them.",
    "I trained as a mechatronics engineer, which is where I learned to think about systems as a whole — sensors, control logic, actuators and feedback all working as one. I carried that mindset into software. A logistics platform, a payment engine or an AI writing tool is the same problem at a different altitude: understand the real process, model it honestly, and build something that holds up under load.",
    "Working from Harare shapes how I build. Constraints — connectivity, budgets, mixed devices, real operational messiness — are not edge cases here, they are the default. Designing for them produces software that is resilient everywhere, and it is why I care as much about the empty state, the failed payment and the offline path as I do about the hero screen.",
    "I'm most interested in the space where AI, automation and everyday operations meet: intelligent systems that remove busywork without removing judgement. I take on a small number of projects at a time so I can stay close to both the design and the code.",
  ],

  exploring: [
    "AI-assisted product workflows and agentic tooling",
    "Resilient payment and transaction architecture",
    "Sensor-driven safety and transport systems",
    "Design systems that scale across roles and devices",
  ],

  // Fact strip — verifiable, non-inflated
  facts: [
    { label: "Based in", value: "Harare, Zimbabwe" },
    { label: "Discipline", value: "Software design + engineering" },
    { label: "Background", value: "Mechatronics" },
    { label: "Focus", value: "AI, automation, systems" },
  ],
} as const;

export type Profile = typeof profile;
