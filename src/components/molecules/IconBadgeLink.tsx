"use client";
import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Badge from "../atoms/Badge";
import { isActiveLink } from "@/utils/isActiveLink";

interface IconBadgeButtonProps {
  icon: ReactNode;
  count?: number;
  label: string;
  href: string;
}

export default function IconBadgeLink({
  icon,
  count = 0,
  label,
  href,
}: IconBadgeButtonProps) {
  const pathname = usePathname();
  const isActive = isActiveLink(pathname, href);

  return (
    <Link
      href={href}
      aria-label={label}
      className={`relative transition-colors duration-300 ${
        isActive
          ? "text-text-warning"
          : "text-text-light hover:text-text-warning"
      }`}
    >
      {icon}
      {count > 0 && (
        <Badge variant="count" className="absolute -top-1 -right-2">
          {count > 99 ? "99+" : count}
        </Badge>
      )}
    </Link>
  );
}
