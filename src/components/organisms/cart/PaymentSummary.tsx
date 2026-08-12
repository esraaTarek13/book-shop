import LinkButton from "@/components/atoms/LinkButton";
import Text from "@/components/atoms/Text";
import StatusMessage from "@/components/atoms/StatusMessage";
import PromoCodeField from "@/components/organisms/PromoCodeField";
import SummaryTotals from "@/components/molecules/SummaryTotals";
import PaymentSummarySkeleton from "@/components/molecules/skeletons/PaymentSummarySkeleton";
import { useOrderDetails } from "@/hooks/order/useOrderDetails";

export default function PaymentSummary() {
  const { data: order, isPending, isError } = useOrderDetails();

  if (isPending) return <PaymentSummarySkeleton />;

  if (isError)
    return (
      <StatusMessage
        variant="error"
        content="Failed to load payment summary."
      />
    );

  return (
    <section className="custom-container bg-card-10 py-6 md:py-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
        <div className="space-y-6 lg:space-y-15">
          <div className="w-full max-w-lg space-y-1 lg:space-y-2">
            <Text as="h2" weight="bold" size="2xl">
              Payment Summary
            </Text>
            <Text as="p" color="muted" size="base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </Text>
          </div>

          <PromoCodeField />
        </div>

        <div className="flex-1 space-y-6 lg:space-y-8">
          <SummaryTotals
            subTotal={order?.subTotal ?? 0}
            tax={order?.tax ?? 0}
            total={order?.total ?? 0}
          />

          <div className="flex flex-col gap-3">
            <LinkButton href="/checkout" className="w-full!">
              Check out
            </LinkButton>
            <LinkButton href="/books" variant="outline" className="w-full! bg-transparent!">
              Keep Shopping
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
