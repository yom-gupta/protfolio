"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Critical above-the-fold components loaded eagerly
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

// CustomCursor is desktop-only decoration — lazy load it
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

// Below-the-fold components loaded lazily for performance
const AboutSection = dynamic(() => import("@/components/AboutSection"));
const BeyondCode = dynamic(() => import("@/components/BeyondCode"));
const WebsitesSection = dynamic(() => import("@/components/WebsitesSection"));
const VideoSection = dynamic(() => import("@/components/VideoSection"));
const DesignShowcase = dynamic(() => import("@/components/DesignShowcase"));
// const BrandIdentitySection = dynamic(() => import("@/components/BrandIdentitySection"));
const ThumbnailSection = dynamic(() => import("@/components/ThumbnailSection"));
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const ContactSection = dynamic(() => import("@/components/ContactSection"));
const Footer = dynamic(() => import("@/components/Footer"));
const BackToTop = dynamic(() => import("@/components/BackToTop"));

// Lightweight scroll-triggered fade-in (no framer-motion whileInView to reduce JS)
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function AnimatedSection({ children, className = "" }) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="relative scroll-smooth scrollbar-hide">
      <CustomCursor />
      <Navbar />

      <div className="w-full relative">
        {/* Section 1: Hero (Sticky Animation) */}
        <div className="relative z-20">
          <HeroSection />
        </div>

        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>

        <AnimatedSection>
          <BeyondCode />
        </AnimatedSection>

        <AnimatedSection>
          <TestimonialsSection />
        </AnimatedSection>

        <AnimatedSection>
          <WebsitesSection />
        </AnimatedSection>

        <AnimatedSection>
          <VideoSection />
        </AnimatedSection>

        <AnimatedSection>
          <ThumbnailSection />
        </AnimatedSection>

        <AnimatedSection>
          <DesignShowcase />
        </AnimatedSection>

        {/* <AnimatedSection>
          <BrandIdentitySection />
        </AnimatedSection> */}

        <AnimatedSection>
          <FAQSection />
        </AnimatedSection>

        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
}
