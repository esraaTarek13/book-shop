"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import { updateWishlistData } from "@/api/wishlist";
import type { ApiErrorResponse } from "@/types/api";

export const useUpdateWishlistData = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (bookId: number) => updateWishlistData(bookId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["wishlist"] });
        },
        onError: (error: AxiosError<ApiErrorResponse>) => {
            const message = error.response?.data?.message || "Failed to update wishlist";
            toast.error(message);
        },
    });
}