import Text from "@/components/atoms/Text";

interface MetaItem {
  label: string;
  value: string | number;
}

interface BookMetaListProps {
  items: MetaItem[];
  className?: string;
}

export default function BookMetaList({
  items,
  className = "",
}: BookMetaListProps) {
  return (
    <div className={`flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2 ${className}`}>
      {items.map(({ label, value }) => (
        <div key={label} >
          <Text as="p" size="sm" color="muted">
            {label}
          </Text>
          <Text as="p" size="sm" weight="semibold">
            {value}
          </Text>
        </div>
      ))}
    </div>
  );
}
