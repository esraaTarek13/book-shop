import type { ReactNode } from "react";

type BadgeVariant = "success" | "warning" | "neutral" | "primary" | "count";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  success: "text-text-success text-xs md:text-sm border-text-success rounded-sm px-2 md:px-3 py-1 md:py-2",
  warning: "text-text-warning text-xs md:text-sm border-text-warning rounded-sm px-2 md:px-3 py-1 md:py-2",
  neutral: "text-progress text-xs md:text-sm border-progress rounded-sm px-2 md:px-3 py-1 md:py-2",
  primary: "text-primary text-xs md:text-sm border-primary rounded-sm px-2 md:px-3 py-1 md:py-2",
  count: "bg-primary text-text-light border-surface min-w-4 h-4 justify-center rounded-full px-1 text-[10px]",
};

export default function Badge({ children, variant = "neutral", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center font-medium border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
