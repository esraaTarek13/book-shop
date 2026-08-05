import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type LinkButtonVariant = "primary" | "outline";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  variant?: LinkButtonVariant;
  className?: string;
}

const variantStyles: Record<LinkButtonVariant, string> = {
  primary: "bg-primary text-text-light hover:bg-primary-50",
  outline:
    "bg-surface border border-primary text-text-accent hover:bg-primary-10",
};

export default function LinkButton({
  href,
  children,
  variant = "primary",
  className = "",
  ...rest
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`w-full md:w-fit inline-flex items-center justify-center gap-3 rounded-sm px-4 py-1 md:py-2 text-sm font-semibold transition-all duration-300 md:text-base ${variantStyles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
