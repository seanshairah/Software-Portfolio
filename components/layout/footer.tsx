import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/content/profile";
import { footerNav } from "@/content/navigation";
import { socials } from "@/content/socials";
import { stack } from "@/content/skills";
import { Wordmark } from "@/components/ui/brand";
import { StatusDot } from "@/components/ui/badge";

export function Footer() {
  const year = 2026;
  return (
    <footer className="relative border-t border-border bg-surface">
      {/* Tech marquee strip */}
      <div className="overflow-hidden border-b border-border py-3">
        <div className="flex whitespace-nowrap [animation:marquee_38s_linear_infinite] motion-reduce:animate-none">
          {[...stack, ...stack].map((t, i) => (
            <span
              key={i}
              className="mx-6 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-faint"
            >
              {t}
              <span className="ml-6 text-border-strong">/</span>
            </span>
          ))}
        </div>
      </div>

      <div className="shell grid grid-cols-1 gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Wordmark />
          <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-muted">
            {profile.primaryStatement}
          </p>
          <div className="mt-6">
            <StatusDot label={profile.hero.availability.label} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-4 md:col-start-9">
          {footerNav.map((col) => (
            <div key={col.title}>
              <h3 className="label mb-4">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="shell flex flex-col gap-6 border-t border-border py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          <span className="tabular">© {year} Sean Muchenje</span>
          <span className="text-border-strong">·</span>
          <span>{profile.location}</span>
          <span className="text-border-strong">·</span>
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-foreground"
          >
            {profile.email}
          </a>
        </div>
        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="group inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
              {...(s.href.startsWith("http")
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              {s.label}
              <ArrowUpRight className="size-3.5 text-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>
      </div>

      <p className="shell pb-8 text-xs text-faint">
        Designed &amp; built in Harare, Zimbabwe. The Digital Systems Studio.
      </p>
    </footer>
  );
}
