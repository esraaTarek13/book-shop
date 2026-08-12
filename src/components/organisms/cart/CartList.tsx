import StatusMessage from "@/components/atoms/StatusMessage";
import BookCardSkeleton from "@/components/molecules/skeletons/BookCardSkeleton";
import type { CartItem } from "@/types/cart";
import CartCard from "../CartCard";

interface CartListProps {
  items: CartItem[];
  isPending: boolean;
  isError: boolean;
  className?: string;
}

export default function CartList({
  items,
  isPending,
  isError,
  className = "",
}: CartListProps) {
  if (isError)
    return (
      <StatusMessage variant="error" content="Failed to load your cart." />
    );

  return (
    <section className={`grow flex-1 ${className}`}>
      {isPending ? (
        <BookCardSkeleton className="lg:grid-cols-1!" />
      ) : items.length === 0 ? (
        <StatusMessage variant="empty" content="Your cart is empty." />
      ) : (
        <div className="space-y-6 md:space-y-8">
          {items?.map((item) => (
            <CartCard
              key={item.cartId}
              book={item}
              description={item.bookDetails.description}
              showAsinCode
            />
          ))}
        </div>
      )}
    </section>
  );
}
