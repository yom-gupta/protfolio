"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/**
 * MediaModal - A premium full-screen modal for media content.
 * 
 * Props:
 * - isOpen: boolean
 * - onClose: function
 * - title: string (optional)
 * - children: React node (the theater mode content)
 */
export default function MediaModal({ isOpen, onClose, title, children }) {
  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Escape key to close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-2 sm:p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            className="relative w-full max-w-5xl max-h-[90vh] sm:max-h-[85vh] bg-[#0c0c0c] rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            
            {/* Inner Glow Border */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] border border-white/5 pointer-events-none" />

            {/* Header / Close Button */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-50">
              <button
                onClick={onClose}
                className="p-2 sm:p-2.5 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full border border-white/20 text-white/70 hover:text-white transition-all group scale-100 hover:scale-110 active:scale-95 shadow-xl min-w-[40px] min-h-[40px] flex items-center justify-center"
                aria-label="Close modal"
              >
                <X size={18} className="sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-90" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 pt-14 sm:p-6 sm:pt-16 md:p-12">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
