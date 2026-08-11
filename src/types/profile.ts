import { PersonInfo } from "./person";

export type Profile = PersonInfo;

export type UpdateProfileValues = Partial<
    Pick<Profile, "first_name" | "last_name" | "email" | "phone" | "address">
>;