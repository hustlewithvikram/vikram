"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import { IconArrowUp } from "@tabler/icons-react";

function ScrollToTop() {
  const scrollYProgress = useScrollProgress();
  const progress = Math.max(0, Math.min(100, scrollYProgress));

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      className={`fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-2xl border border-white/70 bg-white/75 text-zinc-800 shadow-[0_8px_28px_rgba(15,23,42,0.14)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-orange-300 hover:text-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 dark:border-white/10 dark:bg-zinc-900/75 dark:text-zinc-100 dark:hover:border-orange-400/50 dark:hover:text-orange-300 sm:bottom-7 sm:right-7 ${scrollYProgress < 10 ? "pointer-events-none translate-y-3 opacity-0" : "pointer-events-auto translate-y-0 opacity-100"}`}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" strokeOpacity="0.10" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="21.5" fill="none" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="135.1" strokeDashoffset={135.1 - (135.1 * progress) / 100} />
      </svg>
      <IconArrowUp className="h-5 w-5" stroke={2.1} />
    </button>
  );
}

export default ScrollToTop;
