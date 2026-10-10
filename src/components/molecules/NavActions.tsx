"use client";

import { FiHeart, FiShoppingCart } from "react-icons/fi";
import IconBadgeLink from "./IconBadgeLink";
import { toggleWishlistStore } from "@/store/toggleWishlistStore";
import { toggleCartStore } from "@/store/toggleCartStore";

interface NavActionsProps {
  className?: string;
}

export default function NavActions({ className = "" }: NavActionsProps) {
  const wishlistCount = toggleWishlistStore((s) => s.ids.length);
  const cartCount = toggleCartStore((s) => s.ids.length);

  return (
    <div className={`flex items-center gap-5 lg:gap-6 ${className}`}>
      <IconBadgeLink
        icon={<FiHeart size={20} />}
        count={wishlistCount}
        label="Wishlist"
        href="/wishlist"
        iconColor="text-text md:text-text-light"
      />
      <IconBadgeLink
        icon={<FiShoppingCart size={20} />}
        count={cartCount}
        label="Cart"
        href="/cart"
        iconColor="text-text md:text-text-light"
      />
    </div>
  );
}
