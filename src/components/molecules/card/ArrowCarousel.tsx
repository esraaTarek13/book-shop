"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import type { ReactNode } from "react";

interface ArrowCarouselProps {
  children: ReactNode[];
  className?: string;
}

export default function ArrowCarousel({
  children,
  className = "",
}: ArrowCarouselProps) {
  return (
    <Splide
      options={{
        type: "loop",
        perPage: 1,
        focus: "center",
        gap: "32px",
        pagination: true,
        arrows: true,
        drag: true,
        mediaQuery: "min",
        breakpoints: {
          1024: { perPage: 2 },
        },
      }}
      className={className}
    >
      {children.map((child, index) => (
        <SplideSlide key={index}>{child}</SplideSlide>
      ))}
    </Splide>
  );
}
