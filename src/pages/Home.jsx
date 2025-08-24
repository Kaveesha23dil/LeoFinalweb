import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import StarEffect from "../components/StarEffect";
import Navbar from "../sections/Navbar";
import HeroSection from "../sections/HeroSection";
import LegacySection from "../sections/LegacySection";
import StatsSection from "../sections/StatsSection";
import LeadershipSection from "../sections/LeadershipSection";
import LatestProjects from "../sections/LatestProjects";
import Footer from "../components/Footer";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Loading
        variant="ripple-wave"
        fullscreen
        text="Welcome to LEO Club of SLTC"
        fontSize="1.5rem"
        size="lg"
      />
    );
  }

  return (
    <>
      <StarEffect />
      <Navbar />
      <HeroSection />
      <LegacySection />
      <StatsSection />
      <LeadershipSection />
      <LatestProjects />
      <Footer />
    </>
  );
}

export default Home;
