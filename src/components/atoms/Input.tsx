import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ hasError = false, className = "", ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full rounded-sm border px-3 md:px-4 py-2 md:py-3 text-text text-xs sm:text-sm md:text-base placeholder:text-text-50 focus:outline-none focus:ring-1 focus:ring-primary focus:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${
          hasError ? "border-danger" : "border-card-border"
        } ${className}`}
        {...rest}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
