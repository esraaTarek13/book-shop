"use client";

import OTPInput from "react-otp-input";

interface OtpFieldProps {
  value: string;
  onChange: (value: string) => void;
  length?: number;
}

export default function OtpField({
  value,
  onChange,
  length = 6,
}: OtpFieldProps) {
  return (
    <OTPInput
      value={value}
      onChange={onChange}
      numInputs={length}
      shouldAutoFocus
      inputType="number"
      containerStyle="flex gap-3 justify-center"
      renderInput={(props) => (
        <input
          {...props}
          className="h-8! w-8! md:h-12! md:w-12! rounded-sm border border-card-border text-center text-sm md:text-lg font-semibold text-text outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary "
        />
      )}
    />
  );
}
