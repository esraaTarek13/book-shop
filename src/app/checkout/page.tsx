import CheckoutTemplate from "@/components/templates/CheckoutTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Review your order and complete your purchase.",
};

export default function CheckoutPage() {
  return <CheckoutTemplate />;
}