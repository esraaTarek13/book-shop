"use client";
import IconButton from "@/components/atoms/IconButton";
import AuthActions from "@/components/molecules/AuthActions";
import NavActions from "@/components/molecules/NavActions";
import NavLinks from "@/components/molecules/NavLinks";
import UserInfo from "@/components/molecules/UserInfo";
import { useAuthStore } from "@/store/authStore";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { GiHamburgerMenu } from "react-icons/gi";

interface MobileMenuProps {
  user: { name?: string; email?: string; image?: string | null } | null;
}

export default function MobileMenu({ user }: MobileMenuProps) {
  // Avoid flashing wrong auth state before store hydrates from storage
  const hasHydrated = useAuthStore((state) => state.hasHydrated);

  return (
    <section className="block md:hidden">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <IconButton
            icon={<GiHamburgerMenu size={20} />}
            variant="navbar"
            aria-label="Open menu"
          />
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            align="end"
            sideOffset={8}
            className="w-56 rounded-md bg-navbar shadow-lg p-3 flex flex-col gap-2 z-50"
          >
            {/* Wishlist/cart shown only when logged in */}
            {!hasHydrated
              ? null
              : user && (
                  <>
                    <NavActions
                      wishlistCount={1}
                      cartCount={3}
                      className="justify-center gap-8"
                    />

                    <DropdownMenu.Separator className="h-px bg-card my-1.5" />
                  </>
                )}

            {/* Primary nav links, stacked for mobile */}
            <NavLinks className="flex-col!" />

            <DropdownMenu.Separator className="h-px bg-card my-1.5" />

            {/* User info if logged in, otherwise login/signup buttons */}
            {!hasHydrated ? null : user ? (
              <UserInfo
                name={user?.name}
                email={user?.email}
                avatarSrc={user?.image}
              />
            ) : (
              <AuthActions />
            )}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </section>
  );
}
