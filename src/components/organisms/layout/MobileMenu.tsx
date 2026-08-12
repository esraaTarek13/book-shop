"use client";
import { useState } from "react";
import IconButton from "@/components/atoms/IconButton";
import AuthActions from "@/components/molecules/AuthActions";
import NavActions from "@/components/molecules/NavActions";
import NavLinks from "@/components/molecules/NavLinks";
import UserInfo from "@/components/molecules/UserInfo";
import { useAuthStore } from "@/store/authStore";
import { useCloseOnNavigateOrScroll } from "@/hooks/useCloseOnNavigateOrScroll";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { GiHamburgerMenu } from "react-icons/gi";

interface MobileMenuProps {
  user: { name?: string; email?: string; image?: string | null } | null;
}

export default function MobileMenu({ user }: MobileMenuProps) {
  const hasHydrated = useAuthStore((state) => state.hasHydrated);
  const [open, setOpen] = useState(false);

  useCloseOnNavigateOrScroll(open, () => setOpen(false));

  return (
    <section className="block md:hidden">
      <DropdownMenu.Root open={open} onOpenChange={setOpen}>
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
            className="w-56 rounded-md bg-card/80 shadow-lg p-3 flex flex-col gap-2 z-50"
          >
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

            <NavLinks className="flex-col!" />

            <DropdownMenu.Separator className="h-px bg-card my-1.5" />

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
