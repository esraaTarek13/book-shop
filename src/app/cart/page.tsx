import type { Metadata } from "next";
import CartTemplate from "@/components/templates/CartTemplate";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "Review the books in your cart before checkout.",
};

export default function CartPage() {
  return <CartTemplate />;
}
