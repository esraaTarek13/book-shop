"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Text from "@/components/atoms/Text";
import LinkButton from "@/components/atoms/LinkButton";

interface AuthRequiredModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AuthRequiredModal({
  open,
  onOpenChange,
}: AuthRequiredModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out" />

        <Dialog.Content
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-sm
            bg-surface rounded-lg shadow-lg z-50 p-6 md:p-8 space-y-6"
        >
          <Dialog.Title asChild>
            <Text as="p" weight="semibold" size="xl" className="text-center">
              You should log in first!
            </Text>
          </Dialog.Title>

          <div className="space-y-3 flex flex-col w-full">
            <LinkButton href="/login" variant="primary" className="w-full!">
              Log in
            </LinkButton>
            <LinkButton href="/register" variant="outline" className="w-full!">
              Create account
            </LinkButton>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
