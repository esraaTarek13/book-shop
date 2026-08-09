import type { HomeBook } from "./book";

export interface HomeData {
    best_selling_image: string[];
    recommended: HomeBook[];
    flashSales: HomeBook[];
}