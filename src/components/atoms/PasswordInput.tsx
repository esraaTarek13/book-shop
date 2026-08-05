"use client";
import { forwardRef, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Input from "./Input";
import type { InputHTMLAttributes } from "react";

interface PasswordInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  hasError?: boolean;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ hasError = false, className = "", ...rest }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <div className="relative">
        <Input
          ref={ref}
          type={isVisible ? "text" : "password"}
          hasError={hasError}
          className={`pr-10 ${className}`}
          {...rest}
        />
        <button
          type="button"
          onClick={() => setIsVisible((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-text-50 cursor-pointer"
          tabIndex={-1}
        >
          {isVisible ? <FiEyeOff size={18} /> : <FiEye size={18} />}
        </button>
      </div>
    );
  },
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
