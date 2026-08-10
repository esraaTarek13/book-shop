import { BookListItem, HomeBook } from "@/types/book";
import BookImage from "../atoms/BookImage";
import Link from "next/link";
import { getBookCoverImage } from "@/utils/getBookCoverImage";
import BookInfoHeader from "../molecules/card/BookInfoHeader";
import BookRating from "../molecules/card/BookRating";
import Price from "../atoms/Price";
import BookMetaList from "../molecules/card/BookMetaList";
import { getBookMetaItems } from "@/mappers/bookMetaMapper";
import CartActions from "./CartActions";

interface BookCardProps {
  book: HomeBook | BookListItem;
  discountCode?: string;
  author?: string;
  showMeta?: boolean;
  className?: string;
}

export default function BookCard({
  book,
  discountCode,
  showMeta = false,
  author,
  className = "",
}: BookCardProps) {
  return (
    <div className={`flex flex-col md:flex-row gap-6 p-4 md:p-6 ${className}`}>
      <Link
        href={`/books/${book.bookId}`}
        className="shrink-0 flex justify-center bg-background"
      >
        <BookImage
          src={getBookCoverImage(book)}
          alt={book.bookName}
          width={179}
          height={150}
          className="w-24 md:w-40 h-auto aspect-3/4"
        />
      </Link>

      <div className="flex-1 flex flex-col gap-3 justify-between min-w-0">
        <Link href={`/books/${book.bookId}`}>
          <BookInfoHeader
            title={book.bookName}
            author={author}
            description={book.description}
            discountCode={discountCode}
          />
        </Link>

        <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
          <BookRating rate={book.rate} countReview={book.countReview} />

          <Price amount={book.final_price} />
        </div>

        {showMeta && <BookMetaList items={getBookMetaItems(book)} />}

        <CartActions showLabel bookId={book.bookId} />
      </div>
    </div>
  );
}
