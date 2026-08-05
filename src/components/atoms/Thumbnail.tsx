import Image from "next/image";

interface ThumbnailProps {
  src: string;
  alt: string;
  isSelected?: boolean;
  onClick?: () => void;
  width?: number;
}

export default function Thumbnail({
  src,
  alt,
  isSelected = false,
  onClick,
  width = 64,
}: ThumbnailProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isSelected}
      aria-label={alt}
      className={`overflow-hidden border-2 transition-colors cursor-pointer ${
        isSelected
          ? "border-primary"
          : "border-card-border hover:border-primary-50"
      }`}
      style={{ width }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={0}
        className="h-auto w-full object-cover"
      />
    </button>
  );
}
