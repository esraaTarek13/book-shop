import * as yup from "yup";

export const OTP_LENGTH = 6;

export const otpSchema = yup.object({
  otp: yup
    .string()
    .required("Please enter the code sent to your email")
    .matches(/^\d+$/, "Code must contain numbers only")
    .length(OTP_LENGTH, `Please enter all ${OTP_LENGTH} digits`),
});