"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

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
