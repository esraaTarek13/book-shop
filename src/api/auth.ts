import axiosInstance from "./axiosInstance";
import type {
    RegisterValues,
    LoginValues,
    ForgetPasswordValues,
    ResetPasswordValues,
} from "@/types/auth";

export const registerApi = async (values: RegisterValues) => {
    const res = await axiosInstance.post("/register", values);
    return res.data.data;
};

export const loginApi = async (values: LoginValues) => {
    const res = await axiosInstance.post("/login", values);
    return res.data.data;
};

export const forgetPasswordApi = async (values: ForgetPasswordValues) => {
    const res = await axiosInstance.post("/forget-password", values);
    return res.data.data;
};

export const resetPasswordApi = async (values: ResetPasswordValues) => {
    const res = await axiosInstance.post("/reset-password", values);
    return res.data.data;
};

export const logoutApi = async () => {
    const res = await axiosInstance.post("/logout");
    return res.data.data;
};