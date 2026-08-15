"use client";
import { Form, Formik } from "formik";
import BackgroundBanner from "../atoms/BackgroundBanner";
import OrderSummary from "../organisms/checkout/OrderSummary";
import ShippingInformation from "../organisms/checkout/ShippingInformation";
import NoteField from "../molecules/NoteField";
import PaymentMethodSelector from "../organisms/checkout/PaymentMethodSelector";
import { useCheckoutPage } from "@/hooks/order/useCheckoutPage";

export default function CheckoutTemplate() {
  const {
    order,
    isOrderPending,
    isCheckoutPending,
    isError,
    hasItems,
    initialValues,
    validationSchema,
    handleSubmit,
  } = useCheckoutPage();

  if (!isOrderPending && !hasItems) return null;

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

            {hasItems && (
              <OrderSummary
                order={order}
                isOrderPending={isOrderPending}
                isCheckoutPending={isCheckoutPending}
                isError={isError}
              />
            )}
          </Form>
        </Formik>
      </section>
    </>
  );
}
