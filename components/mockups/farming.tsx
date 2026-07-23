import {
  Leaf,
  LayoutGrid,
  Sprout,
  Beef,
  Tractor,
  Users,
  Layers,
  Plus,
} from "lucide-react";
import {
  DashboardShell,
  ShellButton,
  TableScroll,
  Stat,
  Pill,
  MiniBar,
} from "./frame";

/* Msasa is a farm-management ERP with a dark, map-first identity: deep
   forest-green canvas, lime signal. We wear that palette here regardless of the
   surrounding world so the product reads as itself, not as the neutral shell. */
const ACCENT = "#C6ED4B"; // lime
const INK = "#16301C"; // dark green sitting on the lime fill

// Forest-green token override — mapped onto the shell via the `vars` prop.
const MSASA_VARS: Record<string, string> = {
  "--surface-raised": "#0F1A13",
  "--surface": "#16241B",
  "--surface-muted": "#213528",
  "--foreground": "#EAF3E6",
  "--muted": "#9DB39F",
  "--faint": "#7C9280",
  "--border": "rgba(234, 243, 230, 0.10)",
  "--border-strong": "rgba(234, 243, 230, 0.22)",
  "--accent": "#C6ED4B",
  "--accent-soft": "rgba(198, 237, 75, 0.16)",
  "--signal-green": "#7BD88F",
  "--signal-red": "#FF7A6B",
};

const nav = [
  { icon: LayoutGrid, label: "Farm HQ" },
  { icon: Sprout, label: "Crops", active: true, badge: "5" },
  { icon: Beef, label: "Livestock" },
  { icon: Tractor, label: "Machinery" },
  { icon: Users, label: "Workforce" },
];

const fields = [
  { id: "A1", crop: "Maize", area: "48 ha", stage: "Tasselling", ndvi: 0.71, health: 82, status: "Healthy", tone: "green" as const },
  { id: "A2", crop: "Soya", area: "36 ha", stage: "Pod fill", ndvi: 0.66, health: 74, status: "Healthy", tone: "green" as const },
  { id: "B2", crop: "Tobacco", area: "22 ha", stage: "Reaping", ndvi: 0.58, health: 61, status: "Monitor", tone: "amber" as const },
  { id: "C1", crop: "Groundnuts", area: "18 ha", stage: "Flowering", ndvi: 0.49, health: 44, status: "Water stress", tone: "red" as const },
  { id: "C2", crop: "Fallow", area: "18 ha", stage: "Resting", ndvi: 0.0, health: 0, status: "Off-season", tone: "muted" as const },
];

// NDVI heatmap cells — red (stressed) → lime (vigorous), laid out as estate blocks.
const heat = [
  "#C6ED4B", "#C6ED4B", "#9FD64F", "#C6ED4B", "#E5B53D",
  "#9FD64F", "#C6ED4B", "#C6ED4B", "#E58A3D", "#9FD64F",
  "#C6ED4B", "#9FD64F", "#C65B3A", "#E5B53D", "#2D3B2C",
];

export function FarmingMockup() {
  return (
    <DashboardShell
      className="dark"
      vars={MSASA_VARS}
      product="Msasa"
      icon={Leaf}
      accent={ACCENT}
      accentInk={INK}
      nav={nav}
      breadcrumb="Crops · Fields & map"
      pageTitle="Fields & map"
      account={{ name: "R. Banda", role: "Estate manager" }}
      actions={
        <>
          <ShellButton variant="ghost">
            <Layers className="size-3" /> NDVI
          </ShellButton>
          <ShellButton accent={ACCENT} ink={INK}>
            <Plus className="size-3" /> Log activity
          </ShellButton>
        </>
      }
    >
      {/* KPI row — real season/agronomy terms */}
      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat label="Planted area" value="142 ha" delta="5 fields" deltaTone="muted" />
        <Stat label="Avg NDVI" value="0.63" delta="+0.04 wk" deltaTone="green" />
        <Stat label="Season" value="2025/26" delta="Summer" deltaTone="muted" />
        <Stat label="Open alerts" value="2" delta="irrigation" deltaTone="red" />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        {/* Fields register */}
        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-lg border border-border">
            <TableScroll>
              <table className="w-full min-w-[32rem] border-collapse text-left">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    {["Field", "Crop", "Area", "Stage", "Health", "Status"].map((h) => (
                      <th
                        key={h}
                        className="px-3 py-2 font-mono text-[0.5625rem] font-medium uppercase tracking-[0.12em] text-faint"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {fields.map((f) => (
                    <tr
                      key={f.id}
                      className="border-b border-border/70 transition-colors last:border-0 hover:bg-surface"
                    >
                      <td className="px-3 py-2.5 font-mono text-[0.6875rem] font-medium text-foreground">
                        {f.id}
                      </td>
                      <td className="px-3 py-2.5 text-[0.75rem] font-medium text-foreground">
                        {f.crop}
                      </td>
                      <td className="px-3 py-2.5 text-[0.6875rem] text-muted tabular">{f.area}</td>
                      <td className="px-3 py-2.5 text-[0.6875rem] text-muted">{f.stage}</td>
                      <td className="px-3 py-2.5">
                        {f.tone === "muted" ? (
                          <span className="text-[0.6875rem] text-faint">—</span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <MiniBar value={f.health} className="w-12" />
                            <span className="font-mono text-[0.625rem] text-faint tabular">
                              {f.ndvi.toFixed(2)}
                            </span>
                          </span>
                        )}
                      </td>
                      <td className="px-3 py-2.5">
                        <Pill tone={f.tone}>{f.status}</Pill>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableScroll>
          </div>
          <p className="mt-2 text-[0.625rem] text-faint">
            Scout → Log activity → Track inputs → Harvest → GMB delivery · Chegutu Estate
          </p>
        </div>

        {/* NDVI map + alert */}
        <div className="lg:col-span-2">
          <div className="relative overflow-hidden rounded-lg border border-border bg-[#0C160F] p-2">
            <div className="grid grid-cols-5 gap-1">
              {heat.map((c, i) => (
                <span
                  key={i}
                  className="aspect-[4/3] rounded-[3px]"
                  style={{ backgroundColor: c, opacity: 0.92 }}
                />
              ))}
            </div>
            <span className="absolute left-2.5 top-2.5 rounded-md bg-black/40 px-2 py-1 font-mono text-[0.5625rem] text-[#EAF3E6] backdrop-blur">
              142 ha · NDVI
            </span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-[0.5625rem] text-faint">Stressed</span>
            <span className="h-1.5 flex-1 rounded-full bg-gradient-to-r from-[#C65B3A] via-[#E5B53D] to-[#C6ED4B]" />
            <span className="text-[0.5625rem] text-faint">Vigorous</span>
          </div>

          <div className="mt-3 rounded-lg border border-signal-red/30 bg-signal-red/[0.06] p-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[0.75rem] font-medium text-foreground">Irrigation due</span>
              <Pill tone="red">C1 · Groundnuts</Pill>
            </div>
            <p className="mt-0.5 text-[0.625rem] text-muted">
              NDVI down 14% in 5 days at flowering. Irrigate within 48h.
            </p>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
