"use client";

import { useField } from "formik";
import Text from "@/components/atoms/Text";
import RadioButton from "@/components/atoms/RadioButton";
import { PAYMENT_METHODS } from "@/constants/paymentMethods";

export default function PaymentMethodSelector() {
  const [field, meta, helpers] = useField("payment_method");

  const handleSelect = (value: number) => {
    helpers.setValue(value);
  };

  return (
    <section className="bg-surface rounded-lg p-6 md:p-8 space-y-4">
      <Text as="h2" weight="semibold" size="lg">
        Payment Method
      </Text>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {PAYMENT_METHODS.map((method) => {
          const isSelected = field.value === method.value;
          return (
            <div
              key={method.value}
              onClick={() => handleSelect(method.value)}
              className={`rounded-sm border px-4 py-3 cursor-pointer transition-colors ${isSelected
                  ? "border-primary bg-primary-10"
                  : "border-card-border hover:bg-background"
                }`}
            >
              <RadioButton
                id={`payment-${method.value}`}
                name="payment_method"
                checked={isSelected}
                onChange={() => handleSelect(method.value)}
                label={method.label}
              />
            </div>
          );
        })}
      </div>

      {meta.touched && meta.error && (
        <p role="alert" className="text-xs md:text-sm text-danger">
          {meta.error}
        </p>
      )}
    </section>
  );
}