"use client";

import { useState } from "react";
import { useBooks } from "./useBooks";

export function useBooksPage() {
    const [page, setPage] = useState(1);
    const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);

    const { data, isPending, isError, isFetching } = useBooks({
        page,
        ...(selectedCategoryIds.length > 0 && {
            catId: selectedCategoryIds.join(","),
        }),
    });

    const handleToggleCategory = (id: number) => {
        setPage(1);
        if (id === 0) {
            setSelectedCategoryIds([]);
            return;
        }
        setSelectedCategoryIds((prev) =>
            prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
        );
    };

    const filterProps = {
        categories: data?.categories ?? [],
        selectedCategoryIds,
        onToggleCategory: handleToggleCategory,
        totalBooksCount: data?.pagination_links.meta.total,
        isPending: isFetching,
    };

    return {
        books: data?.books ?? [],
        isPending,
        isError,
        isFetching,
        page,
        setPage,
        currentPage: data?.pagination_links.meta.current_page ?? 1,
        totalPages: data?.pagination_links.meta.last_page ?? 1,
        filterProps,
    };
}