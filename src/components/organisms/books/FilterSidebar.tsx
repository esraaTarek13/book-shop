import { LuSlidersHorizontal } from "react-icons/lu";
import Text from "@/components/atoms/Text";
import { FilterProps } from "@/types/category";
import FilterContent from "./FilterContent";

interface FilterSidebarProps extends FilterProps {
  className?: string;
}

export default function FilterSidebar({
  categories,
  selectedCategoryIds,
  onToggleCategory,
  totalBooksCount,
  className = "",
}: FilterSidebarProps) {
  return (
    <aside className={`hidden lg:block space-y-6 w-70 ${className}`}>
      <div className="flex items-center gap-2">
        <LuSlidersHorizontal className="text-text text-lg shrink-0" />
        <Text as="span" weight="semibold" size="lg">
          Filter
        </Text>
      </div>

      <FilterContent
        categories={categories}
        selectedCategoryIds={selectedCategoryIds}
        onToggleCategory={onToggleCategory}
        totalBooksCount={totalBooksCount}
      />
    </aside>
  );
}
