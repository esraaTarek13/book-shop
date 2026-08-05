"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { logoutApi } from "@/api/authApi";
import { useAuthStore } from "@/store/authStore";

export const useLogout = () => {
    const router = useRouter();
    const logout = useAuthStore((state) => state.logout);

    return useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            logout();
            toast.success("Logged out successfully");
            router.replace("/login");
        },
        onError: () => {
            logout();
            router.replace("/login");
        },
    });
};