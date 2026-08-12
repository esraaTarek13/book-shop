import type { ButtonHTMLAttributes, ReactNode } from "react";
import Spinner from "./Spinner";

type ButtonVariant = "primary" | "outline" | "dark";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-text-light hover:bg-primary-50",
  outline:
    "bg-transparent border border-primary text-text-accent hover:bg-primary-10",
  dark: "bg-card text-text-light hover:bg-card/80",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm",
  md: "px-4 py-2 md:px-5 md:py-2.5 text-sm md:text-base",
  lg: "px-6 py-2 md:px-8 md:py-3 text-base md:text-lg",
};

const spinnerSizeMap: Record<ButtonSize, "sm" | "md"> = {
  sm: "sm",
  md: "sm",
  lg: "md",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      className={`group flex w-full items-center justify-center gap-3 rounded-sm font-semibold transition-all duration-300 disabled:opacity-85 disabled:cursor-not-allowed cursor-pointer ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...rest}
    >
      <span className="font-bold flex gap-2 items-center">{children}</span>
      {isLoading && <Spinner size={spinnerSizeMap[size]} color="current" />}
    </button>
  );
}
