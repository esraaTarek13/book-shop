"use client";

import { useQueryClient, useMutation } from "@tanstack/react-query"
import type { AxiosError } from "axios"
import { toast } from "sonner"
import { updateProfileData } from "@/api/profile"
import type { ApiErrorResponse } from "@/types/api"

export const useUpdateProfile = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: updateProfileData,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["profile"] })
            toast.success("Profile updated successfully")
        },
        onError: (error: AxiosError<ApiErrorResponse>) => {
            const message = error.response?.data?.message || "Failed to update profile"
            toast.error(message)
        },
    })
}