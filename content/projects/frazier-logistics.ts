import type { Project } from "./types";

export const frazierLogistics: Project = {
  order: 1,
  featured: true,
  title: "Frazier Logistics Platform",
  slug: "frazier-logistics",
  category: "Operations Platform",
  industry: "Logistics · Customs · Freight",
  year: "2025",
  role: "Product design · Systems architecture · Full-stack development",
  status: "In development",
  accent: "#ff6a3d",
  signature: "logistics-workflow",
  mockup: "logistics",

  tagline:
    "A multi-role platform that carries a shipment from supplier request all the way to payment.",
  openingStatement:
    "Freight moves through a dozen hands before it is paid for. Frazier turns that scattered chain — suppliers, transporters, customs, finance — into one operational system where every role sees exactly what it needs, and nothing falls through the gaps.",
  summary:
    "A logistics, customs, transporter, supplier and finance platform that models the full life of a job — from request and truck nomination to proof of delivery, customs calculation, invoicing and payment vouchers.",
  context:
    "Cross-border freight in the region runs on phone calls, WhatsApp threads and spreadsheets. A single load can involve a supplier, a broker, several transporters, customs agents and a finance office — each keeping their own record. When something is delayed or disputed, no one holds the whole picture.",
  challenge:
    "Coordinate five very different roles around one shipment, keep an auditable trail of documents and money, and calculate customs correctly — without forcing anyone to abandon how they actually work.",
  solution:
    "A role-aware operations platform built around a single job object. Every action — a truck request, a nomination, a loading confirmation, a proof of delivery, an invoice, a payment voucher — is an event on that job. Each role gets a focused workspace; finance and oversight get the full timeline.",

  users: [
    "Suppliers raising loads to move",
    "Transporters bidding on and running jobs",
    "Customs agents clearing cross-border cargo",
    "Finance officers issuing invoices and vouchers",
    "Operations managers overseeing the whole board",
  ],
  roleMap: [
    { role: "Supplier", does: "Creates jobs, requests trucks, tracks status, receives documents." },
    { role: "Transporter", does: "Sees open requests, submits nominations, confirms loading & delivery." },
    { role: "Customs agent", does: "Calculates duties, attaches clearance documents to the job." },
    { role: "Finance", does: "Raises invoices, approves payment vouchers, reconciles paid jobs." },
    { role: "Operations", does: "Monitors every job, resolves exceptions, sees the full audit trail." },
  ],
  goals: [
    "One source of truth for every shipment",
    "Clear hand-offs between roles with no lost context",
    "Auditable trail of documents and money",
    "Correct, transparent customs calculations",
    "Operational oversight without micromanagement",
  ],
  research: [
    "Shadowed how loads are currently coordinated across calls and spreadsheets",
    "Mapped the documents that must exist at each stage (request, POD, invoice, voucher)",
    "Catalogued where disputes and delays actually originate",
  ],
  informationArchitecture: [
    "Job is the central object; everything hangs off it",
    "Roles are permissions and workspaces, not separate apps",
    "Documents and payments are events on the job timeline",
    "Oversight views aggregate jobs without duplicating data",
  ],
  journeys: [
    "Supplier raises a load → transporters are notified → nominations come in",
    "Operations awards the job → transporter confirms loading → cargo moves",
    "Customs agent calculates duties and clears the cargo",
    "Delivery is confirmed with proof of delivery → finance invoices",
    "Payment voucher is approved → job is reconciled and closed",
  ],
  workflows: [
    "Job creation & truck request",
    "Transporter nomination & award",
    "Loading confirmation",
    "Delivery & proof of delivery",
    "Documentation & customs calculation",
    "Invoicing & payment vouchers",
  ],
  features: [
    "Single job object with a full event timeline",
    "Role-based workspaces and permissions",
    "Truck request and transporter nomination flow",
    "Proof-of-delivery capture",
    "Customs duty calculation",
    "Invoice and payment-voucher generation",
    "Operational oversight board with exception flags",
  ],
  keyScreens: [
    { title: "Operations board", description: "Every live job as a row, colour-coded by stage, with exceptions surfaced first." },
    { title: "Job timeline", description: "A single shipment's full history — requests, nominations, documents, payments — in order." },
    { title: "Transporter nominations", description: "Incoming bids on a load with rates, capacity and history, ready to award." },
    { title: "Finance voucher", description: "An invoice and payment voucher generated from the job, awaiting approval." },
  ],
  architecture: [
    "Job-centric relational model (jobs, events, documents, payments, users, roles)",
    "Event log per job for a complete audit trail",
    "Role/permission layer gating every action and view",
    "Document storage linked to job events",
    "Server-calculated customs duties for consistency",
  ],
  technologies: [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
    "Server Actions",
    "Zod",
  ],
  designDecisions: [
    "Made the job — not the dashboard — the centre of the product",
    "Treated every role as a lens on the same data, not a separate tool",
    "Modelled documents and money as timeline events so the audit trail is free",
    "Put exceptions, not totals, at the top of the operations view",
  ],
  responsive:
    "Transporters and drivers work from phones in the field, so nomination, loading and proof-of-delivery flows are designed mobile-first. Finance and operations get denser desktop boards with the same underlying data.",
  challenges: [
    {
      title: "Five roles, one truth",
      body: "The hard part was not the screens but the model. Designing a single job object that every role could act on — without stepping on each other — kept the system honest and the audit trail intact.",
    },
    {
      title: "Customs without surprises",
      body: "Duty calculations had to be transparent and repeatable. Moving them server-side and showing the working turns a common source of disputes into something everyone can check.",
    },
  ],
  security: [
    "Role-based access control on every action and record",
    "Immutable event log for disputes and audits",
    "Document access scoped to the job and its participants",
    "Server-side validation of all financial calculations",
  ],
  outcomes: [
    "Designed to replace scattered calls and spreadsheets with one shared record",
    "Intended to cut disputes by making every hand-off and payment traceable",
    "Expected to give operations a live view of every shipment without chasing updates",
  ],
  lessons: [
    "When many roles share a process, model the process — not the roles.",
    "An event log is the cheapest audit trail you will ever build.",
  ],
  futureImprovements: [
    "Live GPS tracking on active loads",
    "Automated customs-document generation",
    "Transporter rating and performance history",
  ],
  designNotes: [
    "Exceptions sit at the top of the board. Totals can wait — a stuck load can't.",
    "Every hand-off is an event on the job, so the audit trail writes itself.",
    "Customs maths moved server-side and shows its working. Fewer arguments.",
  ],
};
