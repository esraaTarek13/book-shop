"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useOrderDetails } from "./useOrderDetails";
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

export function useCheckoutPage() {
    const router = useRouter();
    const { data, isPending: isOrderPending, isError } = useOrderDetails();
    const { mutate, isPending: isCheckoutPending } = useCheckout();

    const hasItems = (data?.books.length ?? 0) > 0;

    useEffect(() => {
        if (!isOrderPending && !hasItems) {
            router.replace("/books");
        }
    }, [isOrderPending, hasItems, router]);

    const handleSubmit = (values: CheckoutValues) => {
        mutate(values);
    };

    return {
        order: data,
        isOrderPending,
        isCheckoutPending,
        isError,
        hasItems,
        initialValues,
        validationSchema: checkoutSchema,
        handleSubmit,
    };
}