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
  Menu,
  X
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

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home-section");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block transition-all duration-500 ${isScrolled ? "w-auto" : "w-auto"}`}>
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
      <div className="fixed top-0 left-0 right-0 h-16 z-50 md:hidden bg-black/50 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6">
        <Link href="/" className="text-white font-bold text-xl flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-black font-black text-xs">RG</div>
          Rishabh Gupta
        </Link>
      </div>

      {/* Mobile Navigation: Bottom App Style Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-safe">
        <div className="mx-4 mb-6 px-4 py-3 rounded-3xl bg-black/80 backdrop-blur-2xl border border-white/10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.5)] flex items-center justify-around">
          {navLinks.slice(0, 5).map((link) => { // Showing first 5 for bottom bar to keep it clean
            const isActive = activeSection === link.href.substring(1);
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? "text-primary scale-110" : "text-gray-500 hover:text-gray-300"
                  }`}
              >
                <div className={`p-2 rounded-2xl transition-all duration-300 ${isActive ? "bg-primary/10" : ""}`}>
                  <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                {isActive && (
                  <span className="text-[10px] font-bold uppercase tracking-wider">{link.name}</span>
                )}
              </Link>
            );
          })}

          {/* Menu button for more links if needed, but since we have 6, let's keep it simple or use a menu */}
          <Link
            href={navLinks[5].href}
            onClick={(e) => scrollToSection(e, navLinks[5].href)}
            className={`relative flex flex-col items-center gap-1 transition-all duration-300 ${activeSection === navLinks[5].href.substring(1) ? "text-primary scale-110" : "text-gray-500 hover:text-gray-300"
              }`}
          >
            <div className={`p-2 rounded-2xl transition-all duration-300 ${activeSection === navLinks[5].href.substring(1) ? "bg-primary/10" : ""}`}>
              <Mail size={22} strokeWidth={activeSection === navLinks[5].href.substring(1) ? 2.5 : 2} />
            </div>
            {activeSection === navLinks[5].href.substring(1) && (
              <span className="text-[10px] font-bold uppercase tracking-wider">Contact</span>
            )}
          </Link>
        </div>
      </nav>
    </>
  );
}
