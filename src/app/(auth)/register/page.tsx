import RegisterForm from "@/components/organisms/auth/RegisterForm";
import AuthTemplate from "@/components/templates/AuthTemplate";

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
