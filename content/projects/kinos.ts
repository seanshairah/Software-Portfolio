import type { Project } from "./types";

export const kinos: Project = {
  order: 3,
  featured: true,
  title: "KinOS",
  slug: "kinos",
  category: "Family Operating System · Consumer",
  industry: "Family Care · Consent-native Software",
  year: "2026",
  role: "Product design · Design system · Full-stack development",
  status: "Live",
  accent: "#6c69b8",
  signature: "orbit-brief",
  mockup: "kinos",

  tagline:
    "The private family operating system — the people you love, in one calm orbit.",
  openingStatement:
    "Caring for family is a hundred small signals scattered across a dozen apps and three group chats. KinOS turns those signals — check-ins, receipts, medications, appointments, voice notes — into quiet awareness: what is happening, what needs attention, who is responsible, and what must not be forgotten. When nothing is wrong, the screen is warm and quiet.",
  summary:
    "A consent-native family operating system that connects the scattered jobs of care — a Daily Brief, a Life Signals engine, an Orbit of the people you love, duties, health, money and emergencies — with the intelligence kept invisible and consent enforced in the database itself.",
  context:
    "Families already have the tools — a health app, a payments app, a calendar, a group chat — but nothing connects them, so awareness lives in whoever worries most. Nobody wants another dashboard shouting for attention. And the moment a product touches a parent's health or a sibling's money, consent stops being a setting and becomes the whole architecture.",
  challenge:
    "Build the calm operating layer between the apps a family already uses — one that surfaces what genuinely needs a person without adding noise, and where privacy between family members is enforced, not merely promised.",
  solution:
    "KinOS organises everything around the Orbit — the people you care for. Signals from every source are normalised against each person's own baseline; only real deviations become Attention, and ember only ever means attention. A Daily Brief answers \"what needs me today?\" in one calm read. Consent is enforced in Postgres row-level security, so a family member without a grant cannot read a private entry — the database simply won't return it.",

  users: [
    "Adult children coordinating care for a parent",
    "Families spread across cities or the diaspora",
    "Whoever currently holds it all in their head",
    "Caregivers who need to know what actually needs them",
  ],
  roleMap: [
    { role: "Coordinator", does: "Reads the Daily Brief, acts on Attention, and hands duties to whoever is closest." },
    { role: "Family member", does: "Checks in, logs a signal, and sees only what they've been granted." },
    { role: "Person cared for", does: "Stays at the centre of their Orbit — their data, their grants, their dignity." },
    { role: "Emergency contact", does: "Reaches the essentials the instant they're needed, and not before." },
  ],
  goals: [
    "Make \"what needs me today?\" a one-read answer",
    "Stay calm by default — silence when nothing is wrong",
    "Enforce consent in the data layer, not the UI",
    "Connect the jobs families already do, don't replace them",
    "Keep the intelligence invisible — no product ever says the word",
  ],
  research: [
    "Mapped how a real family actually coordinates care across apps and chats",
    "Found that awareness, not information, is the scarce resource",
    "Studied where \"smart\" features become noise and erode trust",
    "Worked through the consent edge cases: grants, revocation, the private entry",
  ],
  informationArchitecture: [
    "The Orbit — people — is the root object; everything hangs off a person",
    "Signals (check-ins, receipts, medications, appointments, notes) normalise into Life Signals",
    "Attention, Worth-a-check and Quiet are graded states, judged against baseline",
    "Duties assign responsibility; grants govern who can see what",
    "Money, health and emergency are modules on one consent-aware core",
  ],
  journeys: [
    "A coordinator opens the Daily Brief and sees the one thing that needs them",
    "An overdue reading on Gogo becomes Attention — ember, with a duty attached",
    "They accept the duty or hand it to whoever is closest",
    "A sibling logs a receipt; it becomes a quiet signal, not a notification",
    "A grant is revoked, and the very next query stops returning that data",
  ],
  workflows: [
    "Daily Brief",
    "Life Signals (normalize · baseline · attention)",
    "Orbit & check-ins",
    "Duties & responsibility hand-off",
    "Consent grants & revocation",
    "Health readings",
    "Money — receipts, ledger, reconciliation",
    "Emergency access",
  ],
  features: [
    "A calm Daily Brief that answers \"what needs me today?\"",
    "Life Signals normalised against each person's own baseline",
    "The Orbit — the people you love, with well / attention at a glance",
    "Consent enforced in Postgres row-level security",
    "Duties that make responsibility explicit",
    "Money with a double-entry ledger and idempotent reconciliation",
    "Emergency access to the essentials, exactly when needed",
  ],
  keyScreens: [
    { title: "Daily Brief", description: "Today in one calm read — Attention, Worth a check, and the reassurance that everyone else is well." },
    { title: "The Orbit", description: "The people you care for on one ring, each showing well or attention, centred on home." },
    { title: "Attention", description: "A real deviation from baseline, with the duty and the person attached — ember only ever means attention." },
    { title: "Consent & grants", description: "Who can see health, who can see money — granted per person, revocable, enforced in the database." },
  ],
  architecture: [
    "pnpm monorepo: web PWA + mobile, with ui / engine / db / ai / payments / config packages",
    "Life Signals engine — pure, tested: normalize · baselines · attention · brief · patterns · escalation",
    "Neon Postgres with pgvector; every query runs as a non-owner role under row-level security",
    "The authenticated user is pinned per transaction, so revocation blocks the very next read",
    "Server-only intelligence layer with strict schemas, a voice guard and local embeddings",
    "Payments: Stripe + Paynow adapters over a double-entry ledger and an idempotent reconciliation state machine",
  ],
  technologies: [
    "Next.js 15 (App Router, PWA)",
    "TypeScript",
    "PostgreSQL / Neon + pgvector",
    "Row-level security",
    "Stripe + Paynow",
    "Tailwind (Dusk design system)",
  ],
  designDecisions: [
    "Made the Orbit — people — the root of the product, not a feed",
    "Kept the product calm by default: silence is a valid, common state",
    "Judged attention against each person's baseline, so ember always means something",
    "Enforced consent in Postgres RLS so privacy is structural, not a promise",
    "Designed the intelligence to be invisible — the product never says the word",
    "Built the warm \"Dusk\" system so care software feels human, not clinical",
  ],
  responsive:
    "KinOS is a PWA built mobile-first — a check-in or a receipt is a few taps, one-handed, on the move. The Daily Brief and the Orbit scale up to a calm desktop read for whoever is coordinating, and the whole surface stays warm and quiet on every device.",
  challenges: [
    {
      title: "Calm is an engineering problem",
      body: "Silence when nothing is wrong is harder than a feed. It means judging every signal against a person's own baseline, holding unreliable evidence back, and letting ember mean one thing only. Calm had to be built, not styled.",
    },
    {
      title: "Consent as architecture",
      body: "Privacy between family members can't live in the UI. Every read runs as a non-owner Postgres role under row-level security with the user pinned per transaction — so a revoked grant blocks the very next query, proven by a policy test suite in CI.",
    },
    {
      title: "Invisible intelligence",
      body: "The product never names the machine. A CI language guard, an end-to-end assertion against rendered pages and a runtime voice guard keep it out — so KinOS speaks care, not technology.",
    },
  ],
  security: [
    "Row-level security on every query; the authenticated user pinned per transaction",
    "Grants are explicit and revocable; revocation takes effect on the next read",
    "A private entry is invisible to anyone without a grant — enforced by the database",
    "Payments reconcile through an idempotent, double-entry ledger",
  ],
  outcomes: [
    "Turns scattered family signals into one calm, consent-aware read",
    "Makes privacy between family members structural rather than a setting",
    "Keeps care software quiet — attention only when something has genuinely changed",
  ],
  lessons: [
    "Awareness, not information, is what families are short of.",
    "If privacy matters, enforce it in the database — the UI is not a security boundary.",
    "Calm is a feature you engineer, not a colour you choose.",
  ],
  futureImprovements: [
    "Richer patterns and gentle escalation as baselines mature",
    "Deeper diaspora payment rails alongside Paynow and Stripe",
    "Shared care plans across an extended Orbit",
  ],
  designNotes: [
    "The Orbit — people — is the root of everything. You care for a person, not a feed.",
    "Ember only ever means attention. If the screen is quiet, nothing needs you — and that's the point.",
    "Consent lives in Postgres, not the UI. Revoke a grant and the next query already refuses it.",
    "The product never says the word for the intelligence. It speaks care, and the cleverness stays invisible.",
  ],
};
