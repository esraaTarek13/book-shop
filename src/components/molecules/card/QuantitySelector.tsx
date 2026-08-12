"use client";
import { FiMinus, FiPlus } from "react-icons/fi";
import IconButton from "@/components/atoms/IconButton";
import { useQuantitySelector } from "@/hooks/cart/useQuantitySelector";

interface QuantitySelectorProps {
  bookId: number;
  qty: number;
  min?: number;
  max?: number;
  className?: string;
}

export default function QuantitySelector({
  bookId,
  qty,
  min = 1,
  max,
  className = "",
}: QuantitySelectorProps) {
  const {
    handleDecrement,
    handleIncrement,
    isDecrementDisabled,
    isIncrementDisabled,
  } = useQuantitySelector({ bookId, qty, min, max });

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <IconButton
        icon={<FiMinus size={12} />}
        variant="outline"
        aria-label="Decrease quantity"
        onClick={handleDecrement}
        disabled={isDecrementDisabled}
        className="rounded-full! p-0.5! px-0.5!"
      />

      <span className="min-w-[1ch] text-center">{qty}</span>

      <IconButton
        icon={<FiPlus size={12} />}
        variant="outline"
        aria-label="Increase quantity"
        onClick={handleIncrement}
        disabled={isIncrementDisabled}
        className="rounded-full! p-0.5! px-0.5!"
      />
    </div>
  );
}
