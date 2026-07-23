import {
  Building2,
  LayoutGrid,
  FileText,
  Users,
  CreditCard,
  Plus,
  CalendarDays,
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

const ACCENT = "#1f9e6b";

const nav = [
  { icon: LayoutGrid, label: "Dashboard" },
  { icon: Building2, label: "Properties" },
  { icon: FileText, label: "Applications", active: true, badge: "3" },
  { icon: Users, label: "Tenants" },
  { icon: CreditCard, label: "Payments" },
];

const rooms = [
  "occupied", "occupied", "confirmed", "occupied", "applied", "occupied",
  "occupied", "vacant", "occupied", "confirmed", "occupied", "applied",
  "occupied", "occupied", "vacant", "occupied", "applied", "occupied",
];
const roomColor: Record<string, string> = {
  occupied: "bg-[#1f9e6b]",
  confirmed: "bg-[#1f9e6b]/45",
  applied: "bg-[#e5b53d]",
  vacant: "bg-surface-muted border border-border",
};

const applications = [
  { n: "T. Chikafu", room: "Room 7B", when: "2h ago", status: "Review", tone: "amber" as const },
  { n: "M. Ndlovu", room: "Room 2A", when: "5h ago", status: "Paid", tone: "green" as const },
  { n: "R. Sibanda", room: "Room 5C", when: "1d ago", status: "Review", tone: "amber" as const },
];

export function HousingMockup() {
  return (
    <div className="relative">
      <DashboardShell
        product="Roost"
        icon={Building2}
        accent={ACCENT}
        nav={nav}
        breadcrumb="Belgravia House · Mount Pleasant"
        pageTitle="Occupancy"
        account={{ name: "Owner", role: "Property manager" }}
        actions={
          <>
            <ShellButton variant="ghost">
              <CalendarDays className="size-3" /> July
            </ShellButton>
            <ShellButton accent={ACCENT}>
              <Plus className="size-3" /> Add room
            </ShellButton>
          </>
        }
      >
        {/* KPI row */}
        <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          <Stat label="Occupancy" value="83%" delta="+4%" />
          <Stat label="Rooms let" value="15 / 18" delta="3 open" deltaTone="muted" />
          <Stat label="Rent collected" value="$2,700" delta="94%" />
          <Stat label="Applications" value="3" delta="new" deltaTone="muted" />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          {/* Applications table */}
          <div className="lg:col-span-3">
            <PanelLabel>Recent applications</PanelLabel>
            <div className="overflow-hidden rounded-lg border border-border">
              <TableScroll>
                <table className="w-full min-w-[22rem] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-border bg-surface">
                      {["Applicant", "Room", "Submitted", "Status"].map((h) => (
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
                      <tr key={a.n} className="border-b border-border/70 transition-colors last:border-0 hover:bg-surface">
                        <td className="px-3 py-2.5">
                          <span className="flex items-center gap-2">
                            <Avatar name={a.n} className="size-5" />
                            <span className="text-[0.75rem] font-medium text-foreground">{a.n}</span>
                          </span>
                        </td>
                        <td className="px-3 py-2.5 text-[0.6875rem] text-muted">{a.room}</td>
                        <td className="px-3 py-2.5 text-[0.6875rem] text-faint">{a.when}</td>
                        <td className="px-3 py-2.5">
                          <Pill tone={a.tone}>{a.status}</Pill>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TableScroll>
            </div>
          </div>

          {/* Room-state grid */}
          <div className="lg:col-span-2">
            <PanelLabel>Room states · Belgravia House</PanelLabel>
            <div className="rounded-lg border border-border bg-surface p-3">
              <div className="grid grid-cols-6 gap-1.5">
                {rooms.map((r, i) => (
                  <span key={i} className={`aspect-square rounded-[4px] ${roomColor[r]}`} title={r} />
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                {["occupied", "confirmed", "applied", "vacant"].map((r) => (
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

      {/* Student phone — the discovery + booking side (the two-sided product).
          Pushed off the bottom-right corner so it peeks in rather than covering
          the room grid on wide case-study layouts. */}
      <div className="absolute -bottom-10 right-0 hidden w-36 translate-x-[12%] md:block lg:w-40 lg:translate-x-[42%]">
        <PhoneFrame label="LTE">
          <div className="p-3">
            <PanelLabel>Find a room</PanelLabel>
            <div className="overflow-hidden rounded-lg border border-border">
              <div className="h-14 bg-gradient-to-br from-[#1f9e6b]/25 to-surface-muted" />
              <div className="p-2">
                <p className="text-[0.75rem] font-medium text-foreground">Belgravia House</p>
                <p className="text-[0.625rem] text-faint">Mount Pleasant · 1.2km</p>
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="text-[0.75rem] font-semibold text-foreground">$180<span className="text-faint">/mo</span></span>
                  <Pill tone="green">2 free</Pill>
                </div>
              </div>
            </div>
            <div className="mt-2 rounded-lg bg-[#1f9e6b] py-2 text-center text-[0.6875rem] font-semibold text-white">
              Apply now
            </div>
            <div className="mt-2 rounded-lg border border-border bg-surface p-2">
              <p className="text-[0.625rem] text-faint">Your booking</p>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-[0.6875rem] text-foreground">Room 5C</span>
                <Pill tone="blue">Confirmed</Pill>
              </div>
            </div>
          </div>
        </PhoneFrame>
      </div>
    </div>
  );
}
