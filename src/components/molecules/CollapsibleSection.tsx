"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import { IoChevronDown, IoChevronForward } from "react-icons/io5";
import Text from "@/components/atoms/Text";
import { useState } from "react";
import type { ReactNode } from "react";

interface CollapsibleSectionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export default function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
  className = "",
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible.Root
      open={isOpen}
      onOpenChange={setIsOpen}
      className={`bg-surface rounded-sm p-4 md:p-5 ${className}`}
    >
      <Collapsible.Trigger asChild>
        <button
          type="button"
          className="flex items-center justify-between w-full cursor-pointer"
        >
          <Text
            as="span"
            weight="semibold"
            size="base"
            color={isOpen ? "accent" : "muted"}
          >
            {title}
          </Text>

          {isOpen ? (
            <IoChevronDown className="text-primary shrink-0" />
          ) : (
            <IoChevronForward className="text-text-50 shrink-0" />
          )}
        </button>
      </Collapsible.Trigger>

      <Collapsible.Content className="mt-4 overflow-hidden">
        {children}
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
