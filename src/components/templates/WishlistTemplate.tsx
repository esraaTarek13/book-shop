"use client";
import { useGetWishlistData } from "@/hooks/wishlist/useGetWishlistData";
import BackgroundBanner from "../atoms/BackgroundBanner";
import { useMoveAllToCart } from "@/hooks/wishlist/useMoveAllToCart";
import Button from "../atoms/Button";
import WishlistList from "../organisms/wishlist/WishlistList";

export default function WishlistTemplate() {
  const { data, isPending, isError } = useGetWishlistData();
  const { mutate: moveAllToCart, isPending: isMovingAll } = useMoveAllToCart();

  return (
    <>
      <BackgroundBanner height="h-[20vh]" />

      <section className="custom-container py-12 md:py-16 space-y-6 md:space-y-10">
        <WishlistList
          items={data ?? []}
          isPending={isPending}
          isError={isError}
        />

        <div className="flex justify-center">
          {(data?.length ?? 0) > 0 && (
            <Button
              variant="outline"
              size="sm"
              isLoading={isMovingAll}
              onClick={() => moveAllToCart()}
              className="w-fit!"
            >
              Move All To Cart
            </Button>
          )}
        </div>
      </section>
    </>
  );
}
