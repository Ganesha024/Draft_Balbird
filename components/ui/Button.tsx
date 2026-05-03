import Link from "next/link";

import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "default" | "sm";

type ButtonBaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:brightness-110 shadow-sm shadow-accent/20",
  secondary:
    "border border-border bg-background hover:bg-muted text-foreground",
  ghost: "hover:bg-muted text-foreground",
  outline: "border border-border bg-transparent hover:bg-muted text-foreground",
};

const sizes: Record<Size, string> = {
  default: "h-10 px-4 text-sm",
  sm: "h-8 px-3 text-xs",
};

export function Button({
  variant = "primary",
  size = "default",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonBaseProps) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
        sizes[size],
        variants[variant],
        className,
      )}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "default",
  className,
  children,
}: ButtonBaseProps & { href: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
        sizes[size],
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
