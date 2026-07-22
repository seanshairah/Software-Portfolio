import type { Project } from "./types";

export const studentHousing: Project = {
  order: 2,
  featured: true,
  title: "Student Housing Management Platform",
  slug: "student-housing",
  category: "Marketplace · Management",
  industry: "Property · Student Accommodation",
  year: "2025",
  role: "Product design · Full-stack development",
  status: "Prototype",
  accent: "#1f9e6b",
  signature: "booking-lifecycle",
  mockup: "housing",

  tagline:
    "From searching for a room to signing in — the full student accommodation lifecycle in one place.",
  openingStatement:
    "Finding student housing is a scramble of noticeboards, WhatsApp groups and cash deposits. This platform gives students a real way to discover, apply for and pay for a room, and gives property owners the tools to manage occupancy without a filing cabinet.",
  summary:
    "A responsive property and student-accommodation management system covering discovery, applications, approvals, payments, and separate dashboards for students and owners.",
  context:
    "Around most campuses, off-campus housing is informal and opaque. Students struggle to find verified rooms; owners struggle to track who has applied, who has paid and which rooms are free. Both sides lose time and trust.",
  challenge:
    "Serve two very different users — a student booking a room and an owner running a property — in one product, while keeping availability, applications and payments perfectly in sync.",
  solution:
    "A two-sided platform built around the room and the booking. Students discover and apply; owners review, approve and track. Availability is derived from the booking state, so a room can never be double-let and both dashboards always agree.",

  users: [
    "Students searching for accommodation",
    "Property owners and managers",
    "Wardens / administrators overseeing occupancy",
  ],
  roleMap: [
    { role: "Student", does: "Discovers properties, checks availability, applies, pays, tracks their booking." },
    { role: "Owner", does: "Lists properties and rooms, reviews applications, approves, tracks payments and occupancy." },
    { role: "Administrator", does: "Oversees properties and occupancy across the platform." },
  ],
  goals: [
    "Make real, verified rooms easy to find",
    "Turn applications and approvals into a clear flow",
    "Handle payments without cash-in-hand risk",
    "Give owners a live picture of occupancy",
    "Keep availability truthful at all times",
  ],
  research: [
    "Interviewed students about how they currently find and secure rooms",
    "Mapped the owner's month: listings, viewings, deposits, rent, disputes",
    "Identified trust and payment as the two biggest points of failure",
  ],
  informationArchitecture: [
    "Property contains rooms; room has an availability state",
    "Booking links a student to a room through a lifecycle",
    "Payments attach to bookings; occupancy is derived, never entered",
    "Student and owner dashboards are two views of the same records",
  ],
  journeys: [
    "Student searches → filters by area, price, availability → views a property",
    "Student applies → owner reviews → application is approved",
    "Student pays → booking is confirmed → room becomes occupied",
    "Owner watches occupancy and payments update on their dashboard",
  ],
  workflows: [
    "Property & room discovery",
    "Availability checking",
    "Application submission",
    "Owner approval",
    "Payment & confirmation",
    "Occupancy tracking & notifications",
  ],
  features: [
    "Searchable property discovery with real filters",
    "Live room availability",
    "Application and approval flow",
    "Integrated payments",
    "Student dashboard — bookings, payments, notifications",
    "Owner dashboard — listings, applications, occupancy",
    "Notifications on every state change",
  ],
  keyScreens: [
    { title: "Discovery", description: "Browse verified properties with filters for area, price and availability." },
    { title: "Property detail", description: "Rooms, pricing, amenities and a clear apply action." },
    { title: "Student dashboard", description: "Current booking, payment status and notifications in one place." },
    { title: "Owner occupancy", description: "Every room's state — vacant, applied, confirmed, occupied — at a glance." },
  ],
  architecture: [
    "Relational model: properties, rooms, bookings, payments, users",
    "Booking state machine (applied → approved → paid → confirmed → checked-in)",
    "Availability derived from booking state to prevent double-booking",
    "Notification events on every transition",
  ],
  technologies: [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Tailwind CSS",
    "React Hook Form",
    "Zod",
  ],
  designDecisions: [
    "Designed the student journey mobile-first — that's where discovery happens",
    "Made availability a derived fact so the two dashboards can never disagree",
    "Kept the owner's view about occupancy and money, not vanity metrics",
    "Used a booking state machine so every notification has a clear trigger",
  ],
  responsive:
    "Students almost always browse on a phone, so discovery, application and payment are designed for small screens first. Owners get a richer desktop dashboard for managing multiple properties, with the same data behind it.",
  challenges: [
    {
      title: "Two users, one truth",
      body: "A booking that looks confirmed to a student but pending to an owner destroys trust. Deriving availability and occupancy from a single booking state keeps both sides honest automatically.",
    },
    {
      title: "Payment as the moment of trust",
      body: "The whole product hinges on the payment step feeling safe. It's designed with clear states — pending, paid, confirmed — so no one is left wondering whether a room is really theirs.",
    },
  ],
  security: [
    "Role-separated student and owner access",
    "Payment states validated server-side",
    "Bookings scoped to their student and owner only",
  ],
  outcomes: [
    "Designed to replace informal, cash-based letting with a verifiable flow",
    "Intended to give owners real-time occupancy instead of manual tracking",
    "Expected to reduce double-bookings to zero through derived availability",
  ],
  lessons: [
    "In a two-sided product, derive shared facts — never let each side enter them.",
    "Trust lives in the payment and confirmation states; design those first.",
  ],
  futureImprovements: [
    "Verified reviews and property ratings",
    "Roommate matching",
    "Automated rent reminders and receipts",
  ],
};
