import { useQuery } from "@tanstack/react-query";
import { getOrderDetailsApi } from "@/api/order";

export function useOrderDetails() {
    return useQuery({
        queryKey: ["order"],
        queryFn: getOrderDetailsApi,
    });
}