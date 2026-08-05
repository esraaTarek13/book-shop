import AuthTemplate from "@/components/templates/AuthTemplate";
import LoginForm from "@/components/organisms/auth/LoginForm";

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
