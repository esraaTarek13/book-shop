import { FaPenClip } from "react-icons/fa6";
import Avatar from "../atoms/Avatar";
import IconButton from "../atoms/IconButton";

interface ProfileImageProps {
  avatarSrc?: string | null;
  name?: string;
}

export default function ProfileImage({ avatarSrc, name }: ProfileImageProps) {
  return (
    <div className="relative -top-10 w-fit">
      <Avatar
        src={avatarSrc}
        name={name || "User"}
        size={120}
        imageClassName="w-20 md:w-30"
        className="w-10! h-20! md:h-30! md:w-30! text-xl! md:text-3xl!"
      />

      <div className="absolute -bottom-0.5 right-1">
        <IconButton
          icon={<FaPenClip className="text-xs md:text-sm shrink-0" />}
          aria-label="Edit profile picture"
          className="rounded-full! w-6! md:h-9! h-6! md:w-9!"
        />
      </div>
    </div>
  );
}
