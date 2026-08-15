import axiosInstance from "./axiosInstance";
import type { ApiResponse } from "@/types/api";
import type { OrderDetailsResponse, ApplyCouponValues, CheckoutValues, CheckoutResponse } from "@/types/order";

export const getOrderDetailsApi = async () => {
    const res = await axiosInstance.post<ApiResponse<OrderDetailsResponse>>("/order");
    return res.data.data;
};

export const applyCouponApi = async (values: ApplyCouponValues) => {
    const res = await axiosInstance.post<ApiResponse<never[]>>("/order/apply-coupon", values);
    return res.data;
};

export const checkoutApi = async (values: CheckoutValues) => {
    const res = await axiosInstance.post<ApiResponse<CheckoutResponse>>(
        "/order/checkout",
        values
    );
    return res.data.data;
};