import Badge from "@/components/atoms/Badge";
import Text from "@/components/atoms/Text";
import { TextColor } from "@/types/text";

interface BookInfoHeaderProps {
  title: string;
  description?: string;
  discountCode?: string;
  author?: string;
  titleColor?: TextColor;
  className?: string;
}

export default function BookInfoHeader({
  title,
  description,
  discountCode,
  author,
  titleColor = "default",
  className,
}: BookInfoHeaderProps) {
  return (
    <div className={`flex items-start justify-between gap-4 ${className}`}>
      <div className="space-y-0.5">
        <Text as="h4" weight="bold" size="lg" color={titleColor}>
          {title}
        </Text>

        {author ? (
          <Text
            size="xs"
            color={titleColor === "light" ? "lightMuted" : "muted"}
          >
            Author:{"  "}
            <Text
              as="span"
              size="xs"
              color={titleColor === "light" ? "light" : "default"}
            >
              {author}
            </Text>
          </Text>
        ) : null}

        {description ? (
          <Text size="sm" color="muted" className="line-clamp-3">
            {description}
          </Text>
        ) : null}
      </div>

      {discountCode ? (
        <Badge variant="warning">Discount code: {discountCode}</Badge>
      ) : null}
    </div>
  );
}
