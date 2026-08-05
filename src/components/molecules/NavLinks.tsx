"use client";
import { usePathname } from "next/navigation";
import TextLink from "../atoms/TextLink";
import { LINKS } from "@/constants/navLinks";
import { isActiveLink } from "@/utils/isActiveLink";

export default function NavLinks({className}: {className?: string}) {
  const pathname = usePathname();

  return (
    <div className={`flex items-center gap-5 lg:gap-10 ${className || ""}`}>
      {LINKS.map((link) => (
        <TextLink
          key={link.href}
          href={link.href}
          className={`transition-colors duration-300 ${
            isActiveLink(pathname, link.href)
              ? "text-text-warning"
              : "text-text-light hover:text-text-warning"
          }`}
        >
          {link.name}
        </TextLink>
      ))}
    </div>
  );
}
