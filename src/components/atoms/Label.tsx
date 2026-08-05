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
      className={`text-sm md:text-base lg:text-lg font-medium text-text ${className}`}
      {...rest}
    >
      {children}
    </label>
  );
}
