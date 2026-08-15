import Text from "@/components/atoms/Text";
import FormField from "@/components/molecules/FormField";

export default function ShippingInformation() {
  return (
    <section className="bg-surface rounded-lg p-6 md:p-8 space-y-4">
      <Text as="h2" weight="semibold" size="lg">
        Shipping information
      </Text>

      <div className="space-y-4 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField name="name" label="Name" placeholder="John Smith" />
          <FormField
            name="phone"
            label="Phone"
            type="tel"
            placeholder="123456789"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            name="email"
            label="Email"
            type="email"
            placeholder="Johnsmith@gmail.com"
          />
          <FormField name="city" label="City" placeholder="Maadi" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField name="state" label="State" placeholder="Cairo" />
          <FormField name="zip" label="Zip" placeholder="11311" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField name="government" label="Government" placeholder="Cairo" />
          <FormField
            name="address"
            label="Address"
            placeholder="Maadi, Cairo, Egypt."
          />
        </div>
      </div>
    </section>
  );
}
