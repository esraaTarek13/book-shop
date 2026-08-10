import StatusMessage from "@/components/atoms/StatusMessage";
import BookCardSkeleton from "@/components/molecules/skeletons/BookCardSkeleton";
import { WishlistItem } from "@/types/wishlist";
import BookCard from "../BookCard";

interface WishlistListProps {
  items: WishlistItem[];
  isPending: boolean;
  isError: boolean;
  className?: string;
}
export default function WishlistList({
  items,
  isPending,
  isError,
  className = "",
}: WishlistListProps) {
  if (isError)
    return (
      <StatusMessage variant="error" content="Failed to load your wishlist." />
    );

  return (
    <section className={`grow flex-1 ${className}`}>
      {isPending ? (
        <BookCardSkeleton className="lg:grid-cols-1!" />
      ) : items.length === 0 ? (
        <StatusMessage variant="empty" content="Your wishlist is empty." />
      ) : (
        <div className="space-y-6 md:space-y-8">
          {items?.map((item) => (
            <BookCard
              key={item.book.bookId}
              book={item.book}
              showMeta
              className="bg-surface"
            />
          ))}
        </div>
      )}
    </section>
  );
}
