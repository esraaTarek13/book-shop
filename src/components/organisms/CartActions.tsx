import AddToCartButton from "../molecules/card/AddToCartButton";
import WishlistButton from "../molecules/card/WishlistButton";


interface CartActionsProps {
  bookId: number;
  showLabel?: boolean;
  className?: string;
}

export default function CartActions({
  bookId,
  showLabel,
  className = "",
}: CartActionsProps) {
  return (
    <div className={`w-full flex items-stretch gap-2 ${className}`}>
      <AddToCartButton bookId={bookId} showLabel={showLabel} className="flex-1" />
      <WishlistButton bookId={bookId} />
    </div>
  );
}