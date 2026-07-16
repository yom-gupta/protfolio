"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Globe, Eye, Code2, Play, X } from "lucide-react";
import { trackEvent } from "@/utils/analytics";

const websiteProjects = [
  {
    id: 1,
    title: "Cafe MRP",
    subtitle: "Restaurant & Café Website",
    url: "https://yom-cafe-mrp.vercel.app/",
    description:
      "A premium café website featuring a rich menu showcase, ambient visuals, and seamless UX designed to reflect the warmth of the Cafe MRP brand.",
    tags: ["Web Design", "UI/UX", "Responsive"],
    accent: "#facc15",
    gradient: "from-yellow-950/30 via-yellow-900/10 to-transparent",
    previewBg: "#1e1b10",
    icon: "☕",
  },
  {
    id: 2,
    title: "Earlyman Lifestyle Hub",
    subtitle: "Lifestyle & Wellness Brand",
    url: "https://earlyman-lifestyle-hub.vercel.app/",
    description:
      "A bold lifestyle brand hub blending clean aesthetics with powerful storytelling — built to convert visitors into loyal community members.",
    tags: ["Branding", "Web Design", "Landing Page"],
    accent: "#ffffff",
    gradient: "from-neutral-900/30 via-neutral-800/10 to-transparent",
    previewBg: "#171717",
    icon: "🌿",
  },
  {
    id: 3,
    title: "Shree Radhe Radhe Sweets",
    subtitle: "Traditional Sweet Shop",
    url: "https://shree-radhe-radhe-sweets.vercel.app/",
    description:
      "A vibrant and culturally rich website for a traditional Indian sweet shop, featuring product galleries, festive themes, and ordering information.",
    tags: ["Web Design", "E-Commerce", "Branding"],
    accent: "#D4A843",
    gradient: "from-amber-950/30 via-amber-900/10 to-transparent",
    previewBg: "#1c1810",
    icon: "🍬",
  },
  {
    id: 4,
    title: "EasyRead",
    subtitle: "Web & Android App",
    url: "https://easyreadsyom.vercel.app/",
    description:
      "A cross-platform reading companion application built for the web and Android, designed to enhance focus and reading retention.",
    tags: ["App Development", "Web App", "Android"],
    accent: "#4A7C59",
    gradient: "from-emerald-950/30 via-emerald-900/10 to-transparent",
    previewBg: "#0f1c14",
    icon: "📱",
  },
  {
    id: 5,
    title: "FocalFlow",
    subtitle: "Productivity App (WIP)",
    url: "https://focalflow.vercel.app/",
    description:
      "A productivity and time-management application focused on achieving deep work and flow states. Currently in development.",
    tags: ["Productivity", "Web App", "WIP"],
    accent: "#8B5CF6",
    gradient: "from-purple-950/30 via-purple-900/10 to-transparent",
    previewBg: "#160f24",
    icon: "⚡",
  },
  {
    id: 6,
    title: "Tera Mera",
    subtitle: "Early Web Project",
    url: "https://tera-mera.vercel.app/",
    description:
      "One of my very first web development projects! A nostalgic look back at where my coding journey began.",
    tags: ["Legacy", "First Project", "Web Design"],
    accent: "#4F46E5",
    gradient: "from-indigo-950/30 via-indigo-900/10 to-transparent",
    previewBg: "#0f1124",
    icon: "🚀",
  }
];

