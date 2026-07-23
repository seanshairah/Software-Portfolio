import {
  Radar,
  Truck,
  TriangleAlert,
  Users,
  BarChart3,
  Activity,
} from "lucide-react";
import {
  DashboardShell,
  ShellButton,
  TableScroll,
  Stat,
  Pill,
  MiniBar,
} from "./frame";

const ACCENT = "#ff3d3d";

const nav = [
  { icon: BarChart3, label: "Fleet" },
  { icon: Truck, label: "Vehicles", active: true, badge: "42" },
  { icon: TriangleAlert, label: "Incidents", badge: "3" },
  { icon: Users, label: "Drivers" },
  { icon: Radar, label: "Analytics" },
];

const sensors = [
  { k: "Speed", v: "84 km/h", b: 70 },
  { k: "Lane", v: "Centered", b: 92 },
  { k: "Attention", v: "Alert", b: 86 },
];

const incidents = [
  { v: "ADK-3921", t: "Lane departure · 84 km/h", sev: "Medium", tone: "amber" as const, when: "12m" },
  { v: "BFR-1180", t: "Overspeed · 112 km/h", sev: "High", tone: "red" as const, when: "34m" },
  { v: "CQP-4410", t: "Fatigue signals detected", sev: "High", tone: "red" as const, when: "1h" },
];

export function TransportMockup() {
  return (
    <DashboardShell
      product="SAFE"
      icon={Radar}
      accent={ACCENT}
      nav={nav}
      breadcrumb="Vehicle · ZW-ADK-3921"
      pageTitle="Digital twin"
      account={{ name: "Safety desk", role: "Fleet operator" }}
      actions={
        <>
          <ShellButton variant="ghost">
            <Activity className="size-3" /> Live
          </ShellButton>
          <ShellButton accent={ACCENT}>Escalate</ShellButton>
        </>
      }
    >
      {/* KPI row */}
      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat label="Vehicles live" value="42" delta="all online" deltaTone="green" />
        <Stat label="Events today" value="2,140" delta="3 shown" deltaTone="muted" />
        <Stat label="Avg safety" value="94" delta="+1" />
        <Stat label="Open incidents" value="1" delta="action" deltaTone="red" />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        {/* Vehicle twin */}
        <div className="lg:col-span-3">
          <div className="rounded-lg border border-border bg-surface p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-faint">
                ZW-ADK-3921 · live twin
              </span>
              <Pill tone="green">Nominal</Pill>
            </div>
            <div className="relative overflow-hidden rounded-lg border border-border bg-surface-raised p-5">
              <div className="mx-auto flex h-20 w-36 items-center justify-center rounded-[1.25rem] border-2 border-border-strong">
                <span className="font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-faint">
                  truck
                </span>
                <span className="absolute left-[24%] top-4 size-2 rounded-full bg-signal-green" />
                <span className="absolute right-[24%] top-4 size-2 rounded-full bg-signal-green" />
                <span className="absolute left-[30%] bottom-4 size-2 rounded-full bg-[#e5b53d]" />
                <span className="absolute right-[30%] bottom-4 size-2 rounded-full bg-signal-green" />
                <span className="absolute left-1/2 top-2 size-2.5 -translate-x-1/2 rounded-full bg-signal-blue" />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {sensors.map((m) => (
                <div key={m.k}>
                  <p className="text-[0.625rem] text-faint">{m.k}</p>
                  <p className="text-[0.75rem] font-medium text-foreground tabular">{m.v}</p>
                  <MiniBar className="mt-1.5" value={m.b} color="#39ff88" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Incidents table */}
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-lg border border-border">
            <div className="flex items-center justify-between border-b border-border bg-surface px-3 py-2">
              <span className="font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-faint">
                Escalated incidents
              </span>
              <span className="font-mono text-[0.5625rem] text-faint">3 of 2,140</span>
            </div>
            <TableScroll>
              <table className="w-full min-w-[18rem] border-collapse text-left">
                <tbody>
                  {incidents.map((i) => (
                    <tr key={i.v} className="border-b border-border/70 last:border-0 hover:bg-surface">
                      <td className="px-3 py-2.5">
                        <p className="text-[0.75rem] text-foreground">{i.t}</p>
                        <p className="font-mono text-[0.5625rem] text-faint">{i.v} · {i.when} ago</p>
                      </td>
                      <td className="px-3 py-2.5 text-right">
                        <Pill tone={i.tone}>{i.sev}</Pill>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableScroll>
            <p className="border-t border-border px-3 py-2 text-[0.5625rem] leading-relaxed text-faint">
              The severity model surfaced 3 of 2,140 events. The rest were logged, not shown.
            </p>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
