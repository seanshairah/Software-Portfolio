import {
  Sprout,
  Map as MapIcon,
  CloudRain,
  Bell,
  FileBarChart,
  Layers,
} from "lucide-react";
import { DashboardShell, ShellButton, Stat, Pill, KV } from "./frame";

const ACCENT = "#4ea72e";

const nav = [
  { icon: MapIcon, label: "Map", active: true },
  { icon: Sprout, label: "Fields", badge: "12" },
  { icon: CloudRain, label: "Weather" },
  { icon: Bell, label: "Alerts", badge: "1" },
  { icon: FileBarChart, label: "Reports" },
];

// Crop-health layer colours per field cell (NDVI-style).
const fields = [
  "#4ea72e", "#4ea72e", "#7cbf4b", "#4ea72e", "#e5b53d",
  "#7cbf4b", "#4ea72e", "#4ea72e", "#c65b3a", "#7cbf4b",
  "#4ea72e", "#7cbf4b", "#4ea72e", "#4ea72e", "#7cbf4b",
];

export function FarmingMockup() {
  return (
    <DashboardShell
      product="Fields"
      icon={Sprout}
      accent={ACCENT}
      nav={nav}
      breadcrumb="Chegutu farm · 84 ha"
      pageTitle="Crop health"
      account={{ name: "R. Banda", role: "Farm manager" }}
      actions={
        <>
          <ShellButton variant="ghost">
            <Layers className="size-3" /> Layers
          </ShellButton>
          <ShellButton accent={ACCENT}>Add observation</ShellButton>
        </>
      }
    >
      {/* KPI row */}
      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat label="Fields" value="12" delta="84 ha" deltaTone="muted" />
        <Stat label="Avg health" value="0.61" delta="NDVI" deltaTone="muted" />
        <Stat label="Rain (48h)" value="22mm" delta="forecast" deltaTone="green" />
        <Stat label="Alerts" value="1" delta="water" deltaTone="red" />
      </div>

      {/* Layer toggle */}
      <div className="mb-3 flex flex-wrap items-center gap-1.5">
        <span className="rounded-md border border-border px-2 py-1 text-[0.625rem] text-muted">Operational</span>
        <span className="rounded-md border border-border px-2 py-1 text-[0.625rem] text-muted">Weather</span>
        <span className="rounded-md bg-[#4ea72e] px-2 py-1 text-[0.625rem] font-medium text-white">Crop health</span>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        {/* Map */}
        <div className="lg:col-span-3">
          <div className="relative overflow-hidden rounded-lg border border-border bg-[#eef1e8] p-2 dark:bg-[#12160f]">
            <div className="grid grid-cols-5 gap-1">
              {fields.map((c, i) => (
                <span
                  key={i}
                  className="aspect-[4/3] rounded-[3px]"
                  style={{ backgroundColor: c, opacity: 0.9 }}
                />
              ))}
            </div>
            <span className="absolute left-3 top-3 rounded-md bg-surface-raised/90 px-2 py-1 font-mono text-[0.5625rem] text-muted backdrop-blur">
              12 fields · 84 ha
            </span>
          </div>
          <div className="mt-2 flex items-center gap-3">
            <span className="text-[0.625rem] text-faint">Low</span>
            <span className="h-1.5 flex-1 rounded-full bg-gradient-to-r from-[#c65b3a] via-[#e5b53d] to-[#4ea72e]" />
            <span className="text-[0.625rem] text-faint">Healthy</span>
          </div>
        </div>

        {/* Field detail + alerts */}
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-border bg-surface p-3">
            <p className="mb-1 font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-faint">
              Field E-04 · Maize
            </p>
            <KV k="Stage" v="Tasselling" />
            <KV k="NDVI" v="0.42 ↓" />
            <KV k="Soil moisture" v="Low" />
          </div>

          <div className="mt-3 space-y-2">
            <div className="rounded-lg border border-signal-red/30 bg-signal-red/[0.05] p-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[0.75rem] font-medium text-foreground">Water stress</span>
                <Pill tone="red">E-04</Pill>
              </div>
              <p className="mt-0.5 text-[0.625rem] text-muted">
                Health dropped 18% in 6 days. Irrigate within 48h.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[0.75rem] font-medium text-foreground">Rain expected</span>
                <Pill tone="blue">Thu</Pill>
              </div>
              <p className="mt-0.5 text-[0.625rem] text-muted">
                22mm forecast · hold top-dressing on E-07.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
