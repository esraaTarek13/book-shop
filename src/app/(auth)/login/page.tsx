import type { Metadata } from "next";
import AuthTemplate from "@/components/templates/AuthTemplate";
import LoginForm from "@/components/organisms/auth/LoginForm";

export const metadata: Metadata = {
  title: "Login",
  description: "Log in to your Bookshop account to continue shopping.",
};

export default function LoginPage() {
  return (
    <AuthTemplate
      title="Welcome Back!"
      footerText="Don't have an account?"
      footerLinkText="Signup"
      footerLinkHref="/register"
    >
      <LoginForm />
    </AuthTemplate>
  );
}
