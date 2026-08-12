export interface Category {
    id: number;
    categoryName: string;
    image: string;
}

export interface FilterProps {
  categories: Category[];
  selectedCategoryIds: number[];
  onToggleCategory: (id: number) => void;
  totalBooksCount?: number;
  isPending?: boolean;
}