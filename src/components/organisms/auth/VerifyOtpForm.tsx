"use client";
import Button from "@/components/atoms/Button";
import OtpFormField from "@/components/molecules/OtpFormField";
import { useVerifyOtp } from "@/hooks/useVerifyOtp";
import { OTP_LENGTH, otpSchema } from "@/validation/otpSchema";
import { Form, Formik } from "formik";
import { useState } from "react";

export default function VerifyOtpForm() {
  const { handleVerify } = useVerifyOtp();
  const [isNavigating, setIsNavigating] = useState(false);

  return (
    <Formik
      initialValues={{ otp: "" }}
      validationSchema={otpSchema}
      onSubmit={(values) => {
        setIsNavigating(true);
        handleVerify(values.otp);
      }}
    >
      <Form className="flex flex-col gap-8 md:gap-10">
        <OtpFormField name="otp" length={OTP_LENGTH} />

        <Button
          type="submit"
          isLoading={isNavigating}
          variant="primary"
          size="lg"
          className="w-full"
        >
          Reset password
        </Button>
      </Form>
    </Formik>
  );
}
