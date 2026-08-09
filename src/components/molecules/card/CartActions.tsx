import Button from "@/components/atoms/Button";
import IconButton from "@/components/atoms/IconButton";
import type { ReactNode } from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";

interface CartActionsProps {
  label?: ReactNode;
  isAddingToCart?: boolean;
  onAddToCart?: () => void;
  showWishlist?: boolean;
  isWishlisted?: boolean;
  isAddingToWishlist?: boolean;
  onToggleWishlist?: () => void;
  className?: string;
}

export default function CartActions({
  label,
  isAddingToCart = false,
  onAddToCart,
  showWishlist = false,
  isWishlisted = false,
  isAddingToWishlist = false,
  onToggleWishlist,
  className = "",
}: CartActionsProps) {
  return (
    <div className={`w-full flex items-stretch gap-2 ${className}`}>
      <Button
        type="button"
        variant="primary"
        size="sm"
        disabled={isAddingToCart}
        onClick={onAddToCart}
      >
        {label} <LuShoppingCart className="text-base md:text-lg" />
      </Button>

      {showWishlist && (
        <IconButton
          variant="outline"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          disabled={isAddingToWishlist}
          onClick={onToggleWishlist}
          icon={
            isWishlisted ? (
              <IoHeartSharp className="text-text-accent h-full" />
            ) : (
              <IoHeartOutline />
            )
          }
        />
      )}
    </div>
  );
}
