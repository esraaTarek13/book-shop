import type { BaseBook, BookImage } from "./book";

export type BookDetailInfo = Omit<BaseBook, "reviews"> & {
    bookImage: BookImage[];
};

export type RecommendedBook = Omit<BaseBook, "reviews"> & {
    category_name: string;
};

export interface BookDetailData {
    book: BookDetailInfo;
    reviews: unknown[];
    recommendedBooks: RecommendedBook[];
}