import { Truck, Home, Building2, Users, Car, Sprout, CreditCard, type LucideIcon } from "lucide-react";
import type { MockupPreset } from "@/content/projects/types";
import { cn } from "@/lib/utils";

/** Flat, professional, monoline icons per project domain — no gradients, no
 *  logo-like marks. A simple hairline chip carries a domain glyph. */
const ICONS: Record<MockupPreset, LucideIcon> = {
  logistics: Truck,
  housing: Home,
  blessbri: Building2,
  kinos: Users,
  transport: Car,
  farming: Sprout,
  payments: CreditCard,
};

export function ProjectIcon({
  preset,
  accent,
  className,
  label,
}: {
  preset: MockupPreset;
  /** Optional flat accent for the glyph; omit for neutral foreground. */
  accent?: string;
  className?: string;
  label?: string;
}) {
  const Icon = ICONS[preset];
  return (
    <span
      role="img"
      aria-label={label ? `${label} icon` : undefined}
      className={cn(
        "grid shrink-0 place-items-center rounded-xl border border-border bg-surface",
        className,
      )}
    >
      <Icon
        className="size-[46%]"
        strokeWidth={1.75}
        style={accent ? { color: accent } : undefined}
        aria-hidden
      />
    </span>
  );
}
