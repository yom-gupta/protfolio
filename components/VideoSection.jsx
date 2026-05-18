"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Share2, ThumbsUp } from "lucide-react";
import MediaModal from "./MediaModal";

// const longFormVideos = [
//   { id: "HhIh-IoxtQ4", title: "Which Indian Whey Protein Is Best?", views: "354K views", date: "5 months ago" },
//   { id: "bTWIdjg1wKg", title: "Framer Motion Animations Guide for Modern UI/UX Design", views: "1.1M views", date: "5 months ago" },
// ];

const shortsVideos = [
  { id: "bTWIdjg1wKg", title: "My Custom Web Design Process", views: "120 views" },
  { id: "de3tVt4M2V8", title: "Not all eggs are not eggcellent", views: "800 views" },
  // { id: "rbd6W6Aw16Y", title: "you are not alone Empathy app edit", views: "200 views" },
  { id: "neSWO6A_4Nc", title: "Diet coke cinematice video", views: "600 views" },
  { id: "8H53vyjBLN0", title: "Diet coke cinematice videoRaw footage → Scroll-stopping Reel. 🎬✨Just a talking head clip", views: "400K views" },
];

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const sectionRef = useRef(null);

  const handleMediaClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <section id="video-section" ref={sectionRef} className="section-padding bg-[#0f0f0f] text-white">
      <div className="container-custom max-w-[1600px]">

        {/* Header */}
        <div className="mb-10 md:mb-16 relative">
          <div className="text-center">
            <h1 className="projects-bg">Projects</h1>
            <h2 className="section-title text-center text-white z-10 relative">Featured Work</h2>
          </div>
        </div>


        {/* 2. Long Form Videos Row */}
        {/* <div className="mb-12 md:mb-20">
          <h3 className="text-white text-xl md:text-2xl mb-6 md:mb-8 font-bold">Long-Form Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {longFormVideos.map((video) => (
              <div
                key={video.id}
                className="group flex flex-col gap-3 md:gap-4 cursor-pointer"
                onClick={() => handleMediaClick({ ...video, type: 'long' })}
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-xl md:rounded-2xl bg-[#1a1a1a] border border-white/5 shadow-xl transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-primary/5">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                  <Image
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    fill
                    className="object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center text-black scale-90 group-hover:scale-100 transition-transform duration-500">
                      <Play size={24} fill="black" className="md:w-8 md:h-8" />
                    </div>
                  </div>
                </div>
                <div className="px-1 md:px-2">
                  <h4 className="text-base md:text-lg font-bold group-hover:text-primary transition-colors line-clamp-1">{video.title}</h4>
                  <div className="flex items-center gap-3 text-xs md:text-sm text-gray-500 mt-1 font-medium">
                    <span>{video.views}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-700" />
                    <span>{video.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* 3. Shorts Section / Theater Mode */}
        <div className="mb-12 md:mb-20">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <div className="flex items-center gap-2 md:gap-3">
              <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8 fill-red-600">
                <path d="M17.77,10.32l-1.2-.5L18,9.06a3.74,3.74,0,0,0-3.5-6.62L6,6.94a3.74,3.74,0,0,0,.23,6.74l1.2.49L6,14.93a3.75,3.75,0,0,0,3.5,6.63l8.5-4.5a3.74,3.74,0,0,0-.23-6.74Z" />
                <polygon fill="white" points="10 14.65 15.48 11.66 10 8.68 10 14.65" />
              </svg>
              <h3 className="text-white text-xl md:text-2xl font-bold">Shorts</h3>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-3 md:gap-4 overflow-x-auto pb-6 md:pb-10 scrollbar-hide snap-x"
          >
            {shortsVideos.map((video, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 min-w-[160px] sm:min-w-[200px] md:min-w-[280px] group cursor-pointer snap-start"
                onClick={() => handleMediaClick({ ...video, type: 'short' })}
              >
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl md:rounded-2xl shadow-xl bg-[#1a1a1a] border border-white/5 transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-primary/5 group-hover:-translate-y-2">
                  <Image
                    src={`https://img.youtube.com/vi/${video.id.split('-')[0]}/0.jpg`}
                    alt={video.title}
                    fill
                    className="object-cover brightness-75 group-hover:brightness-100 transition-all duration-700"
                    sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, 280px"
                  />

                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/90 text-black flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500">
                      <Play size={20} fill="black" className="md:w-6 md:h-6" />
                    </div>
                  </div>

                  {/* Shorts Logo Badge */}
                  <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-black/40 backdrop-blur-md p-1 md:p-1.5 rounded-lg border border-white/10 group-hover:border-primary/50 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 md:w-4 md:h-4 fill-red-600">
                      <path d="M17.77,10.32l-1.2-.5L18,9.06a3.74,3.74,0,0,0-3.5-6.62L6,6.94a3.74,3.74,0,0,0,.23,6.74l1.2.49L6,14.93a3.75,3.75,0,0,0,3.5,6.63l8.5-4.5a3.74,3.74,0,0,0-.23-6.74Z" />
                    </svg>
                  </div>
                </div>

                <div className="px-1 pr-2 md:pr-4 mt-1 md:mt-2">
                  <h4 className="text-white font-bold text-xs sm:text-[13px] md:text-[14px] leading-snug line-clamp-2 group-hover:text-primary transition-colors">{video.title}</h4>
                  <p className="text-gray-500 text-[10px] md:text-xs mt-1 font-medium">{video.views}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <MediaModal
            isOpen={!!selectedVideo}
            onClose={() => setSelectedVideo(null)}
          >
            {selectedVideo && (
              <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-10">
                {/* Main Content */}
                <div className="lg:col-span-8 space-y-4 md:space-y-6">
                  <div className={`relative ${selectedVideo.type === 'short' ? 'aspect-[9/16] max-h-[60vh] md:max-h-[70vh]' : 'aspect-video'} mx-auto lg:mx-0 w-full rounded-xl md:rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10`}>
                    <iframe
                      src={`https://www.youtube.com/embed/${selectedVideo.id.split('-')[0]}?autoplay=1&mute=0`}
                      title={selectedVideo.title}
                      className="absolute top-0 left-0 w-full h-full border-none"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen={true}
                    />
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{selectedVideo.title}</h2>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 md:gap-4 py-3 md:py-4 border-b border-white/10">
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm md:text-base">YG</div>
                        <div>
                          <p className="font-bold text-white text-base md:text-lg">Yom Gupta</p>
                          <p className="text-xs md:text-sm text-gray-400">2.1M subscribers</p>
                        </div>
                      </div>
                      <div className="flex gap-2 md:gap-3">
                        <button className="flex items-center gap-1.5 md:gap-2 bg-white/5 hover:bg-white/10 px-3 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all"><ThumbsUp size={16} /> Like</button>
                        <button className="flex items-center gap-1.5 md:gap-2 bg-white/5 hover:bg-white/10 px-3 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all"><Share2 size={16} /> Share</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="lg:col-span-4 space-y-4 md:space-y-6">
                  <h4 className="font-bold text-gray-400 tracking-widest uppercase text-xs mb-3 md:mb-4">Recommended for you</h4>
                  <div className="flex flex-row lg:flex-col gap-3 md:gap-4 overflow-x-auto lg:overflow-x-visible scrollbar-hide">
                    {(selectedVideo.type === 'short' ? shortsVideos : longFormVideos)
                      .filter(v => v.id !== selectedVideo.id)
                      .map((video, idx) => (
                        <div
                          key={idx}
                          className="flex gap-3 md:gap-4 group cursor-pointer p-2 rounded-xl hover:bg-white/5 transition-all shrink-0 lg:shrink"
                          onClick={() => handleMediaClick({ ...video, type: selectedVideo.type })}
                        >
                          <div className={`relative ${selectedVideo.type === 'short' ? 'aspect-[9/16] h-24 md:h-32' : 'aspect-video w-24 md:w-32'} shrink-0 rounded-lg overflow-hidden bg-white/5`}>
                            <Image
                              src={`https://img.youtube.com/vi/${video.id.split('-')[0]}/0.jpg`}
                              alt={video.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              sizes="128px"
                            />
                          </div>
                          <div className="flex flex-col justify-center min-w-0">
                            <h5 className="text-white font-bold text-xs md:text-sm line-clamp-2 group-hover:text-primary transition-colors">{video.title}</h5>
                            <p className="text-[10px] md:text-xs text-gray-500 mt-1">{video.views}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </MediaModal>
        </div>
      </div>
    </section>
  );
}
