import type { Project } from "./types";

export const smartFarming: Project = {
  order: 5,
  featured: false,
  title: "Msasa Farm ERP",
  slug: "smart-farming",
  liveUrl: "https://farming-erp.vercel.app",
  category: "Farm ERP · Operations",
  industry: "Commercial Agriculture · Zimbabwe",
  year: "2024",
  role: "Product design · Full-stack development",
  status: "Live",
  accent: "#2E6B3A",
  signature: "field-map",
  mockup: "farming",

  tagline:
    "The operating system for a commercial farm — fields, livestock, machinery and workforce on one map, with crop-health built in.",
  openingStatement:
    "A commercial farm is five businesses running at once: crops, livestock, machinery, labour and the money tying them together. Msasa puts all five in one place — map-first for the land, register-driven for everything that moves through it — so a season is planned, run and reconciled without a single spreadsheet.",
  summary:
    "A farm-management ERP for commercial estates: a field register with satellite crop-health (NDVI), livestock and machinery tracking, workforce and activity logging, input costing in USD/ha, and GMB delivery records — organised around the map.",
  context:
    "Commercial farms in Zimbabwe run on institutional memory and a stack of spreadsheets — one for fields, one for the herd, one for diesel, one for wages. Nothing reconciles, so the cost of a hectare of maize is only known after the season, when it's too late to change it.",
  challenge:
    "Replace the spreadsheet stack with one system that a farm manager actually runs the estate from — covering crops, livestock, machinery and workforce — without turning agronomy into data entry.",
  solution:
    "Msasa makes the field the spine of the estate: every crop record, observation, input cost and satellite health reading attaches to it, laid out on a map. Livestock, machinery and workforce hang off the same operational core, and activity logging is fast enough to happen in the field. Costs accrue per hectare through the season; harvests reconcile against GMB deliveries.",

  users: [
    "Estate and farm managers running day-to-day operations",
    "Agronomists monitoring crop health across fields",
    "Owners tracking cost and yield per hectare",
    "Field supervisors logging activity and inputs",
  ],
  roleMap: [
    { role: "Estate manager", does: "Plans the season, assigns work, and runs crops, livestock, machinery and workforce from one place." },
    { role: "Agronomist", does: "Reads the NDVI layer, flags stressed fields, and advises on inputs and timing." },
    { role: "Supervisor", does: "Logs field activity, inputs and labour from a phone, out on the land." },
    { role: "Owner", does: "Tracks cost per hectare, yield and GMB deliveries across the estate." },
  ],
  goals: [
    "Run the whole estate from one system, not a spreadsheet stack",
    "Make satellite crop-health usable, not raw NDVI numbers",
    "Cost every hectare through the season, not after it",
    "Keep activity logging fast enough to actually happen in the field",
    "Reconcile harvests against GMB deliveries",
  ],
  research: [
    "Shadowed how an estate tracks fields, herd, machinery and labour across separate books",
    "Mapped the season's decision points where fragmented data changes the outcome",
    "Reviewed available weather and satellite (NDVI) sources for the region",
    "Worked through real cost lines — seed, fertiliser, chemicals, diesel, wages — per hectare",
  ],
  informationArchitecture: [
    "Field is the core object; crops, observations, inputs and health readings attach to it",
    "Five operational areas — Farm HQ, Crops, Livestock, Machinery, Workforce",
    "The map is a first-class view with a switchable NDVI crop-health layer",
    "Activity, inputs and costs are timestamped events against a field or asset",
    "Harvest records reconcile to GMB delivery entries",
  ],
  journeys: [
    "Manager opens Crops and sees every field on the map, coloured by NDVI",
    "A field drops to water-stress; the register and an alert flag it together",
    "A supervisor logs an irrigation activity against that field from the phone",
    "Input costs accrue to the field, building cost-per-hectare through the season",
    "At harvest, tonnage is logged and reconciled against the GMB delivery",
  ],
  workflows: [
    "Field register & mapping",
    "Satellite crop-health (NDVI) monitoring",
    "Activity & input logging",
    "Livestock & herd tracking",
    "Machinery & fuel tracking",
    "Workforce & labour records",
    "Cost-per-hectare & GMB delivery reconciliation",
  ],
  features: [
    "Field register with a map-first NDVI crop-health layer",
    "Per-field crop records, stages and observations",
    "Livestock, machinery and workforce modules on a shared core",
    "Activity and input logging built for the field",
    "Input costing in USD per hectare, accrued through the season",
    "Harvest and GMB delivery reconciliation",
  ],
  keyScreens: [
    { title: "Fields & map", description: "Every field in a register beside an NDVI heatmap of the whole estate." },
    { title: "Field detail", description: "One field's crop, stage, health trend, inputs and cost-per-hectare." },
    { title: "Livestock & machinery", description: "Herd and equipment registers hung off the same operational core." },
    { title: "Alerts", description: "Water-stress and timing flags tied to the field they concern." },
  ],
  architecture: [
    "Relational operational core with fields, assets and activities as first-class records",
    "Geospatial field geometry driving the map and NDVI layer",
    "External weather and satellite (NDVI) ingestion keyed to fields",
    "Cost accrual engine rolling inputs up to cost-per-hectare",
    "Offline-tolerant activity capture for field use",
  ],
  technologies: [
    "Next.js",
    "TypeScript",
    "PostgreSQL / PostGIS",
    "Mapping (MapLibre)",
    "Weather & satellite APIs",
    "Tailwind CSS",
  ],
  designDecisions: [
    "Made the field the spine of the ERP, with every module hanging off it",
    "Turned satellite indices into a lime-to-red health layer, not raw numbers",
    "Kept the dark, map-first identity so the land reads as the subject",
    "Made activity logging a few taps so records stay current in the field",
    "Accrued cost per hectare through the season, not in a year-end reckoning",
  ],
  responsive:
    "Supervisors log activity outdoors on a phone, so field capture is built for touch, sunlight and patchy signal. Managers and owners get the wide desktop view — the register, the map and the cost roll-up across the whole estate.",
  challenges: [
    {
      title: "One estate, five businesses",
      body: "Crops, livestock, machinery, labour and money each want to be their own app. The design keeps them as modules on one operational core, so they reconcile instead of drifting into separate spreadsheets.",
    },
    {
      title: "Usable in the field",
      body: "A system supervisors won't open on the land is worthless. Designing activity capture for sunlight, one hand and weak signal shaped the product more than any dashboard aesthetic.",
    },
    {
      title: "Cost that lands during the season",
      body: "Knowing a hectare's cost after harvest is too late. Accruing inputs to the field as they happen makes cost-per-hectare a live number the manager can still act on.",
    },
  ],
  outcomes: [
    "Runs a commercial estate's crops, livestock, machinery and workforce from one system",
    "Puts satellite crop-health in front of managers as a readable layer, not raw data",
    "Turns cost-per-hectare into a live figure during the season, not a year-end surprise",
  ],
  lessons: [
    "When the domain is spatial, make the map the product — and hang the registers off it.",
    "An ERP earns its place by reconciling; the value is the modules meeting on one field.",
  ],
  futureImprovements: [
    "Yield prediction per field from historical NDVI and inputs",
    "Cooperative-level benchmarking across estates",
    "Deeper machinery telemetry and maintenance scheduling",
  ],
  designNotes: [
    "The field is the spine. Crops, costs, health and activity all hang off it.",
    "Msasa wears a dark, map-first skin — forest green canvas, lime signal — so the land is the subject.",
    "Satellite indices became a lime-to-red health layer. Managers need answers, not NDVI figures.",
    "Designed for sunlight, one hand and a weak signal — because that's where it's opened.",
  ],
};
