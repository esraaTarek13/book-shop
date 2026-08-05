"use client";

import { useRouter } from "next/navigation";
import { useResetPasswordStore } from "@/store/resetPasswordStore";

export function useVerifyOtp() {
  const router = useRouter();
  const setOtp = useResetPasswordStore((state) => state.setOtp);

  const handleVerify = (otp: string) => {
    setOtp(otp);
    router.replace("/reset-password");
  };

  return { handleVerify };
}