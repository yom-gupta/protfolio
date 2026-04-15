"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for the different cursor parts
  const springConfigInner = { damping: 15, stiffness: 100, mass: 0.1 };
  const springConfigOuter = { damping: 20, stiffness: 50, mass: 0.5 };

  const cursorXInner = useSpring(mouseX, springConfigInner);
  const cursorYInner = useSpring(mouseY, springConfigInner);
  
  const cursorXOuter = useSpring(mouseX, springConfigOuter);
  const cursorYOuter = useSpring(mouseY, springConfigOuter);

  useEffect(() => {
    setIsMounted(true);
    
    // Set initial position out of view to avoid flash on mobile
    mouseX.set(-100);
    mouseY.set(-100);
    
    const handleMouseMove = (e) => {
      // Don't show custom cursor on mobile
      if (window.innerWidth <= 768) return;
      
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // Check if hovering over clickable elements
      const target = e.target;
      const isClickable = 
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") !== null ||
        target.closest("button") !== null;
        
      setIsHovering(isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!isMounted) return null;
  if (typeof window !== "undefined" && window.innerWidth <= 768) return null;

  return (
    <>
      <motion.div 
        className="cursor-dot" 
        style={{ 
          x: cursorXInner, 
          y: cursorYInner,
          scale: isHovering ? 1.5 : 1
        }} 
      />
      <motion.div 
        className="cursor-ring-inner" 
        style={{ 
          x: cursorXInner, 
          y: cursorYInner,
          scale: isHovering ? 1.3 : 1
        }} 
      />
      <motion.div 
        className="cursor-ring-outer" 
        style={{ 
          x: cursorXOuter, 
          y: cursorYOuter,
          scale: isHovering ? 1.4 : 1
        }} 
      />
    </>
  );
}
