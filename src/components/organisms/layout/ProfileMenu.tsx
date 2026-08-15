"use client";
import * as Popover from "@radix-ui/react-popover";
import TextLink from "@/components/atoms/TextLink";
import ProfileMenuItemContent from "@/components/molecules/ProfileMenuItemContent";
import { PROFILE_MENU_LINKS } from "@/constants/profileMenuLinks";
import { useCloseOnNavigateOrScroll } from "@/hooks/useCloseOnNavigateOrScroll";
import { useLogout } from "@/hooks/useLogout";

interface ProfileMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}
export default function ProfileMenu({
  open,
  onOpenChange,
  children,
}: ProfileMenuProps) {
  useCloseOnNavigateOrScroll(open, () => onOpenChange(false));
  const { mutate, isPending } = useLogout();

  return (
    <Popover.Root open={open} onOpenChange={onOpenChange}>
      <Popover.Trigger asChild>{children}</Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          align="end"
          sideOffset={8}
          className="w-56 rounded-sm bg-surface border border-card-border shadow-lg p-4 flex flex-col gap-1 z-50
            data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out"
        >
          {PROFILE_MENU_LINKS.map((item) =>
            item.isLogout ? (
              <button
                key={item.label}
                type="button"
                onClick={() => mutate()}
                disabled={isPending}
                className="disabled:opacity-50"
              >
                <ProfileMenuItemContent label={item.label} icon={item.icon} />
              </button>
            ) : (
              <TextLink key={item.label} href={item.href!}>
                <ProfileMenuItemContent label={item.label} icon={item.icon} />
              </TextLink>
            ),
          )}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
