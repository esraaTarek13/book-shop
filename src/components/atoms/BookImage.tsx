import Image from "next/image";

interface BookImageProps {
  src: string;
  alt?: string;
  width: number;
  height: number;
  className?: string;
}

export default function BookImage({
  src,
  alt = "Book cover",
  width,
  height,
  className = "",
}: BookImageProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
