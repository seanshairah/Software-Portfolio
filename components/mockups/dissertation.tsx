import { AppFrame, Pill, PanelLabel } from "./frame";

const outline = [
  { n: "1", t: "Introduction", s: "done" },
  { n: "2", t: "Literature Review", s: "active" },
  { n: "3", t: "Methodology", s: "draft" },
  { n: "4", t: "Results", s: "empty" },
  { n: "5", t: "Discussion", s: "empty" },
];

export function DissertationMockup() {
  return (
    <AppFrame route="workspace · Chapter 2" title="Draft" accent="#6d5cf5">
      <div className="grid grid-cols-1 sm:grid-cols-5">
        {/* Outline */}
        <div className="border-b border-border p-4 sm:col-span-2 sm:border-b-0 sm:border-r">
          <PanelLabel>Chapters</PanelLabel>
          <ul className="space-y-1">
            {outline.map((c) => (
              <li
                key={c.n}
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[0.75rem] ${
                  c.s === "active" ? "bg-[#6d5cf5]/10 text-foreground" : "text-muted"
                }`}
              >
                <span className="font-mono text-[0.625rem] text-faint">{c.n}</span>
                <span className="flex-1 truncate">{c.t}</span>
                {c.s === "done" && <span className="size-1.5 rounded-full bg-signal-green" />}
                {c.s === "active" && <span className="size-1.5 rounded-full bg-[#6d5cf5]" />}
                {c.s === "draft" && <span className="size-1.5 rounded-full bg-[#e5b53d]" />}
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-lg border border-border bg-surface p-3">
            <div className="flex items-center justify-between">
              <span className="text-[0.625rem] text-faint">Progress</span>
              <span className="text-[0.625rem] font-medium text-foreground">14,200 words</span>
            </div>
            <div className="mt-2 flex gap-0.5">
              {Array.from({ length: 20 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-4 flex-1 rounded-sm ${i < 8 ? "bg-[#6d5cf5]" : "bg-surface-muted"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Document + AI suggestion */}
        <div className="p-4 sm:col-span-3">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="text-[0.9375rem] font-medium text-foreground">2. Literature Review</h4>
            <Pill tone="accent">Autosaved</Pill>
          </div>
          <div className="space-y-1.5">
            <span className="block h-2 w-full rounded bg-surface-muted" />
            <span className="block h-2 w-[92%] rounded bg-surface-muted" />
            <span className="block h-2 w-[97%] rounded bg-surface-muted" />
          </div>

          {/* AI diff suggestion */}
          <div className="my-3 overflow-hidden rounded-lg border border-[#6d5cf5]/40 bg-[#6d5cf5]/[0.06]">
            <div className="flex items-center gap-2 border-b border-[#6d5cf5]/25 px-3 py-1.5">
              <span className="size-1.5 rounded-full bg-[#6d5cf5]" />
              <span className="font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-[#6d5cf5]">
                Suggested edit · tighten
              </span>
            </div>
            <div className="space-y-1 p-3 text-[0.75rem] leading-relaxed">
              <p className="text-signal-red/80 line-through decoration-signal-red/40">
                A number of various different studies have looked into the topic in the past.
              </p>
              <p className="text-foreground">
                Prior studies converge on three findings, reviewed below.
              </p>
            </div>
            <div className="flex gap-2 border-t border-[#6d5cf5]/25 p-2.5">
              <span className="rounded-md bg-[#6d5cf5] px-3 py-1 text-[0.6875rem] font-semibold text-white">
                Accept
              </span>
              <span className="rounded-md border border-border px-3 py-1 text-[0.6875rem] font-medium text-muted">
                Reject
              </span>
              <span className="ml-auto self-center text-[0.625rem] text-faint">You hold the pen</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <span className="block h-2 w-[88%] rounded bg-surface-muted" />
            <span className="block h-2 w-full rounded bg-surface-muted" />
          </div>

          <div className="mt-3 flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2">
            <span className="font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-faint">Cite</span>
            <span className="text-[0.6875rem] text-muted">Mavhunga (2021) · linked to ¶3</span>
            <Pill tone="green" className="ml-auto">Verified</Pill>
          </div>
        </div>
      </div>
    </AppFrame>
  );
}
