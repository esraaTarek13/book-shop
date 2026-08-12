import { CartItem } from "@/types/cart";
import Link from "next/link";
import BookImage from "../atoms/BookImage";
import { getBookCoverImage } from "@/utils/getBookCoverImage";
import BookInfoHeader from "../molecules/card/BookInfoHeader";
import Text from "../atoms/Text";
import QuantitySelector from "../molecules/card/QuantitySelector";
import Price from "../atoms/Price";
import DeleteButton from "../molecules/card/DeleteButton";

interface CartCardProps {
  book: CartItem;
  showAsinCode?: boolean;
  showDeleteButton?: boolean;
  description?: string;
  className?: string;
}

export default function CartCard({
  book,
  description,
  showAsinCode,
  showDeleteButton = true,
  className = "",
}: CartCardProps) {
  const bookDetails = book.bookDetails;

  return (
    <div className={`bg-surface flex flex-col md:flex-row gap-6 p-4 md:p-6`}>
      <Link
        href={`/books/${book.bookId}`}
        className="shrink-0 flex justify-center bg-background"
      >
        <BookImage
          src={getBookCoverImage(bookDetails)}
          alt={bookDetails.bookName}
          width={120}
          height={90}
          className="w-24 md:w-30 h-auto aspect-3/4"
        />
      </Link>

      <div
        className={`flex-1 flex flex-col gap-3 justify-between min-w-0 ${className}`}
      >
        <Link href={`/books/${book.bookId}`}>
          <BookInfoHeader
            title={bookDetails.bookName}
            author={bookDetails.author}
            description={description}
          />
        </Link>

        {showAsinCode && (
          <Text
            as="p"
            size="sm"
            weight="bold"
            color="muted"
            className="uppercase"
          >
            Asin:{" "}
            <Text as="span" size="sm" color="muted">
              {bookDetails.asinCode}
            </Text>
          </Text>
        )}

        <div className="flex items-center justify-between gap-4 flex-wrap">
          <QuantitySelector
            bookId={book.bookId}
            qty={book.qty}
            max={bookDetails.stock}
          />

          <div className="flex items-center gap-6">
            <Price amount={book.lineTotal} />

            {showDeleteButton && <DeleteButton cartId={book.cartId} />}
          </div>
        </div>
      </div>
    </div>
  );
}
