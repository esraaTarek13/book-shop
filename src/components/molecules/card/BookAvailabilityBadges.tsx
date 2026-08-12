import Badge from "@/components/atoms/Badge";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";
import { LuTruck } from "react-icons/lu";

interface BookAvailabilityBadgesProps {
  inStock?: boolean;
  freeShipping?: boolean;
  discountCode?: string;
  className?: string;
}

export default function BookAvailabilityBadges({
  inStock,
  freeShipping = false,
  discountCode,
  className = "",
}: BookAvailabilityBadgesProps) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <Badge variant={inStock ? "success" : "warning"}>
        {inStock ? (
          <IoCheckmarkCircle size={16} />
        ) : (
          <IoCloseCircle size={16} />
        )}
        {inStock ? "In Stock" : "Out of Stock"}
      </Badge>

      {freeShipping && (
        <Badge variant="neutral">
          <LuTruck size={16} />
          Free Shipping Today
        </Badge>
      )}

      {discountCode && (
        <Badge variant="warning">Discount code: {discountCode}</Badge>
      )}
    </div>
  );
}
