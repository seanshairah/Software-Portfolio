import { AppFrame, Pill, KV, PanelLabel } from "./frame";
import { Check } from "lucide-react";

const lifecycle = [
  { t: "Initiated", done: true },
  { t: "Idempotency check", done: true },
  { t: "Authorized", done: true },
  { t: "Captured", done: true },
  { t: "Reconciled", done: false },
];

const ledger = [
  { id: "txn_9f2a", amt: "$1,240.00", st: "Settled", tone: "green" as const },
  { id: "txn_9f29", amt: "$86.50", st: "Retrying", tone: "amber" as const },
  { id: "txn_9f27", amt: "$540.00", st: "Settled", tone: "green" as const },
  { id: "txn_9f24", amt: "$3,000.00", st: "Settled", tone: "green" as const },
];

export function PaymentsMockup() {
  return (
    <AppFrame route="ledger · txn_9f2a1c" title="Transaction" accent="#12a5b0">
      <div className="p-4">
        {/* Lifecycle */}
        <PanelLabel>Transaction lifecycle · txn_9f2a1c</PanelLabel>
        <div className="-mx-1 overflow-x-auto px-1 [scrollbar-width:none]">
        <div className="flex min-w-[19rem] items-center">
          {lifecycle.map((s, i) => (
            <div key={s.t} className="flex flex-1 items-center last:flex-none">
              <div className="flex flex-col items-center gap-1.5">
                <span
                  className={`flex size-6 items-center justify-center rounded-full border-2 ${
                    s.done
                      ? "border-transparent bg-[#12a5b0] text-white"
                      : "border-border-strong bg-surface-raised text-faint"
                  }`}
                >
                  {s.done ? <Check className="size-3" strokeWidth={3} /> : <span className="size-1.5 rounded-full bg-current" />}
                </span>
                <span className="w-14 text-center text-[0.5625rem] leading-tight text-muted">{s.t}</span>
              </div>
              {i < lifecycle.length - 1 && (
                <span className={`mx-0.5 -mt-5 h-0.5 flex-1 rounded ${s.done ? "bg-[#12a5b0]" : "bg-surface-muted"}`} />
              )}
            </div>
          ))}
        </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-5">
          {/* Recovery card */}
          <div className="sm:col-span-3">
            <PanelLabel>Network-failure recovery</PanelLabel>
            <div className="rounded-lg border border-border bg-surface p-3">
              <div className="space-y-2 font-mono text-[0.625rem]">
                <div className="flex items-center justify-between">
                  <span className="text-muted">POST /charge · attempt 1</span>
                  <span className="text-signal-red">timeout</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">idempotency-key matched</span>
                  <span className="text-[#8a6d1a] dark:text-[#e5b53d]">no double charge</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">retry · backoff 2s → attempt 2</span>
                  <span className="text-signal-green">200 ok</span>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 rounded-md bg-surface-muted px-2.5 py-1.5">
                <span className="size-1.5 rounded-full bg-signal-green" />
                <span className="text-[0.6875rem] text-muted">Exactly-once guaranteed · one end state</span>
              </div>
            </div>

            <div className="mt-3 rounded-lg border border-border bg-surface p-3">
              <KV k="Amount" v="$1,240.00" />
              <KV k="Idempotency key" v={<span className="font-mono text-[0.6875rem]">3f9a…c72</span>} />
              <KV k="Reconciliation" v={<Pill tone="amber">Queued</Pill>} />
            </div>
          </div>

          {/* Ledger */}
          <div className="sm:col-span-2">
            <PanelLabel>Ledger</PanelLabel>
            <div className="space-y-1.5">
              {ledger.map((l) => (
                <div key={l.id} className="flex items-center justify-between rounded-lg border border-border bg-surface px-2.5 py-2">
                  <div>
                    <p className="font-mono text-[0.625rem] text-faint">{l.id}</p>
                    <p className="text-[0.75rem] font-medium text-foreground tabular">{l.amt}</p>
                  </div>
                  <Pill tone={l.tone}>{l.st}</Pill>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppFrame>
  );
}
