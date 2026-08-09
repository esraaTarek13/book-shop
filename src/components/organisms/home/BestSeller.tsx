import StatusMessage from "@/components/atoms/StatusMessage";
import LinkButton from "@/components/atoms/LinkButton";
import Text from "@/components/atoms/Text";
import ImageMarquee from "@/components/molecules/ImageMarquee";
import BestSellerSkeleton from "@/components/molecules/skeletons/BestSellerSkeleton";

interface BestSellerProps {
  images: string[];
  isPending?: boolean;
  isError?: boolean;
  className?: string;
}

export default function BestSeller({
  images,
  isPending,
  isError,
  className,
}: BestSellerProps) {
  if (isError)
    return (
      <StatusMessage variant="error" content="Failed to load Best Sellers." />
    );

  return (
    <section className={`bg-card py-16 md:py-25 overflow-hidden ${className}`}>
      <div className="custom-container text-center mb-10">
        <Text as="h2" weight="bold" size="2xl" color="light" className="mb-2">
          Best Seller
        </Text>
        <Text
          as="p"
          size="base"
          color="lightMuted"
          className="max-w-xl mx-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
          leo.
        </Text>
      </div>

      {isPending ? (
        <BestSellerSkeleton />
      ) : images.length === 0 ? (
        <StatusMessage
          variant="empty"
          content="No best sellers available right now."
        />
      ) : (
        <ImageMarquee images={images} alt="Best seller book cover" />
      )}

      <div className="custom-container text-center mt-10 md:mt-15">
        <LinkButton href="/books" variant="primary">
          Shop now
        </LinkButton>
      </div>
    </section>
  );
}
