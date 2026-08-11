import type { Profile, UpdateProfileValues } from "@/types/profile";

export const mapProfileFormValues = (profile: Profile): UpdateProfileValues => ({
  first_name: profile.first_name,
  last_name: profile.last_name,
  email: profile.email,
  phone: profile.phone ?? "",
  address: profile.address ?? "",
});