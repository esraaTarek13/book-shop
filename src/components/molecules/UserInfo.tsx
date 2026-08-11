import Link from "next/link";
import Avatar from "../atoms/Avatar";
import Text from "../atoms/Text";

interface UserInfoProps {
  name: string | undefined;
  email: string | undefined;
  avatarSrc?: string | null;
}

export default function UserInfo({ name, email, avatarSrc }: UserInfoProps) {
  return (
    <Link href="/profile" className="flex items-center gap-3">
      <Avatar src={avatarSrc} name={name || "User"} size="navbar" />

      <div className="flex flex-col leading-tight">
        <Text as="span" weight="bold" size="sm" color="light">
          {name || "User"}
        </Text>
        <Text as="span" size="sm" color="light" className="opacity-70">
          {email || "No email provided"}
        </Text>
      </div>
    </Link>
  );
}
