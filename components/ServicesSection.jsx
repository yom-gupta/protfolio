"use client";

import { useState } from "react";
import { Film, Image as ImageIcon, Zap } from "lucide-react";

const servicesList = [
  {
    title: "Video Editing",
    description: "Professional video editing with advanced effects, transitions, and color grading.",
    icon: <Film size={40} className="text-primary" />
  },
  {
    title: "Thumbnail Design",
    description: "Eye-catching thumbnails that increase click-through rates and engagement.",
    icon: <ImageIcon size={40} className="text-primary" />
  },
  {
    title: "Motion Graphics",
    description: "Dynamic motion graphics and animations to enhance your content.",
    icon: <Zap size={40} className="text-primary" />
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
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          I offer comprehensive video editing and design solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-8 shadow-lg transition-transform duration-500 relative overflow-hidden"
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
              <div className="mb-6 bg-primary/10 inline-block p-4 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-white text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
