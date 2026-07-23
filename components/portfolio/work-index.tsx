import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import { ProjectMockup } from "@/components/mockups";
import { Reveal } from "@/components/motion/reveal";

const pad = (n: number) => String(n).padStart(2, "0");

/** Full editorial work index — every project gets real presence: its live
 *  interface, concise metadata, and a route into the case study. */
export function WorkIndex() {
  return (
    <section className="shell pb-24 md:pb-32">
      <div className="space-y-16 md:space-y-28">
        {projects.map((p, i) => (
          <Reveal key={p.slug} y={28}>
            <article className="border-t border-border pt-8 md:pt-10">
              <div className="mb-6 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="font-mono text-xs text-faint tabular">{pad(i + 1)}</span>
                    <Link href={`/work/${p.slug}`} className="group inline-flex items-center gap-2">
                      <h2 className="text-[1.5rem] font-medium tracking-[-0.02em] text-foreground transition-colors duration-300 group-hover:text-accent md:text-[1.9rem]">
                        {p.title}
                      </h2>
                    </Link>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2 py-0.5 font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-faint">
                      <span className="size-1.5 rounded-full" style={{ background: p.accent }} />
                      {p.status}
                    </span>
                  </div>
                  <p className="mt-2.5 max-w-xl text-pretty leading-relaxed text-muted">
                    {p.tagline}
                  </p>
                </div>
                <p className="font-mono text-[0.625rem] uppercase leading-relaxed tracking-[0.14em] text-faint md:text-right">
                  {p.year}
                  <br className="hidden md:inline" />
                  <span className="md:hidden"> · </span>
                  {p.category}
                </p>
              </div>

              <Link
                href={`/work/${p.slug}`}
                aria-label={`Open ${p.title} case study`}
                className="block overflow-hidden rounded-xl border border-border bg-surface shadow-soft transition-transform duration-500 ease-out-expo hover:-translate-y-1"
              >
                <ProjectMockup preset={p.mockup} />
              </Link>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-faint">
                  {p.role} · {p.industry}
                </p>
                <div className="flex items-center gap-5">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
                    >
                      Live site
                      <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                  <Link
                    href={`/work/${p.slug}`}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
                  >
                    <span className="relative">
                      Read case study
                      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                    <ArrowUpRight className="size-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
