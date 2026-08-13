import Text from "@/components/atoms/Text";
import type { BookDetailInfo } from "@/types/book-detail";
import { mapProductDetailRows } from "@/mappers/mapProductDetailRows";

interface ProductDetailsContentProps {
  book: BookDetailInfo;
}

export default function ProductDetailsContent({
  book,
}: ProductDetailsContentProps) {
  const rows = mapProductDetailRows(book);

  return (
    <div className="space-y-3">
      {rows.map((row) => (
        <div key={row.label} className="flex gap-1">
          <Text as="span" weight="bold" size="sm">
            {row.label}:
          </Text>
          <Text as="span" color="muted" size="sm">
            {row.value}
          </Text>
        </div>
      ))}
    </div>
  );
}
