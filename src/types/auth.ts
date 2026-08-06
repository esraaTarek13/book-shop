export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  image?: string | null;
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