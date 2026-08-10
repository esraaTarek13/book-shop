import { HomeBook } from "@/types/book";
import Link from "next/link";
import BookImage from "../atoms/BookImage";
import { getBookCoverImage } from "@/utils/getBookCoverImage";
import BookInfoHeader from "../molecules/card/BookInfoHeader";
import BookRating from "../molecules/card/BookRating";
import Price from "../atoms/Price";
import StockProgress from "../molecules/card/StockProgress";
import AddToCartButton from "../molecules/card/AddToCartButton";

interface BookPromoCardProps {
  book: HomeBook;
  className?: string;
}
export default function BookPromoCard({
  book,
  className = "",
}: BookPromoCardProps) {
  return (
    <div
      className={`bg-card flex flex-col md:flex-row gap-6 p-4 md:p-6 rounded-sm overflow-hidden ${className}`}
    >
      <Link
        href={`/books/${book.bookId}`}
        className="shrink-0 flex justify-center bg-card-border rounded-sm overflow-hidden"
      >
        <BookImage
          src={getBookCoverImage(book)}
          alt={book.bookName}
          width={179}
          height={150}
          className="w-24 md:w-40 lg:w-44.75 h-auto aspect-3/4"
        />
      </Link>

      <div className="flex-1 flex flex-col gap-3 justify-between min-w-0">
        <Link href={`/books/${book.bookId}`}>
          <BookInfoHeader
            title={book.bookName}
            author={book.author}
            titleColor="light"
          />
        </Link>

        <BookRating
          rate={book.rate}
          countReview={book.countReview}
          textColor="lightMuted"
        />

        <Price
          amount={book.final_price}
          originalAmount={book.discount > 0 ? book.price : undefined}
          amountColor="text-text-light"
          originalAmountColor="text-text-light-50"
        />

        <StockProgress stock={book.stock} totalStock={100} />

        <AddToCartButton className="w-fit! ml-auto!" bookId={book.bookId} />
      </div>
    </div>
  );
}
