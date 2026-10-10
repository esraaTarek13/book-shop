"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import { deleteFromCart } from "@/api/cart";
import type { ApiErrorResponse } from "@/types/api";
import { toggleCartStore } from "@/store/toggleCartStore";

export const useDeleteFromCart = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (bookId: number) => deleteFromCart(bookId),
        onMutate: (bookId) => {
            toggleCartStore.getState().remove(bookId);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
            toast.success("Book removed from cart");
        },
        onError: (error: AxiosError<ApiErrorResponse>, bookId) => {
            toggleCartStore.getState().add(bookId);
            toast.error(error.response?.data?.message || "Failed to remove book from cart");
        },
    });
};