import StarRating from "@/components/atoms/StarRating";
import Text from "@/components/atoms/Text";
import { TextColor } from "@/types/text";

interface BookRatingProps {
  rate: number | null;
  countReview: number;
  textColor?: TextColor;
  className?: string;
}

export default function BookRating({
  rate,
  countReview,
  textColor = "muted",
  className,
}: BookRatingProps) {
  return (
    <div className={`space-y-1 ${className}`}>
      <div className="flex items-center gap-2 flex-wrap">
        <StarRating rating={rate ?? 0} />
        <Text as="span" size="xs" weight="semibold" color={textColor}>
          ({countReview ?? 0} Review)
        </Text>
      </div>

      <Text as="p" size="sm" color={textColor}>
        Rate:{" "}
        <Text as="span" size="sm" color={textColor === "lightMuted" ? "light" : "default"} weight="semibold">
          {rate ?? 0}
        </Text>
      </Text>
    </div>
  );
}
