"use client";
import { Form, Formik } from "formik";
import FormField from "../../molecules/FormField";
import { useLogin } from "@/hooks/useLogin";
import Button from "../../atoms/Button";
import { loginSchema } from "@/validation/loginSchema";
import CheckboxField from "../../molecules/CheckboxField";
import TextLink from "../../atoms/TextLink";

export default function LoginForm() {
  const { mutate, isPending } = useLogin();

  return (
    <Formik
      initialValues={{ email: "", password: "", myCheckbox: false }}
      validationSchema={loginSchema}
      onSubmit={(values) => mutate(values)}
    >
      <Form>
        <div className="flex flex-col gap-3.5 md:gap-4.5">
          <FormField
            name="email"
            label="Email"
            type="email"
            placeholder="example@gmail.com"
          />
          <FormField
            name="password"
            label="Password"
            type="password"
            placeholder="Enter password"
          />
        </div>

        <div className="flex items-center justify-between mt-3 md:mt-4">
          <CheckboxField name="myCheckbox" label="Remember me" />
          <TextLink href="/forget-password" className="text-text-accent">
            Forget password?
          </TextLink>
        </div>

        <Button
          type="submit"
          isLoading={isPending}
          variant="primary"
          size="lg"
          className="w-full mt-8 md:mt-10"
        >
          Login
        </Button>
      </Form>
    </Formik>
  );
}
