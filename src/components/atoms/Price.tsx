interface PriceProps {
  amount: number;
  originalAmount?: number;
  currency?: string;
  amountColor?: string;
  originalAmountColor?: string;
  className?: string;
}

export default function Price({
  amount,
  originalAmount,
  currency = "$",
  amountColor = "text-text",
  originalAmountColor = "text-text-50",
  className = "",
}: PriceProps) {
  const hasDiscount = originalAmount !== undefined && originalAmount > amount;

  return (
    <div className={`flex items-baseline gap-2 ${className}`}>
      <span
        className={`font-semibold text-sm md:text-base lg:text-lg ${amountColor}`}
      >
        {currency}
        {amount.toFixed(2)}
      </span>
      {hasDiscount && (
        <span
          className={`line-through text-xs md:text-sm ${originalAmountColor}`}
        >
          {currency}
          {originalAmount.toFixed(2)}
        </span>
      )}
    </div>
  );
}
