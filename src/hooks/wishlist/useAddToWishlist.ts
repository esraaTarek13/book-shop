"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import { addToWishlist } from "@/api/wishlist";
import type { ApiErrorResponse } from "@/types/api";
import { toggleWishlistStore } from "@/store/toggleWishlistStore";

export const useAddToWishlist = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (bookId: number) => addToWishlist(bookId),
        onMutate: (bookId) => {
            toggleWishlistStore.getState().add(bookId);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["wishlist"] });
            toast.success("Book added to wishlist successfully");
        },
        onError: (error: AxiosError<ApiErrorResponse>, bookId) => {
            toggleWishlistStore.getState().remove(bookId);
            toast.error(error.response?.data?.message || "Failed to add book to wishlist");
        },
    });
};