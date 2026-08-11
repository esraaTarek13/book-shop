import type { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

export default function Textarea({
  hasError = false,
  className = "",
  rows = 4,
  ...rest
}: TextareaProps) {
  return (
    <textarea
      rows={rows}
      className={`w-full resize-none rounded-sm border px-3 md:px-4 py-2 md:py-3 text-text text-sm md:text-base placeholder:text-text-50 focus:outline-none focus:ring-1 focus:ring-primary focus:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${
        hasError ? "border-danger" : "border-card-border"
      } ${className}`}
      {...rest}
    />
  );
}
