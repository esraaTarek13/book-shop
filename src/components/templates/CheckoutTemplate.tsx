import BackgroundBanner from "../atoms/BackgroundBanner";

export default function CheckoutTemplate() {
  return (
    <>
      <BackgroundBanner height="h-[20vh]" />

      <section className="custom-container py-12 md:py-16">
        <div className="flex flex-col-reverse lg:flex-row gap-6"></div>
      </section>
    </>
  );
}
