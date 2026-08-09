import Text from "@/components/atoms/Text";
import BookCardSkeleton from "@/components/molecules/skeletons/BookCardSkeleton";
import { HomeBook } from "@/types/book";
import BookPromoCard from "../BookPromoCard";
import ArrowCarousel from "@/components/molecules/card/ArrowCarousel";
import StatusMessage from "@/components/atoms/StatusMessage";

interface FlashSaleProps {
  books: HomeBook[];
  isPending?: boolean;
  isError?: boolean;
  onAddToCart?: (bookId: number) => void;
  className?: string;
}

export default function FlashSale({
  books,
  isPending,
  isError,
  className = "",
}: FlashSaleProps) {
  if (isError)
    return (
      <StatusMessage variant="error" content="Failed to load Flash Sale." />
    );

  return (
    <section className={`custom-container py-16 md:py-25 ${className}`}>
      <div className="mb-8 md:mb-10 space-y-2">
        <Text as="h2" weight="bold" size="2xl">
          Flash Sale
        </Text>
        <Text as="p" size="base" color="muted" className="max-w-130">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
          leo.
        </Text>
      </div>

      {isPending ? (
        <BookCardSkeleton />
      ) : books.length === 0 ? (
        <StatusMessage
          variant="empty"
          content=" No flash sale offers right now."
        />
      ) : (
        <ArrowCarousel>
          {books.map((book) => (
            <BookPromoCard key={book.bookId} book={book} />
          ))}
        </ArrowCarousel>
      )}
    </section>
  );
}
