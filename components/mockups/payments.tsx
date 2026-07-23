import {
  Wallet,
  ArrowLeftRight,
  Scale,
  ShieldCheck,
  LayoutGrid,
  Check,
  Download,
} from "lucide-react";
import {
  DashboardShell,
  ShellButton,
  TableScroll,
  Stat,
  Pill,
  KV,
} from "./frame";

const ACCENT = "#12a5b0";

const nav = [
  { icon: LayoutGrid, label: "Overview" },
  { icon: ArrowLeftRight, label: "Transactions", active: true },
  { icon: Scale, label: "Reconciliation", badge: "2" },
  { icon: ShieldCheck, label: "Disputes" },
  { icon: Wallet, label: "Payouts" },
];

const lifecycle = [
  { t: "Initiated", done: true },
  { t: "Idempotency", done: true },
  { t: "Authorized", done: true },
  { t: "Captured", done: true },
  { t: "Reconciled", done: false },
];

const ledger = [
  { id: "txn_9f2a", amt: "$1,240.00", st: "Settled", tone: "green" as const, m: "Visa" },
  { id: "txn_9f29", amt: "$86.50", st: "Retrying", tone: "amber" as const, m: "EcoCash" },
  { id: "txn_9f27", amt: "$540.00", st: "Settled", tone: "green" as const, m: "Visa" },
  { id: "txn_9f24", amt: "$3,000.00", st: "Settled", tone: "green" as const, m: "Bank" },
];

export function PaymentsMockup() {
  return (
    <DashboardShell
      product="Ledger"
      icon={Wallet}
      accent={ACCENT}
      nav={nav}
      breadcrumb="Transaction · txn_9f2a1c"
      pageTitle="Lifecycle"
      account={{ name: "Finance", role: "Reconciliation" }}
      actions={
        <>
          <ShellButton variant="ghost">
            <Download className="size-3" /> Export
          </ShellButton>
          <ShellButton accent={ACCENT}>Reconcile</ShellButton>
        </>
      }
    >
      {/* KPI row */}
      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat label="Volume today" value="$48.2k" delta="+6%" />
        <Stat label="Success rate" value="99.4%" delta="exactly-once" deltaTone="green" />
        <Stat label="Retrying" value="1" delta="auto" deltaTone="muted" />
        <Stat label="Unreconciled" value="2" delta="queued" deltaTone="muted" />
      </div>

      {/* Lifecycle stepper */}
      <div className="mb-4 rounded-lg border border-border bg-surface p-4">
        <p className="mb-3 font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-faint">
          txn_9f2a1c · lifecycle
        </p>
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
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        {/* Recovery */}
        <div className="lg:col-span-3">
          <div className="rounded-lg border border-border bg-surface p-3">
            <p className="mb-2 font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-faint">
              Network-failure recovery
            </p>
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
            <div className="mt-3 border-t border-border pt-2">
              <KV k="Amount" v="$1,240.00" />
              <KV k="Idempotency key" v={<span className="font-mono text-[0.6875rem]">3f9a…c72</span>} />
            </div>
          </div>
        </div>

        {/* Ledger table */}
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-lg border border-border">
            <div className="border-b border-border bg-surface px-3 py-2">
              <span className="font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-faint">
                Ledger
              </span>
            </div>
            <TableScroll>
              <table className="w-full min-w-[16rem] border-collapse text-left">
                <tbody>
                  {ledger.map((l) => (
                    <tr key={l.id} className="border-b border-border/70 last:border-0 hover:bg-surface">
                      <td className="px-3 py-2.5">
                        <p className="text-[0.75rem] font-medium text-foreground tabular">{l.amt}</p>
                        <p className="font-mono text-[0.5625rem] text-faint">{l.id} · {l.m}</p>
                      </td>
                      <td className="px-3 py-2.5 text-right">
                        <Pill tone={l.tone}>{l.st}</Pill>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableScroll>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
