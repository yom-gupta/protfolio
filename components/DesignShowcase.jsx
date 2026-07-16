"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, Eye, Share2, ThumbsUp, ChevronLeft, ChevronRight } from "lucide-react";
import MediaModal from "./MediaModal";
import { trackEvent } from "@/utils/analytics";

// Featured carousel slides (campaign-level design work)
const carouselSlides = [
  {
    id: "c1",
    image: "/img/desing/why hire me.png",
    title: "Why Hire A Video Designer?",
    description: "A bold 4-panel social media campaign explaining the value of professional video design — built to convert cold audiences into paying clients.",
    tag: "Social Media Campaign",
  },
  {
    id: "c2",
    image: "/img/desing/redbull.png",
    title: "Red Bull Concept Campaign",
    description: "A cinematic 4-post Instagram carousel concept — dramatic ocean visuals, bold typography, and a story arc that keeps audiences swiping.",
    tag: "Concept Campaign",
  },
];

const designData = [
  {
    id: 9,
    title: "Vogue Creative Poster - Day 1",
    category: "Posters",
    image: "/img/desing/day 1.jpg",
    aspect: "aspect-[3/4]"
  },
  {
    id: 10,
    title: "Futuristic UI Poster - Day 2",
    category: "Posters",
    image: "/img/desing/Day2.jpg",
    aspect: "aspect-[2/3]"
  },
  {
    id: 11,
    title: "Cinematic Key Art - Day 6",
    category: "Posters",
    image: "/img/desing/day 6.jpg",
    aspect: "aspect-[3/4]"
  },
  {
    id: 12,
    title: "Gym Motivation Social Media Post",
    category: "Graphics",
    image: "/img/desing/gym post.jpg",
    aspect: "aspect-square"
  },
  {
    id: 13,
    title: "Urban Streetwear Poster Design",
    category: "Graphics",
    image: "/img/desing/postt 2.jpg",
    aspect: "aspect-square"
  },
  {
    id: 14,
    title: "Why Hire A Video Designer?",
    category: "Graphics",
    image: "/img/desing/why hire me.png",
    aspect: "aspect-square"
  },
  {
    id: 15,
    title: "Red Bull Concept Campaign",
    category: "Graphics",
    image: "/img/desing/redbull.png",
    aspect: "aspect-video"
  },
  {
    id: 16,
    title: "This Is Love - Chemistry Breakdown",
    category: "Thumbnails",
    image: "/img/desing/this is love.jpg",
    aspect: "aspect-video"
  },
  {
    id: 17,
    title: "Fridge POV - Drink Challenge",
    category: "Graphics",
    image: "/img/desing/Gemini_Generated_Image_kloq6akloq6akloq.png",
    aspect: "aspect-video"
  },
  {
    id: 18,
    title: "Cinematic Fashion Portrait (AI Prompts)",
    category: "Graphics",
    image: "/img/desing/Artboard 1.jpg",
    aspect: "aspect-[4/5]"
  },
  {
    id: 19,
    title: "Cinematic Fashion Portrait Layout",
    category: "Graphics",
    image: "/img/desing/Artboard 2.jpg",
    aspect: "aspect-[4/5]"
  }
];



