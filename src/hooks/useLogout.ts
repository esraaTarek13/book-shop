"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { logoutApi } from "@/api/auth";
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
            toast.error("Logged out, but couldn't reach the server");
            router.replace("/login");
        },
    });
};