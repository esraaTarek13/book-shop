import Text from "@/components/atoms/Text";
import CartCard from "../CartCard";
import SummaryTotals from "@/components/molecules/SummaryTotals";
import StatusMessage from "@/components/atoms/StatusMessage";
import OrderSummarySkeleton from "@/components/molecules/skeletons/OrderSummarySkeleton";
import Button from "@/components/atoms/Button";
import { CartData } from "@/types/cart";

interface OrderSummaryProps {
  cartData?: CartData;
  isCartPending: boolean;
  isCheckoutPending: boolean;
  isError: boolean;
}

export default function OrderSummary({
  cartData,
  isCartPending,
  isCheckoutPending,
  isError,
}: OrderSummaryProps) {
  if (isError)
    return (
      <StatusMessage variant="error" content="Failed to load order summary." />
    );
  if (isCartPending) return <OrderSummarySkeleton />;

  return (
    <section className="bg-surface rounded-lg p-6 md:p-8 flex flex-col justify-between gap-15">
      <div className="space-y-4">
        <Text as="h2" weight="semibold" size="lg">
          Order summary
        </Text>
        {cartData?.cart.map((book) => (
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
          subTotal={cartData?.subTotal ?? 0}
          tax={cartData?.tax ?? 0}
          total={cartData?.total ?? 0}
        />
        <Button type="submit" isLoading={isCheckoutPending}>
          Confirm order
        </Button>
      </div>
    </section>
  );
}