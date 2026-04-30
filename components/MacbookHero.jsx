"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { Volume2, VolumeX } from "lucide-react";

export default function MacbookHero() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const containerRef = useRef(null);
  const playerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // --- Animation Transforms ---
  
  // 1. Hero Text Fade Out (0% - 15%)
  const textOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);
  const textY = useTransform(smoothProgress, [0, 0.1], [0, -50]);

  // 2. Video Shrink into MacBook (0% - 30%)
  const macbookScale = useTransform(smoothProgress, [0, 0.3], [1.5, 0.55]);
  const macbookY = useTransform(smoothProgress, [0, 0.3], ["0%", "5%"]);
  
  // 3. Lid Closing (35% - 65%)
  const lidRotation = useTransform(smoothProgress, [0.35, 0.6], [0, -110]);
  
  // 4. Fast Exit Zoom (70% - 100%)
  const exitScale = useTransform(smoothProgress, [0.7, 1], [1, 10]);
  const exitOpacity = useTransform(smoothProgress, [0.8, 0.95], [1, 0]);

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
      new window.YT.Player("hero-video-iframe", {
        events: {
          onReady: (event) => {
            playerRef.current = event.target;
          },
        },
      });
    }
  }, []);

  const toggleMute = () => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    }
  };

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-black">
      {/* Sticky Frame */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {isMounted && (
          <>
            {/* --- STAGE 0: HERO TEXT --- */}
            <motion.div
               style={{ opacity: textOpacity, y: textY }}
               className="absolute z-30 bottom-24 left-12 md:left-24 pointer-events-none drop-shadow-2xl"
            >
                 <div className="flex items-center gap-3 mb-4">
                    <span className="h-[2px] w-12 bg-primary" />
                    <span className="text-xs md:text-sm font-sans tracking-[0.4em] uppercase text-white font-bold opacity-70">
                      Showreel • 2024
                    </span>
                </div>
                <h1 className="font-playfair text-6xl md:text-9xl font-black text-white leading-none uppercase tracking-tighter mb-4">
                  Rishabh<br /><span className="text-primary italic font-light">Gupta</span>
                </h1>
                <TypeAnimation
                  sequence={["Thumbnail Designer", 2000, "Video Editor", 2000]}
                  wrapper="p"
                  repeat={Infinity}
                  className="font-sans text-lg md:text-2xl text-white/60 uppercase tracking-[0.2em]"
                />
            </motion.div>

            {/* --- MACBOOK ANIMATION CONTAINER --- */}
            <motion.div
              style={{ 
                scale: macbookScale, 
                y: macbookY,
                opacity: exitOpacity
              }}
              className="relative w-full max-w-[1200px] aspect-video flex items-center justify-center perspective"
            >
               <motion.div 
                 style={{ scale: exitScale }}
                 className="relative w-full h-full preserve-3d"
               >
                  {/* MacBook Lid (The Screen) */}
                  <motion.div 
                    style={{ rotateX: lidRotation, originY: "bottom" }}
                    className="absolute inset-0 z-10 preserve-3d"
                  >
                      {/* Front Side (Screen) */}
                      <div className="absolute inset-0 rounded-[1.5rem] bg-[#1a1a1a] border-[12px] border-[#0a0a0a] overflow-hidden backface-hidden shadow-2xl">
                        <iframe
                          id="hero-video-iframe"
                          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                          src="https://www.youtube.com/embed/Ya3mYXCN7-I?enablejsapi=1&autoplay=1&mute=1&loop=1&controls=0&playlist=Ya3mYXCN7-I"
                          allow="autoplay; encrypted-media"
                          frameBorder="0"
                        />
                        {/* Glossy Overlay */}
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent z-20" />
                      </div>

                      {/* Back Side (Lid Cover) */}
                      <div 
                        className="absolute inset-0 rounded-[1.5rem] bg-[#0f0f0f] border-2 border-white/5 flex items-center justify-center backface-hidden"
                        style={{ transform: "rotateX(180deg)" }}
                      >
                         <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                            <span className="text-primary font-black text-4xl md:text-5xl drop-shadow-glow [transform:rotateY(180deg)]">RG</span>
                         </div>
                      </div>
                  </motion.div>

                  {/* MacBook Base (The Keyboard part - 3D Perspective) */}
                  <div 
                    className="absolute top-[100%] left-[-5%] w-[110%] h-[20%] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-b-3xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] border-t border-white/20 origin-top"
                    style={{ transform: "rotateX(-80deg)" }}
                  />
               </motion.div>
            </motion.div>

            {/* --- UNMUTE BUTTON --- */}
            <motion.button
              onClick={toggleMute}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-8 right-8 z-50 p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all text-white group"
            >
              {isMuted ? <VolumeX className="group-hover:text-primary transition-colors" /> : <Volume2 className="text-primary" />}
            </motion.button>

            {/* --- SCROLL ICON --- */}
            <motion.div
              style={{ opacity: textOpacity }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
              <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent animate-bounce" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">Scroll</span>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
