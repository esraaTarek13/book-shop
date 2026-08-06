import { IconType } from "react-icons";
import { IoArrowForward } from "react-icons/io5";
import Text from "../atoms/Text";
import TextLink from "../atoms/TextLink";

interface FeatureCardProps {
  className?: string;
  title?: string;
  description?: string;
  href?: string;
  linkText?: string;
  icon?: IconType;
  disabled?: boolean;
}

export default function FeatureCard({
  className,
  title,
  description,
  href,
  linkText,
  icon: Icon,
  disabled = false,
}: FeatureCardProps) {
  return (
    <div className={className}>
      {Icon && <Icon className="w-6 h-6 text-text-50 mb-2" aria-hidden />}

      <Text as="h3" weight="bold" size="lg">
        {title}
      </Text>
      <Text as="p" size="base" color="muted">
        {description}
      </Text>

      {linkText &&
        (disabled ? (
          <Text as="span" size="sm" color="accent" weight="bold">
            {linkText}
          </Text>
        ) : (
          href && (
            <TextLink
              href={href}
              className="group/link text-text-accent flex items-center gap-1 hover:opacity-100! text-xs! md:text-sm!"
            >
              {linkText}
              <IoArrowForward
                aria-hidden
                className="transition-transform duration-200 ease-out group-hover/link:translate-x-1"
              />
            </TextLink>
          )
        ))}
    </div>
  );
}
