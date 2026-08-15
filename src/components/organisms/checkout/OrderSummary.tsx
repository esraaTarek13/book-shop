import Text from "@/components/atoms/Text";
import CartCard from "../CartCard";
import { OrderDetailsResponse } from "@/types/order";
import SummaryTotals from "@/components/molecules/SummaryTotals";
import StatusMessage from "@/components/atoms/StatusMessage";
import OrderSummarySkeleton from "@/components/molecules/skeletons/OrderSummarySkeleton";
import Button from "@/components/atoms/Button";

interface OrderSummaryProps {
  order?: OrderDetailsResponse;
  isOrderPending: boolean;
  isCheckoutPending: boolean;
  isError: boolean;
}

export default function OrderSummary({
  order,
  isOrderPending,
  isCheckoutPending,
  isError,
}: OrderSummaryProps) {
  if (isError)
    return (
      <StatusMessage variant="error" content="Failed to load order summary." />
    );
  if (isOrderPending) return <OrderSummarySkeleton />;

  return (
    <section className="bg-surface rounded-lg p-6 md:p-8 flex flex-col justify-between gap-15">
      <div className="space-y-4">
        <Text as="h2" weight="semibold" size="lg">
          Order summary
        </Text>
        {order?.books.map((book) => (
          <CartCard
            key={book.bookId}
            book={book}
            showDeleteButton={false}
            imageClassName="w-24 h-auto"
          />
        ))}
      </div>

      <div className="space-y-4">
        <SummaryTotals
          subTotal={order?.subTotal ?? 0}
          tax={order?.tax ?? 0}
          total={order?.total ?? 0}
        />
        <Button type="submit" isLoading={isCheckoutPending}>
          Confirm order
        </Button>
      </div>
    </section>
  );
}
