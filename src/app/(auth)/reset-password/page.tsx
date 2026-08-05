import ResetPasswordForm from "@/components/organisms/auth/ResetPasswordForm";
import AuthTemplate from "@/components/templates/AuthTemplate";

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
