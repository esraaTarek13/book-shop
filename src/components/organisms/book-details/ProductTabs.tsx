import Tab from "@/components/atoms/Tab";
import { PRODUCT_TABS, type TabKey } from "@/constants/productTabs";
import type { BookDetailData } from "@/types/book-detail";
import { useState } from "react";
import ProductDetailsContent from "../../molecules/ProductDetailsContent";
import RecommendedBooks from "./RecommendedBooks";
import BookCardSkeleton from "@/components/molecules/skeletons/BookCardSkeleton";
import ProductDetailsSkeleton from "@/components/molecules/skeletons/ProductDetailsSkeleton";

interface ProductTabsProps {
  book: BookDetailData;
  isFetching: boolean;
}

export default function ProductTabs({ book, isFetching }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("details");

  return (
    <section className="space-y-6 md:space-y-8">
      <div className="flex items-center gap-6 border-b border-card-border">
        {PRODUCT_TABS.map((tab) => (
          <Tab
            key={tab.key}
            isActive={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </Tab>
        ))}
      </div>

      <div>
        {activeTab === "details" &&
          (isFetching ? (
            <ProductDetailsSkeleton />
          ) : (
            <ProductDetailsContent book={book.book} />
          ))}

        {activeTab === "recommended" &&
          (isFetching ? (
            <BookCardSkeleton />
          ) : (
            <RecommendedBooks books={book.recommendedBooks} />
          ))}
      </div>
    </section>
  );
}
