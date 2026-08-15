"use client";

import { useCheckout } from "./useCheckout";
import { checkoutSchema } from "@/validation/checkoutSchema";
import type { CheckoutValues } from "@/types/order";

const initialValues: CheckoutValues = {
    name: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    zip: "",
    address: "",
    payment_method: 0,
    government: "",
    note: "",
    coupon_code: "",
    coupon_value: undefined,
};

export function useCheckoutForm() {
    const { mutate, isPending } = useCheckout();

    const handleSubmit = (values: CheckoutValues) => {
        mutate(values);
    };

    return {
        initialValues,
        validationSchema: checkoutSchema,
        handleSubmit,
        isPending,
    };
}