"use client";
import { useHomeData } from "@/hooks/useHomeData";
import BackgroundBanner from "../atoms/BackgroundBanner";
import SearchBar from "../molecules/SearchBar";
import FeaturesBar from "../organisms/FeaturesBar";
import BestSeller from "../organisms/home/BestSeller";
import RecommendedForYou from "../organisms/home/RecommendedForYou";
import FlashSale from "../organisms/home/FlashSale";

export default function HomeTemplate() {
  const { data, isPending, isError } = useHomeData();

  return (
    <>
      <BackgroundBanner height="h-[80vh]">
        <SearchBar />
      </BackgroundBanner>

      <FeaturesBar />

      <BestSeller
        images={data?.best_selling_image ?? []}
        isPending={isPending}
        isError={isError}
      />

      <RecommendedForYou
        books={data?.recommended ?? []}
        isPending={isPending}
        isError={isError}
      />

      <div className="w-full h-px bg-card-border"></div>

      <FlashSale
        books={data?.flashSales ?? []}
        isPending={isPending}
        isError={isError}
      />
    </>
  );
}
