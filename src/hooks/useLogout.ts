"use client";

import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { logoutApi } from "@/api/auth";
import { useAuthStore } from "@/store/authStore";
import { toggleWishlistStore } from "@/store/toggleWishlistStore";
import { toggleCartStore } from "@/store/toggleCartStore";

export const useLogout = () => {
    const router = useRouter();
    const queryClient = useQueryClient();
    const logout = useAuthStore((state) => state.logout);

    const clearUserData = () => {
        logout();
        toggleWishlistStore.getState().reset();
        toggleCartStore.getState().reset();
        queryClient.removeQueries({ queryKey: ["wishlist"] });
        queryClient.removeQueries({ queryKey: ["cart"] });
        router.replace("/login");
    };

    return useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            clearUserData();
            toast.success("Logged out successfully");
        },
        onError: () => {
            clearUserData();
            toast.error("Logged out, but couldn't reach the server");
        },
    });
};