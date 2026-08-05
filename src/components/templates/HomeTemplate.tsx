import BackgroundBanner from "../atoms/BackgroundBanner";
import SearchBar from "../molecules/SearchBar";

export default function HomeTemplate() {
  return (
    <>
      <BackgroundBanner height="h-[80vh]">
        <SearchBar />
      </BackgroundBanner>
    </>
  );
}
