"use client";
import Image from "next/image";
import { useState } from "react";

interface AvatarProps {
  src?: string | null;
  name: string;
  size?: number;
}

export default function Avatar({ src, name, size = 40 }: AvatarProps) {
  const [hasError, setHasError] = useState(false);
  const initials = name
    .trim()
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  const dimension = `${size}px`;

  if (!src || hasError) {
    return (
      <div
        style={{ width: dimension, height: dimension }}
        className="flex items-center justify-center rounded-full bg-card text-text-light font-semibold text-xs md:text-sm lg:text-base"
      >
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={name}
      width={size}
      height={size}
      onError={() => setHasError(true)}
      className="rounded-full object-cover"
    />
  );
}
