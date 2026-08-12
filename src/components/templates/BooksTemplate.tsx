"use client";
import BackgroundBanner from "../atoms/BackgroundBanner";
import SearchBar from "../molecules/SearchBar";
import BookList from "../organisms/books/BookList";
import Pagination from "../molecules/Pagination";
import { useBooksPage } from "@/hooks/books/useBooksPage";
import FilterSidebar from "../organisms/books/FilterSidebar";
import FilterDrawer from "../organisms/books/FilterDrawer";

export default function BooksTemplate() {
  const {
    books,
    isPending,
    isError,
    isFetching,
    setPage,
    currentPage,
    totalPages,
    filterProps,
  } = useBooksPage();

  return (
    <>
      <BackgroundBanner height="h-[20vh]" />

      <section className="flex gap-4 md:gap-6">
        <div className="bg-surface lg:bg-transparent border-r border-card-border py-12 md:py-16 px-2 md:px-4 lg:pr-4 lg:pl-10">
          <FilterSidebar {...filterProps} />
          <FilterDrawer {...filterProps} />
        </div>

        <div className="custom-container flex-1 grow space-y-10 md:space-y-20 py-12 md:py-16">
          <div className="space-y-4 md:space-y-6">
            <SearchBar className="w-full!" />
            <BookList books={books} isPending={isPending} isError={isError} />
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setPage}
            disabled={isFetching}
          />
        </div>
      </section>
    </>
  );
}
