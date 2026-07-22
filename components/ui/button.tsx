import Link from "next/link";
import { forwardRef } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:brightness-110 border border-transparent",
  secondary:
    "bg-surface text-foreground border border-border hover:border-border-strong hover:bg-surface-raised",
  outline:
    "bg-transparent text-foreground border border-border-strong hover:bg-surface",
  ghost:
    "bg-transparent text-foreground border border-transparent hover:bg-surface-muted",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-13 px-7 text-base gap-2.5",
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

const base =
  "inline-flex items-center justify-center rounded-full font-medium tracking-tight transition-[transform,background-color,border-color,filter] duration-300 ease-out-expo select-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] group/btn";

export type ButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", withArrow, className, children, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
        {withArrow && (
          <ArrowRight className="size-4 transition-transform duration-300 ease-out-expo group-hover/btn:translate-x-0.5" />
        )}
      </button>
    );
  },
);
Button.displayName = "Button";

export type ButtonLinkProps = BaseProps &
  Omit<React.ComponentProps<typeof Link>, "className"> & { href: string };

export function ButtonLink({
  variant = "primary",
  size = "md",
  withArrow,
  className,
  children,
  href,
  ...props
}: ButtonLinkProps) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const classes = cn(base, variants[variant], sizes[size], className);

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noreferrer" }
          : {})}
      >
        {children}
        {withArrow && (
          <ArrowRight className="size-4 transition-transform duration-300 ease-out-expo group-hover/btn:translate-x-0.5" />
        )}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
      {withArrow && (
        <ArrowRight className="size-4 transition-transform duration-300 ease-out-expo group-hover/btn:translate-x-0.5" />
      )}
    </Link>
  );
}
