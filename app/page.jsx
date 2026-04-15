"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BeyondCode from "@/components/BeyondCode";
import ServicesSection from "@/components/ServicesSection";
import VideoSection from "@/components/VideoSection";
import DesignShowcase from "@/components/DesignShowcase";
import ThumbnailSection from "@/components/ThumbnailSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import BackToTop from "@/components/BackToTop";

// Loading Skeletons
const HeroSkeleton = () => (
  <section className="min-h-screen flex items-center bg-black relative overflow-hidden">
    <div className="container-custom grid md:grid-cols-2 gap-8 items-center w-full">
      <div className="space-y-6 w-full">
        <div className="animate-pulse rounded-md bg-white/5 h-12 w-3/4"></div>
        <div className="animate-pulse rounded-md bg-white/5 h-8 w-full"></div>
        <div className="animate-pulse rounded-md bg-white/5 h-8 w-5/6"></div>
        <div className="flex gap-4 mt-8 w-full">
          <div className="animate-pulse rounded-md bg-white/5 h-12 w-32"></div>
          <div className="animate-pulse rounded-md bg-white/5 h-12 w-32"></div>
        </div>
      </div>
      <div className="relative w-full">
        <div className="animate-pulse w-full aspect-square rounded-2xl bg-white/5 mx-auto"></div>
      </div>
    </div>
  </section>
);

const ContentSkeleton = () => (
  <section className="section-padding bg-black w-full">
    <div className="container-custom w-full">
      <div className="w-full overflow-hidden mb-16">
        <div className="flex gap-8 w-full">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse rounded-md bg-white/5 h-12 w-32 shrink-0"></div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="card space-y-4 w-full">
            <div className="animate-pulse bg-white/5 h-16 w-16 rounded-full mx-auto md:mx-0"></div>
            <div className="animate-pulse rounded-md bg-white/5 h-4 w-3/4 mx-auto md:mx-0"></div>
            <div className="animate-pulse rounded-md bg-white/5 h-20 w-full"></div>
            <div className="flex gap-2 w-full justify-center md:justify-start">
              <div className="animate-pulse rounded-md bg-white/5 h-6 w-20"></div>
              <div className="animate-pulse rounded-md bg-white/5 h-6 w-20"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const VideoSkeleton = () => (
  <section className="section-padding bg-black w-full">
    <div className="container-custom w-full">
      <div className="mb-16 relative text-center w-full">
        <div className="animate-pulse rounded-md bg-white/5 h-12 w-64 mx-auto"></div>
      </div>
      <div className="mb-20 w-full">
        <div className="animate-pulse rounded-md bg-white/5 h-8 w-48 mx-auto mb-10"></div>
        <div className="video-container relative pb-[56.25%] h-0 overflow-hidden max-w-[100%] mx-auto w-full">
          <div className="animate-pulse bg-white/5 absolute top-0 left-0 w-full h-full rounded-[15px]"></div>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show the nice loading skeletons that are part of the original design
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="w-full relative"
          >
            <HeroSkeleton />
            <ContentSkeleton />
            <VideoSkeleton />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full relative overflow-x-hidden"
          >
            <HeroSection />
            <AboutSection />
            <BeyondCode />
            <TestimonialsSection />
            <ServicesSection />



            <VideoSection />
            <ThumbnailSection />
            <DesignShowcase />
            <FAQSection />
            <ContactSection />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <BackToTop />
    </>
  );
}
