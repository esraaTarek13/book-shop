import { SITE_FEATURES } from "@/constants/siteFeatures";
import FeatureCard from "../molecules/FeatureCard";

export default function FeaturesBar({ className }: { className?: string }) {
  return (
    <section
      className={`custom-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-16 md:py-25 ${className}`}
    >
      {SITE_FEATURES.map((feature) => (
        <FeatureCard
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          className="space-y-2"
        />
      ))}
    </section>
  );
}
