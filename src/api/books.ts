import { BooksPageData } from '@/types/books';
import axiosInstance from "./axiosInstance";
import type { ApiResponse } from "@/types/api";
import { BookDetailData } from '@/types/book-detail';


export const getBooks = async (params?: Record<string, string | number>) => {
    const res = await axiosInstance.get<ApiResponse<BooksPageData>>("/book", { params });
    return res.data.data;
};

export const getBookById = async (bookId: number) => {
    const res = await axiosInstance.get<ApiResponse<BookDetailData>>(`/book/${bookId}`);
    return res.data.data;
};