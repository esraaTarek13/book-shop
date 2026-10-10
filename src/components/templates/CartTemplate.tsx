"use client";

import { useEffect } from "react";
import { useGetCartData } from "@/hooks/cart/useGetCartData";
import { toggleCartStore } from "@/store/toggleCartStore";
import BackgroundBanner from "../atoms/BackgroundBanner";
import CartList from "../organisms/cart/CartList";
import PaymentSummary from "../organisms/cart/PaymentSummary";

export default function CartTemplate() {
  const {
    data: cartData,
    isPending: isCartPending,
    isError: isCartError,
  } = useGetCartData({ refetchOnMount: "always" });
  const setIds = toggleCartStore((s) => s.setIds);

  useEffect(() => {
    if (cartData) setIds(cartData.cart.map((item) => item.bookId));
  }, [cartData, setIds]);

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