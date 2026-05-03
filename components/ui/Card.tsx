import { cn } from "@/lib/cn";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-foreground/5",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-accent opacity-60" />
      <div className="relative">{children}</div>
    </div>
  );
}

export function CardTitle({ 
  children, 
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return <h2 className={cn("text-lg font-semibold tracking-tight", className)}>{children}</h2>;
}

export function CardDescription({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 text-sm text-foreground/70">{children}</p>;
}
