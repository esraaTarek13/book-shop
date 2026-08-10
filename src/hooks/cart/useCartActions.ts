import { CartItem } from "@/types/cart";
import { useAddToCart } from "./useAddToCart";
import { useDeleteFromCart } from "./useDeleteFromCart";
import { useGetCartData } from "./useGetCartData";

interface UseCartActionsParams {
    bookId: number;
    qty?: number;
}

export const useCartActions = ({ bookId, qty = 1 }: UseCartActionsParams) => {
    const { data } = useGetCartData();
    const { mutate: addToCart, isPending: isAdding } = useAddToCart();
    const { mutate: deleteFromCart, isPending: isRemoving } = useDeleteFromCart();

    const cartItems: CartItem[] = data?.cart ?? [];
    const cartItem = cartItems.find((item) => item.bookId === bookId);
    const isInCart = Boolean(cartItem);

    const toggleCart = () => {
        if (isInCart && cartItem) {
            deleteFromCart(cartItem.cartId);
        } else {
            addToCart({ bookId, qty });
        }
    };

    return {
        isInCart,
        toggleCart,
        isCartPending: isAdding || isRemoving,
    };
};