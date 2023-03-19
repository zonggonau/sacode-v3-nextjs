import Featuressection from "@/components/home/featuressection";
import Startsection from "@/components/home/startsection";
import ScreenshotsSection from "@/components/home/screenshotssection";
import WorkSection from "@/components/home/worksection";

export default function Home() {
  return (
    <div>
      <Startsection />
      <Featuressection />
      <WorkSection />
      <ScreenshotsSection />
    </div>
  );
}
