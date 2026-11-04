"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Stack" },
  { id: "contact", label: "Contact" },
];

export default function FloatNavBar() {
  const [active, setActive] = useState("home");
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const ignoreNavigationScroll = useRef(false);
  const navigationResetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const previousScrollY = useRef(0);
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visibleSection) setActive(visibleSection.target.id);
    }, { rootMargin: "-18% 0px -58% 0px", threshold: [0, 0.15, 0.35, 0.6] });

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    previousScrollY.current = window.scrollY;
    let ticking = false;

    const updateDirection = () => {
      const currentY = window.scrollY;
      const delta = currentY - previousScrollY.current;

      if (ignoreNavigationScroll.current) {
        previousScrollY.current = currentY;
        ticking = false;
        return;
      }

      if (currentY < 80) {
        setVisible(true);
        previousY = currentY;
      } else if (Math.abs(delta) > 5) {
        setVisible(delta < 0);
        previousY = currentY;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateDirection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <motion.header
      initial={false}
      animate={visible
        ? { y: 0, scale: 1 }
        : { y: 30, scale: 0.76 }}
      transition={{ type: "spring", stiffness: 340, damping: 30, mass: 0.8 }}
      style={{ transformOrigin: "center center" }}
      className="fixed inset-x-0 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 md:bottom-auto md:top-0 md:pt-5"
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-[85%] max-w-[44rem] items-center gap-1 rounded-full border border-white/75 bg-white/80 p-2 shadow-[0_10px_36px_rgba(15,23,42,0.16)] backdrop-blur-2xl backdrop-saturate-150 dark:border-white/15 dark:bg-zinc-950/75 dark:shadow-black/35 sm:gap-2 sm:p-2.5"
      >
        <div className="flex min-w-0 flex-1 items-center gap-0.5 sm:gap-1">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => {
                ignoreNavigationScroll.current = true;
                setVisible(true);
                if (navigationResetTimer.current) clearTimeout(navigationResetTimer.current);
                navigationResetTimer.current = setTimeout(() => {
                  ignoreNavigationScroll.current = false;
                  previousScrollY.current = window.scrollY;
                }, 1100);
              }}
              aria-current={active === id ? "location" : undefined}
              className={`flex min-w-0 flex-1 items-center justify-center whitespace-nowrap rounded-full px-0.5 py-4 text-[9px] font-semibold leading-none transition-colors duration-200 min-[380px]:px-1 min-[380px]:text-[10px] sm:px-3 sm:py-3.5 sm:text-xs ${active === id
                ? "bg-zinc-900 text-white shadow-sm dark:bg-white dark:text-zinc-950"
                : "text-zinc-700 hover:bg-white/80 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
        <span className="h-6 w-px shrink-0 bg-zinc-300/80 dark:bg-white/20" />
        <button
          type="button"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle color theme"}
          title={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle color theme"}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-zinc-300/80 bg-white/90 text-zinc-900 shadow-sm transition duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 dark:border-white/15 dark:bg-white/10 dark:text-amber-200 dark:hover:bg-white/20 sm:h-12 sm:w-12"
        >
          {mounted ? (isDark ? <Sun size={17} strokeWidth={2} /> : <Moon size={17} strokeWidth={2} />) : <span className="h-4 w-4 rounded-full border-2 border-current opacity-70" />}
        </button>
      </nav>
    </motion.header>
  );
}
