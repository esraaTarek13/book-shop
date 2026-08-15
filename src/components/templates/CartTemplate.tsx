"use client";

import { useGetCartData } from "@/hooks/cart/useGetCartData";
import BackgroundBanner from "../atoms/BackgroundBanner";
import CartList from "../organisms/cart/CartList";
import PaymentSummary from "../organisms/cart/PaymentSummary";

export default function CartTemplate() {
  const {
    data: cartData,
    isPending: isCartPending,
    isError: isCartError,
  } = useGetCartData();

  const hasItems = (cartData?.cart.length ?? 0) > 0;

  return (
    <>
      <BackgroundBanner height="h-[20vh]" />

      <div className="custom-container py-12 md:py-16 space-y-6 md:space-y-10">
        <CartList
          items={cartData?.cart ?? []}
          isPending={isCartPending}
          isError={isCartError}
        />

        {hasItems && (
          <PaymentSummary
            subTotal={cartData?.subTotal ?? 0}
            tax={cartData?.tax ?? 0}
            total={cartData?.total ?? 0}
          />
        )}
      </div>
    </>
  );
}
