export type SignatureInteraction =
  | "logistics-workflow"
  | "booking-lifecycle"
  | "orbit-brief"
  | "vehicle-twin"
  | "field-map"
  | "transaction-lifecycle";

export type MockupPreset =
  | "logistics"
  | "housing"
  | "blessbri"
  | "kinos"
  | "transport"
  | "farming"
  | "payments";

export type ProjectStatus =
  | "Live"
  | "Concept"
  | "In development"
  | "Prototype"
  | "Proposed architecture";

export interface RoleMapEntry {
  role: string;
  does: string;
}

export interface KeyScreen {
  title: string;
  description: string;
}

export interface NamedBlock {
  title: string;
  body: string;
}

export interface Project {
  order: number;
  featured: boolean;

  // Identity
  title: string;
  slug: string;
  category: string;
  industry: string;
  year: string;
  role: string;
  status: ProjectStatus;
  accent: string; // per-project accent (hex)
  signature: SignatureInteraction;
  mockup: MockupPreset;

  // Narrative
  tagline: string; // used on cards
  openingStatement: string; // large case-study opener
  summary: string;
  context: string;
  challenge: string; // the business problem
  solution: string; // the product concept

  // Structured detail
  users: string[];
  roleMap: RoleMapEntry[];
  goals: string[];
  research: string[];
  informationArchitecture: string[];
  journeys: string[];
  workflows: string[];
  features: string[];
  keyScreens: KeyScreen[];
  architecture: string[];
  technologies: string[];
  designDecisions: string[];
  responsive: string;
  challenges: NamedBlock[];

  // Live product URL — only for shipped systems with a public site.
  liveUrl?: string;

  // Optional / forward-looking (framed honestly)
  security?: string[];
  outcomes?: string[]; // expected / intended outcomes
  lessons?: string[];
  futureImprovements?: string[];

  // Short, first-person design annotations — Sean's decisions & voice, shown as
  // callouts on the project's interface.
  designNotes?: string[];

  // Media (rendered via mockup components; posters optional)
  heroImage?: string;
  gallery?: string[];
}
