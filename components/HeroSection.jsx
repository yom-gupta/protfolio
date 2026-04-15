"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e) => {
      const redCircle = document.querySelector(".circle-red");
      const blueCircle = document.querySelector(".circle-blue");
      
      if (!redCircle || !blueCircle) return;
      
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      
      redCircle.style.transform = `
        translate(
          ${-0.25 * x}px,
          ${-0.25 * y}px
        )
        rotate(${0.2 * x}deg)
        scale(${1 + Math.abs(x / window.innerWidth * 0.4)})
      `;
      
      blueCircle.style.transform = `
        translate(
          ${0.15 * x}px,
          ${0.15 * y}px
        )
        rotate(${-0.3 * x}deg)
        scale(${1 + Math.abs(y / window.innerHeight * 0.2)})
      `;
    };

    const createParticles = () => {
      const container = document.getElementById("particles");
      if (!container) return;
      
      // Prevent adding more particles component re-renders
      if (container.children.length > 0) return;
      
      for (let i = 0; i < 100; i++) {
        const particle = document.createElement("div");
        const isYellow = Math.random() > 0.5;
        
        particle.style.cssText = `
          position: absolute;
          width: ${Math.random() * 4 + 2}px;
          height: ${Math.random() * 4 + 2}px;
          background: ${isYellow ? "#ffbd39" : "#002fff"};
          border-radius: 50%;
          opacity: ${Math.random() * 0.5};
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
        `;
        
        particle.animate([
          { transform: "translate(0, 0)" },
          { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)` }
        ], {
          duration: Math.random() * 5000 + 3000,
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out"
        });
        
        container.appendChild(particle);
      }
    };

    if (isMounted) {
      createParticles();
      window.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => {
      if (isMounted) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [isMounted]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home-section" 
      ref={sectionRef} 
      className="hero md:pb-[100px] md:h-[105vh] md:pt-10 relative min-h-screen flex items-center"
    >
      <div className="cyber-grid"></div>
      <div className="particles" id="particles"></div>
      
      <div className="content container-custom relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 w-full h-full" style={{ paddingRight: 0 }}>
        
        <div className="text w-full md:w-1/2 text-center md:text-left hero-container mt-24 md:mt-0 mb-10 md:mb-0 z-10 flex flex-col justify-center h-full">
          <div>
            <span className="subheading inline-block">Hello!</span>
            <h1 className="mb-6 mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
              I'm <span className="text-primary">Rishabh Gupta</span>
            </h1>
            
            <div className="h-16 mb-2">
              {isMounted && (
                <TypeAnimation
                  sequence={[
                    "Video Editor",
                    2000,
                    "Thumbnail Designer",
                    2000,
                    "Graphic Designer",
                    2000
                  ]}
                  wrapper="h2"
                  cursor={true}
                  repeat={Infinity}
                  className="text-white text-2xl md:text-3xl font-semibold"
                />
              )}
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center md:justify-start w-full mx-auto md:mx-0 max-w-sm md:max-w-none">
              <Link 
                href="#about-section" 
                className="btn btn-primary py-3 px-6 text-center text-lg w-full md:w-auto"
                onClick={(e) => scrollToSection(e, "#about-section")}
              >
                About Me
              </Link>
              <Link 
                href="#video-section" 
                className="btn btn-white py-3 px-6 text-white hover:bg-white/10 transition-colors font-semibold rounded-full text-center text-lg w-full md:w-auto mt-4 sm:mt-0"
                onClick={(e) => scrollToSection(e, "#video-section")}
              >
                My Works
              </Link>
            </div>
          </div>
        </div>
        
        <div className="image-content relative w-full absolute right-0 flex justify-center md:justify-end h-[50vh] md:h-full mt-10 md:mt-0">
          <div className="relative w-full h-full md:w-[90vw] md:h-full max-w-[90vw] md:max-w-[50vw] flex items-end md:items-center justify-center pointer-events-none">
            <Image 
              src="/img/Designer (4)-Photoroom.webp" 
              alt="Rishabh Gupta background" 
              className="bg-img object-cover scale-[1.1]" 
              fill 
              priority 
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <Image 
              src="/img/Designer_1_ins.webp" 
              alt="Rishabh Gupta" 
              className="object-contain object-bottom md:object-center drop-shadow-2xl z-10" 
              fill 
              priority 
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
      
      <div className="circle circle-red"></div>
      <div className="circle circle-blue"></div>
    </section>
  );
}
