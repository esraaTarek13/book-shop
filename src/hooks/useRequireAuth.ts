"use client";

import { useState } from "react";
import { useAuthStore } from "@/store/authStore";

// Guards an action behind authentication; opens the auth modal if no user is logged in
export function useRequireAuth() {
    const [showAuthModal, setShowAuthModal] = useState(false);
    const user = useAuthStore((state) => state.user);

    const requireAuth = (action: () => void) => {
        if (!user) {
            setShowAuthModal(true);
            return;
        }
        action();
    };

    return { showAuthModal, setShowAuthModal, requireAuth };
}