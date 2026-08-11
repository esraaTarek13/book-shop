"use client";
import Image from "next/image";
import { useState } from "react";

type AvatarSize = "navbar" | "profile";

interface AvatarProps {
  src?: string | null;
  name: string;
  size?: AvatarSize;
  className?: string;
}

const sizeStyles: Record<AvatarSize, string> = {
  navbar: "w-10 h-10 text-xs md:text-sm lg:text-base",
  profile: "w-20 h-20 md:w-30 md:h-30 text-xl md:text-3xl",
};

const sizesAttr: Record<AvatarSize, string> = {
  navbar: "40px",
  profile: "(min-width: 768px) 120px, 80px",
};

export default function Avatar({
  src,
  name,
  size = "navbar",
  className = "",
}: AvatarProps) {
  const [hasError, setHasError] = useState(false);
  const initials = name
    .trim()
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  const dimensionClasses = sizeStyles[size];

  if (!src || hasError) {
    return (
      <div
        className={`flex items-center justify-center rounded-full bg-card text-text-light font-semibold ${dimensionClasses} ${className}`}
      >
        {initials}
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-full overflow-hidden ${dimensionClasses} ${className}`}
    >
      <Image
        src={src}
        alt={name}
        fill
        sizes={sizesAttr[size]}
        onError={() => setHasError(true)}
        className="object-cover"
      />
    </div>
  );
}
