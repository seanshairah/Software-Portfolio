export interface ProcessStage {
  index: number;
  key: string;
  title: string;
  question: string;
  activities: string[];
  deliverables: string[];
  clientInvolvement: string;
  outcome: string;
}

export const process: ProcessStage[] = [
  {
    index: 1,
    key: "understand",
    title: "Understand",
    question: "What is really going on here, and for whom?",
    activities: [
      "Interviews with the people who do the work",
      "Reviewing existing tools, spreadsheets and workarounds",
      "Framing the business problem and constraints",
    ],
    deliverables: ["Problem statement", "User & role map", "Constraints brief"],
    clientInvolvement: "High — conversations, walkthroughs and access to how you work today.",
    outcome: "A shared, honest picture of the problem before anything is designed.",
  },
  {
    index: 2,
    key: "map",
    title: "Map",
    question: "How does the work actually flow, end to end?",
    activities: [
      "Mapping current workflows and hand-offs",
      "Identifying friction, gaps and manual steps",
      "Marking where AI or automation can help",
    ],
    deliverables: ["Workflow maps", "Opportunity map", "Journey outlines"],
    clientInvolvement: "Medium — validating that the maps match reality.",
    outcome: "A clear model of the process and where the leverage is.",
  },
  {
    index: 3,
    key: "architect",
    title: "Architect",
    question: "What system does this product need underneath it?",
    activities: [
      "Data modelling and schema design",
      "Roles, permissions and access rules",
      "Integrations, payments and infrastructure planning",
    ],
    deliverables: ["Data model", "System architecture", "Permission model"],
    clientInvolvement: "Low–medium — reviewing key technical decisions.",
    outcome: "An explicit, resilient foundation to build on.",
  },
  {
    index: 4,
    key: "design",
    title: "Design",
    question: "How should this feel to use, for every role?",
    activities: [
      "Interface system and key screens",
      "Interaction, states and responsive behaviour",
      "Empty, loading and error states",
    ],
    deliverables: ["Design system", "Key screens", "Prototype"],
    clientInvolvement: "Medium — reviewing flows and screens as they take shape.",
    outcome: "A coherent, usable interface that fits the system beneath it.",
  },
  {
    index: 5,
    key: "build",
    title: "Build",
    question: "How do we make it real and dependable?",
    activities: [
      "Full-stack implementation",
      "Auth, payments and integrations",
      "Testing the paths that break, not just the happy one",
    ],
    deliverables: ["Working product", "Deployment", "Technical documentation"],
    clientInvolvement: "Medium — regular demos and feedback loops.",
    outcome: "A deployable product that holds up under real use.",
  },
  {
    index: 6,
    key: "refine",
    title: "Refine",
    question: "What does real usage tell us to improve?",
    activities: [
      "Watching how the product is actually used",
      "Fixing friction and edge cases",
      "Planning the next phase",
    ],
    deliverables: ["Refinements", "Handover", "Next-phase plan"],
    clientInvolvement: "Medium — deciding priorities together.",
    outcome: "A product that keeps getting sharper after launch.",
  },
];
