import type { LabelHTMLAttributes, ReactNode } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export default function Label({
  children,
  className = "",
  ...rest
}: LabelProps) {
  return (
    <label
      className={`text-sm md:text-base font-medium text-text ${className}`}
      {...rest}
    >
      {children}
    </label>
  );
}
