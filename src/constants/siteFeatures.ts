import { IoCardOutline, IoHeadsetOutline } from "react-icons/io5";
import type { IconType } from "react-icons";
import { FaArrowsRotate, FaTruckFast } from "react-icons/fa6";

export interface FeatureItem {
    icon: IconType;
    title: string;
    description: string;
}

export const SITE_FEATURES: FeatureItem[] = [
    {
        icon: FaTruckFast,
        title: "Fast & Reliable Shipping",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
    },
    {
        icon: IoCardOutline,
        title: "Secure Payment",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
    },
    {
        icon: FaArrowsRotate,
        title: "Easy Returns",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
    },
    {
        icon: IoHeadsetOutline,
        title: "24/7 Customer Support",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
    },
];