import * as yup from "yup";

export const registerSchema = yup.object({
    first_name: yup
        .string()
        .required("First name is required")
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name must be at most 50 characters")
        .matches(/^[\p{L}\s'-]+$/u, "First name must contain letters only"),
    last_name: yup
        .string()
        .required("Last name is required")
        .min(2, "Last name must be at least 2 characters")
        .max(50, "Last name must be at most 50 characters")
        .matches(/^[\p{L}\s'-]+$/u, "Last name must contain letters only"),
    email: yup
        .string()
        .required("Email is required")
        .email("Please enter a valid email"),
    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters"),
    password_confirmation: yup
        .string()
        .required("Please confirm your password")
        .oneOf([yup.ref("password")], "Passwords must match"),
    checkbox: yup
        .boolean()
        .oneOf([true], "You must agree to the Terms & Conditions"),
});