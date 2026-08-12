"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import { applyCouponApi } from "@/api/order";
import { ApiErrorResponse } from "@/types/api";

export const useApplyCoupon = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: applyCouponApi,
        onSuccess: () => {
            toast.success("Coupon applied successfully");
            queryClient.invalidateQueries({ queryKey: ["order"] });
        },
        onError: (error: AxiosError<ApiErrorResponse>) => {
            const message = error.response?.data?.message || "Failed to apply coupon";
            toast.error(message);
        },
    });
};