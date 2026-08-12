"use client";

import { Formik, Form } from "formik";
import Button from "@/components/atoms/Button";
import FormField from "../molecules/FormField";
import Text from "@/components/atoms/Text";
import { useApplyCoupon } from "@/hooks/order/useApplyCoupon";
import { applyCouponSchema } from "@/validation/applyCouponSchema";

export default function PromoCodeField() {
  const { mutate, isPending } = useApplyCoupon();

  return (
    <Formik
      initialValues={{ code: "" }}
      validationSchema={applyCouponSchema}
      onSubmit={(values) => mutate(values)}
    >
      <Form className="space-y-2 md:space-y-4">
        <Text as="p" color="muted" size="sm">
          Have a discount code?
        </Text>
        <div className="flex gap-2 md:gap-4">
          <FormField
            name="code"
            label="Have a discount code?"
            srOnly="sr-only"
            type="text"
            placeholder="Enter Promo Code"
          />

          <Button
            type="submit"
            variant="dark"
            size="md"
            isLoading={isPending}
            className="w-fit! h-fit! py-2 md:py-3"
          >
            Apply
          </Button>
        </div>
      </Form>
    </Formik>
  );
}
