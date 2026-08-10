import IconButton from "@/components/atoms/IconButton";
import { useWishlistActions } from "@/hooks/wishlist/useWishlistActions";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

interface WishlistButtonProps {
  bookId: number;
}

export default function WishlistButton({ bookId }: WishlistButtonProps) {
  const { isInWishlist, toggleWishlist, isWishlistPending } =
    useWishlistActions(bookId);

  return (
    <IconButton
      variant="outline"
      aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
      disabled={isWishlistPending}
      onClick={toggleWishlist}
      icon={
        isInWishlist ? (
          <IoHeartSharp className="text-text-accent h-full" />
        ) : (
          <IoHeartOutline />
        )
      }
    />
  );
}
