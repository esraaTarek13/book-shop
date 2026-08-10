import { BaseBook } from "./book";

export interface CartItem {
  cartId: number;
  bookId: number;
  qty: number;
  unitPrice: number;
  discount: number;
  finalPrice: number;
  lineTotal: number;
  bookDetails: Omit<BaseBook, "reviews">;
}

export interface CartData {
  cart: CartItem[];
  subTotal: number;
  tax: number;
  total: number;
}

export interface CartResponse {
  data: CartData;
  statusCode: number;
  message: string;
  errors: string[];
}

export interface CartMutationVariables {
  bookId: number;
  qty: number;
}