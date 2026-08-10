import axiosInstance from "./axiosInstance"
import type { CartMutationVariables } from "@/types/cart"

export const getCartData = async () => {
    const res = await axiosInstance.get("/cart")
    return res.data.data
}

export const addToCart = async ({ bookId, qty }: CartMutationVariables) => {
    const res = await axiosInstance.post(`/cart/store/${bookId}`, { qty })
    return res.data.data
}

export const updateCartData = async ({ bookId, qty }: CartMutationVariables) => {
    const res = await axiosInstance.post(`/cart/update/${bookId}`, { qty })
    return res.data.data
}

export const deleteFromCart = async (cartId: number) => {
    const res = await axiosInstance.delete(`/cart/destroy/${cartId}`)
    return res.data.data
}