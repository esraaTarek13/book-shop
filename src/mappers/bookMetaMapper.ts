import { BookListItem, HomeBook } from "@/types/book";
import { WishlistBook } from "@/types/wishlist";

export const getBookMetaItems = (book: HomeBook | BookListItem | WishlistBook) => [
    { label: "Author", value: book.author },
    { label: "Year", value: book.publicationYear },
];

// export const getBookDetailsMetaItems = (book: BookDetails) => [
//     { label: "Author", value: book.author },
//     { label: "Publication Year", value: book.publicationYear },
//     { label: "Book", value: `${book.bookNumber} Of ${book.totalBooks}` },
//     { label: "Pages", value: book.pages },
//     { label: "Language", value: book.language },
// ];