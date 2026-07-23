import {
  Ship,
  LayoutGrid,
  Package,
  FileCheck,
  Wallet,
  Home,
  BedDouble,
  FileText,
  Users,
  CreditCard,
  Leaf,
  Sprout,
  Beef,
  Tractor,
  Smartphone,
  Check,
  Heart,
  Pill,
  ShieldCheck,
  Receipt,
  Syringe,
} from "lucide-react";
import type { MockupPreset } from "@/content/projects/types";
import type { Screen } from "@/components/portfolio/screen-switcher";
import {
  DashboardShell,
  ShellButton,
  TableScroll,
  Stat,
  Pill as Tag,
  Avatar,
  KV,
  MiniBar,
  PanelLabel,
} from "./frame";
import { LogisticsMockup } from "./logistics";
import { HousingMockup } from "./housing";
import { BlessBriMockup } from "./blessbri";
import { KinosMockup } from "./kinos";
import { FarmingMockup } from "./farming";
import { TransportMockup } from "./transport";
import { PaymentsMockup } from "./payments";

/* Secondary product screens. Each product's case study becomes a small,
   browsable gallery of real UI — a few clean screens rather than one dense one. */

/* ── Frazier · shipment tracking ─────────────────────────────────────────── */
const FRZ = "#5D3BAD";
const trackSteps = [
  { label: "Quote", done: true },
  { label: "Payment", done: true },
  { label: "Dispatch", done: true },
  { label: "En route", done: true },
  { label: "Customs", active: true },
  { label: "Delivery" },
];

