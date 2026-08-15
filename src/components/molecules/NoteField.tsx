import Text from "@/components/atoms/Text";
import FormField from "@/components/molecules/FormField";

export default function NoteField() {
  return (
    <section className="bg-surface rounded-lg p-6 md:p-8 space-y-4">
      <Text as="h2" weight="semibold" size="lg">
        Note
      </Text>

      <FormField
        name="note"
        label="Note"
        srOnly="sr-only"
        type="textarea"
        placeholder="Add note"
        rows={4}
      />
    </section>
  );
}
