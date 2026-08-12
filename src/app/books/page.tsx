import type { Metadata } from "next";
import BooksTemplate from "@/components/templates/BooksTemplate";

export const metadata: Metadata = {
  title: "Books",
  description: "Browse our full collection of books across all genres.",
};

export default function BooksPage() {
  return <BooksTemplate />;
}
