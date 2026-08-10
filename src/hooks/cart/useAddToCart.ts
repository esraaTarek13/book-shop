"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import { addToCart } from "@/api/cart";
import type { ApiErrorResponse } from "@/types/api";
import type { CartMutationVariables } from "@/types/cart";

export const useAddToCart = () => {
    const queryClient = useQueryClient();

    return useMutation<unknown, AxiosError<ApiErrorResponse>, CartMutationVariables>({
        mutationFn: addToCart,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
            toast.success("Book added to cart successfully");
        },
        onError: (error) => {
            const message = error.response?.data?.message || "Failed to add book to cart";
            toast.error(message);
        },
    });
};