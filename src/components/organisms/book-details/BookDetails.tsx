import BookImage from "@/components/atoms/BookImage";
import Price from "@/components/atoms/Price";
import StatusMessage from "@/components/atoms/StatusMessage";
import BookInfoHeader from "@/components/molecules/card/BookInfoHeader";
import BookMetaList from "@/components/molecules/card/BookMetaList";
import BookRating from "@/components/molecules/card/BookRating";
import BookCardSkeleton from "@/components/molecules/skeletons/BookCardSkeleton";
import { getBookDetailsMetaItems } from "@/mappers/bookMetaMapper";
import { BookDetailInfo } from "@/types/book-detail";
import { getBookCoverImage } from "@/utils/getBookCoverImage";
import CartActions from "../CartActions";
import BookAvailabilityBadges from "@/components/molecules/card/BookAvailabilityBadges";

interface BookDetailsProps {
  book?: BookDetailInfo;
  isPending: boolean;
  isError: boolean;
}
export default function BookDetails({
  book,
  isPending,
  isError,
}: BookDetailsProps) {
  if (isError)
    return (
      <StatusMessage variant="error" content="Failed to load book details." />
    );
  if (isPending) return <BookCardSkeleton className="lg:grid-cols-1!" count={1} />;
  if (!book) return <StatusMessage variant="empty" content="Book not found." />;

  return (
    <section className="flex flex-col md:flex-row gap-6 p-4 md:p-6">
      <div className="shrink-0 flex justify-center bg-surface">
        <BookImage
          src={getBookCoverImage(book)}
          alt={book.bookName}
          width={160}
          height={150}
          className="w-24 md:w-40 h-auto aspect-3/4"
        />
      </div>

      <div className="flex-1 flex flex-col gap-4 md:gap-3 justify-between min-w-0">
        <BookInfoHeader title={book.bookName} description={book.description} />
        <BookMetaList items={getBookDetailsMetaItems(book)} />

        <div className="flex flex-col lg:flex-row gap-4 justify-between lg:items-center">
          <BookRating rate={book.rate} countReview={book.countReview} />
          <BookAvailabilityBadges
            inStock={book.stock >= 1}
            freeShipping
            discountCode={book.asinCode}
            className="w-full lg:w-70 lg:justify-end"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center">
          <Price
            amount={book.final_price}
            originalAmount={book.discount > 0 ? book.price : undefined}
          />

          <CartActions showLabel bookId={book.bookId} className="md:w-fit!" />
        </div>
      </div>
    </section>
  );
}
