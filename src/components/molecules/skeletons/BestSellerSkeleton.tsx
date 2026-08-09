import Skeleton from "@/components/atoms/Skeleton";

export default function BestSellerSkeleton() {
  return (
    <div className="flex gap-4 sm:gap-6 lg:gap-8 px-6 lg:px-16 overflow-hidden">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton
          key={i}
          className="shrink-0 w-22 h-33 sm:w-28 sm:h-43 md:w-35 md:h-52 lg:w-43.25 lg:h-65"
        />
      ))}
    </div>
  );
}
