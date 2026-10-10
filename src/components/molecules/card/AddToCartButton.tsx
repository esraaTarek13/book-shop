"use client";

import Button from "@/components/atoms/Button";
import { useRequireAuth } from "@/hooks/useRequireAuth";
import AuthRequiredModal from "@/components/molecules/AuthRequiredModal";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { toggleCartStore } from "@/store/toggleCartStore";
import { useAddToCart } from "@/hooks/cart/useAddToCart";
import { useDeleteFromCart } from "@/hooks/cart/useDeleteFromCart";

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

  const isInCart = toggleCartStore((s) => s.ids.includes(bookId));
  const { mutate: addToCart, isPending: isAdding } = useAddToCart();
  const { mutate: deleteFromCart, isPending: isRemoving } = useDeleteFromCart();

  const toggleCart = () =>
    isInCart ? deleteFromCart(bookId) : addToCart({ bookId, qty: 1 });


  return (
    <>
      <Button
        type="button"
        variant="primary"
        aria-label={isInCart ? "Remove from cart" : "Add to cart"}
        size="sm"
        disabled={isAdding || isRemoving}
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
