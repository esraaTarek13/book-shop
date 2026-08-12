"use client";
import { useUpdateCartData } from "./useUpdateCartData";

interface UseQuantitySelectorParams {
  bookId: number;
  qty: number;
  min?: number;
  max?: number;
}

export const useQuantitySelector = ({
  bookId,
  qty,
  min = 1,
  max,
}: UseQuantitySelectorParams) => {
  const { mutate: updateCart, isPending } = useUpdateCartData();

  const handleDecrement = () => {
    if (qty <= min) return;
    updateCart({ bookId, qty: qty - 1 });
  };

  const handleIncrement = () => {
    if (max !== undefined && qty >= max) return;
    updateCart({ bookId, qty: qty + 1 });
  };

  const isDecrementDisabled = isPending || qty <= min;
  const isIncrementDisabled = isPending || (max !== undefined && qty >= max);

  return {
    handleDecrement,
    handleIncrement,
    isDecrementDisabled,
    isIncrementDisabled,
    isPending,
  };
};