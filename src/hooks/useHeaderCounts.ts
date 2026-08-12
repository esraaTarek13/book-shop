"use client";

import { useGetWishlistData } from "@/hooks/wishlist/useGetWishlistData";
import { useGetCartData } from "@/hooks/cart/useGetCartData";

export const useHeaderCounts = () => {
    const { data: wishlistData } = useGetWishlistData();
    const { data: cartData } = useGetCartData();

    return {
        wishlistCount: wishlistData?.length ?? 0,
        cartCount: cartData?.cart?.length ?? 0,
    };
};