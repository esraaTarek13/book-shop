"use client";
import { MouseEvent, useState } from "react";
import { useUpdateProfile } from "@/hooks/profile/useUpdateProfile";
import { mapUserData } from "@/mappers/mapUser";
import { mapProfileFormValues } from "@/mappers/mapProfileFormValues";
import type { Profile } from "@/types/profile";

export function useProfileForm(profileData: Profile) {
    const user = mapUserData(profileData);
    const initialValues = mapProfileFormValues(profileData);
    const { mutate, isPending } = useUpdateProfile();
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsEditing(true);
    };

    const handleSubmit = (
        values: typeof initialValues,
        { setSubmitting }: { setSubmitting: (v: boolean) => void }
    ) => {
        mutate(values, {
            onSuccess: () => {
                setIsEditing(false);
                setSubmitting(false);
            },
            onError: () => setSubmitting(false),
        });
    };

    return {
        user,
        initialValues,
        isEditing,
        isPending,
        handleEditClick,
        handleSubmit,
    };
}