import SocialIconLink from "@/components/atoms/SocialIconLink";
import { SOCIAL_LINKS } from "@/constants/socialLinks";

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-2 md:gap-4 ${className}`}>
      {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
        <SocialIconLink
          key={label}
          href={href}
          icon={<Icon size={20} />}
          label={label}
        />
      ))}
    </div>
  );
}
