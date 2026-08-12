"use client";

import { useQuery } from "@tanstack/react-query";
import { getCartData } from "@/api/cart";
import { useAuthStore } from "@/store/authStore";

export const useGetCartData = () => {
  const isAuthenticated = useAuthStore((s) => !!s.user);
  const hasHydrated = useAuthStore((s) => s.hasHydrated);

  return useQuery({
    queryKey: ["cart"],
    queryFn: getCartData,
    enabled: hasHydrated && isAuthenticated,
  });
};