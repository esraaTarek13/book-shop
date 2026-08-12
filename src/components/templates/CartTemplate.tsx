"use client";
import { useGetCartData } from "@/hooks/cart/useGetCartData";
import BackgroundBanner from "../atoms/BackgroundBanner";
import CartList from "../organisms/cart/CartList";
import PaymentSummary from "../organisms/cart/PaymentSummary";

export default function CartTemplate() {
  const { data, isPending, isError } = useGetCartData();

  return (
    <>
      <BackgroundBanner height="h-[20vh]" />
  
      <div className="custom-container py-12 md:py-16 space-y-6 md:space-y-10">
        <CartList
          items={data?.cart ?? []}
          isPending={isPending}
          isError={isError}
        />

        <PaymentSummary />
      </div>
    </>
  );
}
