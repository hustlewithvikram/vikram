"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import { IconArrowBarToUp } from "@tabler/icons-react";
import React from "react";

function ScrollToTop() {
  const scrollYProgress = useScrollProgress();

  // Scroll to the top of the page
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className={`fixed bottom-6 right-6 transition-opacity duration-300 rounded-full border-2 flex items-center px-2 border-neutral-500 z-40 p-2 bg-[#111] hover:bg-neutral-700 text-white ${
        scrollYProgress < 10
          ? "opacity-0 pointer-events-none"
          : "opacity-100 pointer-events-auto"
      }`}
      aria-label="Scroll to top"
    >
      <IconArrowBarToUp className="w-5 h-5" />
    </button>
  );
}

export default ScrollToTop;
