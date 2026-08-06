export interface MissionItem {
    title: string;
    description: string;
    href?: string;
    linkText: string;
    disabled?: boolean;
}

export const OUR_MISSION: MissionItem[] = [
    {
        title: "Quality Selection",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.Quality Selection Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,",
        href: "#",
        linkText: "View More",
    },
    {
        title: "Exceptional Service",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.Quality Selection Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,",
        href: "#",
        linkText: "View More",
    },
    {
        title: "Set Up Stores",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.Quality Selection Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,",
        linkText: "Soon",
        disabled: true,
    },
];