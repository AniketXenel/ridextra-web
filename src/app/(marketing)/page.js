

import HeroSec from "@/component/HeroSec";
import CoreFeatures from "@/component/CoreFeatures";
import DownloadSection from "@/component/DowloadSection";
import HowItWorks from "@/component/HowItWorks";
import MainPage from "@/component/MainPage";
import AboutUs from "@/component/AboutUs";
// import HomeWrapper from "@/component/HomeWrapper";

export default function Marketing() {
    return (
      <main>
        <HeroSec />
    <div className="scroll-content">
  <AboutUs />
  <CoreFeatures />
  <HowItWorks />
  <DownloadSection />
</div>

           
      </main>
    );
}