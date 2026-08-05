import { User } from "@/types/auth";

export const mapUserData = (raw: User) => ({
    name: `${raw.first_name} ${raw.last_name}`.trim(),
    email: raw.email,
    image: raw.image === "default" ? null : raw.image,
});