function LogisticsShipmentScreen() {
  return (
    <DashboardShell
      product="Frazier"
      icon={Ship}
      accent={FRZ}
      breadcrumb="Logistics · Shipments"
      pageTitle="FRZ-2481 · Durban → Harare"
      account={{ name: "Chief Logistics", role: "Frazier Shipping" }}
      nav={[
        { icon: LayoutGrid, label: "Overview" },
        { icon: Package, label: "Job Pool", badge: "12" },
        { icon: Ship, label: "Shipments", active: true },
        { icon: FileCheck, label: "Customs" },
        { icon: Wallet, label: "Finance" },
      ]}
      actions={<ShellButton accent={FRZ}>Track live</ShellButton>}
    >
      {/* Progress timeline */}
      <div className="mb-5 flex items-center">
        {trackSteps.map((s, i) => (
          <div key={s.label} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <span
                className="flex size-6 items-center justify-center rounded-full text-[0.5625rem] font-semibold"
                style={{
                  background: s.done ? FRZ : s.active ? "#fff" : "var(--surface-muted)",
                  color: s.done ? "#fff" : s.active ? FRZ : "var(--faint)",
                  border: s.active ? `1.5px solid ${FRZ}` : undefined,
                }}
              >
                {s.done ? <Check className="size-3" /> : i + 1}
              </span>
              <span className="whitespace-nowrap text-[0.5625rem] text-muted">{s.label}</span>
            </div>
            {i < trackSteps.length - 1 && (
              <span
                className="mx-1 mb-4 h-px flex-1 rounded"
                style={{ background: s.done ? FRZ : "var(--border)" }}
              />
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-surface p-3.5">
          <PanelLabel>Cargo & route</PanelLabel>
          <KV k="Cargo" v="Electronics · 1×20ft" />
          <KV k="Route" v="Durban → Beitbridge → Harare" />
          <KV k="Transporter" v="Sable Transport" />
          <KV k="Declared value" v="$18,400" />
        </div>
        <div className="rounded-lg border border-border bg-surface p-3.5">
          <PanelLabel>Customs · AEO lane</PanelLabel>
          <div className="flex items-center justify-between py-1.5">
            <span className="text-[0.6875rem] text-faint">Status</span>
            <Tag tone="amber">Processing · Beitbridge</Tag>
          </div>
          <KV k="Bill of entry" v="ZW-BE-4471" />
          <KV k="Duty & VAT" v="$3,120 · paid" />
          <KV k="ETA Harare" v="Tomorrow · 14:00" />
        </div>
      </div>
    </DashboardShell>
  );
}

/* ── Ivy House · payments (EcoCash) ──────────────────────────────────────── */
const IVY = "#157857";
const payRows = [
  { n: "Chiedza Mhike", room: "IVY-104", amt: "$130", method: "EcoCash", status: "Paid", tone: "green" as const },
  { n: "Kudzai Moyo", room: "IVY-203", amt: "$130", method: "EcoCash", status: "Paid", tone: "green" as const },
  { n: "Nyasha Marufu", room: "IVY-103", amt: "$130", method: "Cash", status: "Paid", tone: "green" as const },
  { n: "Brian Sibanda", room: "IVY-204", amt: "$130", method: "EcoCash", status: "Due", tone: "amber" as const },
  { n: "Rutendo Chari", room: "IVY-201", amt: "$130", method: "—", status: "Overdue", tone: "red" as const },
];

function IvyPaymentsScreen() {
  return (
    <DashboardShell
      product="Ivy House"
      icon={Home}
      accent={IVY}
      breadcrumb="Ivy House · Payments"
      pageTitle="Rent · July 2026"
      account={{ name: "Tatenda Moyo", role: "Owner" }}
      nav={[
        { icon: LayoutGrid, label: "Overview" },
        { icon: BedDouble, label: "Rooms", badge: "10" },
        { icon: FileText, label: "Applications", badge: "3" },
        { icon: Users, label: "Students" },
        { icon: CreditCard, label: "Payments", active: true },
      ]}
      actions={<ShellButton accent={IVY}>Send reminder</ShellButton>}
    >
      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat label="Collected" value="$1,240" delta="on track" deltaTone="green" />
        <Stat label="Outstanding" value="$260" delta="2 rooms" deltaTone="red" />
        <Stat label="Via EcoCash" value="6 / 8" delta="75%" deltaTone="muted" />
        <Stat label="Due date" value="5 Jul" delta="passed" deltaTone="muted" />
      </div>
      <div className="overflow-hidden rounded-lg border border-border">
        <TableScroll>
          <table className="w-full min-w-[26rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-surface">
                {["Student", "Room", "Amount", "Method", "Status"].map((h) => (
                  <th key={h} className="px-3 py-2 font-mono text-[0.5625rem] font-medium uppercase tracking-[0.12em] text-faint">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {payRows.map((r) => (
                <tr key={r.n} className="border-b border-border/70 transition-colors last:border-0 hover:bg-surface">
                  <td className="px-3 py-2.5">
                    <span className="flex items-center gap-2">
                      <Avatar name={r.n} className="size-5" />
                      <span className="text-[0.75rem] font-medium text-foreground">{r.n}</span>
                    </span>
                  </td>
                  <td className="px-3 py-2.5 font-mono text-[0.625rem] text-muted">{r.room}</td>
                  <td className="px-3 py-2.5 text-[0.75rem] font-medium text-foreground tabular">{r.amt}</td>
                  <td className="px-3 py-2.5">
                    <span className="flex items-center gap-1 text-[0.6875rem] text-muted">
                      {r.method === "EcoCash" && <Smartphone className="size-3" style={{ color: IVY }} />}
                      {r.method}
                    </span>
                  </td>
                  <td className="px-3 py-2.5"><Tag tone={r.tone}>{r.status}</Tag></td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroll>
      </div>
    </DashboardShell>
  );
}

/* ── Msasa · field detail (dark forest) ──────────────────────────────────── */
const LIME = "#C6ED4B";
const MSASA_INK = "#16301C";
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
const ndviTrend = [58, 61, 63, 66, 69, 71];

function MsasaFieldScreen() {
  return (
    <DashboardShell
      className="dark"
      vars={MSASA_VARS}
      product="Msasa"
      icon={Leaf}
      accent={LIME}
      accentInk={MSASA_INK}
      breadcrumb="Crops · A1 · Maize"
      pageTitle="Field A1 · Maize · 48 ha"
      account={{ name: "R. Banda", role: "Estate manager" }}
      nav={[
        { icon: LayoutGrid, label: "Farm HQ" },
        { icon: Sprout, label: "Crops", active: true, badge: "5" },
        { icon: Beef, label: "Livestock" },
        { icon: Tractor, label: "Machinery" },
        { icon: Users, label: "Workforce" },
      ]}
      actions={<ShellButton accent={LIME} ink={MSASA_INK}>Log activity</ShellButton>}
    >
      <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
        <div className="md:col-span-3">
          <div className="rounded-lg border border-border bg-surface p-3.5">
            <div className="mb-2 flex items-center justify-between">
              <PanelLabel>NDVI · last 6 weeks</PanelLabel>
              <span className="font-mono text-[0.625rem] text-faint">0.71 ↑</span>
            </div>
            <div className="flex h-20 items-end gap-1.5">
              {ndviTrend.map((v, i) => (
                <span key={i} className="flex-1 rounded-t" style={{ height: `${v}%`, background: i === ndviTrend.length - 1 ? LIME : "rgba(198,237,75,0.35)" }} />
              ))}
            </div>
          </div>
          <div className="mt-3 rounded-lg border border-border bg-surface p-3.5">
            <PanelLabel>Activity log</PanelLabel>
            {[
              ["Top-dressing · AN 200kg", "3 days ago"],
              ["Scouting · fall armyworm clear", "5 days ago"],
              ["Irrigation · 22mm", "1 week ago"],
            ].map(([a, t]) => (
              <div key={a} className="flex items-center justify-between border-b border-border/60 py-1.5 last:border-0">
                <span className="text-[0.6875rem] text-foreground">{a}</span>
                <span className="text-[0.5625rem] text-faint">{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-lg border border-border bg-surface p-3.5">
            <PanelLabel>Field</PanelLabel>
            <KV k="Stage" v="Tasselling" />
            <KV k="Planted" v="14 Nov 2025" />
            <KV k="Population" v="54,000 / ha" />
            <KV k="Cost / ha" v="$312" />
            <div className="mt-2">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-[0.625rem] text-faint">Season budget</span>
                <span className="text-[0.625rem] text-faint">68%</span>
              </div>
              <MiniBar value={68} color={LIME} />
            </div>
          </div>
          <div className="mt-3 rounded-lg p-3.5" style={{ background: "rgba(198,237,75,0.10)", border: "1px solid rgba(198,237,75,0.25)" }}>
            <p className="text-[0.75rem] font-medium text-foreground">Projected yield</p>
            <p className="mt-0.5 text-[0.625rem] text-muted">6.4 t/ha · GMB delivery window opens Thu</p>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

/* ── KinOS · a person (Dusk) ─────────────────────────────────────────────── */
const C = {
  paper: "#f6f2ec",
  card: "#fbf8f3",
  line: "#e6dfd3",
  ink: "#211d19",
  inkSoft: "#5a534b",
  inkFaint: "#928a7e",
  dusk: "#4e4b90",
  duskInk: "#edebf6",
  ember: "#d98a3d",
  emberSoft: "#f0d9be",
  emberBg: "#fdf6ec",
  emberText: "#8a531b",
  calm: "#4e9e7e",
  calmSoft: "#cfe6db",
  calmText: "#2f6a52",
};
const bp = [
  { d: "Mon", s: 128, ok: true },
  { d: "Tue", s: 131, ok: true },
  { d: "Wed", s: 140, ok: false },
  { d: "Thu", s: 138, ok: false },
  { d: "—", s: 0, ok: true },
];

function KinosPersonScreen() {
  return (
    <div className="overflow-hidden rounded-2xl shadow-raised" style={{ background: C.paper, border: `1px solid ${C.line}`, color: C.ink }}>
      {/* header */}
      <div className="flex items-center justify-between gap-3 px-4 py-3.5" style={{ borderBottom: `1px solid ${C.line}` }}>
        <div className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-full text-[0.75rem] font-semibold" style={{ background: C.dusk, color: C.duskInk }}>
            GE
          </span>
          <div>
            <p className="text-[0.875rem] font-semibold" style={{ color: C.ink }}>Gogo Esther</p>
            <p className="text-[0.625rem]" style={{ color: C.inkFaint }}>72 · in your orbit · Chinhoyi</p>
          </div>
        </div>
        <span className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.625rem] font-medium" style={{ background: C.emberBg, color: C.emberText, border: `1px solid ${C.emberSoft}` }}>
          <span className="size-1.5 rounded-full" style={{ background: C.ember }} /> Attention
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-5">
        {/* health */}
        <div className="md:col-span-3">
          <p className="mb-2 flex items-center gap-1.5 font-mono text-[0.5625rem] uppercase tracking-[0.14em]" style={{ color: C.inkFaint }}>
            <Heart className="size-3" style={{ color: C.dusk }} /> Blood pressure · systolic
          </p>
          <div className="rounded-xl p-3.5" style={{ background: C.card, border: `1px solid ${C.line}` }}>
            <div className="flex h-24 items-end gap-3">
              {bp.map((r, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-1">
                  <span
                    className="w-full rounded-t"
                    style={{
                      height: r.s ? `${(r.s - 110) * 2.2}%` : "4%",
                      background: r.s ? (r.ok ? C.calm : C.ember) : C.line,
                      minHeight: 6,
                    }}
                  />
                  <span className="text-[0.5625rem]" style={{ color: C.inkFaint }}>{r.d}</span>
                </div>
              ))}
            </div>
            <p className="mt-2 text-[0.625rem]" style={{ color: C.emberText }}>
              Above her baseline for 2 days — a reading is overdue today.
            </p>
          </div>

          <div className="mt-3 flex items-center gap-2.5 rounded-xl p-3" style={{ background: C.card, border: `1px solid ${C.line}` }}>
            <span className="flex size-8 items-center justify-center rounded-lg" style={{ background: C.duskInk, color: C.dusk }}>
              <Pill className="size-4" />
            </span>
            <div className="flex-1">
              <p className="text-[0.75rem] font-medium" style={{ color: C.ink }}>Metformin · 500mg</p>
              <p className="text-[0.625rem]" style={{ color: C.inkFaint }}>Twice daily · refill in 3 days</p>
            </div>
            <span className="rounded-md px-2 py-1 text-[0.625rem] font-semibold" style={{ background: C.dusk, color: C.duskInk }}>Refill</span>
          </div>
        </div>

        {/* duty + grants */}
        <div className="md:col-span-2">
          <div className="rounded-xl p-3.5" style={{ background: C.emberBg, border: `1px solid ${C.emberSoft}` }}>
            <p className="text-[0.75rem] font-medium" style={{ color: C.ink }}>On duty today</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="flex size-6 items-center justify-center rounded-full text-[0.5625rem] font-semibold" style={{ background: C.dusk, color: C.duskInk }}>R</span>
              <span className="text-[0.6875rem]" style={{ color: C.inkSoft }}>Rudo — take the BP reading</span>
            </div>
          </div>
          <p className="mb-2 mt-3 flex items-center gap-1.5 font-mono text-[0.5625rem] uppercase tracking-[0.14em]" style={{ color: C.inkFaint }}>
            <ShieldCheck className="size-3" style={{ color: C.dusk }} /> Who can see Gogo
          </p>
          <div className="rounded-xl p-2.5" style={{ background: C.card, border: `1px solid ${C.line}` }}>
            {[
              ["Baba Farai", "Health"],
              ["Rudo", "Health · Money"],
              ["Amai Chipo", "Everything"],
            ].map(([n, g]) => (
              <div key={n} className="flex items-center justify-between border-b py-1.5 last:border-0" style={{ borderColor: C.line }}>
                <span className="text-[0.6875rem]" style={{ color: C.ink }}>{n}</span>
                <span className="rounded-full px-2 py-0.5 text-[0.5625rem]" style={{ background: C.calmSoft, color: C.calmText }}>{g}</span>
              </div>
            ))}
          </div>
          <p className="mt-2 text-[0.5625rem]" style={{ color: C.inkFaint }}>Grants are revocable · enforced in the database</p>
        </div>
      </div>
    </div>
  );
}

/* ── Frazier · customs clearance ─────────────────────────────────────────── */
const customsDocs: [string, string, boolean][] = [
  ["Bill of entry", "ZW-BE-4471", true],
  ["Commercial invoice", "INV-2481", true],
  ["Packing list", "PL-2481", true],
  ["Import permit", "pending", false],
];

function LogisticsCustomsScreen() {
  return (
    <DashboardShell
      product="Frazier"
      icon={Ship}
      accent={FRZ}
      breadcrumb="Logistics · Customs"
      pageTitle="Customs clearance · FRZ-2481"
      account={{ name: "Chief Customs", role: "Frazier Shipping" }}
      nav={[
        { icon: LayoutGrid, label: "Overview" },
        { icon: Package, label: "Job Pool", badge: "12" },
        { icon: Ship, label: "Shipments" },
        { icon: FileCheck, label: "Customs", active: true, badge: "3" },
        { icon: Wallet, label: "Finance" },
      ]}
      actions={<ShellButton accent={FRZ}>Submit to ZIMRA</ShellButton>}
    >
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-surface p-3.5">
          <div className="mb-1 flex items-center justify-between">
            <PanelLabel>Duties & taxes</PanelLabel>
            <Tag tone="accent">AEO lane</Tag>
          </div>
          <KV k="Customs value" v="$18,400" />
          <KV k="Duty · 25%" v="$4,600" />
          <KV k="VAT · 15%" v="$3,450" />
          <div className="mt-1 flex items-center justify-between border-t border-border pt-2">
            <span className="text-[0.6875rem] font-medium text-foreground">Payable to ZIMRA</span>
            <span className="text-[0.8125rem] font-semibold text-foreground tabular">$8,050</span>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-surface p-3.5">
          <PanelLabel>Documents</PanelLabel>
          {customsDocs.map(([name, ref, ok]) => (
            <div key={name} className="flex items-center justify-between border-b border-border/60 py-2 last:border-0">
              <span className="flex items-center gap-2">
                <span
                  className="flex size-5 items-center justify-center rounded-md"
                  style={{
                    background: ok ? "var(--signal-green)" : "var(--surface-muted)",
                    color: ok ? "#fff" : "var(--faint)",
                  }}
                >
                  {ok ? <Check className="size-3" /> : <FileText className="size-3" />}
                </span>
                <span className="text-[0.75rem] text-foreground">{name}</span>
              </span>
              <span className="font-mono text-[0.5625rem] text-faint">{ref}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-[0.625rem] text-faint">
        <span>Beitbridge border post · AEO-accredited</span>
        <span className="text-foreground">ZIMRA ASYCUDA</span>
      </div>
    </DashboardShell>
  );
}

/* ── Ivy House · rooms & occupancy ───────────────────────────────────────── */
const ivyRooms = [
  { id: "IVY-101", s: "occupied" }, { id: "IVY-102", s: "occupied" }, { id: "IVY-103", s: "occupied" },
  { id: "IVY-104", s: "available" }, { id: "IVY-105", s: "occupied" }, { id: "IVY-201", s: "reserved" },
  { id: "IVY-202", s: "occupied" }, { id: "IVY-203", s: "occupied" }, { id: "IVY-204", s: "available" },
  { id: "IVY-205", s: "occupied" },
];
const ivyRoomColor: Record<string, string> = {
  occupied: "#334155",
  available: "#157857",
  reserved: "#d97706",
};

function IvyRoomsScreen() {
  return (
    <DashboardShell
      product="Ivy House"
      icon={Home}
      accent={IVY}
      breadcrumb="Ivy House · Rooms"
      pageTitle="Rooms & occupancy"
      account={{ name: "Tatenda Moyo", role: "Owner" }}
      nav={[
        { icon: LayoutGrid, label: "Overview" },
        { icon: BedDouble, label: "Rooms", active: true, badge: "10" },
        { icon: FileText, label: "Applications", badge: "3" },
        { icon: Users, label: "Students" },
        { icon: CreditCard, label: "Payments" },
      ]}
      actions={<ShellButton accent={IVY}>Add room</ShellButton>}
    >
      <div className="mb-4 grid grid-cols-3 gap-3">
        <Stat label="Occupied" value="8 / 10" delta="80%" />
        <Stat label="Available" value="2" delta="ready" deltaTone="green" />
        <Stat label="Reserved" value="1" delta="hold" deltaTone="muted" />
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
        <div className="md:col-span-3">
          <div className="grid grid-cols-5 gap-2">
            {ivyRooms.map((r) => (
              <div
                key={r.id}
                className="flex aspect-square flex-col items-center justify-center rounded-lg text-[0.5rem] font-medium text-white"
                style={{ background: ivyRoomColor[r.s] }}
                title={`${r.id} · ${r.s}`}
              >
                <BedDouble className="mb-1 size-3.5 opacity-90" />
                {r.id.split("-")[1]}
              </div>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
            {Object.entries(ivyRoomColor).map(([k, c]) => (
              <span key={k} className="flex items-center gap-1.5">
                <span className="size-2 rounded" style={{ background: c }} />
                <span className="text-[0.5625rem] capitalize text-muted">{k}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-lg border border-border bg-surface p-3.5">
            <PanelLabel>IVY-104 · available</PanelLabel>
            <KV k="Type" v="Shared double" />
            <KV k="Floor" v="Ground" />
            <KV k="Beds" v="2 · both open" />
            <KV k="Rent" v="$130 / mo" />
            <div className="mt-2 flex items-center justify-center gap-1.5 rounded-lg py-2 text-[0.6875rem] font-semibold text-white" style={{ background: IVY }}>
              Assign applicant
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

/* ── Msasa · livestock (dark forest) ─────────────────────────────────────── */
const herd = [
  { group: "Beef herd A", head: 96, breed: "Brahman", wt: "430 kg", status: "Grazing", tone: "green" as const },
  { group: "Beef herd B", head: 64, breed: "Tuli", wt: "402 kg", status: "Vaccinate", tone: "amber" as const },
  { group: "Dairy", head: 18, breed: "Holstein", wt: "520 kg", status: "Milking", tone: "blue" as const },
  { group: "Calves", head: 24, breed: "Mixed", wt: "96 kg", status: "Weaning", tone: "muted" as const },
];

function MsasaLivestockScreen() {
  return (
    <DashboardShell
      className="dark"
      vars={MSASA_VARS}
      product="Msasa"
      icon={Leaf}
      accent={LIME}
      accentInk={MSASA_INK}
      breadcrumb="Livestock · Herd"
      pageTitle="Herd register"
      account={{ name: "R. Banda", role: "Estate manager" }}
      nav={[
        { icon: LayoutGrid, label: "Farm HQ" },
        { icon: Sprout, label: "Crops" },
        { icon: Beef, label: "Livestock", active: true, badge: "202" },
        { icon: Tractor, label: "Machinery" },
        { icon: Users, label: "Workforce" },
      ]}
      actions={<ShellButton accent={LIME} ink={MSASA_INK}>Record weight</ShellButton>}
    >
      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat label="Total head" value="202" delta="+6 calves" deltaTone="green" />
        <Stat label="Avg weight" value="418kg" delta="beef" deltaTone="muted" />
        <Stat label="Vaccinations" value="2 due" delta="this week" deltaTone="red" />
        <Stat label="Mortality" value="0.4%" delta="season" deltaTone="green" />
      </div>
      <div className="overflow-hidden rounded-lg border border-border">
        <TableScroll>
          <table className="w-full min-w-[30rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-surface">
                {["Group", "Head", "Breed", "Avg wt", "Status"].map((h) => (
                  <th key={h} className="px-3 py-2 font-mono text-[0.5625rem] font-medium uppercase tracking-[0.12em] text-faint">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {herd.map((r) => (
                <tr key={r.group} className="border-b border-border/70 transition-colors last:border-0 hover:bg-surface">
                  <td className="px-3 py-2.5 text-[0.75rem] font-medium text-foreground">{r.group}</td>
                  <td className="px-3 py-2.5 text-[0.75rem] text-foreground tabular">{r.head}</td>
                  <td className="px-3 py-2.5 text-[0.6875rem] text-muted">{r.breed}</td>
                  <td className="px-3 py-2.5 text-[0.6875rem] text-muted tabular">{r.wt}</td>
                  <td className="px-3 py-2.5"><Tag tone={r.tone}>{r.status}</Tag></td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroll>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-lg p-2.5" style={{ background: "rgba(229,181,61,0.12)", border: "1px solid rgba(229,181,61,0.3)" }}>
        <Syringe className="size-3.5" style={{ color: "#e5b53d" }} />
        <span className="text-[0.6875rem] text-foreground">Beef herd B — blackleg booster due in 3 days (64 head)</span>
      </div>
    </DashboardShell>
  );
}

/* ── KinOS · money (Dusk) ────────────────────────────────────────────────── */
const ledger = [
  { what: "Pharmacy · Metformin", who: "Rudo", method: "Paynow", amt: "$18" },
  { what: "Groceries · week", who: "Amai", method: "Cash", amt: "$40" },
  { what: "Clinic · BP check", who: "Baba", method: "EcoCash", amt: "$25" },
];

function KinosMoneyScreen() {
  return (
    <div className="overflow-hidden rounded-2xl shadow-raised" style={{ background: C.paper, border: `1px solid ${C.line}`, color: C.ink }}>
      <div className="flex items-center justify-between gap-3 px-4 py-3.5" style={{ borderBottom: `1px solid ${C.line}` }}>
        <div>
          <p className="text-[0.875rem] font-semibold" style={{ color: C.ink }}>Gogo&rsquo;s care · this month</p>
          <p className="text-[0.625rem]" style={{ color: C.inkFaint }}>Shared across the orbit · splits automatically</p>
        </div>
        <div className="text-right">
          <p className="text-[0.5rem] uppercase tracking-[0.14em]" style={{ color: C.inkFaint }}>Total</p>
          <p className="text-[0.9375rem] font-semibold" style={{ color: C.ink }}>$83</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="mb-2 flex items-center gap-1.5 font-mono text-[0.5625rem] uppercase tracking-[0.14em]" style={{ color: C.inkFaint }}>
            <Receipt className="size-3" style={{ color: C.dusk }} /> Recent
          </p>
          <div className="rounded-xl" style={{ background: C.card, border: `1px solid ${C.line}` }}>
            {ledger.map((r, i) => (
              <div key={i} className="flex items-center gap-2.5 border-b p-3 last:border-0" style={{ borderColor: C.line }}>
                <span className="flex size-7 items-center justify-center rounded-lg" style={{ background: C.duskInk, color: C.dusk }}>
                  <Receipt className="size-3.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[0.75rem] font-medium" style={{ color: C.ink }}>{r.what}</p>
                  <p className="text-[0.625rem]" style={{ color: C.inkFaint }}>{r.who} · {r.method}</p>
                </div>
                <span className="text-[0.8125rem] font-semibold tabular" style={{ color: C.ink }}>{r.amt}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-xl p-3.5" style={{ background: C.calmSoft, border: `1px solid ${C.calmSoft}` }}>
            <p className="text-[0.5rem] uppercase tracking-[0.14em]" style={{ color: C.calmText }}>Your share is settled</p>
            <p className="mt-1 text-[1.0625rem] font-semibold" style={{ color: C.calmText }}>$0 owed</p>
            <p className="mt-0.5 text-[0.625rem]" style={{ color: C.calmText }}>Everyone&rsquo;s paid their split this month.</p>
          </div>
          <div className="mt-3 rounded-xl p-3" style={{ background: C.card, border: `1px solid ${C.line}` }}>
            <PayChip label="Paynow" />
            <PayChip label="EcoCash" />
            <p className="mt-1.5 flex items-center gap-1 text-[0.5625rem]" style={{ color: C.inkFaint }}>
              <ShieldCheck className="size-2.5" style={{ color: C.dusk }} /> Rudo & Amai can see money
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PayChip({ label }: { label: string }) {
  return (
    <div className="mb-1.5 flex items-center gap-2 rounded-lg px-2.5 py-1.5" style={{ background: C.paper, border: `1px solid ${C.line}` }}>
      <Smartphone className="size-3" style={{ color: C.dusk }} />
      <span className="text-[0.6875rem] font-medium" style={{ color: C.ink }}>{label}</span>
      <span className="ml-auto text-[0.5625rem]" style={{ color: C.calmText }}>connected</span>
    </div>
  );
}

/* ── Registry ─────────────────────────────────────────────────────────────── */
export const projectScreens: Record<MockupPreset, Screen[]> = {
  logistics: [
    { label: "Job pool", node: <LogisticsMockup /> },
    { label: "Shipment tracking", node: <LogisticsShipmentScreen /> },
    { label: "Customs clearance", node: <LogisticsCustomsScreen /> },
  ],
  housing: [
    { label: "Applications", node: <HousingMockup /> },
    { label: "Rooms & occupancy", node: <IvyRoomsScreen /> },
    { label: "Payments · EcoCash", node: <IvyPaymentsScreen /> },
  ],
  blessbri: [{ label: "Residences", node: <BlessBriMockup /> }],
  kinos: [
    { label: "Daily Brief", node: <KinosMockup /> },
    { label: "A person · Gogo", node: <KinosPersonScreen /> },
    { label: "Money", node: <KinosMoneyScreen /> },
  ],
  farming: [
    { label: "Fields & map", node: <FarmingMockup /> },
    { label: "Field detail", node: <MsasaFieldScreen /> },
    { label: "Livestock", node: <MsasaLivestockScreen /> },
  ],
  transport: [{ label: "Overview", node: <TransportMockup /> }],
  payments: [{ label: "Overview", node: <PaymentsMockup /> }],
};
