import { ResetPasswordState } from "@/types/auth";
import { create } from "zustand";

export const useResetPasswordStore = create<ResetPasswordState>((set) => ({
  email: "",
  otp: "",

  setEmail: (email) => set({ email }),
  setOtp: (otp) => set({ otp }),
  reset: () => set({ email: "", otp: "" }),
}));