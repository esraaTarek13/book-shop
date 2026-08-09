import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonVariant = "ghost" | "outline" | "navbar";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  variant?: IconButtonVariant;
  "aria-label": string;
  label?: string;
}

const variantStyles: Record<IconButtonVariant, string> = {
  ghost: "text-text-light bg-primary hover:bg-primary/80",
  outline: "border border-primary text-text-accent hover:bg-primary-10",
  navbar: "text-text-light hover:text-text-warning",
};

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, variant = "ghost", disabled, className = "", ...rest }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={`w-fit h-auto flex items-center justify-center rounded-sm px-2 md:px-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${variantStyles[variant]} ${className}`}
        {...rest}
      >
        {icon}
      </button>
    );
  },
);

IconButton.displayName = "IconButton";

export default IconButton;
