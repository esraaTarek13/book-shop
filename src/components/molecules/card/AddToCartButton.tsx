import Button from "@/components/atoms/Button";
import { useCartActions } from "@/hooks/cart/useCartActions";
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
  const { isInCart, toggleCart, isCartPending } = useCartActions({ bookId });

  return (
    <Button
      type="button"
      variant="primary"
      aria-label={isInCart ? "Remove from cart" : "Add to cart"}
      size="sm"
      disabled={isCartPending}
      onClick={toggleCart}
      className={className}
    >
      {showLabel && (isInCart ? "Remove from Cart" : "Add to Cart")}
      {isInCart ? (
        <MdOutlineRemoveShoppingCart className="text-base md:text-lg" />
      ) : (
        <LuShoppingCart className="text-base md:text-lg" />
      )}
    </Button>
  );
}
