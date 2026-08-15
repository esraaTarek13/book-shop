"use client";

import Button from "@/components/atoms/Button";
import { useCartActions } from "@/hooks/cart/useCartActions";
import { useRequireAuth } from "@/hooks/useRequireAuth";
import AuthRequiredModal from "@/components/molecules/AuthRequiredModal";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

interface AddToCartButtonProps {
  bookId: number;
  showLabel?: boolean;
  className?: string;
}

export default function AddToCartButton({
  bookId,
  showLabel,
  className = "",
}: AddToCartButtonProps) {
  const { showAuthModal, setShowAuthModal, requireAuth } = useRequireAuth();
  const { isInCart, toggleCart, isCartPending } = useCartActions({ bookId });

  return (
    <>
      <Button
        type="button"
        variant="primary"
        aria-label={isInCart ? "Remove from cart" : "Add to cart"}
        size="sm"
        disabled={isCartPending}
        onClick={() => requireAuth(toggleCart)}
        className={`min-w-fit ${className}`}
      >
        {showLabel && (isInCart ? "Remove from Cart" : "Add to Cart")}
        {isInCart ? (
          <MdOutlineRemoveShoppingCart className="text-base md:text-lg" />
        ) : (
          <LuShoppingCart className="text-base md:text-lg" />
        )}
      </Button>

      <AuthRequiredModal open={showAuthModal} onOpenChange={setShowAuthModal} />
    </>
  );
}
