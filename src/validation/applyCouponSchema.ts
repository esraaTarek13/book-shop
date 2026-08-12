import * as Yup from "yup";

export const applyCouponSchema = Yup.object().shape({
    code: Yup.string()
        .trim()
        .required("Coupon code is required")
        .min(3, "Coupon code is too short")
        .max(50, "Coupon code is too long"),
});

export type ApplyCouponFormValues = Yup.InferType<typeof applyCouponSchema>;