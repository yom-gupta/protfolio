"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { trackEvent } from "@/utils/analytics";
import {
  Home,
  User,
  Globe,
  Video,
  Image as ImageIcon,
  Mail,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home-section", icon: Home },
  { name: "About", href: "#about-section", icon: User },
  { name: "Websites", href: "#websites-section", icon: Globe },
  { name: "Videos", href: "#video-section", icon: Video },
  { name: "Thumbnails", href: "#thumbnail-section", icon: ImageIcon },
  { name: "Designs", href: "#design-section", icon: ImageIcon },
  { name: "Contact", href: "#contact-section", icon: Mail },
];

// Mobile shows all nav items as icons only
const mobileNavLinks = [
  { name: "Home", href: "#home-section", icon: Home },
  { name: "About", href: "#about-section", icon: User },
  { name: "Websites", href: "#websites-section", icon: Globe },
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
          trackEvent("section_view", "Behavior", entry.target.id);
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

  const scrollToSection = useCallback((e, href, linkName) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(href.substring(1));
      trackEvent("nav_click", "Navigation", linkName);
    }
  }, []);

  return (
    <>
      {/* Desktop Navigation: Floating Pill */}
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block transition-all duration-500`}
      >
        <div
          className={`px-2 py-2 rounded-full border border-white/10 backdrop-blur-xl bg-black/40 shadow-2xl transition-all duration-500 ${
            isScrolled ? "scale-95 opacity-90" : "scale-100 opacity-100"
          }`}
        >
          <ul className="flex items-center space-x-1 px-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              const Icon = link.icon;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href, link.name)}
                    className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 group ${
                      isActive
                        ? "text-white bg-white/10"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <Icon
                      size={16}
                      className={`${
                        isActive ? "text-primary" : "group-hover:text-primary"
                      } transition-colors`}
                    />
                    <span>{link.name}</span>
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-primary/20 blur-md -z-10 animate-pulse" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* ─── Mobile: Apple Liquid Glass Bottom Bar ─── */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <div className="mobile-glass-bar">
          {mobileNavLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href, link.name)}
                className={`mobile-glass-item ${isActive ? "active" : ""}`}
                aria-label={link.name}
              >
                <div className="mobile-glass-icon-wrap">
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
                  {/* Active indicator dot */}
                  {isActive && <span className="mobile-glass-dot" />}
                </div>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
