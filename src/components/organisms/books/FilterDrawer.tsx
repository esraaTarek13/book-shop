"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { LuSlidersHorizontal } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import IconButton from "@/components/atoms/IconButton";
import Text from "@/components/atoms/Text";
import { FilterProps } from "@/types/category";
import FilterContent from "./FilterContent";

export default function FilterDrawer({
  categories,
  selectedCategoryIds,
  onToggleCategory,
  totalBooksCount,
}: FilterProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <IconButton
          icon={<LuSlidersHorizontal size={18} />}
          variant="outline"
          aria-label="Open filters"
          className="lg:hidden p-2!"
        />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out" />

        <Dialog.Content
          className="fixed top-0 left-0 h-full w-[80vw] max-w-xs bg-background z-50 px-8 md:px-10 py-10 md:py-12 overflow-y-auto
            data-[state=open]:animate-slide-in-left data-[state=closed]:animate-slide-out-left"
        >
          <div className="flex items-center justify-between mb-6">
            <Dialog.Title asChild>
              <Text as="span" weight="semibold" size="xl" className="flex gap-1.5 items-center">
                <LuSlidersHorizontal />
                Filter
              </Text>
            </Dialog.Title> 

            <Dialog.Close asChild>
              <IconButton
                icon={<IoClose size={20} />}
                variant="ghost"
                aria-label="Close filters"
                className="p-1!"
              />
            </Dialog.Close>
          </div>

          <FilterContent
            categories={categories}
            selectedCategoryIds={selectedCategoryIds}
            onToggleCategory={onToggleCategory}
            totalBooksCount={totalBooksCount}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}