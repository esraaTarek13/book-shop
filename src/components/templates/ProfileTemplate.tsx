"use client";
import { useGetProfileData } from "@/hooks/profile/useGetProfileData";
import BackgroundBanner from "../atoms/BackgroundBanner";
import ProfileForm from "../organisms/profile/ProfileForm";
import ProfileFormSkeleton from "../molecules/skeletons/ProfileFormSkeleton";
import StatusMessage from "../atoms/StatusMessage";

export default function ProfileTemplate() {
  const { data, isPending, isError } = useGetProfileData();

  return (
    <>
      <BackgroundBanner height="h-[40vh]" />

      {isPending ? (
        <ProfileFormSkeleton />
      ) : isError || !data ? (
        <StatusMessage
          content="Something went wrong while loading your profile."
          variant="error"
        />
      ) : (
        <ProfileForm profileData={data} />
      )}
    </>
  );
}
