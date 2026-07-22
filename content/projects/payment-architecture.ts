import type { Project } from "./types";

export const paymentArchitecture: Project = {
  order: 6,
  featured: false,
  title: "Secure Payment Architecture",
  slug: "payment-architecture",
  category: "Architecture · Infrastructure",
  industry: "Payments · Fintech",
  year: "2025",
  role: "Systems architecture · Backend engineering",
  status: "Proposed architecture",
  accent: "#12a5b0",
  signature: "transaction-lifecycle",
  mockup: "payments",

  tagline:
    "A payment-processing architecture designed to survive the moment the network fails mid-transaction.",
  openingStatement:
    "The hard part of payments isn't the happy path — it's the timeout, the duplicate click, the provider that goes quiet after taking the money. This is an architecture built for those moments: idempotent, queued and reconciled, so every transaction reaches exactly one correct end state.",
  summary:
    "A resilient payment-processing architecture covering idempotency, queue processing, retries, fraud controls, reconciliation, transaction state and network-failure recovery.",
  context:
    "Payment systems fail in unglamorous ways: a request times out but the charge went through; a user double-submits; a provider webhook never arrives. Handled naively, these become double charges, lost money and support nightmares. Handled well, they're invisible.",
  challenge:
    "Design a payment flow where no transaction is ever processed twice, no money is silently lost, and the system can recover cleanly from failure at any step — even when the outside world is unreliable.",
  solution:
    "A transaction is a state machine guarded by idempotency keys and driven through a durable queue. Every external call is retryable and safe to repeat; a reconciliation loop compares the system's record against the provider's truth and heals any drift. The transaction lifecycle is explicit and observable end to end.",

  users: [
    "Engineering teams integrating payments",
    "Finance & operations reconciling money",
    "End users who simply expect it to work",
  ],
  roleMap: [
    { role: "Engineering", does: "Integrates against a safe, idempotent payment API." },
    { role: "Finance / ops", does: "Relies on reconciliation to guarantee the books match reality." },
    { role: "End user", does: "Experiences a payment that never double-charges or silently fails." },
  ],
  goals: [
    "Process every transaction exactly once",
    "Never silently lose or double-charge money",
    "Recover cleanly from failure at any step",
    "Make the transaction lifecycle observable",
    "Keep fraud controls in the path without adding fragility",
  ],
  research: [
    "Catalogued the real failure modes: timeouts, duplicates, missing webhooks",
    "Studied idempotency and reconciliation patterns from mature payment systems",
    "Defined correctness as 'exactly one end state per transaction'",
  ],
  informationArchitecture: [
    "Transaction is a state machine with explicit, logged transitions",
    "Idempotency keys deduplicate requests at the boundary",
    "A durable queue drives processing and retries",
    "Reconciliation compares internal state to the provider's record",
  ],
  journeys: [
    "A payment request arrives with an idempotency key",
    "The transaction is created (or the existing one is returned) — never duplicated",
    "Processing runs through a queue; each external call is retryable",
    "On failure, retries and recovery move it toward a final state",
    "Reconciliation confirms the internal record matches the provider",
  ],
  workflows: [
    "Idempotent request handling",
    "Queue-based processing",
    "Retry & backoff",
    "Fraud checks",
    "Reconciliation",
    "Transaction-state management",
    "Network-failure recovery",
  ],
  features: [
    "Idempotency keys on every mutating request",
    "Durable queue with retries and backoff",
    "Explicit transaction state machine",
    "Fraud controls in the processing path",
    "Automated reconciliation against the provider",
    "Full audit log of every transition",
  ],
  keyScreens: [
    { title: "Transaction lifecycle", description: "A single payment moving through its states, from initiated to settled or failed." },
    { title: "Retry & recovery", description: "How a timed-out call is retried safely without double-charging." },
    { title: "Reconciliation", description: "Internal records compared to the provider's, with any drift flagged." },
    { title: "Transaction ledger", description: "Every transaction and its current, unambiguous state." },
  ],
  architecture: [
    "Idempotency layer at the API boundary",
    "Durable message queue for processing and retries",
    "Transaction state machine with an append-only event log",
    "Reconciliation worker comparing system and provider state",
    "Fraud-check step integrated into the pipeline",
    "Observability across the full lifecycle",
  ],
  technologies: [
    "Node.js / TypeScript",
    "PostgreSQL",
    "Message queue",
    "Idempotency keys",
    "Webhooks",
    "Observability tooling",
  ],
  designDecisions: [
    "Modelled the transaction as an explicit state machine, not a boolean flag",
    "Made every external call idempotent and safe to retry",
    "Added reconciliation as a first-class loop, not an afterthought",
    "Kept an append-only event log so the truth is never overwritten",
  ],
  responsive:
    "This is an architecture rather than a screen product, but its operational surfaces — the transaction ledger and reconciliation views — are designed to be readable on any device, because incidents don't wait for you to be at a desk.",
  challenges: [
    {
      title: "Exactly once, under real conditions",
      body: "'Exactly once' is easy to say and hard to guarantee when networks fail mid-call. Idempotency keys plus a durable queue plus reconciliation is the combination that makes it true in practice, not just in the diagram.",
    },
    {
      title: "Healing drift automatically",
      body: "Given enough transactions, internal state and the provider's state will diverge. Treating reconciliation as a continuous, first-class process — not a monthly spreadsheet — keeps the books correct on their own.",
    },
  ],
  security: [
    "Idempotency prevents duplicate-charge attacks and accidents",
    "Fraud controls sit inside the processing pipeline",
    "Append-only event log for tamper-evident audit",
    "Least-privilege access to payment records",
  ],
  outcomes: [
    "Designed to guarantee exactly-once processing under failure",
    "Intended to eliminate silent money loss through continuous reconciliation",
    "Expected to make payment incidents debuggable via a full transaction log",
  ],
  lessons: [
    "In payments, design the failure paths first — the happy path is the easy 10%.",
    "Reconciliation isn't a report; it's part of the system's correctness.",
  ],
  futureImprovements: [
    "Multi-provider routing and failover",
    "Real-time anomaly detection",
    "Self-serve dispute and refund flows",
  ],
};
