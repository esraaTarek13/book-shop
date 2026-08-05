interface PriceProps {
  amount: number;
  originalAmount?: number;
  currency?: string;
  className?: string;
}

export default function Price({
  amount,
  originalAmount,
  currency = "$",
  className = "",
}: PriceProps) {
  const hasDiscount = originalAmount !== undefined && originalAmount > amount;

  return (
    <div className={`flex items-baseline gap-2 ${className}`}>
      <span className="font-bold text-text text-sm md:text-base lg:text-lg">
        {currency}
        {amount.toFixed(2)}
      </span>
      {hasDiscount && (
        <span className="text-text-50 line-through text-xs md:text-sm">
          {currency}
          {originalAmount.toFixed(2)}
        </span>
      )}
    </div>
  );
}
