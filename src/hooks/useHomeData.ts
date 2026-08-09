import { useQuery } from "@tanstack/react-query";
import { getHomeData } from "@/api/home";

export function useHomeData() {
    return useQuery({
        queryKey: ["home"],
        queryFn: getHomeData,
    });
}