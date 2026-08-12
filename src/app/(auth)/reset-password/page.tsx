import type { Metadata } from "next";
import ResetPasswordForm from "@/components/organisms/auth/ResetPasswordForm";
import AuthTemplate from "@/components/templates/AuthTemplate";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Create a new password for your account.",
};

export default function ResetPasswordPage() {
  return (
    <AuthTemplate
      title="Create new password!"
      subtitle="Create a strong password Your new password must be different from previous one"
    >
      <ResetPasswordForm />
    </AuthTemplate>
  );
}
