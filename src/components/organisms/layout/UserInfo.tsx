import type { TextColor } from "@/types/text";
import { useState } from "react";
import ProfileMenu from "./ProfileMenu";
import Avatar from "@/components/atoms/Avatar";
import Text from "@/components/atoms/Text";

interface UserInfoProps {
  name: string | undefined;
  email: string | undefined;
  avatarSrc?: string | null;
  color?: TextColor;
}

export default function UserInfo({
  name,
  email,
  avatarSrc,
  color = "light",
}: UserInfoProps) {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <ProfileMenu open={isProfileMenuOpen} onOpenChange={setIsProfileMenuOpen}>
      <div className="flex items-center gap-3 cursor-pointer">
        <Avatar src={avatarSrc} name={name || "User"} size="navbar" />

        <div className="flex flex-col leading-tight">
          <Text as="span" weight="bold" size="sm" color={color}>
            {name || "User"}
          </Text>
          <Text as="span" size="sm" color={color} className="opacity-70">
            {email || "No email provided"}
          </Text>
        </div>
      </div>
    </ProfileMenu>
  );
}
