import Skeleton from "@/components/atoms/Skeleton";

export default function NavbarAuthSkeleton() {
  return (
    <div
      className="hidden md:flex items-center gap-4 lg:gap-6"
      aria-hidden="true"
    >
      <Skeleton className="w-9 h-9 rounded-full" />
      <Skeleton className="w-9 h-9 rounded-full" />
      <div className="flex items-center gap-3">
        <Skeleton className="w-10 h-10 rounded-full" />
        <div className="flex flex-col gap-1.5">
          <Skeleton className="w-20 h-3" />
          <Skeleton className="w-28 h-2.5" />
        </div>
      </div>
    </div>
  );
}
