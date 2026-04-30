"use client";

import { useState } from "react";
import { Film, Image as ImageIcon, Zap } from "lucide-react";

const servicesList = [
  {
    title: "Video Editing",
    description: "Cinematic video editing with color grading, transitions & pacing that hooks viewers and keeps them watching till the end.",
    icon: <Film size={32} className="text-primary md:w-10 md:h-10" />
  },
  {
    title: "Thumbnail Design",
    description: "High-CTR thumbnails built on visual psychology and bold storytelling. Designed to stop the scroll and get the click.",
    icon: <ImageIcon size={32} className="text-primary md:w-10 md:h-10" />
  },
  {
    title: "Reels & Motion Graphics",
    description: "Shorts & Reels editing optimized for Instagram and YouTube, plus After Effects animations to elevate your brand.",
    icon: <Zap size={32} className="text-primary md:w-10 md:h-10" />
  }
];

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <section
      id="services-section"
      className="section-padding bg-black/80"
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
    >
      <div className="container-custom">
        <h2 className="section-title text-center text-white">Services</h2>
        <p className="text-gray-300 text-center mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
          Trusted by creators from 30K to 20M+ subscribers. I help you grow through cinematic editing,
          high-converting thumbnails, and scroll-stopping visuals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-5 sm:p-6 md:p-8 shadow-lg transition-transform duration-500 relative overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transform: hoveredCard === index
                  ? `perspective(1000px) rotateY(${(mousePos.x / (typeof window !== 'undefined' ? window.innerWidth : 1000) - 0.8) * 30}deg) rotateX(${-(30 * (mousePos.y / (typeof window !== 'undefined' ? window.innerHeight : 1000) - 0.8))}deg)`
                  : "perspective(1000px) rotateY(0deg) rotateX(0deg)",
                transition: "all 0.3s ease-out",
                boxShadow: hoveredCard === index ? "0 0 12px 3px rgba(255, 239, 91, 0.24)" : "none"
              }}
            >
              <div className="mb-4 md:mb-6 bg-primary/10 inline-block p-3 md:p-4 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-white text-lg md:text-xl font-bold mb-2 md:mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
