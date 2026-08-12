export interface SummaryRow {
    label: string;
    value: string;
    highlight?: boolean;
}

interface MapSummaryTotalsParams {
    subTotal: number;
    shipping?: string;
    tax: number;
}

export function mapSummaryTotals({
    subTotal,
    shipping = "Free Delivery",
    tax,
}: MapSummaryTotalsParams): SummaryRow[] {
    return [
        { label: "Subtotal", value: `$ ${subTotal}` },
        { label: "Shipping", value: shipping, highlight: true },
        { label: "Tax", value: `$ ${tax}` },
    ];
}