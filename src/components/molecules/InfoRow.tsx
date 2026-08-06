import type { IconType } from "react-icons";
import Text from "../atoms/Text";

interface InfoRowProps {
  icon: IconType;
  label: string;
  className?: string;
}

export default function InfoRow({
  icon: Icon,
  label,
  className,
}: InfoRowProps) {
  return (
    <div className={`flex items-center gap-2 md:gap-4 ${className}`}>
      <span className="bg-white text-text-accent rounded-sm w-11 h-11 flex items-center justify-center shrink-0">
        <Icon size={20} />
      </span>
      <Text as="p" size="sm" className="text-text-light">
        {label}
      </Text>
    </div>
  );
}
