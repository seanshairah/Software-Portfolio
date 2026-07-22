"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";
import { BrandMark } from "@/components/ui/brand";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section
      data-world="dark"
      data-nav-dark
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-background px-6 text-center"
    >
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" aria-hidden />
      <div className="relative">
        <BrandMark className="mx-auto size-10" />
        <p className="mt-8 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-signal-red">
          System error
        </p>
        <h1 className="mt-4 text-balance text-[clamp(2rem,6vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-foreground">
          Something went wrong.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted">
          An unexpected error interrupted this page. You can try again, or head
          back to safe ground.
        </p>
        {error.digest && (
          <p className="mt-3 font-mono text-xs text-faint">Ref: {error.digest}</p>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button onClick={reset}>
            <RotateCcw className="size-4" />
            Try again
          </Button>
          <ButtonLink href="/" variant="secondary">
            Back home
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
