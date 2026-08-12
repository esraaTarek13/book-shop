import type { Metadata } from "next";
import RegisterForm from "@/components/organisms/auth/RegisterForm";
import AuthTemplate from "@/components/templates/AuthTemplate";

export const metadata: Metadata = {
  title: "Register",
  description: "Create a new Bookshop account to start shopping.",
};

export default function RegisterPage() {
  return (
    <AuthTemplate
      footerText="Already have an account?"
      footerLinkText="Login"
      footerLinkHref="/login"
    >
      <RegisterForm />
    </AuthTemplate>
  );
}
