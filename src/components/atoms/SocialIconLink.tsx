import type { ReactNode } from "react";

interface SocialIconLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export default function SocialIconLink({
  href,
  icon,
  label,
}: SocialIconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-text-light hover:opacity-80 transition-opacity"
    >
      {icon}
    </a>
  );
}
