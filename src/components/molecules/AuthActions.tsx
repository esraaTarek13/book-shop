import LinkButton from "@/components/atoms/LinkButton";

export default function AuthActions() {
  return (
    <div className="flex items-center gap-3">
      <LinkButton href="/login" variant="primary">
        Log in
      </LinkButton>
      <LinkButton href="/register" variant="outline">
        Sign Up
      </LinkButton>
    </div>
  );
}
