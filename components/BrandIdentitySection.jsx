"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Eye, X, ChevronRight } from "lucide-react";
import { trackEvent } from "@/utils/analytics";

const brandPacks = [
  {
    id: 1,
    brand: "MORI CAFÉ",
    tagline: "Brand Identity Pack",
    description:
      "A complete visual identity system for Mori Café — from logo design and color palette to typography and brand collateral that breathes warmth, elegance, and a love for coffee.",
    image: "/img/desing/MORI CAFÉ .png",
    palette: ["#E8E4DB", "#B9B2A3", "#7A8470", "#B36444", "#434E39"],
    paletteNames: ["Vanilla", "Latte", "Matcha", "Terracotta", "Espresso"],
    deliverables: [
      "Logo Design",
      "Color System",
      "Typography",
      "Brand Guidelines",
      "Social Media Templates",
    ],
    category: "Brand Identity",
    accentColor: "#7A8470",
  },
];

export default function BrandIdentitySection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeBrand, setActiveBrand] = useState(null);

  const openModal = (brand) => {
    setActiveBrand(brand);
    setIsModalOpen(true);
    trackEvent("brand_identity_view", "Brand Identity", brand.brand);
  };

  return (
    <section
      id="brand-section"
      className="section-padding bg-[#030303] border-t border-white/5"
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
            <Palette size={12} />
            Brand Identity
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6"
          >
            Brand Identity{" "}
            <span className="text-primary">Packs</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base"
          >
            Complete visual identity systems that give brands a consistent,
            professional, and memorable presence across all touchpoints.
          </motion.p>
        </div>

        {/* Brand Cards */}
        <div className="space-y-8 md:space-y-12">
          {brandPacks.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl md:rounded-3xl border border-white/10 bg-[#0a0a0a] overflow-hidden hover:border-white/20 transition-all duration-500"
              style={{
                boxShadow: `0 0 60px 0 ${brand.accentColor}11`,
              }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image Preview */}
                <div
                  className="relative lg:w-1/2 xl:w-5/12 cursor-pointer overflow-hidden"
                  style={{ minHeight: "320px" }}
                  onClick={() => openModal(brand)}
                >
                  <Image
                    src={brand.image}
                    alt={brand.brand}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm text-black"
                      style={{ background: brand.accentColor }}>
                      <Eye size={16} />
                      View Full Pack
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  {/* Label */}
                  <span
                    className="inline-block text-[10px] font-black uppercase tracking-[0.3em] mb-3"
                    style={{ color: brand.accentColor }}
                  >
                    {brand.category}
                  </span>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 tracking-tight">
                    {brand.brand}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                    {brand.description}
                  </p>

                  {/* Color Palette */}
                  <div className="mb-6">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3">
                      Brand Colors
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                      {brand.palette.map((color, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                          <div
                            className="w-8 h-8 rounded-full border-2 border-white/10 shadow-lg"
                            style={{ background: color }}
                            title={brand.paletteNames[i]}
                          />
                          <span className="text-[8px] text-gray-600 font-mono">
                            {brand.paletteNames[i]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="mb-8">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3">
                      Deliverables
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {brand.deliverables.map((item) => (
                        <span
                          key={item}
                          className="flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold border"
                          style={{
                            color: brand.accentColor,
                            borderColor: `${brand.accentColor}33`,
                            background: `${brand.accentColor}11`,
                          }}
                        >
                          <ChevronRight size={10} />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => openModal(brand)}
                      className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-black transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      style={{
                        background: brand.accentColor,
                        boxShadow: `0 10px 30px -10px ${brand.accentColor}66`,
                      }}
                    >
                      <Eye size={16} />
                      View Full Identity
                    </button>
                    <a
                      href="#contact-section"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .querySelector("#contact-section")
                          ?.scrollIntoView({ behavior: "smooth" });
                        trackEvent("brand_cta", "Brand Identity", "Order Brand Pack");
                      }}
                      className="text-sm text-gray-400 hover:text-white transition-colors underline underline-offset-4"
                    >
                      Order yours →
                    </a>
                  </div>
                </div>
              </div>

              {/* Accent border top */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${brand.accentColor}, transparent)`,
                  opacity: 0.6,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Image Modal */}
      <AnimatePresence>
        {isModalOpen && activeBrand && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
                onClick={() => setIsModalOpen(false)}
              >
                <X size={20} />
              </button>
              <div className="relative w-full overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={activeBrand.image}
                  alt={activeBrand.brand}
                  width={1200}
                  height={900}
                  className="object-contain w-full max-h-[85vh]"
                  priority
                />
              </div>
              <p className="text-center text-gray-400 text-sm mt-4">
                {activeBrand.brand} — {activeBrand.tagline}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