// ─── Carousel Component ──────────────────────────────────────────────────────
function DesignCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const total = carouselSlides.length;

  const go = useCallback((dir) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + total) % total);
  }, [total]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => go(1), 5000);
    return () => clearInterval(timer);
  }, [go]);

  const slide = carouselSlides[current];

  const variants = {
    enter: (d) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: (d) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0, transition: { duration: 0.4 } }),
  };

  return (
    <div className="mb-16 md:mb-24">
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
          Featured Campaigns
        </span>
      </div>

      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] group">
        {/* Slides */}
        <div className="relative flex flex-col lg:flex-row min-h-[420px] lg:min-h-[500px]">
          {/* Image */}
          <div className="relative w-full lg:w-3/5 overflow-hidden" style={{ minHeight: "300px" }}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={slide.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 cursor-pointer"
                onClick={() => { setIsModalOpen(true); trackEvent("carousel_click", "Design Carousel", slide.title); }}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                {/* click hint overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-primary/90">
                    <Eye size={20} className="text-black" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center p-6 md:p-8 lg:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + "-text"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-3">
                  {slide.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
                  {slide.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                  {slide.description}
                </p>
                <button
                  onClick={() => { setIsModalOpen(true); trackEvent("carousel_view", "Design Carousel", slide.title); }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-black font-bold text-sm hover:shadow-[0_0_20px_rgba(255,189,57,0.4)] transition-all duration-300 self-start"
                >
                  <Eye size={16} />
                  View Full
                </button>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={() => go(-1)}
                className="p-2 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/10 text-white transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {carouselSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-6 h-2 bg-primary"
                        : "w-2 h-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => go(1)}
                className="p-2 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/10 text-white transition-all"
              >
                <ChevronRight size={18} />
              </button>
              <span className="text-gray-600 text-xs ml-auto">
                {current + 1} / {total}
              </span>
            </div>
          </div>
        </div>

        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      {/* Full image modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
                onClick={() => setIsModalOpen(false)}
              >
                <X size={20} />
              </button>
              <div className="relative w-full max-h-[85vh] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={1400}
                  height={1000}
                  className="object-contain w-full max-h-[85vh]"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function DesignShowcase() {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedDesign, setSelectedDesign] = useState(null);

  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.5 });
  const [counts, setCounts] = useState({ videos: 0, thumbnails: 0, clients: 0 });
  const targetStats = { videos: 150, thumbnails: 200, clients: 50 };

  useEffect(() => {
    if (isStatsInView) {
      let startTime;
      const duration = 2000;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        setCounts({
          videos: Math.floor(progress * targetStats.videos),
          thumbnails: Math.floor(progress * targetStats.thumbnails),
          clients: Math.floor(progress * targetStats.clients)
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isStatsInView, targetStats.videos, targetStats.thumbnails, targetStats.clients]);

  return (
    <section id="design-section" className="section-padding bg-black min-h-screen pt-16 md:pt-24 border-t border-white/5">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 font-serif">
            Design <span className="text-primary">Showcase</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6 md:mb-10 text-sm md:text-base">
            A curated collection of my visual design work, ranging from atmospheric posters to high-impact graphic design.
          </p>

        </div>

        {/* Featured Campaign Carousel */}
        <DesignCarousel />

        {/* MASONRY GRID VIEW */}
        <motion.div
          key="masonry-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 md:gap-8 space-y-4 sm:space-y-6 md:space-y-8 pb-6 md:pb-10"
        >
          {designData.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
              className="relative break-inside-avoid group cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => {
                setSelectedDesign(item);
                trackEvent("design_click", "Designs", item.title);
              }}
            >
              <div className={`relative w-full ${item.aspect} bg-gray-900 border border-white/10 rounded-xl sm:rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl transition-all duration-500 group-hover:border-primary/30`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Overlay */}
                <div className={`absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-6 md:p-8 ${hoveredId === item.id ? "opacity-100" : "opacity-0"
                  }`}>
                  <div className="flex justify-end">
                    <div className="p-2 md:p-3 bg-primary rounded-full text-black shadow-lg">
                      <Eye size={16} strokeWidth={2.5} className="md:w-5 md:h-5" />
                    </div>
                  </div>

                  <div>
                    <span className="text-primary text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-1 md:mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-white text-base md:text-xl font-bold leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium Design Modal */}
        <MediaModal
          isOpen={!!selectedDesign}
          onClose={() => setSelectedDesign(null)}
        >
          {selectedDesign && (
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-10">
              {/* Main Content */}
              <div className="lg:col-span-8 space-y-4 md:space-y-6">
                <div className="relative w-full aspect-[4/5] max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] bg-[#0c1015] rounded-xl md:rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
                  <Image
                    src={selectedDesign.image}
                    alt={selectedDesign.title}
                    fill
                    className="object-contain p-2 md:p-4"
                    priority
                    sizes="(max-width: 1024px) 100vw, 800px"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 md:gap-4 p-4 md:p-6 bg-white/5 rounded-xl md:rounded-2xl border border-white/10">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm md:text-base">YG</div>
                    <div>
                      <p className="font-bold text-white text-base md:text-lg">Yom Gupta</p>
                      <p className="text-xs md:text-sm text-gray-400">{selectedDesign.category} Specialist</p>
                    </div>
                  </div>
                  <div className="flex gap-2 md:gap-3">
                    <button className="flex items-center gap-1.5 md:gap-2 bg-white/10 hover:bg-white/20 px-3 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all"><ThumbsUp size={16} /> Like</button>
                    <button className="flex items-center gap-1.5 md:gap-2 bg-white/10 hover:bg-white/20 px-3 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all"><Share2 size={16} /> Share</button>
                  </div>
                </div>
              </div>

              {/* Sidebar Recommendations */}
              <div className="lg:col-span-4 space-y-4 md:space-y-6">
                <h4 className="font-bold text-gray-400 tracking-widest uppercase text-xs mb-3 md:mb-4">More in {selectedDesign.category}</h4>
                <div className="flex flex-row lg:flex-col gap-3 md:gap-4 overflow-x-auto lg:overflow-x-visible scrollbar-hide">
                  {designData
                    .filter(d => d.id !== selectedDesign.id && (d.category === selectedDesign.category || selectedDesign.category === 'All'))
                    .slice(0, 6)
                    .map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-3 md:gap-4 p-2 md:p-3 bg-white/5 rounded-xl md:rounded-2xl border border-white/5 cursor-pointer group/item hover:border-primary/30 transition-all duration-300 shrink-0 lg:shrink"
                        onClick={() => {
                          setSelectedDesign(item);
                          trackEvent("design_click", "Designs", item.title);
                        }}
                      >
                        <div className="relative w-16 h-20 md:w-20 md:h-24 rounded-lg md:rounded-xl overflow-hidden shrink-0 border border-white/5">
                          <Image src={item.image} alt={item.title} fill className="object-cover group-hover/item:scale-110 transition-transform duration-500" sizes="80px" />
                        </div>
                        <div className="flex flex-col justify-center min-w-0">
                          <span className="text-[9px] md:text-[10px] text-primary font-bold uppercase tracking-widest">{item.category}</span>
                          <h5 className="text-white font-bold text-xs md:text-sm line-clamp-2 mt-1 group-hover/item:text-primary transition-colors">{item.title}</h5>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
        </MediaModal>

        {/* Stats Section */}
        {!selectedDesign && (
          <div ref={statsRef} className="max-w-6xl mx-auto mt-16 md:mt-32 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 md:px-4">
            <div className="text-center bg-[#0c1015] p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-white/5 shadow-2xl hover:shadow-primary/5 transition-all duration-500 transform hover:-translate-y-2 group">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-primary mb-2 md:mb-3 group-hover:scale-110 transition-transform tracking-tight">{counts.videos}+</h3>
              <p className="text-gray-500 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-[10px] font-black">Videos Created</p>
            </div>
            <div className="text-center bg-[#0c1015] p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-white/5 shadow-2xl hover:shadow-primary/5 transition-all duration-500 transform hover:-translate-y-2 group">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-primary mb-2 md:mb-3 group-hover:scale-110 transition-transform tracking-tight">{counts.thumbnails}+</h3>
              <p className="text-gray-500 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-[10px] font-black">Thumbnails Designed</p>
            </div>
            <div className="text-center bg-[#0c1015] p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-white/5 shadow-2xl hover:shadow-primary/5 transition-all duration-500 transform hover:-translate-y-2 group">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-primary mb-2 md:mb-3 group-hover:scale-110 transition-transform tracking-tight">{counts.clients}+</h3>
              <p className="text-gray-500 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-[10px] font-black">Happy Clients</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
