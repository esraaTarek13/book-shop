import type { BaseBook, BookImage } from "./book";

export interface OrderBookDetails extends BaseBook {
    bookImage: BookImage[];
}

export interface OrderBookItem {
    cartId: number;
    bookId: number;
    qty: number;
    unitPrice: number;
    discount: number;
    finalPrice: number;
    lineTotal: number;
    bookDetails: OrderBookDetails;
}

export interface OrderDetailsResponse {
    books: OrderBookItem[];
    subTotal: number;
    tax: number;
    total: number;
    coupon_code: string | null;
}

export interface ApplyCouponValues {
    code: string;
    coupon_value?: string | number;
}