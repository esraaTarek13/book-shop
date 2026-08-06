import { IoCallOutline, IoMailOutline, IoLocationOutline } from "react-icons/io5";
import type { IconType } from "react-icons";

export interface ContactInfoItem {
    icon: IconType;
    label: string;
}

export const CONTACT_INFO: ContactInfoItem[] = [
    { icon: IoCallOutline, label: "01123456789" },
    { icon: IoMailOutline, label: "Example@gmail.com" },
    {
        icon: IoLocationOutline,
        label: "adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,",
    },
];