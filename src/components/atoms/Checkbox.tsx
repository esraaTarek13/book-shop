import { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";

interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label?: ReactNode;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className = "", id, ...rest }, ref) => {
    return (
      <label
        htmlFor={id}
        className="flex items-center gap-2 cursor-pointer text-xs md:text-sm text-text"
      >
        <input
          ref={ref}
          type="checkbox"
          id={id}
          className={`h-3 md:h-4 w-3 md:w-4 rounded-sm accent-primary cursor-pointer ${className}`}
          {...rest}
        />
        {label}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
