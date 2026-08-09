import ProgressBar from "@/components/atoms/ProgressBar";
import Text from "@/components/atoms/Text";

interface StockProgressProps {
  stock: number;
  totalStock?: number;
  className?: string;
}

export default function StockProgress({
  stock,
  totalStock = 10,
  className = "",
}: StockProgressProps) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      <ProgressBar value={totalStock - stock} max={totalStock} />
      <Text as="p" size="xs" color="lightMuted">
        {stock} books left
      </Text>
    </div>
  );
}
