import BackgroundBanner from "../atoms/BackgroundBanner";
import SearchBar from "../molecules/SearchBar";
import FeaturesBar from "../organisms/FeaturesBar";

export default function HomeTemplate() {
  return (
    <>
      <BackgroundBanner height="h-[80vh]">
        <SearchBar />
      </BackgroundBanner>

      <FeaturesBar />
    </>
  );
}
