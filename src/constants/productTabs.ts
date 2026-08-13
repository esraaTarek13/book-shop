export type TabKey = "details" | "recommended";

export const PRODUCT_TABS: { key: TabKey; label: string }[] = [
    { key: "details", label: "Product Details" },
    { key: "recommended", label: "Recomended For You" },
];