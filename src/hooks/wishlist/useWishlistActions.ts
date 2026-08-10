import { WishlistItem } from "@/types/wishlist";
import { useAddToWishlist } from "./useAddToWishlist";
import { useDeleteFromWishlist } from "./useDeleteFromWishlist";
import { useGetWishlistData } from "./useGetWishlistData";

export const useWishlistActions = (bookId: number) => {
    const { data } = useGetWishlistData();
    const { mutate: addToWishlist, isPending: isAdding } =
        useAddToWishlist();
    const { mutate: deleteFromWishlist, isPending: isRemoving } =
        useDeleteFromWishlist();

    const wishlistItems: WishlistItem[] = data ?? [];
    const isInWishlist = wishlistItems.some((item) => item.book.bookId === bookId)

    const toggleWishlist = () => {
        if (isInWishlist) {
            deleteFromWishlist(bookId)
        } else {
            addToWishlist(bookId)
        }
    }

    return {
        isInWishlist,
        toggleWishlist,
        isWishlistPending: isAdding || isRemoving,
    }
}