import type { Metadata } from "next";
import ProfileTemplate from "@/components/templates/ProfileTemplate";

export const metadata: Metadata = {
  title: "My Profile",
  description: "Manage your account details and preferences.",
};

export default function ProfilePage() {
  return <ProfileTemplate />;
}
