import {
  Truck,
  LayoutGrid,
  Boxes,
  FileCheck,
  Wallet,
  SlidersHorizontal,
  Plus,
} from "lucide-react";
import {
  DashboardShell,
  ShellButton,
  TableScroll,
  Stat,
  Pill,
  Avatar,
  MiniBar,
} from "./frame";

const ACCENT = "#ff6a3d";

const nav = [
  { icon: LayoutGrid, label: "Overview" },
  { icon: Truck, label: "Jobs", active: true, badge: "12" },
  { icon: Boxes, label: "Transporters" },
  { icon: FileCheck, label: "Customs" },
  { icon: Wallet, label: "Finance" },
];

const jobs = [
  { id: "FRZ-2481", cargo: "Fertiliser · 34t", route: "Beira → Harare", carrier: "Sable Transport", stage: "In transit", tone: "blue" as const, prog: 62, value: "$18,400" },
  { id: "FRZ-2479", cargo: "Steel coil · 28t", route: "Durban → Bulawayo", carrier: "Highveld Hauliers", stage: "At customs", tone: "amber" as const, prog: 78, value: "$41,900" },
  { id: "FRZ-2477", cargo: "Maize · 40t", route: "Lusaka → Harare", carrier: "Zambezi Freight", stage: "Delivered", tone: "green" as const, prog: 100, value: "$22,050" },
  { id: "FRZ-2476", cargo: "Timber · 26t", route: "Mutare → Harare", carrier: "Sable Transport", stage: "Loading", tone: "blue" as const, prog: 34, value: "$9,300" },
  { id: "FRZ-2475", cargo: "Cement · 30t", route: "Harare → Mutare", carrier: "Awaiting bid", stage: "Requested", tone: "muted" as const, prog: 8, value: "$7,800" },
];

export function LogisticsMockup() {
  return (
    <DashboardShell
      product="Frazier"
      icon={Truck}
      accent={ACCENT}
      nav={nav}
      breadcrumb="Operations"
      pageTitle="Live jobs"
      actions={
        <>
          <ShellButton variant="ghost">
            <SlidersHorizontal className="size-3" /> Filter
          </ShellButton>
          <ShellButton accent={ACCENT}>
            <Plus className="size-3" /> New job
          </ShellButton>
        </>
      }
    >
      {/* KPI row */}
      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat label="Active jobs" value="12" delta="+2" />
        <Stat label="In transit" value="5" delta="on time" deltaTone="muted" />
        <Stat label="At customs" value="3" delta="1 held" deltaTone="muted" />
        <Stat label="Exceptions" value="1" delta="action" deltaTone="red" />
      </div>

      {/* Jobs table */}
      <div className="overflow-hidden rounded-lg border border-border">
        <TableScroll>
          <table className="w-full min-w-[36rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-surface">
                {["Job", "Route", "Carrier", "Stage", "Progress", "Value"].map((h) => (
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
              {jobs.map((j) => (
                <tr
                  key={j.id}
                  className="border-b border-border/70 transition-colors last:border-0 hover:bg-surface"
                >
                  <td className="px-3 py-2.5">
                    <p className="text-[0.75rem] font-medium text-foreground">{j.cargo}</p>
                    <p className="font-mono text-[0.5625rem] text-faint">{j.id}</p>
                  </td>
                  <td className="px-3 py-2.5 text-[0.6875rem] text-muted">{j.route}</td>
                  <td className="px-3 py-2.5">
                    <span className="flex items-center gap-1.5">
                      <Avatar name={j.carrier === "Awaiting bid" ? "?" : j.carrier} className="size-5" />
                      <span className="text-[0.6875rem] text-muted">{j.carrier}</span>
                    </span>
                  </td>
                  <td className="px-3 py-2.5">
                    <Pill tone={j.tone}>{j.stage}</Pill>
                  </td>
                  <td className="px-3 py-2.5">
                    <span className="flex items-center gap-2">
                      <MiniBar value={j.prog} color={ACCENT} className="w-14" />
                      <span className="font-mono text-[0.5625rem] text-faint tabular">{j.prog}%</span>
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-[0.75rem] font-medium text-foreground tabular">
                    {j.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroll>
      </div>

      {/* Footer strip */}
      <div className="mt-3 flex items-center justify-between text-[0.625rem] text-faint">
        <span>Showing 5 of 42 jobs</span>
        <span className="flex items-center gap-3">
          <span>Customs cleared today · <span className="text-foreground">$2,300</span></span>
          <span className="hidden items-center gap-1 sm:flex">
            <span className="size-1.5 rounded-full bg-signal-green" /> Live
          </span>
        </span>
      </div>
    </DashboardShell>
  );
}
