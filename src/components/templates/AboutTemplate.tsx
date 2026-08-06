import BackgroundBanner from "../atoms/BackgroundBanner";
import Text from "../atoms/Text";
import GetInTouch from "../organisms/about/GetInTouch";
import OurMission from "../organisms/about/OurMission";
import FeaturesBar from "../organisms/FeaturesBar";

export default function AboutTemplate() {
  return (
    <>
      <BackgroundBanner height="h-[80vh]" overlayColor="bg-[#000000CC]">
        <div className="w-[90vw] md:w-[40vw] space-y-2 md:space-y-4">
          <Text
            as="h2"
            weight="bold"
            size="4xl"
            color="light"
            className="text-center min-w-fit"
          >
            About Bookshop
          </Text>
          <Text as="p" size="2xl" color="light" className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </Text>
        </div>
      </BackgroundBanner>

      <OurMission />
      <GetInTouch />
      <FeaturesBar />
    </>
  );
}
