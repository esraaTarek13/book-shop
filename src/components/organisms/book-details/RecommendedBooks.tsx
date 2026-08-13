import StatusMessage from "@/components/atoms/StatusMessage";
import ArrowCarousel from "@/components/molecules/card/ArrowCarousel";
import { RecommendedBook } from "@/types/book-detail";
import BookPromoCard from "../BookPromoCard";

interface RecommendedBooksProps {
  books: RecommendedBook[];
}

export default function RecommendedBooks({ books }: RecommendedBooksProps) {
  return (
    <>
      {books.length === 0 ? (
        <StatusMessage
          variant="empty"
          content="No recommendations available."
        />
      ) : (
        <ArrowCarousel>
          {books.map((book) => (
            <BookPromoCard key={book.bookId} book={book} />
          ))}
        </ArrowCarousel>
      )}
    </>
  );
}
