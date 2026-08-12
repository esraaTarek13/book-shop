import Skeleton from "@/components/atoms/Skeleton";

interface CategoryFilterSkeletonProps {
  count?: number;
  className?: string;
}

export default function CategoryFilterSkeleton({
  count = 6,
  className = "",
}: CategoryFilterSkeletonProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-3 w-3 md:h-4 md:w-4 rounded-sm" />
            <Skeleton className="h-3 md:h-4 w-24" />
          </div>
          <Skeleton className="h-3 md:h-4 w-6" />
        </div>
      ))}
    </div>
  );
}
