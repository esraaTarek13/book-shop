import { create } from "zustand";
import { persist } from "zustand/middleware";
import Cookies from "js-cookie";
import type { AuthState } from "@/types/auth";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      hasHydrated: false,

      setUser: (user, token) => {
        Cookies.set("token", token, {
          expires: 7,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
        });
        set({ user });
      },

      updateUser: (user) => {
        set({ user });
      },

      logout: () => {
        Cookies.remove("token");
        set({ user: null });
      },

      setHasHydrated: (state) => {
        set({ hasHydrated: state });
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ user: state.user }),
      skipHydration: true,
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);