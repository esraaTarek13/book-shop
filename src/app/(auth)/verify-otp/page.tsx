import VerifyOtpForm from "@/components/organisms/auth/VerifyOtpForm";
import AuthTemplate from "@/components/templates/AuthTemplate";

export default function page() {
  return (
    <AuthTemplate
      title="Reset your password!"
      subtitle="Enter the 6 digit code that you received on your email"
      footerText="Didn’t receive a code?"
      footerLinkText="Send again"
    >
      <VerifyOtpForm />
    </AuthTemplate>
  );
}
