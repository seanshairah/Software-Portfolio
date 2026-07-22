import { BrandMark } from "@/components/ui/brand";

export default function Loading() {
  return (
    <div
      data-world="dark"
      className="flex min-h-[100svh] flex-col items-center justify-center gap-6 bg-background"
    >
      <BrandMark className="size-9 animate-pulse" />
      {/* The System Line as a loading indicator */}
      <div className="relative h-px w-40 overflow-hidden bg-border">
        <span className="absolute inset-y-0 left-0 w-1/2 animate-[marquee_1.2s_ease-in-out_infinite] bg-accent" />
      </div>
      <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-faint">
        Assembling
      </span>
    </div>
  );
}
