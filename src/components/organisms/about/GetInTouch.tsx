import Text from "@/components/atoms/Text";
import ContactForm from "./ContactForm";
import { CONTACT_INFO } from "@/constants/contactInfo";
import InfoRow from "@/components/molecules/InfoRow";

export default function GetInTouch() {
  return (
    <section className="relative bg-card bg-[url(/images/contact-bg.png)] bg-cover bg-center bg-no-repeat">
      <div className={`custom-container py-14 md:py-20 text-text-light!`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15 items-start">
          <div>
            <Text
              as="h2"
              weight="bold"
              size="4xl"
              color="light"
              className="mb-2 md:mb-4"
            >
              Have a Questions?
              <br />
              Get in Touch
            </Text>
            <Text
              as="p"
              size="lg"
              color="lightMuted"
              className="mb-10 md:mb-15"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </Text>

            <ContactForm />
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            {CONTACT_INFO.map(({ icon, label }) => (
              <InfoRow key={label} icon={icon} label={label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
