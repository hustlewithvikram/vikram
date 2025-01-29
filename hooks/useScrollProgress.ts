"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook to calculate the scroll progress as a percentage.
 * @returns scrollProgress - A number between 0 and 100 representing the percentage of scroll.
 */
export function useScrollProgress(): number {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollProgress;
}
