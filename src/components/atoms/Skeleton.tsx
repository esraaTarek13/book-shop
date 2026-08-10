interface SkeletonProps {
  className?: string;
}

export default function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-text-50 rounded ${className}`}
      aria-hidden="true"
    />
  );
}
