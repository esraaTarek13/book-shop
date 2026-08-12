import Text from "@/components/atoms/Text";
import { mapSummaryTotals } from "@/mappers/mapSummaryTotals";

interface SummaryTotalsProps {
  subTotal: number;
  shipping?: string;
  tax: number;
  total: number;
}

export default function SummaryTotals({
  subTotal,
  shipping,
  tax,
  total,
}: SummaryTotalsProps) {
  const rows = mapSummaryTotals({ subTotal, shipping, tax });

  return (
    <div className="space-y-3">
      {rows.map((row) => (
        <div key={row.label} className="flex items-center justify-between">
          <Text size="base" color="muted">
            {row.label}
          </Text>
          <Text size="base" weight="semibold">
            {row.value}
          </Text>
        </div>
      ))}

      <hr className="h-px w-full bg-card-border/10" />

      <div className="flex items-center justify-between">
        <Text size="base" color="muted">
          Total
        </Text>
        <Text size="lg" weight="bold" color="accent">
          $ {total}
        </Text>
      </div>
    </div>
  );
}
