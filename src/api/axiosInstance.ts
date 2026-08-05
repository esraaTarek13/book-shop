import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { useAuthStore } from "@/store/authStore";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      useAuthStore.getState().logout();
      toast.error("Session expired, please login again");

      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    } else if (status === 403) {
      toast.error("You don't have permission to access this");
    } else if (status >= 500) {
      toast.error("Server error, please try again later");
    } else if (!error.response) {
      toast.error("Network error, check your connection");
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;