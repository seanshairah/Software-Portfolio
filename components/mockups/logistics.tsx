import { AppFrame, Pill, Avatar, MiniBar, KV, PanelLabel } from "./frame";

const jobs = [
  { id: "FRZ-2481", cargo: "Fertiliser · 34t", route: "Beira → Harare", carrier: "Sable Transport", stage: "In transit", tone: "blue" as const, prog: 62 },
  { id: "FRZ-2479", cargo: "Steel coil · 28t", route: "Durban → Bulawayo", carrier: "Highveld Hauliers", stage: "Customs", tone: "amber" as const, prog: 78 },
  { id: "FRZ-2477", cargo: "Maize · 40t", route: "Lusaka → Harare", carrier: "Zambezi Freight", stage: "Delivered", tone: "green" as const, prog: 100 },
  { id: "FRZ-2475", cargo: "Cement · 30t", route: "Harare → Mutare", carrier: "Awaiting bid", stage: "Requested", tone: "muted" as const, prog: 12 },
];

export function LogisticsMockup() {
  return (
    <AppFrame route="frazier.app/operations" title="Operations" accent="#ff6a3d">
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Board */}
        <div className="border-b border-border p-4 md:col-span-3 md:border-b-0 md:border-r">
          <div className="mb-3 flex items-center justify-between">
            <PanelLabel>Live jobs · 4 active</PanelLabel>
            <Pill tone="red">1 exception</Pill>
          </div>
          <div className="space-y-2">
            {jobs.map((j) => (
              <div
                key={j.id}
                className="rounded-lg border border-border bg-surface p-3 transition-colors hover:border-border-strong"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[0.625rem] text-faint">{j.id}</span>
                  <Pill tone={j.tone}>{j.stage}</Pill>
                </div>
                <p className="mt-1 text-[0.8125rem] font-medium text-foreground">
                  {j.cargo}
                </p>
                <p className="text-[0.6875rem] text-muted">{j.route}</p>
                <div className="mt-2 flex items-center gap-2">
                  <MiniBar value={j.prog} color="#ff6a3d" />
                  <span className="shrink-0 font-mono text-[0.625rem] text-faint tabular">
                    {j.prog}%
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  <Avatar name={j.carrier === "Awaiting bid" ? "?" : j.carrier} />
                  <span className="text-[0.6875rem] text-muted">{j.carrier}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Job timeline */}
        <div className="p-4 md:col-span-2">
          <PanelLabel>Job FRZ-2481 · timeline</PanelLabel>
          <ol className="relative ml-1 space-y-3 border-l border-border pl-4">
            {[
              { t: "Job created", by: "Nyanga Supplies", done: true },
              { t: "Truck requested", by: "3 nominations", done: true },
              { t: "Awarded · Sable Transport", by: "$4,200", done: true },
              { t: "Loading confirmed", by: "Beira depot", done: true },
              { t: "In transit", by: "ETA 14 Jul", done: false },
              { t: "Proof of delivery", by: "Pending", done: false },
            ].map((s, i) => (
              <li key={i} className="relative">
                <span
                  className={`absolute -left-[1.42rem] top-1 size-2.5 rounded-full border-2 ${
                    s.done
                      ? "border-transparent bg-[#ff6a3d]"
                      : "border-border-strong bg-surface-raised"
                  }`}
                />
                <p className="text-[0.75rem] font-medium text-foreground">{s.t}</p>
                <p className="text-[0.6875rem] text-faint">{s.by}</p>
              </li>
            ))}
          </ol>

          <div className="mt-4 rounded-lg border border-border bg-surface p-3">
            <PanelLabel>Customs &amp; finance</PanelLabel>
            <KV k="Declared value" v="$18,400" />
            <KV k="Duty (12.5%)" v="$2,300" />
            <KV k="Payment voucher" v={<Pill tone="amber">Awaiting</Pill>} />
          </div>
        </div>
      </div>
    </AppFrame>
  );
}
