import axiosInstance from "./axiosInstance"
import type { ApiResponse } from "@/types/api"
import type { WishlistItem } from "@/types/wishlist"

export const getWishlistData = async () => {
    const res = await axiosInstance.get<ApiResponse<WishlistItem[]>>("/wishlist")
    return res.data.data
}

export const addToWishlist = async (bookId: number) => {
    const res = await axiosInstance.post<ApiResponse<never[]>>(`/wishlist/store/${bookId}`)
    return res.data.message
}

export const deleteFromWishlist = async (bookId: number) => {
    const res = await axiosInstance.delete<ApiResponse<never[]>>(`/wishlist/destroy/${bookId}`)
    return res.data.message
}

export const moveAllToCart = async () => {
    const res = await axiosInstance.post<ApiResponse<never[]>>("/wishlist/move-to-cart")
    return res.data.message
}