import type { HomeBook, BookListItem } from "@/types/book";
import { WishlistBook } from "@/types/wishlist";

export const BOOK_PLACEHOLDER_IMAGE = "/images/book-placeholder.jpg";

export function getBookCoverImage(book: HomeBook | BookListItem | WishlistBook): string {
    if ("bookImage" in book && book.bookImage.length > 0) {
        return book.bookImage[0].image;
    }

    return BOOK_PLACEHOLDER_IMAGE;
}