import { AppFrame, Pill, MiniBar, KV, PanelLabel } from "./frame";

export function TransportMockup() {
  return (
    <AppFrame route="safe.fleet/vehicle/ZW-ADK-3921" title="Digital twin" accent="#ff3d3d">
      <div className="grid grid-cols-1 sm:grid-cols-5">
        {/* Twin */}
        <div className="border-b border-border p-4 sm:col-span-3 sm:border-b-0 sm:border-r">
          <div className="mb-3 flex items-center justify-between">
            <PanelLabel>Vehicle ZW-ADK-3921 · live</PanelLabel>
            <Pill tone="green">Nominal</Pill>
          </div>

          {/* Schematic */}
          <div className="relative overflow-hidden rounded-lg border border-border bg-surface p-5">
            <div className="mx-auto flex h-24 w-40 items-center justify-center rounded-[1.25rem] border-2 border-border-strong">
              <span className="font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-faint">
                truck
              </span>
              {/* sensor pings */}
              <span className="absolute left-[22%] top-4 size-2 rounded-full bg-signal-green" />
              <span className="absolute right-[22%] top-4 size-2 rounded-full bg-signal-green" />
              <span className="absolute left-[30%] bottom-4 size-2 rounded-full bg-[#e5b53d]" />
              <span className="absolute right-[30%] bottom-4 size-2 rounded-full bg-signal-green" />
              <span className="absolute left-1/2 top-2 size-2.5 -translate-x-1/2 rounded-full bg-signal-blue" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { k: "Speed", v: "84 km/h", b: 70, c: "#39ff88" },
                { k: "Lane", v: "Centered", b: 90, c: "#39ff88" },
                { k: "Attention", v: "Alert", b: 82, c: "#39ff88" },
              ].map((m) => (
                <div key={m.k}>
                  <p className="text-[0.625rem] text-faint">{m.k}</p>
                  <p className="text-[0.75rem] font-medium text-foreground tabular">{m.v}</p>
                  <MiniBar className="mt-1.5" value={m.b} color={m.c} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-border bg-surface p-3">
              <KV k="Harsh braking" v="0 today" />
              <KV k="Lane departures" v="1 today" />
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <KV k="Route" v="A1 · Harare" />
              <KV k="Driver" v="T. Moyo" />
            </div>
          </div>
        </div>

        {/* Incident queue */}
        <div className="p-4 sm:col-span-2">
          <PanelLabel>Escalated incidents</PanelLabel>
          <div className="space-y-2">
            {[
              { v: "ADK-3921", t: "Lane departure · 84 km/h", sev: "Medium", tone: "amber" as const },
              { v: "BFR-1180", t: "Overspeed · 112 km/h", sev: "High", tone: "red" as const },
              { v: "CQP-4410", t: "Fatigue signals", sev: "High", tone: "red" as const },
            ].map((i) => (
              <div key={i.v} className="rounded-lg border border-border bg-surface p-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.625rem] text-faint">{i.v}</span>
                  <Pill tone={i.tone}>{i.sev}</Pill>
                </div>
                <p className="mt-1 text-[0.75rem] text-foreground">{i.t}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[0.625rem] leading-relaxed text-faint">
            2,140 events today · severity model surfaced 3. The rest were logged, not shown.
          </p>
        </div>
      </div>
    </AppFrame>
  );
}
