"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
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
          className="fixed top-0 left-0 h-full w-[80vw] max-w-xs bg-background z-50 py-6 overflow-y-auto
            data-[state=open]:animate-slide-in-left data-[state=closed]:animate-slide-out-left"
        >
          <div className="flex items-center justify-between mb-6 px-6">
            <Dialog.Title asChild>
              <Text
                as="span"
                weight="semibold"
                size="xl"
                className="flex gap-1.5 items-center"
              >
                <span className="w-1 h-5 bg-primary rounded-full" />
                Filter
              </Text>
            </Dialog.Title>

            <Dialog.Close asChild>
              <IconButton
                icon={<IoClose size={20} />}
                variant="outline"
                aria-label="Close filters"
                className="p-1! rounded-full! "
              />
            </Dialog.Close>
          </div>

          <DropdownMenu.Separator className="h-px bg-card-10 my-1.5" />

          <div className="px-6 py-6">
            <FilterContent
              categories={categories}
              selectedCategoryIds={selectedCategoryIds}
              onToggleCategory={onToggleCategory}
              totalBooksCount={totalBooksCount}
            />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
