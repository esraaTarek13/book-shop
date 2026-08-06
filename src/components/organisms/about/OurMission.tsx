import Text from "@/components/atoms/Text";
import FeatureCard from "@/components/molecules/FeatureCard";
import { OUR_MISSION } from "@/constants/ourMission";

export default function OurMission({ className }: { className?: string }) {
  return (
    <section className={`custom-container py-16 md:py-25 ${className}`}>
      <Text as="h2" weight="bold" size="4xl" className="text-center mb-10 md:mb-15">
        Our Mission
      </Text>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {OUR_MISSION.map((item) => (
          <FeatureCard
            key={item.title}
            title={item.title}
            description={item.description}
            href={item.href}
            linkText={item.linkText}
            disabled={item.disabled}
            className="bg-white rounded-xl shadow-sm p-6 space-y-3"
          />
        ))}
      </div>
    </section>
  );
}
