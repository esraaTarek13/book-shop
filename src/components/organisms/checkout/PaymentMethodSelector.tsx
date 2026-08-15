"use client";

import { useField } from "formik";
import Text from "@/components/atoms/Text";
import RadioButton from "@/components/atoms/RadioButton";
import { PAYMENT_METHODS } from "@/constants/paymentMethods";

export default function PaymentMethodSelector() {
  const [field, , helpers] = useField("payment_method");

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
              onClick={() => helpers.setValue(method.value)}
              className={`rounded-sm border px-4 py-3 cursor-pointer transition-colors ${
                isSelected
                  ? "border-primary bg-primary-10"
                  : "border-card-border hover:bg-background"
              }`}
            >
              <RadioButton
                id={`payment-${method.value}`}
                name="payment_method"
                checked={isSelected}
                onChange={() => helpers.setValue(method.value)}
                label={method.label}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
