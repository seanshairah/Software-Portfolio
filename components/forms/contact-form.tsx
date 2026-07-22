"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Loader2, AlertCircle } from "lucide-react";
import {
  contactSchema,
  type ContactInput,
  projectTypes,
  budgetRanges,
  timelines,
  contactMethods,
} from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-xl border bg-surface px-4 py-3 text-[0.9375rem] text-foreground placeholder:text-faint transition-colors focus:outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20";

function Label({ htmlFor, children, optional }: { htmlFor: string; children: React.ReactNode; optional?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 flex items-center justify-between text-sm font-medium text-foreground">
      <span>{children}</span>
      {optional && <span className="font-mono text-[0.625rem] uppercase tracking-wide text-faint">Optional</span>}
    </label>
  );
}

function ErrorText({ id, children }: { id: string; children?: string }) {
  if (!children) return null;
  return (
    <p id={id} className="mt-1.5 flex items-center gap-1.5 text-xs text-signal-red">
      <AlertCircle className="size-3.5" />
      {children}
    </p>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { website: "" },
  });

  const onSubmit = async (values: ContactInput) => {
    setStatus("submitting");
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Submission failed.");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start rounded-2xl border border-border bg-surface p-8"
      >
        <span className="flex size-12 items-center justify-center rounded-full bg-signal-green/15 text-signal-green">
          <Check className="size-6" />
        </span>
        <h3 className="mt-5 text-xl font-medium tracking-tight text-foreground">
          Thanks — your message is in.
        </h3>
        <p className="mt-2 max-w-md text-pretty leading-relaxed text-muted">
          I read every inquiry personally and will get back to you within a couple
          of days. If it's urgent, email me directly at seanshairah@gmail.com.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-accent hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot — visually hidden, off the tab order */}
      <div aria-hidden className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this empty</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Name</Label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "err-name" : undefined}
            className={cn(fieldBase, errors.name ? "border-signal-red" : "border-border")}
            {...register("name")}
          />
          <ErrorText id="err-name">{errors.name?.message}</ErrorText>
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "err-email" : undefined}
            className={cn(fieldBase, errors.email ? "border-signal-red" : "border-border")}
            {...register("email")}
          />
          <ErrorText id="err-email">{errors.email?.message}</ErrorText>
        </div>
      </div>

      <div>
        <Label htmlFor="organisation" optional>Organisation</Label>
        <input
          id="organisation"
          type="text"
          autoComplete="organization"
          placeholder="Company or team"
          className={cn(fieldBase, "border-border")}
          {...register("organisation")}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div>
          <Label htmlFor="projectType" optional>Project type</Label>
          <select id="projectType" className={cn(fieldBase, "border-border")} {...register("projectType")}>
            <option value="">Select…</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="budget" optional>Budget</Label>
          <select id="budget" className={cn(fieldBase, "border-border")} {...register("budget")}>
            <option value="">Select…</option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="timeline" optional>Timeline</Label>
          <select id="timeline" className={cn(fieldBase, "border-border")} {...register("timeline")}>
            <option value="">Select…</option>
            {timelines.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <Label htmlFor="message">Project details</Label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell me about the workflow, the users and the outcome you're after."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "err-message" : undefined}
          className={cn(fieldBase, "resize-y", errors.message ? "border-signal-red" : "border-border")}
          {...register("message")}
        />
        <ErrorText id="err-message">{errors.message?.message}</ErrorText>
      </div>

      <div>
        <Label htmlFor="preferredContact" optional>Preferred contact method</Label>
        <select id="preferredContact" className={cn(fieldBase, "border-border sm:max-w-xs")} {...register("preferredContact")}>
          <option value="">Select…</option>
          {contactMethods.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      {status === "error" && serverError && (
        <div role="alert" className="flex items-start gap-2 rounded-xl border border-signal-red/40 bg-signal-red/[0.06] p-4 text-sm text-signal-red">
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          {serverError}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Button type="submit" size="lg" disabled={status === "submitting"} withArrow={status !== "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            "Send message"
          )}
        </Button>
        <p className="max-w-xs text-xs leading-relaxed text-faint">
          Your details are used only to respond to your inquiry. No newsletter,
          no sharing.
        </p>
      </div>
    </form>
  );
}
