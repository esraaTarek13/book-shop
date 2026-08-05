"use client";

import { useField } from "formik";
import type { ReactNode } from "react";
import Checkbox from "../atoms/Checkbox";

interface CheckboxFieldProps {
  name: string;
  label: ReactNode;
  className?: string;
}

/**
 * Bridges Formik <-> Checkbox atom. useField(type: "checkbox") returns field.checked.
 */
export default function CheckboxField({
  name,
  label,
  className = "",
}: CheckboxFieldProps) {
  const [field, meta] = useField({ name, type: "checkbox" });
  const hasError = Boolean(meta.touched && meta.error);

  return (
    <div className={className}>
      <Checkbox label={label} id={name} {...field} />
      <span
        className={`text-xs md:text-sm text-danger min-h-4 ${
          hasError ? "visible" : "invisible"
        }`}
        role="alert"
      >
        {meta.error || "\u00A0"}
      </span>
    </div>
  );
}
