import axiosInstance from "./axiosInstance"
import type { ApiResponse } from "@/types/api"
import type { Profile, UpdateProfileValues } from "@/types/profile"

export const getProfileData = async () => {
    const res = await axiosInstance.get<ApiResponse<Profile>>("/profile")
    return res.data.data
}

export const updateProfileData = async (values: UpdateProfileValues) => {
    const res = await axiosInstance.post<ApiResponse<Profile>>("/profile/update", values)
    return res.data.data
}