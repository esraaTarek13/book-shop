import type { IconType } from "react-icons";
import Text from "@/components/atoms/Text";

interface ProfileMenuItemContentProps {
  label: string;
  icon: IconType;
}

export default function ProfileMenuItemContent({
  label,
  icon: Icon,
}: ProfileMenuItemContentProps) {
  return (
    <div className="flex items-center gap-2 p-2 text-text hover:opacity-80 cursor-pointer ">
      <Icon size={18} />
      <Text as="span" size="sm" weight="medium">
        {label}
      </Text>
    </div>
  );
}
