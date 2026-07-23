import {
  Home,
  LayoutGrid,
  BedDouble,
  FileText,
  Users,
  CreditCard,
  SlidersHorizontal,
  Smartphone,
} from "lucide-react";
import {
  DashboardShell,
  ShellButton,
  PhoneFrame,
  TableScroll,
  Stat,
  Pill,
  Avatar,
  PanelLabel,
} from "./frame";

// Ivy House ships a near black-and-white identity with an ivy-green logo mark.
const ACCENT = "#157857";

const nav = [
  { icon: LayoutGrid, label: "Overview" },
  { icon: BedDouble, label: "Rooms", badge: "10" },
  { icon: FileText, label: "Applications", active: true, badge: "3" },
  { icon: Users, label: "Students" },
  { icon: CreditCard, label: "Payments" },
];

// Real seeded room states (10 rooms, IVY-1xx/2xx/3xx).
const rooms = [
  "occupied", "occupied", "occupied", "available", "reserved",
  "occupied", "occupied", "available", "occupied", "occupied",
];
const roomColor: Record<string, string> = {
  occupied: "bg-[#334155]", // slate
  available: "bg-[#157857]", // green
  reserved: "bg-[#d97706]", // amber
  maintenance: "bg-surface-muted border border-border",
};

const applications = [
  { ref: "APP-01005", n: "Chiedza Mhike", room: "IVY-104", status: "New", tone: "blue" as const, when: "5h" },
  { ref: "APP-01004", n: "Brian Sibanda", room: "IVY-204", status: "Awaiting Review", tone: "amber" as const, when: "2h" },
  { ref: "APP-01003", n: "Kudzai Moyo", room: "IVY-203", status: "Approved", tone: "green" as const, when: "1d" },
  { ref: "APP-01002", n: "Nyasha Marufu", room: "IVY-103", status: "Paid", tone: "green" as const, when: "2d" },
];

export function HousingMockup() {
  return (
    <div className="relative">
      <DashboardShell
        product="Ivy House"
        icon={Home}
        accent={ACCENT}
        nav={nav}
        breadcrumb="Ivy House · Chinhoyi"
        pageTitle="Applications"
        account={{ name: "Tatenda Moyo", role: "Owner" }}
        actions={
          <>
            <ShellButton variant="ghost">
              <SlidersHorizontal className="size-3" /> All statuses
            </ShellButton>
            <ShellButton accent={ACCENT}>Review</ShellButton>
          </>
        }
      >
        {/* KPI row */}
        <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          <Stat label="Occupancy" value="8 / 10" delta="80%" />
          <Stat label="Active students" value="8" delta="+2" />
          <Stat label="Collected · Jul" value="$1,240" delta="on track" deltaTone="green" />
          <Stat label="Outstanding" value="$360" delta="2 invoices" deltaTone="red" />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          {/* Applications table */}
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-lg border border-border">
              <TableScroll>
                <table className="w-full min-w-[26rem] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-border bg-surface">
                      {["Reference", "Applicant", "Room", "Status", "Date"].map((h) => (
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
                    {applications.map((a) => (
                      <tr key={a.ref} className="border-b border-border/70 transition-colors last:border-0 hover:bg-surface">
                        <td className="px-3 py-2.5 font-mono text-[0.625rem] text-faint">{a.ref}</td>
                        <td className="px-3 py-2.5">
                          <span className="flex items-center gap-2">
                            <Avatar name={a.n} className="size-5" />
                            <span className="text-[0.75rem] font-medium text-foreground">{a.n}</span>
                          </span>
                        </td>
                        <td className="px-3 py-2.5 font-mono text-[0.625rem] text-muted">{a.room}</td>
                        <td className="px-3 py-2.5">
                          <Pill tone={a.tone}>{a.status}</Pill>
                        </td>
                        <td className="px-3 py-2.5 text-[0.6875rem] text-faint">{a.when} ago</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TableScroll>
            </div>
            <p className="mt-2 text-[0.625rem] text-faint">
              Search → Apply → Approve → Pay → Move in · 6-min walk to CUT campus
            </p>
          </div>

          {/* Room occupancy */}
          <div className="lg:col-span-2">
            <PanelLabel>Rooms · Ivy House</PanelLabel>
            <div className="rounded-lg border border-border bg-surface p-3">
              <div className="grid grid-cols-5 gap-1.5">
                {rooms.map((r, i) => (
                  <span
                    key={i}
                    className={`aspect-square rounded-[4px] ${roomColor[r]}`}
                    title={r}
                  />
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                {["occupied", "available", "reserved"].map((r) => (
                  <span key={r} className="flex items-center gap-1.5">
                    <span className={`size-2 rounded-[3px] ${roomColor[r]}`} />
                    <span className="text-[0.5625rem] capitalize text-muted">{r}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DashboardShell>

      {/* Student phone — apply + EcoCash pay (the two-sided product) */}
      <div className="absolute -bottom-10 right-0 hidden w-36 translate-x-[12%] md:block lg:w-40 lg:translate-x-[42%]">
        <PhoneFrame label="LTE">
          <div className="p-3">
            <PanelLabel>Ivy House · Find a room</PanelLabel>
            <div className="overflow-hidden rounded-lg border border-border">
              <div className="h-12 bg-gradient-to-br from-[#157857]/25 to-surface-muted" />
              <div className="p-2">
                <p className="text-[0.75rem] font-medium text-foreground">Room IVY-104</p>
                <p className="text-[0.625rem] text-faint">Shared double · Ground floor</p>
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="text-[0.75rem] font-semibold text-foreground">$130<span className="text-faint">/mo</span></span>
                  <Pill tone="green">2 beds</Pill>
                </div>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-center gap-1.5 rounded-lg bg-[#157857] py-2 text-[0.6875rem] font-semibold text-white">
              Apply online
            </div>
            <div className="mt-2 rounded-lg border border-border bg-surface p-2">
              <div className="flex items-center justify-between">
                <span className="text-[0.625rem] text-faint">Your application</span>
                <Pill tone="green">Approved</Pill>
              </div>
              <div className="mt-1.5 flex items-center justify-center gap-1 rounded-md bg-surface-muted py-1.5 text-[0.625rem] font-medium text-foreground">
                <Smartphone className="size-3" /> Pay rent · EcoCash
              </div>
            </div>
          </div>
        </PhoneFrame>
      </div>
    </div>
  );
}
