"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center gap-8 px-4">
      <div className="relative select-none">
        <p className="flex items-center justify-center text-primary opacity-15 text-[120px] md:text-[180px] font-bold leading-none">
          404
        </p>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl md:text-5xl">📖</span>
        </div>
      </div>

      <div className="text-center space-y-3 max-w-md">
        <h1 className="text-text text-xl md:text-2xl lg:text-3xl font-bold">
          Page Not Found
        </h1>
        <p className="text-text-50 text-sm md:text-base lg:text-lg">
          Looks like this page doesn&apos;t exist or has been moved.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="bg-primary px-8 py-1.5 md:py-2 lg:py-3 rounded-md text-xs md:text-sm lg:text-base font-medium text-text-light transition-opacity hover:opacity-70"
        >
          Go Home
        </Link>
        <button
          onClick={() => router.back()}
          className="bg-transparent px-8 py-1.5 md:py-2 lg:py-3 rounded-md border border-primary text-xs md:text-sm lg:text-base font-medium text-primary transition-colors hover:bg-primary-10 cursor-pointer"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
