import type { Project } from "./types";

export const smartFarming: Project = {
  order: 5,
  featured: false,
  title: "Smart Farming Platform",
  slug: "smart-farming",
  category: "Data Product · Management",
  industry: "Agriculture · Intelligence",
  year: "2024",
  role: "Product design · Full-stack development",
  status: "Concept",
  accent: "#4ea72e",
  signature: "field-map",
  mockup: "farming",

  tagline:
    "Farm management and agricultural intelligence on one map — operations, weather and crop health in a single view.",
  openingStatement:
    "A farm is a system of fields, seasons, weather and decisions. This platform puts that system on a map: switch between what's happening on the ground, what the weather is doing, and how the crop is actually looking — and get recommendations grounded in all three.",
  summary:
    "A farm-management and agricultural-intelligence product: farm maps, crop records, weather, satellite information, field observations, alerts and recommendations.",
  context:
    "Smallholder and commercial farmers make high-stakes decisions with fragmented information — rainfall in their memory, crop records on paper, satellite data they can't easily access. The data exists; it just never meets on one screen at the right moment.",
  challenge:
    "Bring operational records, weather and remote-sensing data together on a farm map, and turn them into recommendations a farmer can act on — without demanding they become data analysts.",
  solution:
    "A map-first platform where the field is the unit of everything. Each field carries its crop records and observations; layers overlay operational status, weather and crop-health (from satellite indices). Alerts and plain-language recommendations sit on top, tied to specific fields.",

  users: [
    "Smallholder and commercial farmers",
    "Farm managers and agronomists",
    "Cooperatives tracking many farms",
  ],
  roleMap: [
    { role: "Farmer", does: "Records crops and observations, reads alerts and recommendations per field." },
    { role: "Agronomist", does: "Reviews crop-health layers and advises across fields." },
    { role: "Cooperative", does: "Aggregates field data across member farms." },
  ],
  goals: [
    "Put farm data on one map",
    "Make satellite and weather data usable, not raw",
    "Tie recommendations to specific fields",
    "Keep record-keeping fast enough to actually happen",
    "Work on modest devices and connectivity",
  ],
  research: [
    "Mapped how farmers currently track fields, inputs and observations",
    "Reviewed available weather and satellite (NDVI-style) data sources",
    "Focused on the decision moments where better data changes the outcome",
  ],
  informationArchitecture: [
    "Field is the central object; everything attaches to it",
    "Map layers toggle operational, weather and crop-health views",
    "Records and observations are timestamped events on a field",
    "Alerts and recommendations reference specific fields",
  ],
  journeys: [
    "Farmer opens the map and sees their fields and current status",
    "They switch to the crop-health layer to spot stressed areas",
    "The weather layer shows what's coming for those fields",
    "An alert flags a field; a recommendation says what to do",
    "The farmer logs an observation, keeping the record current",
  ],
  workflows: [
    "Field mapping",
    "Crop record-keeping",
    "Weather monitoring",
    "Satellite / crop-health layers",
    "Field observations",
    "Alerts & recommendations",
  ],
  features: [
    "Interactive farm map with switchable layers",
    "Per-field crop records",
    "Weather integration",
    "Satellite-derived crop-health view",
    "Field observation logging",
    "Field-specific alerts and recommendations",
  ],
  keyScreens: [
    { title: "Farm map", description: "All fields on one map, colour-coded by the active layer." },
    { title: "Layer switch", description: "Toggle between operational, weather and crop-health views of the same fields." },
    { title: "Field detail", description: "One field's crop record, observations and recommendations." },
    { title: "Alerts", description: "What needs attention, tied to the field it concerns." },
  ],
  architecture: [
    "Geospatial data model with fields as the core geometry",
    "Layered map rendering (operational / weather / crop-health)",
    "External weather and satellite data ingestion",
    "Recommendation logic keyed to field state",
    "Offline-tolerant record capture",
  ],
  technologies: [
    "Next.js",
    "TypeScript",
    "PostGIS",
    "Mapping (MapLibre)",
    "Weather & satellite APIs",
    "Tailwind CSS",
  ],
  designDecisions: [
    "Made the map the product, not a feature tab",
    "Turned satellite indices into a simple health layer, not raw numbers",
    "Tied every alert and recommendation to a specific field",
    "Kept observation logging to a few taps so records stay current",
  ],
  responsive:
    "Farmers use this outdoors on a phone, so the map and record-capture are built for touch, sunlight and patchy connectivity. Managers and cooperatives get a wider desktop view across many fields and farms.",
  challenges: [
    {
      title: "Data that meets at the decision",
      body: "The insight isn't any single dataset — it's operational, weather and satellite data meeting on one field at the moment a decision is made. The layer model exists to make that convergence effortless.",
    },
    {
      title: "Usable in the field",
      body: "A tool farmers won't open outdoors is worthless. Designing for sunlight, touch and weak signal shaped every decision more than any dashboard aesthetic.",
    },
  ],
  outcomes: [
    "Designed to unify fragmented farm data into one map-first view",
    "Intended to make satellite and weather data actionable for non-specialists",
    "Expected to improve decisions by tying recommendations to real field state",
  ],
  lessons: [
    "When the domain is spatial, make the map the product.",
    "Raw data helps no one; the value is in the layer that interprets it.",
  ],
  futureImprovements: [
    "Yield prediction per field",
    "Input and cost tracking",
    "Cooperative-level benchmarking",
  ],
  designNotes: [
    "The map is the product, not a feature tab. Everything hangs off the field.",
    "Satellite indices became a simple health colour. Farmers need answers, not NDVI numbers.",
    "Designed for sunlight, one hand and a weak signal — because that's where it's opened.",
  ],
};
