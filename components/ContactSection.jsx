"use client";

import { FiMail as Mail, FiGlobe as GlobeIcon, FiPhone as Phone, FiInstagram as Instagram } from 'react-icons/fi';


import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { trackEvent } from "@/utils/analytics";

export default function ContactSection() {
  const [isHovered, setIsHovered] = useState(false);
  const contactDetails = [
    {
      icon: <GlobeIcon className="text-primary" size={22} suppressHydrationWarning />,
      title: "Website",
      value: "yomgupta.com",
      href: "https://yomgupta.com"
    },
    {
      icon: <Phone className="text-primary" size={22} suppressHydrationWarning />,
      title: "WhatsApp Number",
      value: "+91 9599326954",
      href: "https://api.whatsapp.com/send?phone=919599326954&text=Hey%20Rishabh!%20I%20just%20came%20across%20your%20portfolio,%20and%20your%20work%20is%20seriously%20impressive.%20I'd%20love%20to%20explore%20how%20we%20can%20collaborate.%20Let's%20connect!"
    },
    {
      icon: <Mail className="text-primary" size={22} suppressHydrationWarning />,
      title: "Email Address",
      value: "Rishabh@yomgupta.com",
      href: "mailto:Rishabh@yomgupta.com"
    },
    {
      icon: <Instagram className="text-primary" size={22} suppressHydrationWarning />,
      title: "Instagram",
      value: "mr_yom_gupta",
      href: "https://Instagram.com/mr_yom_gupta"
    }
  ];

  return (
    <section id="contact-section" className="section-padding bg-black overflow-hidden pt-16 md:pt-20 pb-24 md:pb-10">
      <div className="container-custom">
        {/* Contact Me Details */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">Contact Me</h2>
          <p className="text-gray-400 mb-8 md:mb-12 text-sm md:text-base">Below are the details to reach out to me!</p>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {contactDetails.map((detail, index) => {
              const CardContent = (
                <>
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#151a23] border border-primary/30 flex items-center justify-center mb-3 md:mb-6 shadow-[0_0_15px_rgba(255,189,57,0.1)] cursor-pointer"
                  >
                    {detail.icon}
                  </motion.div>
                  <h3 className="text-white font-bold text-sm md:text-lg mb-1 md:mb-3">{detail.title}</h3>
                  <p className="text-primary/80 font-medium text-xs md:text-sm break-all">{detail.value}</p>
                </>
              );

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#0c1015] rounded-xl md:rounded-[20px] p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border border-transparent hover:border-primary/20"
                  style={{ minHeight: '160px' }}
                >
                  {detail.href ? (
                    <a
                      href={detail.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center w-full h-full"
                      onClick={() => trackEvent("contact_click", "Leads", detail.title)}
                    >
                      {CardContent}
                    </a>
                  ) : (
                    CardContent
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Collaboration Section */}
        <div className="text-center mt-16 md:mt-32 mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl mb-6 md:mb-10 text-white font-bold max-w-4xl mx-auto leading-tight">
            Your Vision, My Craft — <span className="text-primary">Let's Build Something Great</span>
          </h2>

          <div className="mt-8 md:mt-12 text-center">
            <div className="btn-container inline-block">
              <a
                href="https://api.whatsapp.com/send?phone=919599326954&text=Hey%20Rishabh!%20I%20just%20came%20across%20your%20portfolio,%20and%20your%20work%20is%20seriously%20impressive.%20I'd%20love%20to%20explore%20how%20we%20can%20collaborate.%20Let's%20connect!"
                className="button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => trackEvent("whatsapp_lead_click", "Leads", "WhatsApp Collab Button")}
                target="_blank"
              >
                Connect on WhatsApp
                <div className="image-container pointer-events-none">
                  <Image
                    src="/img/btn_img.webp"
                    alt="Portfolio Preview"
                    width={100}
                    height={100}
                    style={{
                      transform: `scale(${isHovered ? 1 : 0.5}) translateY(${isHovered ? '0%' : '80%'})`,
                      opacity: isHovered ? 1 : 0,
                      transition: "transform 0.5s ease, opacity 0.8s ease"
                    }}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
