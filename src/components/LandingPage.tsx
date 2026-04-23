import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import MetricsSection from "./MetricsSection";
import StrategicRoadmap from "./StrategicRoadmap";
import AchievementsSection from "./AchievementsSection";
import ChallengesSection from "./ChallengesSection";
import ComparisonSection from "./ComparisonSection";
import StrategicDirection from "./StrategicDirection";
import Vision2045Section from "./Vision2045Section";
import CalloutSection from "./CalloutSection";
import DisclosureSection from "./DisclosureSection";
import AboutUsSection from "./AboutUsSection";
import Footer from "./Footer";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MetricsSection />
        <StrategicRoadmap />
        <AchievementsSection />
        <ChallengesSection />
        <ComparisonSection />
        <StrategicDirection />
        <Vision2045Section />
        <DisclosureSection />
        <CalloutSection />
        <AboutUsSection />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
