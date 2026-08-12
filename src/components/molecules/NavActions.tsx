"use client";

import { FiHeart, FiShoppingCart } from "react-icons/fi";
import IconBadgeLink from "./IconBadgeLink";

interface NavActionsProps {
  wishlistCount?: number;
  cartCount?: number;
  className?: string;
}

export default function NavActions({
  wishlistCount = 0,
  cartCount = 0,
  className = "",
}: NavActionsProps) {
  return (
    <div className={`flex items-center gap-5 lg:gap-6 ${className}`}>
      <IconBadgeLink
        icon={<FiHeart size={20} />}
        count={wishlistCount}
        label="Wishlist"
        href="/wishlist"
      />
      <IconBadgeLink
        icon={<FiShoppingCart size={20} />}
        count={cartCount}
        label="Cart"
        href="/cart"
      />
    </div>
  );
}
