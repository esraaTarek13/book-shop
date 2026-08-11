import type { BaseBook, BookImage } from "./book";

export type CartBookDetails = Omit<BaseBook, "reviews"> & {
  bookImage: BookImage[];
};

export interface CartItem {
  cartId: number;
  bookId: number;
  qty: number;
  unitPrice: number;
  discount: number;
  finalPrice: number;
  lineTotal: number;
  bookDetails: CartBookDetails;
}

export interface CartData {
  cart: CartItem[];
  subTotal: number;
  tax: number;
  total: number;
}

export interface CartMutationVariables {
  bookId: number;
  qty: number;
}