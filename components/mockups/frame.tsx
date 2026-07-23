import { Search } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/* Reusable chrome + atoms for building believable product interfaces.
   Everything is token-driven, so mockups read correctly in both worlds. */

export interface ShellNavItem {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  badge?: string;
}

/**
 * Full SaaS application shell — sidebar (product, navigation, account) + top bar
 * (breadcrumb, title, search, actions). Gives a mockup the structure of a real
 * production product rather than a floating panel.
 */
export function DashboardShell({
  product,
  icon: Icon,
  accent = "var(--accent)",
  nav,
  breadcrumb,
  pageTitle,
  actions,
  account = { name: "Sean M.", role: "Operations" },
  children,
  className,
}: {
  product: string;
  icon: LucideIcon;
  accent?: string;
  nav: ShellNavItem[];
  breadcrumb?: string;
  pageTitle: string;
  actions?: React.ReactNode;
  account?: { name: string; role: string };
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex overflow-hidden rounded-xl border border-border bg-surface-raised shadow-raised",
        className,
      )}
      style={{ ["--pj" as string]: accent } as React.CSSProperties}
    >
      {/* Sidebar */}
      <aside className="hidden w-40 shrink-0 flex-col border-r border-border bg-surface lg:flex xl:w-44">
        <div className="flex items-center gap-2 border-b border-border px-3 py-3">
          <span
            className="flex size-6 items-center justify-center rounded-md text-white"
            style={{ background: accent }}
          >
            <Icon className="size-3.5" />
          </span>
          <span className="text-[0.8125rem] font-semibold tracking-tight text-foreground">
            {product}
          </span>
        </div>
        <nav className="flex-1 space-y-0.5 p-2">
          {nav.map((item) => (
            <div
              key={item.label}
              className={cn(
                "flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[0.75rem]",
                item.active
                  ? "bg-surface-muted font-medium text-foreground"
                  : "text-muted",
              )}
            >
              <item.icon
                className="size-3.5 shrink-0"
                style={item.active ? { color: accent } : undefined}
              />
              <span className="flex-1 truncate">{item.label}</span>
              {item.badge && (
                <span className="rounded-full bg-surface-muted px-1.5 py-0.5 text-[0.5rem] font-semibold text-faint">
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-2 border-t border-border p-2.5">
          <Avatar name={account.name} />
          <div className="min-w-0">
            <p className="truncate text-[0.6875rem] font-medium text-foreground">
              {account.name}
            </p>
            <p className="text-[0.5625rem] text-faint">{account.role}</p>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-2.5">
          <div className="min-w-0">
            {breadcrumb && (
              <p className="truncate font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-faint">
                {breadcrumb}
              </p>
            )}
            <h3 className="truncate text-[0.9375rem] font-semibold tracking-tight text-foreground">
              {pageTitle}
            </h3>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <div className="hidden items-center gap-1.5 rounded-md border border-border bg-surface px-2 py-1 md:flex">
              <Search className="size-3 text-faint" />
              <span className="text-[0.625rem] text-faint">Search</span>
              <span className="ml-2 rounded border border-border px-1 font-mono text-[0.5rem] text-faint">
                ⌘K
              </span>
            </div>
            {actions}
          </div>
        </div>
        <div className="min-w-0 flex-1 p-4">{children}</div>
      </div>
    </div>
  );
}

/** Small primary action button used inside a shell top bar. */
export function ShellButton({
  children,
  accent = "var(--pj, var(--accent))",
  variant = "solid",
}: {
  children: React.ReactNode;
  accent?: string;
  variant?: "solid" | "ghost";
}) {
  if (variant === "ghost") {
    return (
      <span className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-[0.6875rem] font-medium text-muted">
        {children}
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-[0.6875rem] font-semibold text-white"
      style={{ background: accent }}
    >
      {children}
    </span>
  );
}

/** Horizontal-scroll wrapper so wide tables never clip on small screens. */
export function TableScroll({ children }: { children: React.ReactNode }) {
  return (
    <div className="-mx-1 overflow-x-auto px-1 [scrollbar-width:none]">{children}</div>
  );
}

/** Compact KPI stat card for dashboard headers. */
export function Stat({
  label,
  value,
  delta,
  deltaTone = "green",
}: {
  label: string;
  value: string;
  delta?: string;
  deltaTone?: "green" | "red" | "muted";
}) {
  const tone =
    deltaTone === "green"
      ? "text-signal-green"
      : deltaTone === "red"
        ? "text-signal-red"
        : "text-faint";
  return (
    <div className="rounded-lg border border-border bg-surface p-3">
      <p className="text-[0.625rem] text-faint">{label}</p>
      <div className="mt-1 flex items-baseline gap-1.5">
        <p className="text-base font-semibold text-foreground tabular">{value}</p>
        {delta && <span className={cn("text-[0.625rem] font-medium", tone)}>{delta}</span>}
      </div>
    </div>
  );
}

/** Desktop application window with an optional title/route bar. */
export function AppFrame({
  title,
  route,
  children,
  className,
  accent,
}: {
  title?: string;
  route?: string;
  children: React.ReactNode;
  className?: string;
  accent?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-surface-raised shadow-raised",
        className,
      )}
      style={accent ? ({ ["--pj" as string]: accent } as React.CSSProperties) : undefined}
    >
      <div className="flex items-center gap-3 border-b border-border bg-surface px-3.5 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-signal-red/70" />
          <span className="size-2.5 rounded-full bg-[#e5b53d]/70" />
          <span className="size-2.5 rounded-full bg-signal-green/70" />
        </div>
        {route && (
          <div className="ml-2 hidden min-w-0 flex-1 items-center rounded-md border border-border bg-surface-muted px-2.5 py-1 sm:flex">
            <span className="truncate font-mono text-[0.6875rem] text-faint">
              {route}
            </span>
          </div>
        )}
        {title && (
          <span className="ml-auto truncate font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-faint">
            {title}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

/** Phone bezel for mobile product flows. */
export function PhoneFrame({
  children,
  className,
  label,
}: {
  children: React.ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[15rem] rounded-[2rem] border border-border-strong bg-surface p-2 shadow-raised",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-surface-raised">
        <div className="flex items-center justify-between px-4 pt-3 pb-1">
          <span className="font-mono text-[0.5625rem] text-faint">9:41</span>
          <span className="h-1 w-14 rounded-full bg-surface-muted" aria-hidden />
          <span className="font-mono text-[0.5625rem] text-faint">
            {label ?? "5G"}
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

export function Pill({
  children,
  tone = "muted",
  className,
}: {
  children: React.ReactNode;
  tone?: "muted" | "accent" | "green" | "amber" | "red" | "blue";
  className?: string;
}) {
  const tones: Record<string, string> = {
    muted: "bg-surface-muted text-muted",
    accent: "bg-accent-soft text-accent",
    green: "bg-signal-green/15 text-signal-green",
    amber: "bg-[#e5b53d]/20 text-[#8a6d1a] dark:text-[#e5b53d]",
    red: "bg-signal-red/12 text-signal-red",
    blue: "bg-accent-soft text-accent",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.625rem] font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Avatar({ name, className }: { name: string; className?: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <span
      className={cn(
        "inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-surface-muted text-[0.5625rem] font-semibold text-muted",
        className,
      )}
      aria-hidden
    >
      {initials}
    </span>
  );
}

/** Thin progress / capacity bar. */
export function MiniBar({
  value,
  color = "var(--pj, var(--accent))",
  className,
}: {
  value: number;
  color?: string;
  className?: string;
}) {
  return (
    <span
      className={cn("block h-1.5 w-full overflow-hidden rounded-full bg-surface-muted", className)}
    >
      <span
        className="block h-full rounded-full"
        style={{ width: `${Math.max(2, Math.min(100, value))}%`, background: color }}
      />
    </span>
  );
}

/** Key/value line used in detail panels. */
export function KV({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 py-1.5">
      <span className="text-[0.6875rem] text-faint">{k}</span>
      <span className="text-[0.75rem] font-medium text-foreground tabular">{v}</span>
    </div>
  );
}

/** Small labelled section header inside a mockup. */
export function PanelLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-faint">
      {children}
    </p>
  );
}
