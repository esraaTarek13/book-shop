interface ProgressBarProps {
  value: number;
  max?: number;
}

export default function ProgressBar({ value, max = 100 }: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      className="h-1.5 w-full overflow-hidden rounded-full bg-progress/20"
    >
      <div
        className="h-full rounded-full bg-text-warning transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
