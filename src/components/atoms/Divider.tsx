interface DividerProps {
  label?: string;
}

export default function Divider({ label }: DividerProps) {
  if (!label) {
    return <hr className="border-card-border" />;
  }

  return (
    <div className="flex items-center gap-3">
      <hr className="flex-1 border-card-border" />
      <span className="text-xs text-text-50">{label}</span>
      <hr className="flex-1 border-card-border" />
    </div>
  );
}
