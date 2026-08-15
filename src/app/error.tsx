"use client";

import BackgroundBanner from "@/components/atoms/BackgroundBanner";
import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <BackgroundBanner height="h-[15vh]" />

      <div className="min-h-screen flex flex-col justify-center items-center gap-8 px-4">
        <div className="relative select-none">
          <p className="flex items-center justify-center text-primary opacity-15 text-[120px] md:text-[180px] font-bold leading-none">
            500
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl md:text-5xl">📖</span>
          </div>
        </div>

        <div className="text-center space-y-3 max-w-md">
          <h1 className="text-text text-xl md:text-2xl lg:text-3xl font-bold">
            Something Went Wrong
          </h1>
          <p className="text-text-50 text-sm md:text-base lg:text-lg">
            An unexpected error occurred. Please try again.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => reset()}
            className="bg-primary px-8 py-1.5 md:py-2 lg:py-3 rounded-md text-xs md:text-sm lg:text-base font-medium text-text-light transition-opacity hover:opacity-70 cursor-pointer"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="bg-transparent px-8 py-1.5 md:py-2 lg:py-3 rounded-md border border-primary text-xs md:text-sm lg:text-base font-medium text-primary transition-colors hover:bg-primary-10"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
}
