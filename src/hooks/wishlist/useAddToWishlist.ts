"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import { addToWishlist } from "@/api/wishlist";
import type { ApiErrorResponse } from "@/types/api";

export const useAddToWishlist = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (bookId: number) => addToWishlist(bookId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["wishlist"] });
            toast.success("Book added to wishlist successfully");
        },
        onError: (error: AxiosError<ApiErrorResponse>) => {
            const message = error.response?.data?.message || "Failed to add book to wishlist";
            toast.error(message);
        },
    });
};