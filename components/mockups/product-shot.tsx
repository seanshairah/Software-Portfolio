import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Real product screenshot, framed to match the synthetic mockups (rounded card,
 * fine border, raised shadow). Used in case-study galleries for shipped products
 * where an actual screen beats a rebuilt mockup.
 */
export function ProductShot({
  src,
  alt,
  w,
  h,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  w: number;
  h: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-surface-raised shadow-raised",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={w}
        height={h}
        priority={priority}
        sizes="(min-width: 1024px) 920px, 100vw"
        className="h-auto w-full"
      />
    </div>
  );
}
