import * as Yup from "yup";
import type { UpdateProfileValues } from "@/types/profile";

export const profileSchema: Yup.ObjectSchema<UpdateProfileValues> = Yup.object({
    first_name: Yup.string()
        .trim()
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name is too long")
        .matches(/^[a-zA-Z\u0600-\u06FF\s]+$/, "First name must contain letters only"),

    last_name: Yup.string()
        .trim()
        .min(2, "Last name must be at least 2 characters")
        .max(50, "Last name is too long")
        .matches(/^[a-zA-Z\u0600-\u06FF\s]+$/, "Last name must contain letters only"),

    email: Yup.string()
        .trim()
        .email("Invalid email address"),

    phone: Yup.string()
        .trim()
        .matches(/^[0-9+\s-]{7,15}$/, "Invalid phone number")
        .nullable(),

    address: Yup.string()
        .trim()
        .min(5, "Address is too short")
        .max(200, "Address is too long")
        .nullable(),

});