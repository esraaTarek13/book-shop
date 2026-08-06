"use client";

import { useField } from "formik";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Textarea from "../atoms/Textarea";
import PasswordInput from "../atoms/PasswordInput";

type FormFieldType =
  | "text"
  | "email"
  | "tel"
  | "number"
  | "password"
  | "textarea";

interface FormFieldProps {
  name: string;
  label: string;
  type?: FormFieldType;
  placeholder?: string;
  className?: string;
  rows?: number;
  srOnly?: string;
  inputStyle?: string;
}

/**
 * Bridges Formik <-> neutral Atoms. Atoms stay Formik-agnostic.
 * meta.error covers both Yup validation AND backend errors set via setFieldError().
 */
export default function FormField({
  name,
  label,
  type = "text",
  placeholder = "",
  className = "",
  rows,
  srOnly,
  inputStyle,
}: FormFieldProps) {
  const [field, meta] = useField(name);
  const hasError = Boolean(meta.touched && meta.error);

  return (
    <div className={`flex flex-col gap-1 md:gap-2 ${className}`}>
      <Label htmlFor={name} className={srOnly}>
        {label}
      </Label>

      {type === "textarea" ? (
        <Textarea
          id={name}
          placeholder={placeholder}
          hasError={hasError}
          className={inputStyle}
          rows={rows}
          {...field}
        />
      ) : type === "password" ? (
        <PasswordInput
          id={name}
          placeholder={placeholder}
          hasError={hasError}
          {...field}
        />
      ) : (
        <Input
          id={name}
          type={type}
          placeholder={placeholder}
          hasError={hasError}
          className={inputStyle}
          {...field}
        />
      )}

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
