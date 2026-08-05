import Image from "next/image";
import type { ReactNode } from "react";

interface BackgroundBannerProps {
  height?: string;
  overlayColor?: string;
  children?: ReactNode;
  className?: string;
}

export default function BackgroundBanner({
  height = "h-[50vh]",
  overlayColor = "bg-[#00000099]", 
  children,
  className = "",
}: BackgroundBannerProps) {
  return (
    <section
      className={`relative w-full overflow-hidden ${height} ${className}`}
    >
      <Image
        src="/images/hero.png"
        alt="hero banner"
        fill
        priority
        className="object-cover -scale-x-100"
      />
      <div className={`absolute inset-0 ${overlayColor}`} />

      {children && (
        <div className="h-full w-full flex items-center justify-center relative z-10">
          {children}
        </div>
      )}
    </section>
  );
}
