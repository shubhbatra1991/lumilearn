import React from "react";
import CustomCursor from "../components/landing/CustomCursor";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import MarqueeSection from "../components/landing/MarqueeSection";
import ShowreelSection from "../components/landing/ShowreelSection";
import LogoStrip from "../components/landing/LogoStrip";
import CoursesSection from "../components/landing/CoursesSection";
import AccordionFeatures from "../components/landing/AccordionFeatures";
import VideoLessonsSection from "../components/landing/VideoLessonsSection";
import TestSeriesSection from "../components/landing/TestSeriesSection";
import ScorecardSection from "../components/landing/ScorecardSection";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <ShowreelSection />
      <LogoStrip />
      <CoursesSection />
      <AccordionFeatures />
      <VideoLessonsSection />
      <TestSeriesSection />
      <ScorecardSection />
      <CTASection />
      <Footer />
    </div>
  );
}