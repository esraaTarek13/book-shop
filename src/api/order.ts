import axiosInstance from "./axiosInstance";
import type { ApiResponse } from "@/types/api";
import type { OrderDetailsResponse, ApplyCouponValues } from "@/types/order";

export const getOrderDetailsApi = async () => {
    const res = await axiosInstance.post<ApiResponse<OrderDetailsResponse>>("/order");
    return res.data.data;
};

export const applyCouponApi = async (values: ApplyCouponValues) => {
    const res = await axiosInstance.post<ApiResponse<never[]>>("/order/apply-coupon", values);
    return res.data;
};