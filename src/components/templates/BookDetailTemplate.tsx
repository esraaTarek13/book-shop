"use client";
import { useBookById } from "@/hooks/books/useBookById";
import BackgroundBanner from "../atoms/BackgroundBanner";
import BookDetails from "../organisms/book-details/BookDetails";
import ProductTabs from "../organisms/book-details/ProductTabs";

interface BookDetailTemplateProps {
  bookId: number;
}
export default function BookDetailTemplate({
  bookId,
}: BookDetailTemplateProps) {
  const { data, isPending, isError, isFetching } = useBookById(bookId);

  return (
    <>
      <BackgroundBanner height="h-[20vh]" />

      <div className="custom-container py-6 md:py-8 space-y-15">
        <BookDetails
          book={data?.book}
          isPending={isPending}
          isError={isError}
        />

        {data && <ProductTabs book={data}  isFetching={isFetching} />}
      </div>
    </>
  );
}
