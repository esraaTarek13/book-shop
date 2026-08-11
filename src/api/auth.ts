import axiosInstance from "./axiosInstance";
import type { ApiResponse } from "@/types/api";
import type {
    RegisterValues,
    LoginValues,
    ForgetPasswordValues,
    ResetPasswordValues,
    LoginResponse,
    RegisterResponse,
} from "@/types/auth";

export const registerApi = async (values: RegisterValues) => {
    const res = await axiosInstance.post<ApiResponse<RegisterResponse>>("/register", values);
    return res.data.data;
};

export const loginApi = async (values: LoginValues) => {
    const res = await axiosInstance.post<ApiResponse<LoginResponse>>("/login", values);
    return res.data.data;
};

export const forgetPasswordApi = async (values: ForgetPasswordValues) => {
    const res = await axiosInstance.post<ApiResponse<never[]>>("/forget-password", values);
    return res.data.message; 
};

export const resetPasswordApi = async (values: ResetPasswordValues) => {
    const res = await axiosInstance.post<ApiResponse<never[]>>("/reset-password", values);
    return res.data.message;
};

export const logoutApi = async () => {
    const res = await axiosInstance.post<ApiResponse<never[]>>("/logout");
    return res.data.message;
};