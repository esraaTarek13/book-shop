import type { IconType } from "react-icons";
import { LuUser, LuClock, LuMapPin, LuInfo, LuLogOut } from "react-icons/lu";

export interface ProfileMenuLink {
    label: string;
    href?: string;
    icon: IconType;
    isLogout?: boolean;
}

export const PROFILE_MENU_LINKS: ProfileMenuLink[] = [
    { label: "Profile", href: "/profile", icon: LuUser },
    { label: "Order History", href: "/orders", icon: LuClock },
    { label: "Address", href: "#", icon: LuMapPin },
    { label: "Help", href: "/about", icon: LuInfo },
    { label: "Log Out", icon: LuLogOut, isLogout: true },
];