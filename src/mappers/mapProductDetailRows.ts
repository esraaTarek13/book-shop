import type { BookDetailInfo } from "@/types/book-detail";

export interface ProductDetailRowItem {
    label: string;
    value: string | number;
}

export function mapProductDetailRows(book: BookDetailInfo): ProductDetailRowItem[] {
    return [
        { label: "Book Title", value: book.bookName },
        { label: "Author", value: book.author },
        { label: "Publication Date", value: book.publicationYear },
        { label: "ASIN", value: book.asinCode },
        { label: "Language", value: book.lang },
        { label: "Pages", value: book.numberOfPages },
        { label: "Book Format", value: book.bookFormat },
    ];
}