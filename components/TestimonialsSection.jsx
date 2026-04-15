"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const skillsTags = [
  "🎬 VIDEO EDITING EXPERT",
  "🎨 GRAPHICS THAT STAND OUT",
  "🖼️ HIGH-CONVERTING THUMBNAILS",
  "⚡ FAST TURNAROUND",
  "💎 PREMIUM QUALITY",
  "📱 REEL/SHORTS SPECIALIST",
  "🧠 TREND-SAVVY CREATIVE",
  "📈 VIEWS THAT GROW"
];

const testimonials = [
  {
    name: "Coding for All",
    role: "102K subscribers",
    quote: "Working with Rishabh has been a game-changer for my channel. His thumbnails always grab attention, and the video edits add a whole new level of engagement.",
    image: "https://yt3.googleusercontent.com/RFWPISFlWLdzYH074F9iaE7sSojzLjlL3J9sv28IKl-4iFLwOCr0hrn5dp_cUhDG7yQIu3PT=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Dear Sir",
    role: "20.1M subscribers",
    quote: "With Rishabh's creative touch, my videos don't just teach — they engage. Every edit makes learning feel like an experience, not a lecture.",
    image: "https://yt3.googleusercontent.com/iZ6sYwrQTHIOKZIEBeFU1VXWved8RPCPlvZoFQQUpx2Lcws1qu0OHwTo8BgXXyFYhoMo_E8nheE=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Sachin Anand",
    role: "30.4K subscribers",
    quote: "His video editing is creative and precise, and his thumbnails really grab attention. Fast, reliable, and always top-quality—I'm grateful to have him on the team!",
    image: "https://yt3.googleusercontent.com/-UpQZzqhDS58djt3RPNazD5Xfkc1dkGaOsDKETY-Fw-hFB8MigVqo62lO31dyFD6Yy-cXxma=s160-c-k-c0x00ffffff-no-rj",
  }
];

const comments = [
  { username: "@VisualVibes", time: "2 hours ago", text: "The editing on this video is insane! Every transition was on point. 🔥", likes: "3", replies: 0 },
  { username: "@EduMaster101", time: "1 day ago", text: "That thumbnail is so eye-catching! I clicked instantly. 👏", likes: "6", replies: 7 },
  { username: "@NextLevelEdits", time: "5 hours ago", text: "The video pacing and edits made it so much more engaging. Loved it! 😍", likes: "2", replies: 1 },
  { username: "@CreativeMind", time: "3 hours ago", text: "This thumbnail is a total scroll-stopper. Perfect for the video. 💯", likes: "1", replies: 0 },
  { username: "@TrendWatcher", time: "2 days ago", text: "The editing style kept me hooked the entire time. So well done! 🔥", likes: "0", replies: 2 },
  { username: "@EditorInspo", time: "6 hours ago", text: "Thumbnail was on point! Easily one of the best I've seen. 🚀", likes: "4", replies: 0 }
];

export default function TestimonialsSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotateValue = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section className="relative py-16 bg-black overflow-hidden">
      {/* Moving tags strip */}
      <div className="z-50 bg-gray-950/80 backdrop-blur-sm py-3 border-y border-gray-800/50 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee-reverse">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="inline-flex">
              {skillsTags.map((tag, i) => (
                <div key={i} className="inline-flex gap-2 items-center transform hover:scale-110 transition-transform duration-200">
                  <span className="text-gray-300 mr-8 uppercase font-extrabold text-sm">{tag}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute top-80 -right-20 w-96 h-96 bg-purple-500 rounded-full blur-[120px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-20">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent text-center mb-16">
          What People Say
        </h2>

        {/* Testimonials Marquee */}
        <div className="relative mb-24">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black via-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black via-black to-transparent z-10 pointer-events-none"></div>
          
          <div className="overflow-hidden">
            <div className="flex gap-6 py-8 animate-marquee-forward hover:[animation-play-state:paused] w-max">
              {[...Array(2)].map((_, outerIdx) => (
                <div key={outerIdx} className="flex gap-6">
                  {testimonials.map((testimonial, idx) => (
                    <motion.div 
                      key={`${outerIdx}-${idx}`}
                      className="testimonial-card bg-[#0c1015] p-8 rounded-[32px] w-[400px] shrink-0 cursor-pointer border border-gray-800/20 backdrop-blur-sm"
                      style={{ 
                        boxShadow: "0 8px 32px -5px rgba(0, 0, 0, 0.5)",
                      }}
                      whileHover={{ 
                        scale: 1.02, 
                        boxShadow: "0 10px 40px -5px rgba(0, 0, 0, 0.6)",
                      }}
                      transition={{ type: "spring", damping: 30, stiffness: 300 }}
                    >
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="relative">
                          <motion.img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-700/50"
                            whileHover={{ scale: 1.1 }}
                          />
                          <div className="absolute -bottom-1 -right-1">
                            <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-white text-lg font-medium mb-1">{testimonial.name}</h3>
                          <p className="text-gray-400 text-sm font-light">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-base font-light leading-relaxed">"{testimonial.quote}"</p>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wall of Love Section */}
        <motion.h2 
          className="text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Wall of Love 💛
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comments.map((comment, index) => (
            <motion.div 
              key={index}
              className="bg-gray-900 p-4 rounded-lg shadow-md border border-gray-800"
              style={{ boxShadow: "0 0 20px 3px rgba(255, 255, 255, 0.05)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-500 opacity-50 mr-3"></div>
                <div>
                  <p className="text-white font-semibold">{comment.username}</p>
                  <p className="text-gray-400 text-sm">{comment.time}</p>
                </div>
              </div>
              <p className="text-white ml-13 pl-13 mb-3">{comment.text}</p>
              
              <div className="flex items-center space-x-4 text-gray-500 text-sm pl-13">
                <button className="flex items-center space-x-1 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                  <span>{comment.likes}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg>
                </button>
                <button className="hover:text-white transition-colors">Reply</button>
              </div>
              
              {comment.replies > 0 && (
                <button className="text-blue-400 mt-2 hover:underline pl-13 text-sm">
                  {comment.replies} replies
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
