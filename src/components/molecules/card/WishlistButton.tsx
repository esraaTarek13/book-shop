"use client";

import IconButton from "@/components/atoms/IconButton";
import { useRequireAuth } from "@/hooks/useRequireAuth";
import AuthRequiredModal from "@/components/molecules/AuthRequiredModal";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { toggleWishlistStore } from "@/store/toggleWishlistStore";
import { useAddToWishlist } from "@/hooks/wishlist/useAddToWishlist";
import { useDeleteFromWishlist } from "@/hooks/wishlist/useDeleteFromWishlist";

interface WishlistButtonProps {
  bookId: number;
}

export default function WishlistButton({ bookId }: WishlistButtonProps) {
  const { showAuthModal, setShowAuthModal, requireAuth } = useRequireAuth();

  const isInWishlist = toggleWishlistStore((s) => s.ids.includes(bookId));
  const { mutate: addToWishlist, isPending: isAdding } = useAddToWishlist();
  const { mutate: deleteFromWishlist, isPending: isRemoving } = useDeleteFromWishlist();

  const toggleWishlist = () =>
    isInWishlist ? deleteFromWishlist(bookId) : addToWishlist(bookId);

  return (
    <>
      <IconButton
        variant="outline"
        aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
        disabled={isAdding || isRemoving}
        onClick={() => requireAuth(toggleWishlist)}
        icon={
          isInWishlist ? (
            <IoHeartSharp className="text-text-accent h-full" />
          ) : (
            <IoHeartOutline />
          )
        }
      />

      <AuthRequiredModal open={showAuthModal} onOpenChange={setShowAuthModal} />
    </>
  );
}
