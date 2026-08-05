import Logo from "@/components/atoms/Logo";
import Text from "@/components/atoms/Text";
import NavLinks from "@/components/molecules/NavLinks";
import SocialLinks from "@/components/molecules/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-footer h-80 flex flex-col justify-center">
      <div className="custom-container space-y-4">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:items-center">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 lg:gap-10">
            <Logo />
            <NavLinks />
          </div>
          <SocialLinks />
        </div>

        <hr className="text-navbar h-px w-full" />

        <Text size="sm" color="light">
          {"<Developed By> EraaSoft <All Copy Rights Reserved @2024>"}
        </Text>
      </div>
    </footer>
  );
}
