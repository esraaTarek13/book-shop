import Text from "@/components/atoms/Text";
import type { HomeBook } from "@/types/book";
import BookCard from "../BookCard";
import BookCardSkeleton from "@/components/molecules/skeletons/BookCardSkeleton";
import StatusMessage from "@/components/atoms/StatusMessage";

interface RecommendedForYouProps {
  books: HomeBook[];
  isPending?: boolean;
  isError?: boolean;
  onAddToCart?: (bookId: number) => void;
  onToggleWishlist?: (bookId: number) => void;
  className?: string;
}

export default function RecommendedForYou({
  books,
  isPending,
  isError,
  className = "",
}: RecommendedForYouProps) {
  if (isError)
    return (
      <StatusMessage
        variant="error"
        content="Failed to load recommendations."
      />
    );

  return (
    <section className={`custom-container py-16 md:py-25 ${className}`}>
      <Text as="h2" weight="bold" size="2xl" className="mb-5 md:mb-6">
        Recomended For You
      </Text>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {isPending ? (
          <BookCardSkeleton />
        ) : books.length === 0 ? (
          <StatusMessage
            variant="empty"
            content="No recommendations available right now."
          />
        ) : (
          books.map((book) => (
            <BookCard
              key={book.bookId}
              book={book}
              author={book.author}
              className="bg-surface"
            />
          ))
        )}
      </div>
    </section>
  );
}
