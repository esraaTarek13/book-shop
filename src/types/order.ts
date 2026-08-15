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

export interface CheckoutValues {
    name: string;
    phone: string;
    email: string;
    city: string;
    state: string;
    zip: string;
    address: string;
    payment_method: number;
    government: string;
    note?: string;
    coupon_code?: string;
    coupon_value?: number;
}

export interface CheckoutResponse {
    user_id: number;
    name: string;
    phone: string;
    email: string;
    address: string;
    payment_method: number;
    government: string;
    code: string;
    tax: number;
    total: number;
}

export interface PaymentMethod {
    value: number;
    label: string;
}