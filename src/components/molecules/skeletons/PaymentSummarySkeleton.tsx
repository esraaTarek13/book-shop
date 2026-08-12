import Skeleton from "@/components/atoms/Skeleton";

export default function PaymentSummarySkeleton() {
  return (
    <section className="custom-container bg-card-10 py-6 md:py-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
        <div className="space-y-6 lg:space-y-15">
          <div className="w-full max-w-lg space-y-1 lg:space-y-2">
            <Skeleton className="h-7 w-48" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          <div className="space-y-2 md:space-y-4">
            <Skeleton className="h-4 w-32" />
            <div className="flex gap-2 md:gap-4">
              <Skeleton className="h-11 flex-1" />
              <Skeleton className="h-11 w-24" />
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-6 lg:space-y-8">
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

          <div className="flex flex-col gap-3">
            <Skeleton className="h-11 w-full" />
            <Skeleton className="h-11 w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
