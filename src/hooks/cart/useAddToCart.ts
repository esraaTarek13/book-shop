"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import { addToCart } from "@/api/cart";
import type { ApiErrorResponse } from "@/types/api";
import type { CartMutationVariables } from "@/types/cart";
import { toggleCartStore } from "@/store/toggleCartStore";

export const useAddToCart = () => {
    const queryClient = useQueryClient();

    return useMutation<unknown, AxiosError<ApiErrorResponse>, CartMutationVariables>({
        mutationFn: addToCart,
        onMutate: ({ bookId }) => {
            toggleCartStore.getState().add(bookId);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
            toast.success("Book added to cart successfully");
        },
        onError: (error, { bookId }) => {
            toggleCartStore.getState().remove(bookId);
            toast.error(error.response?.data?.message || "Failed to add book to cart");
        },
    });
};