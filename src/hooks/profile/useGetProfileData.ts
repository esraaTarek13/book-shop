"use client";

import { getProfileData } from "@/api/profile"
import { useQuery } from "@tanstack/react-query"

export const useGetProfileData = () => {
    return useQuery({
        queryKey: ["profile"],
        queryFn: getProfileData,
    })
}