"use client";
import Button from "@/components/atoms/Button";
import FormField from "@/components/molecules/FormField";
import { useResetPassword } from "@/hooks/useResetPassword";
import { useResetPasswordStore } from "@/store/resetPasswordStore";
import { resetPasswordSchema } from "@/validation/resetPasswordSchema";
import { Form, Formik } from "formik";

export default function ResetPasswordForm() {
  const { mutate, isPending } = useResetPassword();
  const email = useResetPasswordStore((state) => state.email);
  const otp = useResetPasswordStore((state) => state.otp);

  return (
    <Formik
      initialValues={{
        password: "",
        password_confirmation: "",
      }}
      validationSchema={resetPasswordSchema}
      onSubmit={(values) => {
        mutate({ email, otp, ...values });
      }}
    >
      <Form>
        <div className="flex flex-col gap-3.5 md:gap-4.5">
          <FormField
            name="password"
            label="Password"
            type="password"
            placeholder="Enter password"
          />
          <FormField
            name="password_confirmation"
            label="Confirm password"
            type="password"
            placeholder="Confirm password"
          />
        </div>

        <Button
          type="submit"
          isLoading={isPending}
          variant="primary"
          size="lg"
          className="w-full mt-8 md:mt-10"
        >
          Reset password
        </Button>
      </Form>
    </Formik>
  );
}
