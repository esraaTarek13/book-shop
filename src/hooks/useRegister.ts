"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import { registerApi } from "@/api/authApi";
import { ApiErrorResponse } from "@/types/api";

export const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: registerApi,
    onSuccess: () => {
      toast.success("Account created successfully, please login");
      router.replace("/login");
    },
    onError: (error: AxiosError<ApiErrorResponse>) => {
      const message = error.response?.data?.message || "Registration failed";
      toast.error(message);
    },
  });
};