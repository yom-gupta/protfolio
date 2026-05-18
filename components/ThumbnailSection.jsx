"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, MoreVertical, Play, Calendar, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MediaModal from "./MediaModal";
import { trackEvent } from "@/utils/analytics";

const thumbnailsData = [
  {
    id: 1,
    title: "Complete Roadmap to Full Stack",
    channel: "Yom Gupta",
    views: "1.2M",
    timeAgo: "2 days ago",
    duration: "14:20",
    category: "Education",
    image: "Complete Roadmap_enhanced.webp",
    avatar: "/img/btn_img.webp"
  },
  {
    id: 2,
    title: "Africa is Becoming Hindu",
    channel: "Yom Gupta",
    views: "854K",
    timeAgo: "1 week ago",
    duration: "10:15",
    category: "Education",
    image: "Africa is becoming Hindu v6.webp",
    avatar: "/img/btn_img.webp"
  },
  {
    id: 3,
    title: "Gym Supplements Tier List 2025",
    channel: "Yom Gupta",
    views: "2.1M",
    timeAgo: "3 weeks ago",
    duration: "8:45",
    category: "Fitness",
    image: "Gym Supplements Tier List Whats Actually Worth Your Money (2025 Guide).webp",
    avatar: "/img/btn_img.webp"
  },
  {
    id: 4,
    title: "Ranking Every High-Protein Food",
    channel: "Yom Gupta",
    views: "500K",
    timeAgo: "1 month ago",
    duration: "12:30",
    category: "Fitness",
    image: "RANKING EVERY HIGH•ROTEIN FOOD 2.webp",
    avatar: "/img/btn_img.webp"
  },
  {
    id: 5,
    title: "Worst to Best Fitness Advice",
    channel: "Yom Gupta",
    views: "1.5M",
    timeAgo: "2 months ago",
    duration: "18:22",
    category: "Fitness",
    image: "WORST to BEST Fitness Advice by Indian Fitness.webp",
    avatar: "/img/btn_img.webp"
  },
  {
    id: 6,
    title: "Top Protein Snacks Guide",
    channel: "Yom Gupta",
    views: "320K",
    timeAgo: "2 months ago",
    duration: "9:15",
    category: "Fitness",
    image: "protein snacks 3.webp",
    avatar: "/img/btn_img.webp"
  },
  {
    id: 7,
    title: "A, AN, THE Masterclass",
    channel: "Yom Gupta",
    views: "89K",
    timeAgo: "3 months ago",
    duration: "22:10",
    category: "Education",
    image: "A AN THE V4.webp",
    avatar: "/img/btn_img.webp"
  },
  {
    id: 8,
    title: "Most Important VS Code Extensions",
    channel: "Yom Gupta",
    views: "1.1M",
    timeAgo: "4 months ago",
    duration: "15:05",
    category: "Tech",
    image: "Most important vs code extension 2.webp",
    avatar: "/img/btn_img.webp"
  },
  {
    id: 9,
    title: "I Bought a 40k Gaming Laptop!",
    channel: "Yom Gupta",
    views: "650K",
    timeAgo: "5 months ago",
    duration: "11:45",
    category: "Tech",
    image: "40k laptop v5.jpg",
    avatar: "/img/btn_img.webp"
  },
  {
    id: 10,
    title: "Top High-Fiber Foods You Should Eat Daily",
    channel: "Yom Gupta",
    views: "410K",
    timeAgo: "6 months ago",
    duration: "10:30",
    category: "Fitness",
    image: "Fiber Source v6 final.jpg",
    avatar: "/img/btn_img.webp"
  },
  {
    id: 11,
    title: "Ranking Every Protein Bar (Worst to Best)",
    channel: "Yom Gupta",
    views: "920K",
    timeAgo: "7 months ago",
    duration: "14:12",
    category: "Fitness",
    image: "Protein bars ranking v8.jpg",
    avatar: "/img/btn_img.webp"
  },
  {
    id: 12,
    title: "Build an AI Resume Ranker from Scratch",
    channel: "Yom Gupta",
    views: "150K",
    timeAgo: "8 months ago",
    duration: "25:40",
    category: "Tech",
    image: "resume ranker ai project1.webp",
    avatar: "/img/btn_img.webp"
  },

];

const categories = ["All", "Fitness", "Tech", "Education", "Design"];

export default function ThumbnailSection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredData = filter === "All"
    ? thumbnailsData
    : thumbnailsData.filter(item => item.category === filter);

  const visibleThumbnails = filteredData;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="thumbnail-section" className="section-padding bg-black min-h-screen pt-16 md:pt-24 border-t border-white/5">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6"
          >
            Premium <span className="text-primary">Thumbnails</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base"
          >
            Strategic designs engineered for high CTR. Each thumbnail is a blend of psychology, visual hierarchy, and brand storytelling.
          </motion.p>

          {/* Styled Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 md:mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                }}
                className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${filter === cat
                  ? "bg-primary text-black border-primary shadow-[0_0_15px_rgba(255,189,57,0.3)]"
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-primary/50 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Brand-Integrated Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 md:gap-8 mb-12 md:mb-20">
          <AnimatePresence mode="popLayout">
            {visibleThumbnails.map((thumbnail) => (
              <motion.div
                key={thumbnail.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col"
              >
                {/* Visual Container */}
                <div
                  className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden bg-[#0c1015] border border-white/10 shadow-lg cursor-pointer transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-primary/5"
                  onClick={() => {
                    setSelectedImage(`/img/thumbnails/${thumbnail.image}`);
                    trackEvent("thumbnail_click", "Thumbnails", thumbnail.title);
                  }}
                >
                  <Image
                    src={`/img/thumbnails/${thumbnail.image}`}
                    alt={thumbnail.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center text-black transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <Play size={20} fill="black" className="md:w-6 md:h-6" />
                    </div>
                  </div>
                </div>

                {/* Content Info */}
                <div className="mt-3 md:mt-5 space-y-2 md:space-y-3 px-1">
                  <div className="flex items-start justify-between gap-3 md:gap-4">
                    <h3 className="text-white font-bold text-sm md:text-base leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {thumbnail.title}
                    </h3>
                    <MoreVertical size={16} className="text-gray-600 group-hover:text-gray-300 cursor-pointer flex-shrink-0 mt-0.5 md:mt-1" />
                  </div>

                  <div className="flex items-center gap-3 md:gap-4 text-[11px] md:text-[12px] text-gray-500 font-medium">
                    <div className="flex items-center gap-1 md:gap-1.5">
                      <Eye size={12} className="text-primary/60 md:w-3.5 md:h-3.5" />
                      <span>{thumbnail.views}</span>
                    </div>
                    <div className="flex items-center gap-1 md:gap-1.5">
                      <Calendar size={12} className="text-primary/60 md:w-3.5 md:h-3.5" />
                      <span>{thumbnail.timeAgo}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Premium Media Modal Lightbox */}
        <MediaModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
        >
          {selectedImage && (
            <div className="relative w-full aspect-[16/10] sm:aspect-video flex items-center justify-center">
              <Image
                src={selectedImage}
                alt="Preview"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          )}
        </MediaModal>
      </div>
    </section>
  );
}
