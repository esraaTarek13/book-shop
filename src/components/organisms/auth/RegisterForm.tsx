"use client";
import { Form, Formik } from "formik";
import FormField from "../../molecules/FormField";
import Button from "../../atoms/Button";
import CheckboxField from "../../molecules/CheckboxField";
import { useRegister } from "@/hooks/useRegister";
import { registerSchema } from "@/validation/registerSchema";

export default function RegisterForm() {
  const { mutate, isPending } = useRegister();

  return (
    <Formik
      initialValues={{
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        checkbox: false,
      }}
      validationSchema={registerSchema}
      onSubmit={(values) => mutate(values)}
    >
      <Form>
        <div className="flex flex-col gap-3.5 md:gap-4.5">
          <div className="w-full flex flex-col md:flex-row gap-3 md:gap-4 items-center">
            <FormField
              name="first_name"
              label="First Name"
              type="text"
              placeholder="John"
              className="w-full"
            />
            <FormField
              name="last_name"
              label="Last Name"
              type="text"
              placeholder="Smith"
              className="w-full"
            />
          </div>
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
          <FormField
            name="password_confirmation"
            label="Confirm password"
            type="password"
            placeholder="Confirm password"
          />

          <CheckboxField
            name="checkbox"
            label="Agree with Terms & Conditions"
          />
        </div>

        <Button
          type="submit"
          isLoading={isPending}
          variant="primary"
          size="lg"
          className="w-full mt-8 md:mt-10"
        >
          Shop now
        </Button>
      </Form>
    </Formik>
  );
}
