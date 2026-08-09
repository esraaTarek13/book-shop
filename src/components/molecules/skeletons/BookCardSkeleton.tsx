import Skeleton from "@/components/atoms/Skeleton";

export default function BookCardSkeleton({ className }: { className?: string }) {
  return (
    <div className={`flex gap-3 ${className}`}>
      {Array.from({ length: 2 }).map((_, i) => (
        <div key={i}>
          <div className="flex gap-4 p-4 bg-surface">
            {/* Cover */}
            <Skeleton className="w-24 md:w-28 h-32 md:h-37 shrink-0" />

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
                <Skeleton className="h-10 flex-1 rounded-full" />
                <Skeleton className="h-10 w-10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
