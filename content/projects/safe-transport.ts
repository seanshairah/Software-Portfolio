import type { Project } from "./types";

export const safeTransport: Project = {
  order: 4,
  featured: true,
  title: "SAFE Intelligent Transport System",
  slug: "safe-transport",
  category: "AI · Sensor System",
  industry: "Transport · Safety",
  year: "2024",
  role: "Systems design · AI concept · Interface design",
  status: "Concept",
  accent: "#ff3d3d",
  signature: "vehicle-twin",
  mockup: "transport",

  tagline:
    "An AI and sensor concept that watches how vehicles are actually driven — and escalates when it matters.",
  openingStatement:
    "Most fleet safety is reconstructed after a crash. SAFE is a concept for the opposite: cameras and sensors reading speed, lane discipline and driver behaviour in real time, turning a vehicle into a live safety signal instead of a black box you open too late.",
  summary:
    "An AI and sensor-based transport safety concept covering cameras, speed monitoring, lane violations, driver behaviour, incident escalation and fleet analytics.",
  context:
    "On regional roads, unsafe driving is common and consequences are severe, yet fleets have almost no live visibility into how their vehicles are being driven. Data, when it exists at all, is looked at after an incident.",
  challenge:
    "Design a system that reads driving behaviour from real sensors, decides what actually matters, and escalates the right events — without flooding operators with noise or pretending to be more certain than it is.",
  solution:
    "A sensor-and-AI architecture where each vehicle is a digital twin: live states for speed, lane position and driver attention. On-vehicle processing flags events; a severity model decides what escalates; a fleet console turns thousands of signals into a short list of things worth acting on.",

  users: [
    "Fleet operators and safety officers",
    "Drivers (through feedback, not surveillance-only)",
    "Transport regulators (analytics)",
  ],
  roleMap: [
    { role: "Safety officer", does: "Monitors live vehicle states, reviews escalated incidents, acts on the fleet view." },
    { role: "Driver", does: "Receives feedback on behaviour; unsafe patterns are surfaced, not just logged." },
    { role: "Fleet manager", does: "Reads trends across the fleet to target training and policy." },
  ],
  goals: [
    "See driving behaviour live, not post-crash",
    "Escalate the events that matter, quietly ignore the rest",
    "Give drivers usable feedback, not just blame",
    "Turn raw sensor data into fleet-level insight",
    "Be honest about confidence and limitations",
  ],
  research: [
    "Studied the sensor inputs available: cameras, GPS/speed, IMU, proximity",
    "Reviewed how safety incidents are currently detected and reported",
    "Framed the core problem as signal-to-noise, not data collection",
  ],
  informationArchitecture: [
    "Vehicle digital twin holds live sensor states",
    "Events are detected on-vehicle and classified by severity",
    "Only escalated events reach the operator's queue",
    "Fleet analytics aggregate events over time and vehicles",
  ],
  journeys: [
    "Sensors stream speed, lane and attention data from the vehicle",
    "On-vehicle logic flags a candidate event (e.g. lane departure at speed)",
    "A severity model decides whether it escalates",
    "The safety officer reviews escalated incidents with context",
    "Patterns roll up into fleet analytics for training and policy",
  ],
  workflows: [
    "Sensor ingestion",
    "On-vehicle event detection",
    "Speed & lane monitoring",
    "Driver-behaviour scoring",
    "Incident escalation",
    "Fleet analytics",
  ],
  features: [
    "Per-vehicle digital twin with live states",
    "Speed and lane-violation monitoring",
    "Driver-behaviour scoring",
    "Severity-based incident escalation",
    "Operator review queue with context",
    "Fleet-wide safety analytics",
  ],
  keyScreens: [
    { title: "Vehicle digital twin", description: "One vehicle's live sensor states — speed, lane, attention — rendered as a readable dashboard." },
    { title: "Incident review", description: "An escalated event with the sensor context that triggered it." },
    { title: "Fleet console", description: "Every vehicle's status, with only meaningful alerts surfaced." },
    { title: "Safety analytics", description: "Behaviour trends across the fleet over time." },
  ],
  architecture: [
    "Edge processing on the vehicle for detection and privacy",
    "Digital-twin state per vehicle",
    "Severity/escalation model between raw events and operators",
    "Time-series store for analytics",
    "Streaming pipeline from vehicle to console",
  ],
  technologies: [
    "Computer vision",
    "Sensor fusion",
    "Edge inference",
    "Time-series database",
    "React dashboard",
    "WebSockets",
  ],
  designDecisions: [
    "Processed events on the vehicle to protect bandwidth and privacy",
    "Put a severity model between sensors and humans to fight alert fatigue",
    "Designed the twin to be readable at a glance, not a wall of telemetry",
    "Framed driver data as feedback, not only enforcement",
  ],
  responsive:
    "The fleet console is a desktop operations tool. Safety officers on the move get a focused mobile view: live vehicle status and escalated incidents only, so the important signal survives the small screen.",
  challenges: [
    {
      title: "Signal, not surveillance",
      body: "The concept lives or dies on signal-to-noise. Detecting events is easy; deciding which ones a human should see is the real design work, and it's why a severity model sits at the centre.",
    },
    {
      title: "Honest confidence",
      body: "Sensor and vision systems are probabilistic. The interface is designed to communicate uncertainty rather than present every detection as fact.",
    },
  ],
  security: [
    "Edge processing keeps raw video on the vehicle where possible",
    "Escalated events access-controlled to safety roles",
    "Driver data governed by clear retention rules",
  ],
  outcomes: [
    "Designed to shift fleet safety from post-incident to real-time",
    "Intended to reduce operator alert fatigue through severity filtering",
    "Expected to give drivers actionable feedback rather than only penalties",
  ],
  lessons: [
    "In sensor products, the model that decides what to ignore is the product.",
    "Communicating uncertainty is a feature, not a weakness.",
  ],
  futureImprovements: [
    "Predictive risk scoring per route",
    "Driver coaching from real events",
    "Integration with insurance and compliance",
  ],
};
