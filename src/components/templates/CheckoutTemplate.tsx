"use client";
import { Form, Formik } from "formik";
import BackgroundBanner from "../atoms/BackgroundBanner";
import OrderSummary from "../organisms/checkout/OrderSummary";
import { useOrderDetails } from "@/hooks/order/useOrderDetails";
import { useCheckoutForm } from "@/hooks/order/useCheckoutForm";
import ShippingInformation from "../organisms/checkout/ShippingInformation";
import NoteField from "../molecules/NoteField";
import PaymentMethodSelector from "../organisms/checkout/PaymentMethodSelector";

export default function CheckoutTemplate() {
  const { data, isPending: isOrderPending, isError } = useOrderDetails();
  const {
    initialValues,
    validationSchema,
    handleSubmit,
    isPending: isCheckoutPending,
  } = useCheckoutForm();

  return (
    <>
      <BackgroundBanner height="h-[20vh]" />

      <section className="custom-container py-12 md:py-16">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <ShippingInformation />
              <PaymentMethodSelector />
              <NoteField />
            </div>

            <OrderSummary
              order={data}
              isOrderPending={isOrderPending}
              isCheckoutPending={isCheckoutPending}
              isError={isError}
            />
          </Form>
        </Formik>
      </section>
    </>
  );
}
