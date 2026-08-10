import axiosInstance from "./axiosInstance"

export const getWishlistData = async () => {
    const res = await axiosInstance.get("/wishlist")
    return res.data.data
}

export const addToWishlist = async (bookId: number) => {
    const res = await axiosInstance.post(`/wishlist/store/${bookId}`)
    return res.data.data
}

export const updateWishlistData = async (bookId: number) => {
    const res = await axiosInstance.put(`/wishlist/update/${bookId}`)
    return res.data.data
}

export const deleteFromWishlist = async (bookId: number) => {
    const res = await axiosInstance.delete(`/wishlist/destroy/${bookId}`)
    return res.data.data
}

export const moveAllToCart = async () => {
    const res = await axiosInstance.post("/wishlist/move-to-cart")
    return res.data.data
}