import { BaseBook } from "./book";

export type WishlistBook = Omit<BaseBook, "reviews">;

export interface WishlistItem {
    quantity: number;
    book: WishlistBook;
}