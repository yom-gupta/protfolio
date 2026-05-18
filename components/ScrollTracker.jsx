"use client";

import { useEffect } from "react";
import { trackEvent } from "@/utils/analytics";

export default function ScrollTracker() {
  useEffect(() => {
    const milestones = [25, 50, 75, 100];
    const tracked = new Set();

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight <= 0) return;
      
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      milestones.forEach((percent) => {
        if (scrollPercent >= percent && !tracked.has(percent)) {
          tracked.add(percent);
          trackEvent("scroll_milestone", "Behavior", `${percent}% Scroll`);
        }
      });
    };

    // Run on mount in case page is already scrolled (refresh)
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
