"use client"
import { useGetProfileData } from "@/hooks/profile/useGetProfileData";
import BackgroundBanner from "../atoms/BackgroundBanner";
import { mapUserData } from "@/utils/mapUser";
import ProfileImage from "../molecules/ProfileImage";

export default function ProfileTemplate() {
  const { data, isPending, isError } = useGetProfileData();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Failed to load profile</div>;
  }

  const user = mapUserData(data);

  return (
    <>
      <BackgroundBanner height="h-[40vh]" />
      <ProfileImage avatarSrc={user.image} name={user.name} />
    </>
  );
}
