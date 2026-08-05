import { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";

interface RadioButtonProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label?: ReactNode;
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, className = "", id, ...rest }, ref) => {
    return (
      <label
        htmlFor={id}
        className="flex items-center gap-2 cursor-pointer text-xs md:text-sm text-text"
      >
        <input
          ref={ref}
          type="radio"
          id={id}
          className={`h-3 md:h-4 w-3 md:w-4 accent-primary cursor-pointer ${className}`}
          {...rest}
        />
        {label}
      </label>
    );
  },
);

RadioButton.displayName = "RadioButton";

export default RadioButton;
