import Skeleton from "@/components/atoms/Skeleton";

interface OrderSummarySkeletonProps {
  itemsCount?: number;
}

export default function OrderSummarySkeleton({
  itemsCount = 2,
}: OrderSummarySkeletonProps) {
  return (
    <section className="bg-surface rounded-lg p-6 md:p-8 flex flex-col justify-between gap-15 w-full">
      <div className="space-y-4">
        <Skeleton className="h-6 w-40" />

        {Array.from({ length: itemsCount }).map((_, i) => (
          <div key={i} className="flex gap-4">
            <Skeleton className="w-24 h-32 shrink-0 rounded-md" />
            <div className="flex-1 space-y-3">
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-3 w-1/3" />
              <div className="flex items-center justify-between pt-4">
                <Skeleton className="h-8 w-24 rounded-full" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-12" />
          </div>
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-20" />
          </div>
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-12" />
          </div>

          <hr className="h-px w-full bg-card-border" />

          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-14" />
            <Skeleton className="h-6 w-16" />
          </div>
        </div>

        <Skeleton className="h-11 w-full rounded-full" />
      </div>
    </section>
  );
}
