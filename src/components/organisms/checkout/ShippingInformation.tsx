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
          <FormField name="name" label="Name" placeholder="e.g. John Smith" />
          <FormField
            name="phone"
            label="Phone"
            type="tel"
            placeholder="e.g. 01026487587"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            name="email"
            label="Email"
            type="email"
            placeholder="e.g. Johnsmith@gmail.com"
          />
          <FormField name="city" label="City" placeholder="e.g. Maadi" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField name="state" label="State" placeholder="e.g. Cairo" />
          <FormField name="zip" label="Zip" placeholder="e.g. 11311" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField name="government" label="Government" placeholder="e.g. Cairo" />
          <FormField
            name="address"
            label="Address"
            placeholder="e.g. 12 Road 9, Building 4, Apartment 3"
          />
        </div>
      </div>
    </section>
  );
}
