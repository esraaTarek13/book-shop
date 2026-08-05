import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isSelected?: boolean;
}

export default function Chip({
  children,
  isSelected = false,
  className = "",
  ...rest
}: ChipProps) {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      className={`rounded-sm border px-4 md:px-6 py-1.5 md:py-2.5 text-sm md:text-base font-medium whitespace-nowrap transition-colors ${
        isSelected
          ? "border-primary-10 bg-primary-50 text-text-light"
          : "border-card-border bg-transparent text-text hover:bg-primary-10"
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
