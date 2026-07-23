import {
  Building2,
  LayoutGrid,
  BedDouble,
  FileText,
  CreditCard,
  Smartphone,
} from "lucide-react";
import { DashboardShell, ShellButton, Stat, MiniBar } from "./frame";

// BlessBri runs two Harare residences on one platform; a warm, homely clay hue.
const ACCENT = "#b56a43";

interface Residence {
  name: string;
  area: string;
  beds: number;
  occ: number;
  from: string;
  grid: { cols: number; states: string[] };
}

// Room states: o = occupied, a = available, r = reserved.
const residences: Residence[] = [
  {
    name: "Mufudzi House",
    area: "Mount Pleasant",
    beds: 28,
    occ: 24,
    from: "$120",
    grid: {
      cols: 7,
      states: "oooooao oooaooo ooooroo oooooao".replace(/ /g, "").split(""),
    },
  },
  {
    name: "Siphiwe House",
    area: "Avondale",
    beds: 20,
    occ: 15,
    from: "$130",
    grid: {
      cols: 5,
      states: "ooaoo oaooa roooo oaooo".replace(/ /g, "").split(""),
    },
  },
];

const stateColor: Record<string, string> = {
  o: "#3f4451", // occupied — slate
  a: ACCENT, // available — clay
  r: "#c9932f", // reserved — amber
};

function ResidenceCard({ r }: { r: Residence }) {
  const pct = Math.round((r.occ / r.beds) * 100);
  return (
    <div className="rounded-lg border border-border bg-surface p-3.5">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-[0.8125rem] font-semibold text-foreground">{r.name}</p>
          <p className="text-[0.625rem] text-faint">{r.area} · Harare</p>
        </div>
        <span className="rounded-md bg-surface-muted px-2 py-1 text-[0.5625rem] font-medium text-muted">
          from {r.from}/mo
        </span>
      </div>
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${r.grid.cols}, minmax(0, 1fr))` }}>
        {r.grid.states.map((s, i) => (
          <span key={i} className="aspect-square rounded-[3px]" style={{ background: stateColor[s] ?? "var(--surface-muted)" }} />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between gap-3">
        <span className="text-[0.6875rem] text-muted tabular">
          <span className="font-semibold text-foreground">{r.occ}</span> / {r.beds} beds
        </span>
        <span className="text-[0.625rem] text-faint tabular">{pct}%</span>
      </div>
      <MiniBar value={pct} color={ACCENT} className="mt-1.5" />
    </div>
  );
}

export function BlessBriMockup() {
  return (
    <DashboardShell
      product="BlessBri"
      icon={Building2}
      accent={ACCENT}
      breadcrumb="BlessBri · Harare"
      pageTitle="Residences overview"
      account={{ name: "Operator", role: "BlessBri Properties" }}
      nav={[
        { icon: LayoutGrid, label: "Overview", active: true },
        { icon: Building2, label: "Residences", badge: "2" },
        { icon: BedDouble, label: "Rooms" },
        { icon: FileText, label: "Applications", badge: "3" },
        { icon: CreditCard, label: "Payments" },
      ]}
      actions={<ShellButton accent={ACCENT}>New application</ShellButton>}
    >
      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat label="Beds" value="48" delta="2 houses" deltaTone="muted" />
        <Stat label="Occupied" value="39 / 48" delta="81%" />
        <Stat label="New applications" value="3" delta="this week" deltaTone="muted" />
        <Stat label="Collected · Jul" value="$4.2k" delta="on track" deltaTone="green" />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {residences.map((r) => (
          <ResidenceCard key={r.name} r={r} />
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-border bg-surface px-3 py-2.5">
        <span className="font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-faint">
          Booking
        </span>
        {["Explore", "Apply", "Approve", "Pay", "Move in"].map((step, i) => (
          <span key={step} className="flex items-center gap-2">
            <span className="text-[0.6875rem] text-muted">{step}</span>
            {i === 3 && <Smartphone className="size-3" style={{ color: ACCENT }} />}
            {i < 4 && <span className="text-faint">→</span>}
          </span>
        ))}
        <span className="ml-auto hidden text-[0.5625rem] text-faint sm:inline">
          Paynow · verified rooms
        </span>
      </div>
    </DashboardShell>
  );
}
