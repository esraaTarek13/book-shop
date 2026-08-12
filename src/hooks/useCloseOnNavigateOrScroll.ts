"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Closes an open dropdown/menu on route change or scroll (touch devices)
export function useCloseOnNavigateOrScroll(
    isOpen: boolean,
    onClose: () => void
) {
    const pathname = usePathname();

    // Close on route change
    useEffect(() => {
        onClose();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    // Close on scroll while open
    useEffect(() => {
        if (!isOpen) return;

        const handleScroll = () => onClose();

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isOpen, onClose]);
}