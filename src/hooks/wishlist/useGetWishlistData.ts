"use client";

import { useQuery } from "@tanstack/react-query";
import { getWishlistData } from "@/api/wishlist";
import { useAuthStore } from "@/store/authStore";

export const useGetWishlistData = (options?: { refetchOnMount?: boolean | "always" }) => {
    const isAuthenticated = useAuthStore((s) => !!s.user);
    const hasHydrated = useAuthStore((s) => s.hasHydrated);

    return useQuery({
        queryKey: ["wishlist"],
        queryFn: getWishlistData,
        enabled: hasHydrated && isAuthenticated,
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: options?.refetchOnMount ?? false,
    });
};