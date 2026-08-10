"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import { updateCartData } from "@/api/cart";
import type { ApiErrorResponse } from "@/types/api";
import type { CartMutationVariables } from "@/types/cart";

export const useUpdateCartData = () => {
    const queryClient = useQueryClient();

    return useMutation<unknown, AxiosError<ApiErrorResponse>, CartMutationVariables>({
        mutationFn: updateCartData,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
        },
        onError: (error) => {
            const message = error.response?.data?.message || "Failed to update cart";
            toast.error(message);
        },
    });
};