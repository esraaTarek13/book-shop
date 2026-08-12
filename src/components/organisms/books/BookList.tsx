import StatusMessage from "@/components/atoms/StatusMessage";
import BookCardSkeleton from "@/components/molecules/skeletons/BookCardSkeleton";
import type { BookListItem } from "@/types/book";
import BookCard from "../BookCard";

interface BookListProps {
  books: BookListItem[];
  isPending: boolean;
  isError: boolean;
  className?: string;
}

export default function BookList({
  books,
  isPending,
  isError,
  className = "",
}: BookListProps) {
  if (isError)
    return <StatusMessage variant="error" content="Failed to load Books." />;
  return (
    <section className={`grow flex-1 ${className}`}>
      {isPending ? (
        <BookCardSkeleton className="lg:grid-cols-1!" />
      ) : books.length === 0 ? (
        <StatusMessage variant="empty" content="No books found." />
      ) : (
        <div className="space-y-6 md:space-y-8">
          {books?.map((book) => (
            <BookCard
              key={book.bookId}
              book={book}
              discountCode={book.asinCode}
              showMeta
              className="bg-surface"
            />
          ))}
        </div>
      )}
    </section>
  );
}
