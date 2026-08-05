"use client";
import Button from "@/components/atoms/Button";
import FormField from "@/components/molecules/FormField";
import { useForgetPassword } from "@/hooks/useForgetPassword";
import { forgetPasswordSchema } from "@/validation/forgetPasswordSchema";
import { Form, Formik } from "formik";

export default function ForgetPasswordForm() {
  const { mutate, isPending } = useForgetPassword();

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={forgetPasswordSchema}
      onSubmit={(values) => mutate(values)}
    >
      <Form className="flex flex-col gap-8 md:gap-10">
        <FormField
          name="email"
          label="Email"
          type="email"
          placeholder="example@gmail.com"
        />
        <Button
          type="submit"
          isLoading={isPending}
          variant="primary"
          size="lg"
          className="w-full"
        >
          Send reset code
        </Button>
      </Form>
    </Formik>
  );
}
