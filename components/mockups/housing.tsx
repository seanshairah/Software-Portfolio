import { AppFrame, PhoneFrame, Pill, Avatar, MiniBar, PanelLabel } from "./frame";

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

export function HousingMockup() {
  return (
    <div className="relative">
      <AppFrame route="roost.co.zw/owner/occupancy" title="Owner" accent="#1f9e6b">
        <div className="p-4">
          <div className="mb-4 grid grid-cols-3 gap-3">
            {[
              { k: "Occupancy", v: "83%", b: 83 },
              { k: "Rooms let", v: "15 / 18", b: 83 },
              { k: "Pending", v: "3 apps", b: 30 },
            ].map((s) => (
              <div key={s.k} className="rounded-lg border border-border bg-surface p-3">
                <p className="text-[0.625rem] text-faint">{s.k}</p>
                <p className="mt-0.5 text-base font-medium text-foreground tabular">{s.v}</p>
                <MiniBar className="mt-2" value={s.b} color="#1f9e6b" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
            <div className="sm:col-span-3">
              <PanelLabel>Belgravia House · room states</PanelLabel>
              <div className="grid grid-cols-6 gap-1.5">
                {rooms.map((r, i) => (
                  <span
                    key={i}
                    className={`aspect-square rounded-[4px] ${roomColor[r]}`}
                    title={r}
                  />
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                {["occupied", "confirmed", "applied", "vacant"].map((r) => (
                  <span key={r} className="flex items-center gap-1.5">
                    <span className={`size-2 rounded-[3px] ${roomColor[r]}`} />
                    <span className="text-[0.625rem] capitalize text-muted">{r}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="sm:col-span-2">
              <PanelLabel>Recent applications</PanelLabel>
              <div className="space-y-2">
                {[
                  { n: "T. Chikafu", r: "Room 7B", s: "Review" },
                  { n: "M. Ndlovu", r: "Room 2A", s: "Paid" },
                  { n: "R. Sibanda", r: "Room 5C", s: "Review" },
                ].map((a) => (
                  <div key={a.n} className="flex items-center gap-2 rounded-lg border border-border bg-surface p-2">
                    <Avatar name={a.n} />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[0.75rem] font-medium text-foreground">{a.n}</p>
                      <p className="text-[0.625rem] text-faint">{a.r}</p>
                    </div>
                    <Pill tone={a.s === "Paid" ? "green" : "amber"}>{a.s}</Pill>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AppFrame>

      {/* Student phone — the discovery + booking side */}
      <div className="absolute -bottom-6 -right-3 hidden w-40 md:block lg:w-48">
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
