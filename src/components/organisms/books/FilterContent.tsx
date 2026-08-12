"use client";

import type { FilterProps } from "@/types/category";
import Checkbox from "@/components/atoms/Checkbox";
import CollapsibleSection from "@/components/molecules/CollapsibleSection";
import CategoryFilterSkeleton from "@/components/molecules/skeletons/CategoryFilterSkeleton";

export default function FilterContent({
  categories,
  selectedCategoryIds,
  onToggleCategory,
  totalBooksCount,
  isPending,
}: FilterProps) {
  if (isPending) return <CategoryFilterSkeleton />;

  return (
    <CollapsibleSection title="Categories">
      <div className="space-y-3">
        <Checkbox
          id="category-all"
          label="All Categories"
          count={totalBooksCount}
          checked={selectedCategoryIds.length === 0}
          onChange={() => onToggleCategory(0)}
        />

        {categories.map((category) => (
          <Checkbox
            key={category.id}
            id={`category-${category.id}`}
            label={category.categoryName}
            checked={selectedCategoryIds.includes(category.id)}
            onChange={() => onToggleCategory(category.id)}
          />
        ))}
      </div>
    </CollapsibleSection>
  );
}
