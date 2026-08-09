"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import { forgetPasswordApi } from "@/api/auth";
import type { ForgetPasswordValues } from "@/types/auth";
import { useResetPasswordStore } from "@/store/resetPasswordStore";
import { ApiErrorResponse } from "@/types/api";

export const useForgetPassword = () => {
  const router = useRouter();
  const setEmail = useResetPasswordStore((state) => state.setEmail);

  return useMutation({
    mutationFn: forgetPasswordApi,
    onSuccess: (_data, variables: ForgetPasswordValues) => {
      toast.success("OTP sent to your email");
      setEmail(variables.email);
      router.replace("/verify-otp");
    },
    onError: (error: AxiosError<ApiErrorResponse>) => {
      const message = error.response?.data?.message || "Something went wrong";
      toast.error(message);
    },
  });
};