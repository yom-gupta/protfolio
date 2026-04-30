"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, Eye, Share2, ThumbsUp } from "lucide-react";
import MediaModal from "./MediaModal";

const designData = [
  // Posters & Graphics
  {
    id: 9,
    title: "Max Verstappen Wallpaper",
    category: "Posters",
    image: "/img/desing/Max Verstappen Wallpaper.jpg",
    aspect: "aspect-[3/4]"
  },
  {
    id: 10,
    title: "Minji Vogue Poster",
    category: "Posters",
    image: "/img/desing/Minji for Vogue _ Poster.jpg",
    aspect: "aspect-[2/3]"
  },
  {
    id: 11,
    title: "Experimental Blur Design",
    category: "Graphics",
    image: "/img/desing/experimental_blur.png",
    aspect: "aspect-square"
  },
  {
    id: 12,
    title: "Find Yourself",
    category: "Graphics",
    image: "/img/desing/Find yourself in this world.jpg",
    aspect: "aspect-[4/3]"
  },
  {
    id: 13,
    title: "Inner World",
    category: "Graphics",
    image: "/img/desing/experimental_blur.png",
    aspect: "aspect-square"
  },
  {
    id: 15,
    title: "Supportive Quote",
    category: "Graphics",
    image: "/img/desing/supportive_quote.jpg",
    aspect: "aspect-square"
  },
  {
    id: 16,
    title: "Today's Inspiration",
    category: "Graphics",
    image: "/img/desing/Today.jpg",
    aspect: "aspect-[3/5]"
  }
];

const categories = ["All", "Posters", "Graphics"];

export default function DesignShowcase() {
  const [filter, setFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedDesign, setSelectedDesign] = useState(null);

  const filteredData = filter === "All"
    ? designData
    : designData.filter(item => item.category === filter);

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

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${filter === cat
                  ? "bg-primary text-black border-primary shadow-[0_0_15px_rgba(255,189,57,0.4)]"
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-primary/50 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* MASONRY GRID VIEW */}
        <motion.div
          key="masonry-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 md:gap-8 space-y-4 sm:space-y-6 md:space-y-8 pb-6 md:pb-10"
        >
          {filteredData.map((item) => (
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
              onClick={() => setSelectedDesign(item)}
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
                        onClick={() => setSelectedDesign(item)}
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
