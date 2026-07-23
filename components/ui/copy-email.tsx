"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * The email address, as a single tap-to-copy control. Replaces the old
 * address-pill + separate copy button. Copies on click with an inline, playful
 * confirmation.
 */
export function EmailCopyChip({
  email,
  className,
}: {
  email: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Email copied" : `Copy ${email}`}
      className={cn(
        "group inline-flex w-full items-center justify-between gap-3 rounded-full border border-border bg-surface/60 px-5 py-3 text-left transition-colors hover:border-border-strong sm:w-auto",
        className,
      )}
    >
      <span className="truncate text-[0.9375rem] font-medium text-foreground">
        {copied ? "Copied — your move." : email}
      </span>
      <span className="shrink-0 text-faint transition-colors group-hover:text-foreground">
        {copied ? (
          <Check className="size-4 text-signal-green" />
        ) : (
          <Copy className="size-4" />
        )}
      </span>
    </button>
  );
}

export function CopyEmail({
  email,
  className,
}: {
  email: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — the visible mailto link is the fallback.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Email copied" : `Copy ${email}`}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-border-strong hover:text-foreground",
        className,
      )}
    >
      {copied ? (
        <Check className="size-3.5 text-signal-green" />
      ) : (
        <Copy className="size-3.5" />
      )}
      {copied ? "Copied — your move." : "Copy email"}
    </button>
  );
}
