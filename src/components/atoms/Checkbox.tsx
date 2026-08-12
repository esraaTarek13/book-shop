import { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";

interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label?: ReactNode;
  count?: number;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, count, className = "", id, ...rest }, ref) => {
    return (
      <label
        htmlFor={id}
        className="flex items-center justify-between gap-2 cursor-pointer text-xs md:text-sm text-text"
      >
        <span className="flex items-center gap-2">
          <input
            ref={ref}
            type="checkbox"
            id={id}
            className={`h-3 md:h-4 w-3 md:w-4 rounded-sm accent-primary cursor-pointer ${className}`}
            {...rest}
          />
          {label}
        </span>

        {count !== undefined && <span className="text-text-50 text-sm md:text-base">({count})</span>}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
