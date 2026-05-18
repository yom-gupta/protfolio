"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Music, Gamepad2, Camera, Palette, Mountain, Dumbbell, BookOpen, Laptop } from "lucide-react";

const interests = [
  { name: "Painting", emoji: "🎨", icon: <Palette className="w-4 h-4" />, color: "bg-[#4ade80]/20 text-[#4ade80] border-[#4ade80]/30" },
  { name: "Photography", emoji: "📷", icon: <Camera className="w-4 h-4" />, color: "bg-[#38bdf8]/20 text-[#38bdf8] border-[#38bdf8]/30" },
  { name: "filmmaking", emoji: "🎥", icon: <Camera className="w-4 h-4" />, color: "bg-[#fb923c]/20 text-[#fb923c] border-[#fb923c]/30" },
  { name: "Gaming", emoji: "🎮", icon: <Gamepad2 className="w-4 h-4" />, color: "bg-[#fb7185]/20 text-[#fb7185] border-[#fb7185]/30" },
  { name: "Running", emoji: "🥾", icon: <Mountain className="w-4 h-4" />, color: "bg-[#facc15]/20 text-[#facc15] border-[#facc15]/30" },
  { name: "Music", emoji: "🎵", icon: <Music className="w-4 h-4" />, color: "bg-[#818cf8]/20 text-[#818cf8] border-[#818cf8]/30" },
  { name: "GYM rat", emoji: "🏋️", icon: <Dumbbell className="w-4 h-4" />, color: "bg-[#2dd4bf]/20 text-[#2dd4bf] border-[#2dd4bf]/30" },
  { name: "Reading", emoji: "📚", icon: <BookOpen className="w-4 h-4" />, color: "bg-[#fb923c]/20 text-[#fb923c] border-[#fb923c]/30" },
  { name: "Coding", emoji: "💻", icon: <Laptop className="w-4 h-4" />, color: "bg-[#fb923c]/20 text-[#fb923c] border-[#fb923c]/30" },
];

export default function BeyondCode() {
  return (
    <section className="pb-12 md:pb-20 pt-8 md:pt-10 bg-black overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 md:gap-3 text-primary"
              >
                <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white font-serif">Beyond the Edit</h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-400 text-base md:text-lg max-w-xl"
              >
                Explore my interests and hobbies beyond the digital realm. I believe in a balanced life where creativity meets physical and mental well-being.
              </motion.p>
            </div>

            {/* Hobby Pills Grid */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 md:gap-4">
              {interests.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full border backdrop-blur-sm cursor-default transition-all duration-300 ${item.color}`}
                >
                  <span className="text-xs sm:text-sm font-medium">{item.name}</span>
                  <span className="text-sm sm:text-base">{item.emoji}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Content - The "Something Else" Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square max-w-sm mx-auto lg:max-w-none rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group shadow-2xl border border-white/10"
            >
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#0a0a0a] z-0" />
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(255,189,57,0.1),transparent_70%)] animate-pulse" />

              {/* Visual Abstract Elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full p-6 md:p-8 z-10 flex flex-col items-center justify-center text-center space-y-4 md:space-y-6">

                {/* Avatar Container with Glow */}
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full border-4 border-primary/30 p-2 overflow-hidden bg-black/50 backdrop-blur-md">
                    <Image
                      src="/img/pfpf v2.jpg"
                      alt="Avatar"
                      fill
                      className="object-cover rounded-full"
                      sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 160px"
                    />
                  </div>
                </div>

                {/* Status/Vibe Info */}
                <div className="space-y-2 relative z-20">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Rishabh Gupta</h3>
                  <div className="flex items-center justify-center gap-2 text-primary/80">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                    <span className="text-xs sm:text-sm font-medium uppercase tracking-widest">In Creative Mode</span>
                  </div>
                </div>

                {/* Decorative Tech Chips */}
                <div className="flex gap-2 sm:gap-3 pt-2 sm:pt-4 flex-wrap justify-center">
                  <div className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none">
                    Coding
                  </div>
                  <div className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none">
                    Premiere
                  </div>
                  <div className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none">
                    GYM rat
                  </div>
                </div>
              </div>

              {/* Removed grid pattern to fix 404 */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
