type SpinnerSize = "sm" | "md" | "lg";
type SpinnerColor = "primary" | "light" | "current";

interface SpinnerProps {
  size?: SpinnerSize;
  color?: SpinnerColor;
  className?: string;
}

const sizeStyles: Record<SpinnerSize, string> = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-10 w-10 border-4",
};

const colorStyles: Record<SpinnerColor, string> = {
  primary: "border-primary-10 border-t-primary",
  light: "border-text-light-50 border-t-text-light",
  current: "border-current/20 border-t-current",
};

export default function Spinner({
  size = "md",
  color = "primary",
  className = "",
}: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={`animate-spin rounded-full ${sizeStyles[size]} ${colorStyles[color]} ${className}`}
    />
  );
}