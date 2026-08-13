import Skeleton from "@/components/atoms/Skeleton";

interface ProductDetailsSkeletonProps {
  rows?: number;
  className?: string;
}

export default function ProductDetailsSkeleton({
  rows = 7,
  className = "",
}: ProductDetailsSkeletonProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-32" />
        </div>
      ))}
    </div>
  );
}
