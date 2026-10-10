import IconButton from "@/components/atoms/IconButton";
import { useDeleteFromCart } from "@/hooks/cart/useDeleteFromCart";
import { FaTrashAlt } from "react-icons/fa";

interface DeleteButtonProps {
  bookId: number;
}

export default function DeleteButton({ bookId }: DeleteButtonProps) {
  const { mutate: deleteFromCart, isPending } = useDeleteFromCart();

  return (
    <IconButton
      variant="outline"
      aria-label="Remove from cart"
      disabled={isPending}
      onClick={() => deleteFromCart(bookId)}
      icon={<FaTrashAlt />}
      className="py-2 md:py-3"
    />
  );
}