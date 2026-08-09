import axiosInstance from "./axiosInstance"

export const getHomeData = async () => {
    const res = await axiosInstance.get("/home")
    return res.data.data
}