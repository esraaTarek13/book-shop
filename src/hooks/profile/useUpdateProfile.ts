"use client";

import { useQueryClient, useMutation } from "@tanstack/react-query"
import type { AxiosError } from "axios"
import { toast } from "sonner"
import { updateProfileData } from "@/api/profile"
import type { ApiErrorResponse } from "@/types/api"
import { useAuthStore } from "@/store/authStore";

export const useUpdateProfile = () => {
    const queryClient = useQueryClient()
    const updateUser = useAuthStore((state) => state.updateUser);

    return useMutation({
        mutationFn: updateProfileData,
        onSuccess: (response) => {
            updateUser(response);
            queryClient.invalidateQueries({ queryKey: ["profile"] })
            toast.success("Profile updated successfully")
        },
        onError: (error: AxiosError<ApiErrorResponse>) => {
            const message = error.response?.data?.message || "Failed to update profile"
            toast.error(message)
        },
    })
}