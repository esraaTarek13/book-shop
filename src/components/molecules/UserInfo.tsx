import Link from "next/link";
import Avatar from "../atoms/Avatar";
import Text from "../atoms/Text";
import type { TextColor } from "@/types/text";

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
  return (
    <Link href="/profile" className="flex items-center gap-3">
      <Avatar src={avatarSrc} name={name || "User"} size="navbar" />

      <div className="flex flex-col leading-tight">
        <Text as="span" weight="bold" size="sm" color={color}>
          {name || "User"}
        </Text>
        <Text as="span" size="sm" color={color} className="opacity-70">
          {email || "No email provided"}
        </Text>
      </div>
    </Link>
  );
}
