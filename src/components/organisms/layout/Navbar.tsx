"use client";
import Logo from "@/components/atoms/Logo";
import { useAuthStore } from "@/store/authStore";
import { mapUserData } from "@/mappers/mapUser";
import MobileMenu from "./MobileMenu";
import NavActions from "@/components/molecules/NavActions";
import AuthActions from "@/components/molecules/AuthActions";
import NavbarAuthSkeleton from "@/components/molecules/skeletons/NavbarAuthSkeleton";
import NavLinks from "@/components/molecules/NavLinks";
import UserInfo from "./UserInfo";

export default function Navbar() {
  const user = useAuthStore((state) => state.user);
  const hasHydrated = useAuthStore((state) => state.hasHydrated);

  const mappedUser = user ? mapUserData(user) : null;

  return (
    <header className="w-full bg-navbar py-4 absolute z-50">
      <div className="custom-container flex items-center justify-between">
        <div className="flex items-center gap-5 lg:gap-10">
          <Logo width={100} />
          <NavLinks className="hidden md:flex" />
        </div>

        {!hasHydrated ? (
          <NavbarAuthSkeleton />
        ) : user ? (
          <div className="hidden md:flex items-center gap-6">
            <NavActions />
            <UserInfo
              name={mappedUser?.name}
              email={mappedUser?.email}
              avatarSrc={mappedUser?.image}
            />
          </div>
        ) : (
          <div className="hidden md:block">
            <AuthActions />
          </div>
        )}

        <MobileMenu user={mappedUser} />
      </div>
    </header>
  );
}
