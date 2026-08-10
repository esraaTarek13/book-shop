"use client";

import { useQuery } from "@tanstack/react-query";
import { getCartData } from "@/api/cart";

export const useGetCartData = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: getCartData,
  });
};