import axiosInstance from "./axiosInstance"
import type { ApiResponse } from "@/types/api"
import type { CartData, CartItem, CartMutationVariables } from "@/types/cart"

export const getCartData = async () => {
    const res = await axiosInstance.get<ApiResponse<CartData>>("/cart")
    return res.data.data
}

export const addToCart = async ({ bookId, qty }: CartMutationVariables) => {
    const res = await axiosInstance.post<ApiResponse<CartItem>>(`/cart/store/${bookId}`, { qty })
    return res.data.data
}

export const updateCartData = async ({ bookId, qty }: CartMutationVariables) => {
    const res = await axiosInstance.post<ApiResponse<CartItem>>(`/cart/update/${bookId}`, { qty })
    return res.data.data
}

export const deleteFromCart = async (cartId: number) => {
    const res = await axiosInstance.delete<ApiResponse<never[]>>(`/cart/destroy/${cartId}`)
    return res.data.message
}