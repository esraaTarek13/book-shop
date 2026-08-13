import Skeleton from "@/components/atoms/Skeleton";

interface BookCardSkeletonProps {
  count?: number;
  className?: string;
}

export default function BookCardSkeleton({
  count = 2,
  className,
}: BookCardSkeletonProps) {
  return (
    <div
      className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-3 ${className}`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div key={i}>
          <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6 rounded-sm bg-surface">
            {/* Cover */}
            <div className="shrink-0 flex justify-center rounded-sm">
              <Skeleton className="w-24 md:w-40 lg:w-44.75 h-30 md:h-auto shrink-0 rounded-md" />
            </div>

            {/* Details */}
            <div className="flex flex-1 flex-col gap-3">
              <Skeleton className="h-5 w-2/3 rounded" />
              <Skeleton className="h-4 w-1/3 rounded" />

              <div className="flex flex-col gap-2">
                <Skeleton className="h-3 w-full rounded" />
                <Skeleton className="h-3 w-full rounded" />
                <Skeleton className="h-3 w-1/2 rounded" />
              </div>

              <div className="mt-auto flex items-center justify-between">
                <Skeleton className="h-4 w-24 rounded" />
                <Skeleton className="h-5 w-16 rounded" />
              </div>

              <div className="flex items-center gap-3">
                <Skeleton className="h-6 md:h-8 flex-1 rounded-full" />
                <Skeleton className="h-6 md:h-8 w-10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
