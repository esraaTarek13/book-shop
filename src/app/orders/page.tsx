import OrdersTemplate from "@/components/templates/OrdersTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order History",
  description: "View your past orders and their status.",
};

export default function OrdersPage() {
  return <OrdersTemplate />;
}