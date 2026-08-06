import { ContactPayload } from "@/types/about"
import axiosInstance from "./axiosInstance"

export const contactApi = async (payload: ContactPayload) => {
    const res = await axiosInstance.post("/contacts/store", payload)
    return res.data
}