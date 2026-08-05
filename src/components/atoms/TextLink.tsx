import Link from "next/link";
import type { ReactNode } from "react";

interface TextLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export default function TextLink({
  children,
  href,
  className = "",
}: TextLinkProps) {
  return (
    <Link
      href={href}
      className={`font-semibold text-sm md:text-base lg:text-lg hover:opacity-80 transition-opacity ${className}`}
    >
      {children}
    </Link>
  );
}
