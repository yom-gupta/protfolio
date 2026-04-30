"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skillsTags = [
  "🎬 VIDEO EDITING EXPERT",
  "🎨 GRAPHICS THAT STAND OUT",
  "🖼️ HIGH-CONVERTING THUMBNAILS",
  "⚡ FAST TURNAROUND",
  "💎 PREMIUM QUALITY",
  "📱 REEL/SHORTS SPECIALIST",
  "🧠 TREND-SAVVY CREATIVE",
  "📈 VIEWS THAT GROW",
];

const testimonials = [
  {
    name: "Coding for All",
    role: "102K subscribers",
    quote:
      "Working with Rishabh has been a game-changer for my channel. His thumbnails always grab attention, and the video edits add a whole new level of engagement.",
    image:
      "https://yt3.googleusercontent.com/RFWPISFlWLdzYH074F9iaE7sSojzLjlL3J9sv28IKl-4iFLwOCr0hrn5dp_cUhDG7yQIu3PT=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Dear Sir",
    role: "20.1M subscribers",
    quote:
      "With Rishabh's creative touch, my videos don't just teach, they engage. Every edit makes learning feel like an experience, not a lecture.",
    image:
      "https://yt3.googleusercontent.com/iZ6sYwrQTHIOKZIEBeFU1VXWved8RPCPlvZoFQQUpx2Lcws1qu0OHwTo8BgXXyFYhoMo_E8nheE=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Sachin Anand",
    role: "30.4K subscribers",
    quote:
      "His video editing is creative and precise, and his thumbnails really grab attention. Fast, reliable, and always top-quality. I'm grateful to have him on the team!",
    image:
      "https://yt3.googleusercontent.com/-UpQZzqhDS58djt3RPNazD5Xfkc1dkGaOsDKETY-Fw-hFB8MigVqo62lO31dyFD6Yy-cXxma=s160-c-k-c0x00ffffff-no-rj",
  },
];

const chatCards = [
  {
    src: "/ss of chats/client replys (1).png",
    tag: "Zero Revisions",
    highlight: "#25D366",
  },
  {
    src: "/ss of chats/client replys (2).png",
    tag: "Fast Delivery",
    highlight: "#6C63FF",
  },
  {
    src: "/ss of chats/client replys (3).png",
    tag: "No Changes Needed",
    highlight: "#FF6584",
  },
  {
    src: "/ss of chats/client replys (4).png",
    tag: "100% Satisfied",
    highlight: "#F7B731",
  },
  {
    src: "/ss of chats/client replys (5).png",
    tag: "Perfect Thumbnail",
    highlight: "#907CFE",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-16 md:py-24 bg-black overflow-hidden" id="testimonials">
      {/* Moving tags strip */}
      <div className="z-50 bg-black/40 backdrop-blur-md py-4 md:py-5 border-y border-white/5 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee-reverse">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="inline-flex">
              {skillsTags.map((tag, i) => (
                <div
                  key={i}
                  className="inline-flex gap-2 items-center transform hover:scale-105 transition-transform duration-200"
                >
                  <span className="text-gray-400 hover:text-white transition-colors mr-6 sm:mr-10 uppercase font-bold text-[10px] sm:text-xs tracking-widest">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-48 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-16 md:mt-24">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.span 
            className="text-primary text-xs font-bold tracking-[0.3em] uppercase block mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Social Proof
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            What People Say
          </h2>
        </div>

        {/* Testimonials marquee */}
        <div className="relative mb-24 md:mb-32">
          {/* Softer Masks */}
          <div className="absolute left-0 top-0 w-20 md:w-48 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 md:w-48 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden">
            <div className="flex gap-6 md:gap-8 py-8 md:py-10 animate-marquee-forward hover:[animation-play-state:paused] w-max">
              {[...Array(2)].map((_, outerIdx) => (
                <div key={outerIdx} className="flex gap-6 md:gap-8">
                  {testimonials.map((testimonial, idx) => (
                    <motion.div
                      key={`${outerIdx}-${idx}`}
                      className="bg-white/[0.03] backdrop-blur-sm p-6 md:p-10 rounded-[2rem] w-[85vw] sm:w-[400px] md:w-[450px] shrink-0 cursor-pointer border border-white/10 hover:border-primary/30 transition-colors"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={56}
                            height={56}
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ring-1 ring-white/20"
                            loading="lazy"
                          />
                          <div className="absolute -bottom-1 -right-1 bg-primary text-black rounded-full p-0.5">
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-white text-lg font-bold">
                            {testimonial.name}
                          </h3>
                          <p className="text-primary text-xs font-semibold tracking-wide uppercase">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed italic">
                        "{testimonial.quote}"
                      </p>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Wall of Love ── */}
        <div className="text-center mb-12 md:mb-20">
          <motion.p
            className="text-xs font-bold tracking-[0.25em] uppercase text-gray-500 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Straight from the chat
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Wall of Love <span className="text-primary">💛</span>
          </motion.h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
            Nothing speaks louder than results. Here's what my clients say in real-time conversations.
          </p>
        </div>

        {/* Masonry-style grid for chat screenshots */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 pb-20">
          {chatCards.map((card, index) => (
            <motion.div
              key={index}
              className="break-inside-avoid group relative rounded-3xl overflow-hidden bg-[#121212] border border-white/5"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              style={{
                boxShadow: `0 20px 40px -20px rgba(0,0,0,0.8)`,
              }}
            >
              {/* Top bar — WhatsApp style */}
              <div
                className="flex items-center gap-3 px-5 py-4 border-b border-white/5 bg-white/[0.02]"
              >
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: card.highlight + "20" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill={card.highlight}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <span className="text-white text-[10px] font-bold block leading-none">WhatsApp</span>
                  <span className="text-[9px] text-gray-500">Client Feedback</span>
                </div>
                <span
                  className="ml-auto text-[10px] font-bold rounded-full px-3 py-1"
                  style={{
                    background: card.highlight + "15",
                    color: card.highlight,
                    border: `1px solid ${card.highlight}25`,
                  }}
                >
                  {card.tag}
                </span>
              </div>

              {/* Screenshot */}
              <div className="bg-[#0b0b0b] relative overflow-hidden">
                <Image
                  src={card.src}
                  alt={card.tag}
                  width={600}
                  height={800}
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                  quality={90}
                  loading="lazy"
                />
                
                {/* Overlay Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${card.highlight}10 0%, transparent 70%)`,
                  }}
                />
              </div>

              {/* Bottom Tag */}
              <div className="px-5 py-4 bg-white/[0.01] flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[10px] text-gray-600 font-mono">VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          className="text-center text-gray-600 text-xs mt-12 mb-16 md:mb-0 flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="tracking-wide">Real client conversations — 100% authentic</span>
          </div>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
