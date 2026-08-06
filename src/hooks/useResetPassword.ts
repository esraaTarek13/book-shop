"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import { resetPasswordApi } from "@/api/authApi";
import { ApiErrorResponse } from "@/types/api";

export const useResetPassword = () => {
    const router = useRouter();

    return useMutation({
        mutationFn: resetPasswordApi,
        onSuccess: () => {
            toast.success("Password reset successfully, please login");
            router.replace("/login");
        },
        onError: (error: AxiosError<ApiErrorResponse>) => {
            const message = error.response?.data?.message || "Reset failed";
            toast.error(message);
        },
    });
};