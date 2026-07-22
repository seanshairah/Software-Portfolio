import type { LucideIcon } from "lucide-react";
import {
  Compass,
  Layers,
  BrainCircuit,
  Network,
  ScanSearch,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  whatIDo: string;
  whoItHelps: string;
  outcome: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    id: "product-strategy-design",
    title: "Product Strategy & Design",
    icon: Compass,
    summary:
      "Understand what to build, who it is for, and how it should work — before a line of code is written.",
    whatIDo:
      "I map the real workflow behind a product, define the roles and jobs it has to serve, and translate that into an information architecture, user journeys and an interface system that a team can actually build.",
    whoItHelps:
      "Founders and product teams sitting on a complex idea who need it shaped into a buildable, coherent product.",
    outcome:
      "A clear product direction: the problem framed, the users defined, the core flows designed, and a design system to build against.",
    deliverables: [
      "Workflow & role mapping",
      "Information architecture",
      "User journeys & key flows",
      "Interface system & UI kit",
      "Prioritised product roadmap",
    ],
  },
  {
    id: "full-stack-development",
    title: "Full-Stack Product Development",
    icon: Layers,
    summary:
      "Build secure, responsive digital products from the interface down to the database.",
    whatIDo:
      "I develop production applications end to end — typed front-ends, API and server logic, data models, auth and permissions, payments and integrations — with performance and accessibility built in from the start.",
    whoItHelps:
      "Startups and organisations that need one person who can own both the experience and the engineering.",
    outcome:
      "A working, deployable product that behaves correctly under real use — not a prototype that falls over past the happy path.",
    deliverables: [
      "Next.js / React / TypeScript front-end",
      "API & server logic",
      "Database schema & data models",
      "Auth, roles & permissions",
      "Payments & third-party integrations",
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    icon: BrainCircuit,
    summary:
      "Design intelligent workflows, agents and AI-assisted software that remove busywork without removing judgement.",
    whatIDo:
      "I identify where a process is repetitive, error-prone or slow, then design AI and automation into it — retrieval, structured generation, review loops and human checkpoints — as a dependable part of the product.",
    whoItHelps:
      "Teams drowning in manual steps, document work or coordination overhead.",
    outcome:
      "Intelligent workflows that do the heavy lifting while keeping people in control of the decisions that matter.",
    deliverables: [
      "AI workflow & agent design",
      "Retrieval & structured generation",
      "Human-in-the-loop review flows",
      "Automation of manual processes",
      "Evaluation & guardrails",
    ],
  },
  {
    id: "systems-architecture",
    title: "Systems Architecture",
    icon: Network,
    summary:
      "Plan the roles, permissions, databases, integrations, payments and infrastructure a product depends on.",
    whatIDo:
      "I design the system beneath the interface: how data is modelled, how services talk to each other, how failures are handled, and how the whole thing scales as usage and team size grow.",
    whoItHelps:
      "Products approaching real scale, or teams who need a dependable foundation before they build on top of it.",
    outcome:
      "An architecture that is explicit, resilient and documented — so growth is a decision, not an emergency.",
    deliverables: [
      "Data model & schema design",
      "Service & integration architecture",
      "Roles & permission model",
      "Payment & transaction design",
      "Failure, retry & recovery strategy",
    ],
  },
  {
    id: "product-audits",
    title: "Product Audits",
    icon: ScanSearch,
    summary:
      "Find the weaknesses in usability, architecture, scalability and product readiness — with a plan to fix them.",
    whatIDo:
      "I review an existing product against how it is actually used: where users get stuck, where the architecture will strain, where the security and edge cases are thin, and what to address first.",
    whoItHelps:
      "Teams with a live product that feels fragile, slow or hard to extend, and want an honest, prioritised read.",
    outcome:
      "A clear audit: the real problems named, ranked by impact and effort, with concrete recommendations.",
    deliverables: [
      "Usability & UX review",
      "Architecture & scalability review",
      "Security & edge-case review",
      "Prioritised findings",
      "Remediation roadmap",
    ],
  },
];
