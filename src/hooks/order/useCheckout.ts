"use client";

import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import { checkoutApi } from "@/api/order";
import type { ApiErrorResponse } from "@/types/api";

export const useCheckout = () => {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: checkoutApi,
        onSuccess: () => {
            toast.success("Order placed successfully");
            queryClient.invalidateQueries({ queryKey: ["order"] });
            queryClient.invalidateQueries({ queryKey: ["cart"] });
            router.push("/books");
        },
        onError: (error: AxiosError<ApiErrorResponse>) => {
            const message = error.response?.data?.message || "Failed to place order";
            toast.error(message);
        },
    });
};