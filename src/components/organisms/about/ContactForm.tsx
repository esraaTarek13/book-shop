"use client";

import { Form, Formik } from "formik";
import Button from "@/components/atoms/Button";
import FormField from "@/components/molecules/FormField";
import { contactSchema } from "@/validation/contactSchema";
import { useSendContactMessage } from "@/hooks/useSendContactMessage";

export default function ContactForm() {
  const { mutate, isPending } = useSendContactMessage();

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "", subject: "" }}
      validationSchema={contactSchema}
      onSubmit={(values, { resetForm }) =>
        mutate(values, { onSuccess: () => resetForm() })
      }
    >
      <Form className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            name="name"
            label="Name"
            srOnly="sr-only"
            placeholder="Name"
            inputStyle="border-surface/20 placeholder:text-text-light-50"
          />
          <FormField
            name="email"
            label="Email Address"
            srOnly="sr-only"
            type="email"
            placeholder="Email Address"
            inputStyle="border-surface/20 placeholder:text-text-light-50"
          />
        </div>

        <FormField
          name="subject"
          label="Subject"
          srOnly="sr-only"
          placeholder="Subject"
          inputStyle="border-surface/20 placeholder:text-text-light-50"
        />

        <FormField
          name="message"
          label="Your Message"
          srOnly="sr-only"
          type="textarea"
          placeholder="Your Message"
          rows={5}
          inputStyle="border-surface/20 placeholder:text-text-light-50"
        />

        <Button
          type="submit"
          isLoading={isPending}
          variant="primary"
          size="md"
          className="w-fit"
        >
          Send Message
        </Button>
      </Form>
    </Formik>
  );
}
