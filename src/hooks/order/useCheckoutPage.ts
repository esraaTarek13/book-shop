"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCheckout } from "./useCheckout";
import { checkoutSchema } from "@/validation/checkoutSchema";
import type { CheckoutValues } from "@/types/order";
import { useGetCartData } from "../cart/useGetCartData";

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

export function useCheckoutPage() {
    const router = useRouter();
    const { data, isPending: isCartPending, isError } = useGetCartData();
    const { mutate, isPending: isCheckoutPending } = useCheckout();

    const hasItems = (data?.cart.length ?? 0) > 0;

    useEffect(() => {
        if (!isCartPending && !hasItems) {
            router.replace("/books");
        }
    }, [isCartPending, hasItems, router]);

    const handleSubmit = (values: CheckoutValues) => {
        mutate(values);
    };

    return {
        cartData: data,
        isCartPending,
        isCheckoutPending,
        isError,
        hasItems,
        initialValues,
        validationSchema: checkoutSchema,
        handleSubmit,
    };
}