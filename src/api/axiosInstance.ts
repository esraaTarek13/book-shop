import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { useAuthStore } from "@/store/authStore";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Pages that require authentication — only these should trigger a redirect on 401
const PROTECTED_PATHS = ["/checkout", "/orders", "/profile", "/wishlist", "/cart"];

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
  (error: AxiosError<{ message?: string }>) => {
    const status = error.response?.status;
    const url = error.config?.url ?? "";

    // Don't treat 401s from auth endpoints (login, register, etc.) as "session expired"
    const isAuthRoute = [
      "/login",
      "/register",
      "/forget-password",
      "/reset-password",
    ].some((path) => url.includes(path));

    const currentPath = window.location.pathname;

    // Only redirect if the user is currently on a page that actually requires auth.
    // Prevents public pages (e.g. Home) from bouncing to /login just because
    // a background request (cart, wishlist, etc.) returned 401 with no token.
    const isOnProtectedPage = PROTECTED_PATHS.some((path) =>
      currentPath.startsWith(path),
    );

    if (status === 401 && !isAuthRoute) {
      useAuthStore.getState().logout();

      if (isOnProtectedPage && currentPath !== "/login") {
        toast.error("Session expired, please login again");
        window.location.href = "/login";
      }
    } else if (status === 403) {
      toast.error("You don't have permission to access this");
    } else if (status && status >= 500) {
      toast.error("Server error, please try again later");
    } else if (!error.response) {
      toast.error("Network error, check your connection");
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;