declare module "@splidejs/react-splide" {
    import * as React from "react";
    import type { Options } from "@splidejs/splide";

    export interface SplideProps {
        options?: Options;
        extensions?: Record<string, unknown>;
        className?: string;
        hasTrack?: boolean;
        tag?: string;
        children?: React.ReactNode;
        onMounted?: (splide: unknown) => void;
        onMove?: (splide: unknown) => void;
        [key: string]: unknown;
    }

    export interface SplideSlideProps {
        className?: string;
        children?: React.ReactNode;
        [key: string]: unknown;
    }

    export const Splide: React.ForwardRefExoticComponent<SplideProps>;
    export const SplideSlide: React.FC<SplideSlideProps>;
}