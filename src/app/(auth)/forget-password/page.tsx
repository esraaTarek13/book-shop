import ForgetPasswordForm from "@/components/organisms/auth/ForgetPasswordForm";
import AuthTemplate from "@/components/templates/AuthTemplate";

export default function ForgetPasswordPage() {
  return (
    <AuthTemplate
      title="Forget Password?"
      subtitle="Enter your email to reset your password"
    >
      <ForgetPasswordForm />
    </AuthTemplate>
  );
}
