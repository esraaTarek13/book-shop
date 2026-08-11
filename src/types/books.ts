import type { BookListItem } from "./book";
import type { Category } from "./category";
import type { Pagination } from "./pagination";

export interface BooksPageData {
    books: BookListItem[];
    categories: Category[];
    pagination_links: Pagination;
}

