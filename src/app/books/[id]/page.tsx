import type { Metadata } from "next";
import BookDetailTemplate from "@/components/templates/BookDetailTemplate";

interface BookPageProps {
  params: Promise<{ id: string }>;
}

export const metadata: Metadata = {
  title: "Book Details",
};

export default async function BookPage({ params }: BookPageProps) {
  const { id } = await params;

  return <BookDetailTemplate bookId={Number(id)} />;
}
