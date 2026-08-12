import { useQuery } from "@tanstack/react-query";
import { getBooks } from "@/api/books";

export function useBooks(params?: Record<string, string | number>) {
    return useQuery({
        queryKey: ["books", params],
        queryFn: () => getBooks(params),
    });
}