import type { ButtonHTMLAttributes } from "react";

type TabVariant = "underline" | "pill";

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  variant?: TabVariant;
}

const variantStyles: Record<
  TabVariant,
  { base: string; active: string; inactive: string }
> = {
  underline: {
    base: "pb-2 border-b-2 font-bold text-xs md:text-sm",
    active: "border-text-warning text-text",
    inactive: "border-transparent text-text-50 hover:text-text",
  },
  pill: {
    base: "px-4 py-1.5 rounded-sm text-xs md:text-sm font-medium",
    active: "bg-primary text-text-light",
    inactive:
      "bg-transparent text-text border border-card-border hover:bg-primary-10",
  },
};

export default function Tab({
  isActive,
  variant = "underline",
  className = "",
  children,
  ...rest
}: TabProps) {
  const styles = variantStyles[variant];

  return (
    <button
      type="button"
      className={`cursor-pointer ${styles.base} ${isActive ? styles.active : styles.inactive} transition-colors ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
