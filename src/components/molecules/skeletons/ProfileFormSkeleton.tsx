import Skeleton from "@/components/atoms/Skeleton";

export default function ProfileFormSkeleton({
  className,
}: {
  className?: string;
}) {
  return (
    <section
      className={`custom-container flex flex-col items-center gap-8 md:gap-12 mb-20 md:mb-25 ${className || ""}`}
    >
      {/* Avatar */}
      <div className="relative -top-8 w-fit">
        <Skeleton className="rounded-full w-24 h-24 md:w-28 md:h-28" />
      </div>

      <div className="w-full max-w-lg">
        <div className="rounded-lg bg-surface p-6 md:p-10">
          {/* Title */}
          <div className="flex justify-center mb-6 md:mb-8">
            <Skeleton className="h-5 w-40 rounded" />
          </div>

          {/* First / Last name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-4.5">
            <div className="flex flex-col gap-1.5">
              <Skeleton className="h-3 w-16 rounded" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Skeleton className="h-3 w-16 rounded" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
          </div>

          {/* Email / Phone / Address */}
          <div className="flex flex-col gap-3.5 md:gap-4.5 mt-3.5 md:mt-4.5">
            <div className="flex flex-col gap-1.5">
              <Skeleton className="h-3 w-12 rounded" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Skeleton className="h-3 w-24 rounded" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Skeleton className="h-3 w-16 rounded" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <Skeleton className="h-10 w-36 rounded-md mt-8 md:mt-10" />
        </div>
      </div>
    </section>
  );
}
