"use client";

import { useField } from "formik";
import OtpField from "../atoms/OtpField";

interface OtpFormFieldProps {
  name: string;
  length?: number;
}

export default function OtpFormField({ name, length = 6 }: OtpFormFieldProps) {
  const [field, meta, helpers] = useField(name);
  const hasError = Boolean(meta.touched && meta.error);

  return (
    <div>
      <OtpField
        value={field.value ?? ""}
        onChange={(value) => helpers.setValue(value)}
        length={length}
      />
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
