import {
  Ship,
  LayoutGrid,
  Package,
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
} from "./frame";

// Frazier's real brand hue is purple ("Warm Precision"), with a coral accent.
const ACCENT = "#5D3BAD";

const nav = [
  { icon: LayoutGrid, label: "Overview" },
  { icon: Package, label: "Job Pool", active: true, badge: "12" },
  { icon: Ship, label: "Shipments" },
  { icon: FileCheck, label: "Customs" },
  { icon: Wallet, label: "Finance" },
];

const shipments = [
  { ref: "FRZ-2481", cargo: "Electronics · 1×20ft", route: "Durban → Harare", carrier: "Sable Transport", status: "Customs Processing", tone: "amber" as const, value: "$18,400" },
  { ref: "FRZ-2479", cargo: "Steel coil · 28t", route: "Durban → Bulawayo", carrier: "Highveld Hauliers", status: "En Route", tone: "blue" as const, value: "$41,900" },
  { ref: "FRZ-2477", cargo: "Rice · 40t", route: "Beira → Harare", carrier: "Zambezi Freight", status: "Customs Cleared", tone: "green" as const, value: "$22,050" },
  { ref: "FRZ-2476", cargo: "Smartphones · pallet", route: "Beitbridge → Harare", carrier: "Sable Transport", status: "At Checkpoint", tone: "amber" as const, value: "$9,300" },
  { ref: "FRZ-2475", cargo: "Cement · 30t", route: "Harare → Mutare", carrier: "Awaiting assignment", status: "Pending", tone: "muted" as const, value: "$7,800" },
];

export function LogisticsMockup() {
  return (
    <DashboardShell
      product="Frazier"
      icon={Ship}
      accent={ACCENT}
      nav={nav}
      breadcrumb="Logistics · Job Pool"
      pageTitle="Job pool & assignment"
      account={{ name: "Chief Logistics", role: "Frazier Shipping" }}
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
      {/* KPI row — real finance/customs terms */}
      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat label="Active shipments" value="12" delta="+2" />
        <Stat label="At customs" value="3" delta="AEO lane" deltaTone="muted" />
        <Stat label="Receivables" value="$84.2k" delta="outstanding" deltaTone="muted" />
        <Stat label="Gross margin" value="22%" delta="delivered" deltaTone="green" />
      </div>

      {/* Job pool table */}
      <div className="overflow-hidden rounded-lg border border-border">
        <TableScroll>
          <table className="w-full min-w-[38rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-surface">
                {["Shipment", "Route", "Transporter", "Status", "Value"].map((h) => (
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
              {shipments.map((s) => (
                <tr
                  key={s.ref}
                  className="border-b border-border/70 transition-colors last:border-0 hover:bg-surface"
                >
                  <td className="px-3 py-2.5">
                    <p className="text-[0.75rem] font-medium text-foreground">{s.cargo}</p>
                    <p className="font-mono text-[0.5625rem] text-faint">{s.ref}</p>
                  </td>
                  <td className="px-3 py-2.5 text-[0.6875rem] text-muted">{s.route}</td>
                  <td className="px-3 py-2.5">
                    <span className="flex items-center gap-1.5">
                      <Avatar name={s.carrier === "Awaiting assignment" ? "?" : s.carrier} className="size-5" />
                      <span className="text-[0.6875rem] text-muted">{s.carrier}</span>
                    </span>
                  </td>
                  <td className="px-3 py-2.5">
                    <Pill tone={s.tone}>{s.status}</Pill>
                  </td>
                  <td className="px-3 py-2.5 text-[0.75rem] font-medium text-foreground tabular">
                    {s.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroll>
      </div>

      {/* Footer strip */}
      <div className="mt-3 flex items-center justify-between text-[0.625rem] text-faint">
        <span>Beitbridge · Chirundu · Forbes · Plumtree</span>
        <span className="flex items-center gap-3">
          <span>AEO-accredited clearing · <span className="text-foreground">ZIMRA</span></span>
          <span className="hidden items-center gap-1 sm:flex">
            <span className="size-1.5 rounded-full" style={{ background: "#3ED6A2" }} /> Live
          </span>
        </span>
      </div>
    </DashboardShell>
  );
}
