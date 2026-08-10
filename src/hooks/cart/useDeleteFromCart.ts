"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import { deleteFromCart } from "@/api/cart";
import type { ApiErrorResponse } from "@/types/api";

export const useDeleteFromCart = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (cartId: number) => deleteFromCart(cartId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
            toast.success("Book removed from cart");
        },
        onError: (error: AxiosError<ApiErrorResponse>) => {
            const message = error.response?.data?.message || "Failed to remove book from cart";
            toast.error(message);
        },
    });
};