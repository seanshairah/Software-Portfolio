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
    headline: "I design the systems behind products people actually enjoy using.",
    supporting:
      "I'm Sean Muchenje, a software designer and engineer based in Harare. I turn complex workflows, ambitious ideas and technical systems into clear, scalable digital products.",
    // A subtle, confident line of personality — not a comedy act.
    personalityLine:
      "Part designer. Part engineer. Occasionally negotiates with stubborn APIs.",
    primaryCta: { label: "View Selected Work", href: "/work" },
    secondaryCta: { label: "Start a Project", href: "/contact" },
    availability: {
      status: "available" as const,
      label: "Open to select projects — 2026",
    },
  },

  // Short bio used on the homepage
  shortBio:
    "I enjoy the part of product design where messy real-world operations finally begin to make sense on a screen. I study how people and organisations actually work, turn those processes into clear product systems, and build the interfaces and infrastructure that hold them up.",

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

  // Subtle, confident personality — used for microcopy across the site.
  personality: {
    footerBuilt:
      "Built with strategy, TypeScript and unreasonable attention to spacing.",
    footerLate: "Some ideas begin on paper. Others begin at 2:13 AM.",
    copyEmailIdle: "Copy email",
    copyEmailDone: "Copied — your move.",
    notFoundKicker: "This route never made it past the whiteboard.",
    // Small witty labels that reward attention.
    quips: [
      "Yes, the mobile version was designed properly.",
      "No dashboards were harmed making this portfolio.",
      "The API behaved. Eventually.",
    ],
  },
} as const;

export type Profile = typeof profile;