export default function WebsitesSection() {
  const [hoveredId, setHoveredId] = useState(null);
  // ids of cards whose live iframe the visitor explicitly loaded —
  // iframes are heavy, so they only mount on demand
  const [liveIds, setLiveIds] = useState(() => new Set());

  const toggleLive = (project) => {
    setLiveIds((prev) => {
      const next = new Set(prev);
      if (next.has(project.id)) {
        next.delete(project.id);
      } else {
        next.add(project.id);
        trackEvent("website_live_preview", "Websites", project.title);
      }
      return next;
    });
  };

  return (
    <section
      id="websites-section"
      className="section-padding bg-black border-t border-white/5"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Globe size={12} />
            Web Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6"
          >
            Websites I&apos;ve{" "}
            <span className="text-primary">Built</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base"
          >
            From cafés to lifestyle brands — full-stack websites designed and
            developed to convert visitors into customers.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {websiteProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden transition-all duration-500 hover:border-white/20"
              style={{
                boxShadow:
                  hoveredId === project.id
                    ? `0 0 40px 0 ${project.accent}22, 0 20px 60px -20px ${project.accent}33`
                    : "none",
              }}
            >
              {/* Browser Mock Preview */}
              <div
                className="relative w-full overflow-hidden"
                style={{ background: project.previewBg, height: "200px" }}
              >
                {/* Browser chrome */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-[#1a1a1a] border-b border-white/5 flex items-center px-3 gap-2 z-10">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex-1 mx-2 h-4 rounded-full bg-white/5 border border-white/5 flex items-center px-2">
                    <Globe size={8} className="text-gray-500 mr-1 shrink-0" />
                    <span className="text-[9px] text-gray-500 truncate">
                      {project.url.replace("https://", "")}
                    </span>
                  </div>
                </div>

                {liveIds.has(project.id) ? (
                  <>
                    {/* Live interactive iframe — mounted only on demand */}
                    <div className="absolute inset-0 mt-8 bg-[#111] overflow-hidden">
                      <iframe
                        src={project.url}
                        title={`${project.title} live preview`}
                        loading="lazy"
                        className="absolute top-0 left-0 border-0"
                        style={{
                          width: "300%",
                          height: "300%",
                          transform: "scale(0.3334)",
                          transformOrigin: "top left",
                        }}
                        sandbox="allow-scripts allow-same-origin allow-popups"
                      />
                    </div>
                    <button
                      onClick={() => toggleLive(project)}
                      aria-label="Close live preview"
                      className="absolute top-10 right-2 z-20 p-1.5 rounded-full bg-black/70 border border-white/20 text-white hover:bg-black transition-all"
                    >
                      <X size={12} />
                    </button>
                  </>
                ) : (
                  <>
                    {/* Screenshot placeholder (instant, cheap) */}
                    <div className="absolute inset-0 mt-8 bg-[#111] overflow-hidden">
                      <Image
                        src={`https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url&type=png&viewport.width=1280&viewport.height=800`}
                        alt={`${project.title} preview`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 pointer-events-none" />
                    </div>

                    {/* Hover overlay with live preview + visit CTAs */}
                    <div className="absolute inset-0 mt-8 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3 flex-wrap px-4">
                      <button
                        onClick={() => toggleLive(project)}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105"
                        style={{
                          background: project.accent,
                          color: "#000",
                        }}
                      >
                        <Play size={16} />
                        Live Preview
                      </button>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackEvent("website_visit", "Websites", project.title)
                        }
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm border border-white/30 text-white transition-all duration-300 hover:scale-105 hover:bg-white/10"
                      >
                        <Eye size={16} />
                        Visit Site
                      </a>
                    </div>
                  </>
                )}
              </div>

              {/* Card Content */}
              <div className="p-5 md:p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight">
                      {project.title}
                    </h3>
                    <p
                      className="text-xs font-semibold mt-0.5"
                      style={{ color: project.accent }}
                    >
                      {project.subtitle}
                    </p>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("website_visit", "Websites", project.title)
                    }
                    className="p-2 rounded-full border border-white/10 hover:border-white/30 text-gray-400 hover:text-white transition-all duration-300 shrink-0"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border"
                      style={{
                        color: project.accent,
                        borderColor: `${project.accent}33`,
                        background: `${project.accent}11`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom glow line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-gray-500 text-sm mb-4">
            Want a website for your brand?
          </p>
          <a
            href="#contact-section"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact-section")
                ?.scrollIntoView({ behavior: "smooth" });
              trackEvent("website_cta", "Websites", "Get a Website");
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-black font-bold text-sm hover:shadow-[0_0_30px_rgba(255,189,57,0.4)] transition-all duration-300 hover:-translate-y-1"
          >
            <Code2 size={16} />
            Let&apos;s Build Yours
          </a>
        </motion.div>
      </div>
    </section>
  );
}
