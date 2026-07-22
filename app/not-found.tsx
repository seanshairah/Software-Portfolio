import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { BrandMark } from "@/components/ui/brand";
import { navItems } from "@/content/navigation";

export default function NotFound() {
  return (
    <section
      data-world="dark"
      data-nav-dark
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-background px-6 text-center"
    >
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 size-[30rem] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--glow), transparent 70%)" }}
        aria-hidden
      />
      <div className="relative">
        <BrandMark className="mx-auto size-10" animated />
        <p className="mt-8 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-faint">
          Error 404 · Route not found
        </p>
        <h1 className="mt-4 text-balance text-[clamp(2rem,6vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-foreground">
          This path leads nowhere.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted">
          The page you're looking for isn't part of the system. Let's get you back
          to something that works.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/" withArrow>
            <ArrowLeft className="size-4" />
            Back home
          </ButtonLink>
          <ButtonLink href="/work" variant="secondary">
            Selected work
          </ButtonLink>
        </div>

        <nav className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-faint transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
