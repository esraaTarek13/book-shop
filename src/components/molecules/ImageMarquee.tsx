"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";

interface ImageMarqueeProps {
  images: string[];
  alt?: string;
  className?: string;
}

export default function ImageMarquee({
  images,
  alt = "Book cover",
  className = "",
}: ImageMarqueeProps) {
  return (
    <Splide
      options={{
        type: "loop",
        drag: "free",
        focus: "center",
        autoWidth: true,
        gap: "32px",
        autoScroll: { speed: 2 },
        arrows: false,
        pagination: false,
        slideFocus: false,
      }}
      extensions={{ AutoScroll }}
      className={`flex items-center ${className}`}
    >
      {images.map((src, index) => (
        <SplideSlide key={`${src}-${index}`}>
          <div className="w-22 h-33 sm:w-28 sm:h-43 md:w-35 md:h-52 lg:w-43.25 lg:h-65 overflow-hidden rounded-md">
            <Image src={src} alt={alt} fill className="h-auto object-cover" />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
