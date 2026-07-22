import { pad } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

/**
 * Architecture diagram — renders a project's architecture as a connected stack
 * of system blocks. Here the System Line becomes a networked spine linking each
 * layer of the system.
 */
export function ArchitectureDiagram({
  items,
  accent = "var(--accent)",
}: {
  items: string[];
  accent?: string;
}) {
  return (
    <div className="relative">
      {/* spine */}
      <span
        className="absolute left-[0.6875rem] top-2 bottom-2 w-px"
        style={{ background: "var(--border)" }}
        aria-hidden
      />
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <Reveal key={i} delay={i * 0.06} y={14}>
            <li className="relative flex items-start gap-4 rounded-xl border border-border bg-surface p-4 pl-5">
              <span
                className="absolute left-[0.6875rem] top-6 size-2 -translate-x-1/2 rounded-full"
                style={{ background: accent }}
                aria-hidden
              />
              <span className="ml-4 font-mono text-[0.625rem] text-faint">
                {pad(i + 1)}
              </span>
              <span className="text-sm leading-relaxed text-foreground">{item}</span>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
