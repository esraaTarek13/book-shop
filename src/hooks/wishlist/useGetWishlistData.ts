"use client";

import { useQuery } from "@tanstack/react-query";
import { getWishlistData } from "@/api/wishlist";

export const useGetWishlistData = () => {
    return useQuery({
        queryKey: ["wishlist"],
        queryFn: getWishlistData,
    });
};