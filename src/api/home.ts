import { ApiResponse } from "@/types/api"
import axiosInstance from "./axiosInstance"
import type { HomeData } from "@/types/home"

export const getHomeData = async () => {
    const res = await axiosInstance.get<ApiResponse<HomeData>>("/home")
    return res.data.data
}