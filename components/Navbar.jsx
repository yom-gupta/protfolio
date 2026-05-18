"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Home,
  User,
  Layers,
  Video,
  Image as ImageIcon,
  Mail,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home-section", icon: Home },
  { name: "About", href: "#about-section", icon: User },
  { name: "Services", href: "#services-section", icon: Layers },
  { name: "Videos", href: "#video-section", icon: Video },
  { name: "Thumbnails", href: "#thumbnail-section", icon: ImageIcon },
  { name: "Designs", href: "#design-section", icon: ImageIcon },
  { name: "Contact", href: "#contact-section", icon: Mail },
];

// Mobile bottom nav shows a curated subset
const mobileNavLinks = [
  { name: "Home", href: "#home-section", icon: Home },
  { name: "About", href: "#about-section", icon: User },
  { name: "Videos", href: "#video-section", icon: Video },
  { name: "Designs", href: "#design-section", icon: ImageIcon },
  { name: "Contact", href: "#contact-section", icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home-section");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(href.substring(1));
    }
  };

  return (
    <>
      {/* Desktop Navigation: Floating Pill */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block transition-all duration-500`}>
        <div className={`px-2 py-2 rounded-full border border-white/10 backdrop-blur-xl bg-black/40 shadow-2xl transition-all duration-500 ${isScrolled ? "scale-95 opacity-90" : "scale-100 opacity-100"}`}>
          <ul className="flex items-center space-x-1 px-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              const Icon = link.icon;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 group ${isActive ? "text-white bg-white/10" : "text-gray-400 hover:text-white"
                      }`}
                  >
                    <Icon size={16} className={`${isActive ? "text-primary" : "group-hover:text-primary"} transition-colors`} />
                    <span>{link.name}</span>
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-primary/20 blur-md -z-10 animate-pulse"></div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Header: Logo only */}
      <div className="fixed top-0 left-0 right-0 h-14 z-50 md:hidden bg-black/60 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-4">
        <Link href="/" className="text-white font-bold text-lg flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-black font-black text-xs">RG</div>
          Rishabh Gupta
        </Link>
      </div>

      {/* Mobile Navigation: Bottom App Style Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
        <div className="mx-3 mb-4 px-2 py-2.5 rounded-2xl bg-black/80 backdrop-blur-2xl border border-white/10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.5)] flex items-center justify-around">
          {mobileNavLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative flex flex-col items-center gap-0.5 transition-all duration-300 ${isActive ? "text-primary scale-110" : "text-gray-500"
                  }`}
              >
                <div className={`p-1.5 rounded-xl transition-all duration-300 ${isActive ? "bg-primary/10" : ""}`}>
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className={`text-[9px] font-bold uppercase tracking-wider ${isActive ? "opacity-100" : "opacity-0 h-0"}`}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
