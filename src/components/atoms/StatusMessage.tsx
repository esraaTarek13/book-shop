import Text from "./Text";

type StatusMessageProps = {
  content: string;
  variant?: "error" | "empty";
};

export default function StatusMessage({
  content,
  variant = "error",
}: StatusMessageProps) {
  return (
    <div
      role={variant === "error" ? "alert" : "status"}
      className="w-full h-30 flex justify-center items-center"
    >
      <Text
        as="p"
        size="sm"
        color={variant === "error" ? "danger" : "accent"}
        className="text-center"
      >
        {content}
      </Text>
    </div>
  );
}
