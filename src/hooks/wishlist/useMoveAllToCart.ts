"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import { moveAllToCart } from "@/api/wishlist";
import type { ApiErrorResponse } from "@/types/api";

export const useMoveAllToCart = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: moveAllToCart,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["wishlist"] });
            queryClient.invalidateQueries({ queryKey: ["cart"] });
            toast.success("All items moved to cart");
        },
        onError: (error: AxiosError<ApiErrorResponse>) => {
            const message = error.response?.data?.message || "Failed to move items to cart";
            toast.error(message);
        },
    });
};