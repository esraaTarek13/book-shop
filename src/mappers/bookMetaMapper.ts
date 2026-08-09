import { BookListItem, HomeBook } from "@/types/book";

export const getBookMetaItems = (book: HomeBook | BookListItem) => [
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