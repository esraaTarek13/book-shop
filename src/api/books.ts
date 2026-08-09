import axiosInstance from "./axiosInstance";
import type { BooksPageData } from "@/types/books-page";

export const getBooks = async (params?: Record<string, string | number>): Promise<BooksPageData> => {
    const res = await axiosInstance.get("/book", { params });
    return res.data.data;
};