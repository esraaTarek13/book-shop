import type { ContactPayload, Contact } from "@/types/about"
import type { ApiResponse } from "@/types/api"
import axiosInstance from "./axiosInstance"

export const contactApi = async (payload: ContactPayload) => {
    const res = await axiosInstance.post<ApiResponse<Contact>>("/contacts/store", payload)
    return res.data.data
}