import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
  size?: number;
}

export default function StarRating({ rating, size = 14 }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div
      className="flex items-center gap-0.5 text-text-warning"
      aria-label={`Rated ${rating} out of 5`}
    >
      {Array.from({ length: fullStars }).map((_, i) => (
        <FaStar key={`full-${i}`} size={size} />
      ))}
      {hasHalfStar && <FaStarHalfAlt size={size} />}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <FaRegStar key={`empty-${i}`} size={size} />
      ))}
    </div>
  );
}
