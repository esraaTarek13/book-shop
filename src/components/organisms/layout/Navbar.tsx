"use client";
import Logo from "@/components/atoms/Logo";
import NavLinks from "@/components/molecules/NavLinks";
import UserInfo from "@/components/molecules/UserInfo";
import { useAuthStore } from "@/store/authStore";
import { mapUserData } from "@/utils/mapUser";
import MobileMenu from "./MobileMenu";
import NavActions from "@/components/molecules/NavActions";
import AuthActions from "@/components/molecules/AuthActions";

export default function Navbar() {
  // Re-renders on login/logout
  const user = useAuthStore((state) => state.user);
  // Avoid flashing wrong auth state before store hydrates from storage
  const hasHydrated = useAuthStore((state) => state.hasHydrated);

  // Normalize raw API user shape for UI
  const mappedUser = user ? mapUserData(user) : null;

  return (
    <header className="w-full bg-navbar py-4 absolute z-50">
      <div className="custom-container flex items-center justify-between">
        {/* Brand + desktop nav links */}
        <div className="flex items-center gap-5 lg:gap-10">
          <Logo />
          <NavLinks className="hidden md:flex" />
        </div>

        {/* Desktop-only: wait for hydration, then show user actions or auth buttons */}
        {!hasHydrated ? null : user ? (
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <NavActions wishlistCount={1} cartCount={3} />
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

        {/* Mobile menu: burger trigger + dropdown */}
        <MobileMenu user={mappedUser} />
      </div>
    </header>
  );
}
