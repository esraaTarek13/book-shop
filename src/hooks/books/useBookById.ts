import { useQuery } from "@tanstack/react-query";
import { getBookById } from "@/api/books";

export function useBookById(bookId: number) {
    return useQuery({
        queryKey: ["book", bookId],
        queryFn: () => getBookById(bookId),
        enabled: !!bookId,
    });
}