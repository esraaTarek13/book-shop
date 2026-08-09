export interface BookReview {
    id?: number;
    comment?: string;
    rating?: number;
}

export interface BaseBook {
    bookId: number;
    bookName: string;
    author: string;
    price: number;
    discount: number;
    final_price: number;
    description: string;
    rate: number | null;
    stock: number;
    numberOfPages: number;
    countReview: number;
    publicationYear: number;
    lang: string;
    asinCode: string;
    bookFormat: string;
    catId: number;
    reviews: BookReview[];
}

export type HomeBook = BaseBook;

export interface BookImage {
    id: number;
    book_id: number;
    image: string;
    type: "main" | "random" | string;
    created_at: string;
    updated_at: string;
}

export interface BookListItem extends BaseBook {
    bookImage: BookImage[];
    category_name: string;
}