import { FaFacebook, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

export const SOCIAL_LINKS = [
    { href: "https://facebook.com", icon: FaFacebook, label: "Facebook" },
    { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
    { href: "https://youtube.com", icon: FaYoutube, label: "YouTube" },
    { href: "https://twitter.com", icon: FaXTwitter, label: "X" },
] as const;