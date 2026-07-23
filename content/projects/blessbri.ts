import type { Project } from "./types";

export const blessbri: Project = {
  order: 7,
  featured: false,
  title: "BlessBri Properties",
  slug: "blessbri",
  liveUrl: "https://blessbriproperties.co.zw",
  category: "Student Housing · Multi-residence",
  industry: "Student Housing · Zimbabwe",
  year: "2025",
  role: "Product design · Full-stack development",
  status: "Live",
  accent: "#b56a43",
  signature: "booking-lifecycle",
  mockup: "blessbri",

  tagline:
    "Two student residences, run as one platform — from room search to move-in, quietly done well.",
  openingStatement:
    "BlessBri runs two student houses in Harare — Mufudzi in Mount Pleasant and Siphiwe in Avondale. The platform turns two buildings, dozens of rooms and a stream of applications into one calm operation: students browse and apply online, the team approves and allocates, rent settles through Paynow, and everyone knows which room belongs to whom.",
  summary:
    "A multi-residence student-housing platform: a public site where students explore rooms and apply, and an operator dashboard that manages both houses — rooms, applications, allocations, Paynow payments and tenancy — from one place.",
  context:
    "Running two student residences meant two sets of everything — WhatsApp enquiries, paper application forms, a spreadsheet of who owed what, and keys handed over on trust. As both houses filled up each term, the coordination didn't scale, and a student's question could sit unanswered while beds stood empty.",
  challenge:
    "Give students a trustworthy way to find and book a verified room online, and give the operator one calm view across both houses — without either side drowning in messages and spreadsheets.",
  solution:
    "One platform, two sides. Students get a public site to compare rooms across Mufudzi and Siphiwe, apply online, pay a booking through Paynow and manage their tenancy in a portal. The operator gets a dashboard that spans both residences — applications, room allocation, occupancy and payments — so the whole operation runs from a single screen.",

  users: [
    "Students looking for verified, secure off-campus housing",
    "The operator managing both residences day to day",
    "Parents or guardians paying and vouching for a student",
    "Resident tenants managing their own stay",
  ],
  roleMap: [
    { role: "Student", does: "Compares rooms across both houses, applies online, pays a booking, manages their tenancy." },
    { role: "Operator", does: "Reviews applications, allocates rooms, tracks occupancy and rent across both residences." },
    { role: "Guardian", does: "Pays or backs a booking and keeps sight of the arrangement." },
  ],
  goals: [
    "Let students book a verified room without a single WhatsApp",
    "Run both houses from one operator view",
    "Settle rent and bookings through Paynow, on the record",
    "Make occupancy and arrears visible at a glance",
    "Keep the experience calm and trustworthy on both sides",
  ],
  research: [
    "Mapped how enquiries, viewings, applications and payments actually flowed across two houses",
    "Found the coordination cost was two of everything, held together by memory",
    "Studied where trust breaks down for a student booking a room sight-unseen",
  ],
  informationArchitecture: [
    "Residence → rooms → beds is the spine; both houses share one model",
    "An application is a student against a room, moving through a fixed lifecycle",
    "Payments (booking + rent) attach to a tenancy and settle via Paynow",
    "Occupancy and arrears roll up across both residences",
  ],
  journeys: [
    "A student compares rooms across Mufudzi and Siphiwe and applies",
    "The operator reviews the application and allocates a specific bed",
    "The student pays the booking through Paynow and is confirmed",
    "Move-in is recorded; the room shows occupied across the platform",
    "Rent is tracked each month, with arrears surfaced early",
  ],
  workflows: [
    "Room discovery across two houses",
    "Online application",
    "Approval & room allocation",
    "Paynow booking & rent",
    "Move-in",
    "Occupancy & arrears tracking",
  ],
  features: [
    "Public site to browse and compare rooms across both residences",
    "Online application with a clear five-step booking flow",
    "Operator dashboard spanning Mufudzi and Siphiwe",
    "Room and bed allocation with live occupancy",
    "Paynow payments for bookings and rent",
    "Student portal for tenancy and payments",
  ],
  keyScreens: [
    { title: "Residences overview", description: "Both houses side by side — occupancy, applications and rent in one view." },
    { title: "Applications", description: "The application pipeline with each student, room and status." },
    { title: "Rooms & allocation", description: "Rooms across both houses, with beds allocated and occupancy at a glance." },
    { title: "Student portal", description: "A resident's own booking, tenancy and Paynow payments." },
  ],
  architecture: [
    "Shared residence / room / bed data model across both houses",
    "Application lifecycle from enquiry to move-in",
    "Paynow integration for bookings and recurring rent",
    "Occupancy and arrears aggregation across residences",
    "Two-sided access: public site + operator dashboard + student portal",
  ],
  technologies: [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Paynow",
    "Tailwind CSS",
  ],
  designDecisions: [
    "Modelled both houses on one shared spine so the operator has a single view",
    "Made the booking a clear five steps — explore, apply, approve, pay, move in",
    "Put verification and real photos up front, because students book on trust",
    "Kept the aesthetic calm and minimal — student living, quietly done well",
  ],
  responsive:
    "Students almost always arrive on a phone, so browsing rooms, applying and paying through Paynow are built mobile-first. The operator dashboard scales up to a wide desktop view across both residences.",
  challenges: [
    {
      title: "Two houses, one operation",
      body: "The hard part wasn't either building — it was running both as one. A shared residence/room/bed model lets the operator see occupancy, applications and rent across Mufudzi and Siphiwe without switching context.",
    },
    {
      title: "Booking on trust",
      body: "A student pays for a room they haven't stood in. Verified listings, real photos and a clear, on-the-record Paynow booking flow are what make that leap feel safe.",
    },
  ],
  outcomes: [
    "Turns two WhatsApp-and-spreadsheet operations into one calm platform",
    "Lets students book a verified room end to end, on their phone",
    "Gives the operator occupancy and arrears across both houses at a glance",
  ],
  lessons: [
    "For multi-site operations, model the shared spine first — one view beats two apps.",
    "When people book on trust, verification and a clean payment record are the product.",
  ],
  futureImprovements: [
    "Waitlists and automatic room offers when a bed frees up",
    "Maintenance requests from the student portal",
    "More residences on the same platform",
  ],
  designNotes: [
    "Two houses, one spine. The operator sees Mufudzi and Siphiwe in a single view.",
    "The booking is five honest steps — explore, apply, approve, pay, move in.",
    "Students book on trust, so verification and real photos lead, not marketing.",
  ],
};
