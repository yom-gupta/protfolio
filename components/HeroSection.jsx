"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IoVolumeHighOutline, IoVolumeMuteOutline } from "react-icons/io5";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { trackEvent } from "@/utils/analytics";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const containerRef = useRef(null);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  const { scrollY } = useScroll();

  // Parallax and darkening effects on scroll
  const yParallax = useTransform(scrollY, [0, 500], [0, -100]);
  const overlayOpacity = useTransform(scrollY, [0, 500], [0, 0.7]);
  const videoScale = useTransform(scrollY, [0, 500], [1, 1.15]);

  useEffect(() => {
    setIsMounted(true);

    // YouTube Iframe API Setup
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        initializePlayer();
      };
    } else {
      initializePlayer();
    }

    function initializePlayer() {
      const checkInterval = setInterval(() => {
        const element = document.getElementById("hero-video-iframe");
        if (element) {
          clearInterval(checkInterval);
          new window.YT.Player("hero-video-iframe", {
            events: {
              onReady: (event) => {
                playerRef.current = event.target;
                event.target.mute();
                event.target.playVideo();
              },
              onStateChange: (event) => {
                // YT.PlayerState.PAUSED = 2
                // YT.PlayerState.ENDED = 0
                if (event.data === 2 || event.data === 0) {
                  event.target.playVideo();
                }
              }
            },
          });
        }
      }, 100);
    }
  }, []);

  const toggleMute = () => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
        trackEvent("sound_toggle", "Hero Interaction", "Sound On");
      } else {
        playerRef.current.mute();
        setIsMuted(true);
        trackEvent("sound_toggle", "Hero Interaction", "Sound Off");
      }
    }
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isMounted) return <div className="h-screen bg-black" />;

  return (
    <section
      id="home-section"
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black flex items-end justify-start"
    >
      {/* 🎥 VIDEO BACKGROUND */}
      <motion.div
        style={{ scale: videoScale }}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden will-change-transform"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full min-w-[100vw] min-h-[56.25vw] md:min-h-[100vh] md:min-w-[177.77vh]">
          <iframe
            id="hero-video-iframe"
            ref={iframeRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] md:w-[130%] md:h-[130%] pointer-events-none"
            src="https://www.youtube.com/embed/Ya3mYXCN7-I?autoplay=1&mute=1&loop=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&rel=0&playlist=Ya3mYXCN7-I&playsinline=1&enablejsapi=1"
            allow="autoplay; encrypted-media"
            frameBorder="0"
          ></iframe>
        </div>
      </motion.div>

      {/* 🛡️ INVISIBLE PHYSICAL SHIELD TO BLOCK ALL POINTER INTERACTION WITH IFRAME */}
      <div className="absolute inset-0 z-[3] bg-transparent cursor-default" />

      {/* 🌑 OVERLAY SYSTEM - LIGHTER FOR VIDEO VISIBILITY */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

      {/* Film Grain / Noise */}
      <div className="absolute inset-0 z-[2] opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* 📝 TEXT CONTENT */}
      <motion.div
        style={{ y: yParallax }}
        className="relative z-10 w-full px-6 md:px-8 pb-8 md:pb-12 max-w-7xl flex flex-col items-start text-left drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] will-change-transform"
      >
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-2 mb-4 md:mb-6"
        >
          <span className="h-[1px] w-8 bg-primary" />
          <span className="text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase text-white font-bold">
            Showreel • 2026
          </span>
        </motion.div>

        {/* Headline - Even Smaller/Elegant Size */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] text-white mb-6 uppercase tracking-tighter"
        >
          Rishabh
          <span className="text-primary italic font-light"> Gupta</span>
        </motion.h1>

        {/* Typing Animation for Roles - Smaller */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-5 min-h-[1.5em]"
        >
          <TypeAnimation
            sequence={[
              "Thumbnail Designer",
              2000,
              "Video Editor",
              2000,
              "Motion Graphics Artist",
              2000,
              "Helping Content Creator to grow",
              2000,
            ]}
            wrapper="p"
            speed={50}
            repeat={Infinity}
            className="font-sans text-base md:text-xl font-medium text-white/80 uppercase tracking-[0.2em]"
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-row gap-4 w-full sm:w-auto"
        >
          <Link
            href="#video-section"
            onClick={(e) => {
              scrollToSection(e, "#video-section");
              trackEvent("explore_works_click", "Hero CTA", "Explore Works");
            }}
            className="group relative px-6 md:px-10 py-3 bg-primary text-black rounded-full font-bold text-center overflow-hidden transition-all duration-300 hover:scale-[1.05] active:scale-[0.95] whitespace-nowrap shadow-xl shadow-primary/20"
          >
            <span className="relative z-10 uppercase tracking-wider text-xs md:text-sm">Explore Works</span>
          </Link>

          <Link
            href="#contact-section"
            onClick={(e) => {
              scrollToSection(e, "#contact-section");
              trackEvent("hire_me_click", "Hero CTA", "Hire Me");
            }}
            className="px-6 md:px-10 py-3 border border-white/30 backdrop-blur-md bg-white/5 text-white rounded-full font-bold text-center transition-all duration-300 hover:bg-white/10 hover:scale-[1.05] active:scale-[0.95] uppercase tracking-wider text-xs md:text-sm whitespace-nowrap"
          >
            Hire Me
          </Link>
        </motion.div>
      </motion.div>

      {/* 🔊 MUTE BUTTON */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 right-6 md:right-10 z-30"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleMute}
          className={`flex items-center gap-3 px-5 py-2.5 rounded-full border backdrop-blur-xl transition-all duration-500 shadow-2xl group ${isMuted
            ? "border-white/10 bg-black/40 text-white/70 hover:text-white hover:border-white/30"
            : "border-primary/40 bg-primary/10 text-primary shadow-primary/20"
            }`}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          <div className="relative flex items-center justify-center">
            {/* Ambient Glow Pulse for Unmuted State */}
            {!isMuted && (
              <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping scale-150" />
            )}
            <div className="relative z-10 w-5 h-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              {isMuted ? (
                <IoVolumeMuteOutline className="w-full h-full" />
              ) : (
                <IoVolumeHighOutline className="w-full h-full" />
              )}
            </div>
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="text-[8px] uppercase tracking-[0.2em] opacity-50 font-bold mb-0.5">Showreel</span>
            <span className="text-[10px] font-black uppercase tracking-[0.1em]">
              {isMuted ? "Sound Off" : "Sound On"}
            </span>
          </div>
        </motion.button>
      </motion.div>

      {/* 🖱️ SCROLL INDICATOR (Apple Style) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium">Scroll</span>
        <div className="w-[20px] h-[35px] border-2 border-white/20 rounded-full relative">
          <motion.div
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-2 bg-primary rounded-full absolute top-2 left-1/2 -translate-x-1/2"
          />
        </div>
      </motion.div>

      {/* darkening overlay on scroll */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-[4] bg-black pointer-events-none"
      />
    </section>
  );
}
