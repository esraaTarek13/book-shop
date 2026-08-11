import { PersonInfo } from "@/types/person";

export interface User extends PersonInfo {
  id: number;
  email_verified_at?: string | null;
  status?: number;
  created_at?: string;
  updated_at?: string;
}

export interface AuthState {
  user: User | null;
  hasHydrated: boolean;
  setUser: (user: User, token: string) => void;
  logout: () => void;
  setHasHydrated: (state: boolean) => void;
}

export interface RegisterValues {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface LoginValues {
  email: string;
  password: string;
}

export interface ForgetPasswordValues {
  email: string;
}

export interface ResetPasswordValues {
  email: string;
  otp: string;
  password: string;
  password_confirmation: string;
}

export interface ResetPasswordState {
  email: string;
  otp: string;
  setEmail: (email: string) => void;
  setOtp: (otp: string) => void;
  reset: () => void;
}

// ==== Responses ====

export interface LoginResponse {
  user: User;
  token: string;
}

export interface RegisterResponse {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  created_at: string;
  updated_at: string;
}