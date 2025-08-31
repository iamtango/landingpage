"use client";
import React from "react";
import Home from "./Home";
import GlobeScrollAnimation from "./GlobeScrollAnimation";
import SkillBox from "./SkillBox";
import StackedCardsSection from "./StackedCardsSection";
import ZoomSection from "./ZoomSection";

const LandingPage = () => {
  return (
    <>
      <Home />
      <ZoomSection />
      <GlobeScrollAnimation />
      <SkillBox />
      <StackedCardsSection />
    </>
  );
};

export default LandingPage;
