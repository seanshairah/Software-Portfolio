import type { Project } from "./types";

export const aiDissertation: Project = {
  order: 3,
  featured: true,
  title: "AI Dissertation Platform",
  slug: "ai-dissertation",
  category: "AI Product · Writing Tool",
  industry: "Education · Research",
  year: "2025",
  role: "Product design · AI UX · Full-stack development",
  status: "In development",
  accent: "#6d5cf5",
  signature: "document-workspace",
  mockup: "dissertation",

  tagline:
    "An AI writing environment that helps a researcher structure, draft and finish a dissertation — without ghost-writing it.",
  openingStatement:
    "A dissertation is a long, lonely project with a hundred moving parts. This platform is a workspace that keeps research, structure and drafting in one place, and puts AI to work as an editor and thinking partner — one whose suggestions you accept, not obey.",
  summary:
    "An AI-assisted research, writing and project-management environment: research capture, outlining, chapter drafting, AI editing, citations, document management and subscription controls.",
  context:
    "Students juggle references in one tool, notes in another, drafts in a third, and their supervisor's feedback in email. The structure of the argument lives only in their head. AI writing tools exist, but most either do too little or write the whole thing for you.",
  challenge:
    "Build an AI writing tool that genuinely helps with a long, structured document while keeping the researcher in control of their own ideas, argument and integrity.",
  solution:
    "A document workspace organised by chapters and sections, with research and citations attached to the argument they support. AI arrives as inline, acceptable suggestions — restructure, tighten, check a citation — never as an anonymous block of generated text. The person always holds the pen.",

  users: [
    "Postgraduate and undergraduate researchers",
    "Supervisors reviewing progress",
    "Anyone writing a long, structured document",
  ],
  roleMap: [
    { role: "Researcher", does: "Captures research, outlines, drafts chapters, accepts or rejects AI edits." },
    { role: "Supervisor", does: "Reviews structure and drafts, leaves feedback in context." },
  ],
  goals: [
    "Keep research, structure and writing in one place",
    "Make AI an editor, not a ghost-writer",
    "Keep citations tied to the argument",
    "Reduce the overwhelm of a long project",
    "Preserve the researcher's voice and integrity",
  ],
  research: [
    "Talked to students about where their dissertation process breaks down",
    "Studied how existing AI writing tools help — and where they overreach",
    "Mapped the real artefacts: notes, outline, chapters, citations, feedback",
  ],
  informationArchitecture: [
    "Project → chapters → sections as the spine",
    "Research notes and citations attach to sections",
    "AI suggestions are diffs against the current text",
    "Subscription gates advanced AI and document limits",
  ],
  journeys: [
    "Researcher captures sources and notes as they read",
    "They outline chapters and sections, then start drafting",
    "AI proposes structural and line edits as inline, acceptable diffs",
    "Citations are inserted and checked against the reference list",
    "Progress and chapter status are visible at a glance",
  ],
  workflows: [
    "Research capture",
    "Outlining",
    "Chapter drafting",
    "AI editing (accept / reject)",
    "Citation management",
    "Document management & export",
    "Subscription controls",
  ],
  features: [
    "Chapter-and-section document model",
    "Research and note capture",
    "AI editing as inline, acceptable diffs",
    "Citation manager tied to the text",
    "Progress and chapter-status tracking",
    "Document management and export",
    "Subscription tiers and controls",
  ],
  keyScreens: [
    { title: "Writing workspace", description: "The chapter you're drafting, with the outline beside it and AI edits offered inline." },
    { title: "AI suggestion", description: "A proposed edit shown as a diff — accept, reject or refine, never auto-applied." },
    { title: "Citation manager", description: "Sources linked to the exact sentences that use them." },
    { title: "Project overview", description: "Every chapter with its status and word count, so progress is visible." },
  ],
  architecture: [
    "Document model of projects, chapters, sections and versions",
    "AI layer producing structured, reviewable edit suggestions",
    "Citation store linked to text ranges",
    "Subscription and usage-limit controls",
    "Autosave and version history",
  ],
  technologies: [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "AI model integration",
    "Tailwind CSS",
    "Tiptap / rich text",
  ],
  designDecisions: [
    "Chose an inline-diff UX so AI assists the writing instead of replacing it",
    "Organised everything around the argument, not the file",
    "Kept citations attached to sentences so integrity is structural",
    "Made progress visible to fight the overwhelm of a long project",
  ],
  responsive:
    "Serious writing happens on a laptop, so the workspace is desktop-first with a focused two-pane layout. On mobile it becomes a reading, reviewing and planning tool — check progress, read a chapter, accept an edit.",
  challenges: [
    {
      title: "Helpful without doing the thinking",
      body: "The central design tension was making AI clearly useful without letting it write the dissertation. Framing every suggestion as an acceptable diff keeps the author's hand on every sentence.",
    },
    {
      title: "Structure as a first-class citizen",
      body: "Most editors treat a document as one long blob. Modelling chapters and sections explicitly lets both the researcher and the AI reason about the argument, not just the prose.",
    },
  ],
  security: [
    "Documents private to their author by default",
    "AI suggestions never auto-committed to the text",
    "Subscription and usage limits enforced server-side",
  ],
  outcomes: [
    "Designed to consolidate a fragmented research process into one workspace",
    "Intended to make AI assistance compatible with academic integrity",
    "Expected to reduce the overwhelm that stalls long writing projects",
  ],
  lessons: [
    "For AI writing tools, the accept/reject boundary is the whole product.",
    "Model the argument, not the file, and the AI has something real to reason about.",
  ],
  futureImprovements: [
    "Supervisor review and inline feedback",
    "Reference discovery from the text",
    "Structure-aware plagiarism and integrity checks",
  ],
  designNotes: [
    "AI arrives as an editable diff, never a wall of generated text. You keep the pen.",
    "The document is modelled as an argument — chapters and sections — not one long blob.",
    "Progress is always visible, because the real enemy of a dissertation is the overwhelm.",
  ],
};
