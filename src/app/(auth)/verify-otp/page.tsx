import type { Metadata } from "next";
import VerifyOtpForm from "@/components/organisms/auth/VerifyOtpForm";
import AuthTemplate from "@/components/templates/AuthTemplate";

export const metadata: Metadata = {
  title: "Verify Code",
  description: "Enter the verification code sent to your email.",
};

export default function VerifyOtpPage() {
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
