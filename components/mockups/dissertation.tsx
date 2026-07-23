import {
  PenLine,
  FileText,
  BookMarked,
  ListTree,
  Share2,
  Sparkles,
  Check,
} from "lucide-react";
import { DashboardShell, ShellButton, Pill } from "./frame";

const ACCENT = "#6d5cf5";

const nav = [
  { icon: PenLine, label: "Editor", active: true },
  { icon: ListTree, label: "Outline" },
  { icon: BookMarked, label: "Citations", badge: "48" },
  { icon: FileText, label: "Research" },
  { icon: Share2, label: "Export" },
];

const chapters = [
  { n: "1", t: "Introduction", s: "done", words: "2,140" },
  { n: "2", t: "Literature Review", s: "active", words: "4,880" },
  { n: "3", t: "Methodology", s: "draft", words: "3,010" },
  { n: "4", t: "Results", s: "empty", words: "—" },
  { n: "5", t: "Discussion", s: "empty", words: "—" },
];

export function DissertationMockup() {
  return (
    <DashboardShell
      product="Draft"
      icon={PenLine}
      accent={ACCENT}
      nav={nav}
      breadcrumb="Dissertation · 14,200 words"
      pageTitle="2 · Literature Review"
      account={{ name: "T. Moyo", role: "MSc candidate" }}
      actions={
        <>
          <ShellButton variant="ghost">
            <Check className="size-3" /> Autosaved
          </ShellButton>
          <ShellButton accent={ACCENT}>
            <Share2 className="size-3" /> Share
          </ShellButton>
        </>
      }
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        {/* Editor */}
        <div className="lg:col-span-3">
          <div className="rounded-lg border border-border bg-surface p-4">
            <h4 className="text-[0.9375rem] font-semibold text-foreground">
              2. Literature Review
            </h4>
            <div className="mt-3 space-y-1.5">
              <span className="block h-2 w-full rounded bg-surface-muted" />
              <span className="block h-2 w-[92%] rounded bg-surface-muted" />
              <span className="block h-2 w-[97%] rounded bg-surface-muted" />
            </div>

            {/* AI diff suggestion — the signature interaction */}
            <div className="my-3 overflow-hidden rounded-lg border border-[#6d5cf5]/40 bg-[#6d5cf5]/[0.06]">
              <div className="flex items-center gap-2 border-b border-[#6d5cf5]/25 px-3 py-1.5">
                <Sparkles className="size-3 text-[#6d5cf5]" />
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
              <div className="flex items-center gap-2 border-t border-[#6d5cf5]/25 p-2.5">
                <span className="rounded-md bg-[#6d5cf5] px-3 py-1 text-[0.6875rem] font-semibold text-white">
                  Accept
                </span>
                <span className="rounded-md border border-border px-3 py-1 text-[0.6875rem] font-medium text-muted">
                  Reject
                </span>
                <span className="ml-auto self-center text-[0.625rem] text-faint">
                  You hold the pen
                </span>
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="block h-2 w-[88%] rounded bg-surface-muted" />
              <span className="block h-2 w-full rounded bg-surface-muted" />
            </div>

            <div className="mt-3 flex items-center gap-2 rounded-md border border-border bg-surface-raised px-3 py-2">
              <BookMarked className="size-3 text-faint" />
              <span className="text-[0.6875rem] text-muted">Mavhunga (2021) · linked to ¶3</span>
              <Pill tone="green" className="ml-auto">Verified</Pill>
            </div>
          </div>
        </div>

        {/* Chapters + progress */}
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-lg border border-border">
            <div className="border-b border-border bg-surface px-3 py-2">
              <span className="font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-faint">
                Chapters
              </span>
            </div>
            <ul>
              {chapters.map((c) => (
                <li
                  key={c.n}
                  className={`flex items-center gap-2 border-b border-border/70 px-3 py-2 text-[0.75rem] last:border-0 ${
                    c.s === "active" ? "bg-[#6d5cf5]/[0.06]" : ""
                  }`}
                >
                  <span className="font-mono text-[0.625rem] text-faint">{c.n}</span>
                  <span className="flex-1 truncate text-foreground">{c.t}</span>
                  <span className="font-mono text-[0.5625rem] text-faint tabular">{c.words}</span>
                  {c.s === "done" && <span className="size-1.5 rounded-full bg-signal-green" />}
                  {c.s === "active" && <span className="size-1.5 rounded-full bg-[#6d5cf5]" />}
                  {c.s === "draft" && <span className="size-1.5 rounded-full bg-[#e5b53d]" />}
                  {c.s === "empty" && <span className="size-1.5 rounded-full bg-surface-muted" />}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-3 rounded-lg border border-border bg-surface p-3">
            <div className="flex items-center justify-between">
              <span className="text-[0.625rem] text-faint">Progress</span>
              <span className="text-[0.625rem] font-medium text-foreground">14,200 / ~24,000</span>
            </div>
            <div className="mt-2 flex gap-0.5">
              {Array.from({ length: 20 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-4 flex-1 rounded-sm ${i < 12 ? "bg-[#6d5cf5]" : "bg-surface-muted"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
