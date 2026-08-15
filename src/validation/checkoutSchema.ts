import * as Yup from "yup";

export const checkoutSchema = Yup.object().shape({
    name: Yup.string().trim().required("Name is required").max(255, "Name is too long"),

    phone: Yup.string()
        .trim()
        .required("Phone is required")
        .matches(/^\d+$/, "Phone must contain digits only")
        .min(10, "Phone must be at least 10 digits")
        .max(15, "Phone must be at most 15 digits"),

    email: Yup.string()
        .trim()
        .required("Email is required")
        .email("Enter a valid email address")
        .max(255, "Email is too long"),

    city: Yup.string().trim().required("City is required").max(255, "City is too long"),

    state: Yup.string().trim().required("State is required").max(255, "State is too long"),

    zip: Yup.string()
        .trim()
        .required("Zip code is required")
        .matches(/^\d{5}$/, "Zip code must be exactly 5 digits"),

    address: Yup.string()
        .trim()
        .required("Address is required")
        .max(255, "Address is too long"),

    payment_method: Yup.number()
        .required("Payment method is required")
        .oneOf([1, 2, 3], "Select a valid payment method"),

    government: Yup.string()
        .trim()
        .required("Government is required")
        .max(255, "Government is too long"),

    note: Yup.string().trim().max(255, "Note is too long").optional(),

    coupon_code: Yup.string().trim().max(20, "Coupon code is too long").optional(),

    coupon_value: Yup.number()
        .max(100, "Coupon value cannot exceed 100")
        .optional(),
});

export type CheckoutFormValues = Yup.InferType<typeof checkoutSchema>;