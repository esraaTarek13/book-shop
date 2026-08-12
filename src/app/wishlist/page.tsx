import type { Metadata } from "next";
import WishlistTemplate from "@/components/templates/WishlistTemplate";

export const metadata: Metadata = {
  title: "Wishlist",
  description: "View and manage your favorite books saved for later.",
};

export default function WishlistPage() {
  return <WishlistTemplate />;
}
