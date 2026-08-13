import { BookListItem, HomeBook } from "@/types/book";
import { BookDetailInfo } from "@/types/book-detail";
import { WishlistBook } from "@/types/wishlist";

export const getBookMetaItems = (book: HomeBook | BookListItem | WishlistBook) => [
    { label: "Author", value: book.author },
    { label: "Year", value: book.publicationYear },
];

export const getBookDetailsMetaItems = (book: BookDetailInfo) => [
    { label: "Author", value: book.author },
    { label: "Publication Year", value: book.publicationYear },
    { label: "Book Format", value:book.bookFormat },
    { label: "Pages", value: book.numberOfPages },
    { label: "Language", value: book.lang },
];