"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import { loginApi } from "@/api/authApi";
import { useAuthStore } from "@/store/authStore";
import { ApiErrorResponse } from "@/types/auth";

export const useLogin = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const setUser = useAuthStore((state) => state.setUser);

    const redirectTo = searchParams.get("redirectTo") || "/";

    return useMutation({
        mutationFn: loginApi,
        onSuccess: (data) => {
            setUser(data.user, data.token);
            toast.success("Logged in successfully");
            router.replace(redirectTo);
        },
        onError: (error: AxiosError<ApiErrorResponse>) => {
            const message = error.response?.data?.message || "Login failed";
            toast.error(message);
        },
    });
};