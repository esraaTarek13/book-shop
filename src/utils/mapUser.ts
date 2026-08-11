import { PersonInfo } from "@/types/person";

export const mapUserData = (raw: PersonInfo) => ({
    name: `${raw.first_name} ${raw.last_name}`.trim(),
    email: raw.email,
    image: raw.image === "default" ? null : raw.image,
});