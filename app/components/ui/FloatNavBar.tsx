"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import {
  Code2,
  FolderKanban,
  Home,
  Mail,
  Milestone,
  Moon,
  Sun,
  UserRound,
} from "lucide-react";

const sections = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: UserRound },
  { id: "journey", label: "Journey", icon: Milestone },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "skills", label: "Tech stack", icon: Code2 },
  { id: "contact", label: "Contact", icon: Mail },
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
        previousScrollY.current = currentY;
      } else if (Math.abs(delta) > 5) {
        setVisible(delta < 0);
        previousScrollY.current = currentY;
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
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (navigationResetTimer.current) clearTimeout(navigationResetTimer.current);
    };
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <motion.header
      initial={false}
      animate={visible ? { y: 0, scale: 1 } : { y: 30, scale: 0.76 }}
      transition={{ type: "spring", stiffness: 340, damping: 30, mass: 0.8 }}
      style={{ transformOrigin: "center center" }}
      className="fixed inset-x-0 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 md:bottom-auto md:top-0 md:pt-5"
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-[85%] max-w-[34rem] items-center gap-1 rounded-full border border-white/75 bg-white/85 p-2 shadow-[0_10px_36px_rgba(15,23,42,0.16)] backdrop-blur-2xl backdrop-saturate-150 dark:border-white/15 dark:bg-zinc-950/80 dark:shadow-black/35 sm:gap-2 sm:p-2.5"
      >
        <div className="flex min-w-0 flex-1 items-center gap-0.5 sm:gap-1">
          {sections.map(({ id, label, icon: Icon }) => {
            const selected = active === id;
            return (
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
                aria-label={label}
                aria-current={selected ? "location" : undefined}
                title={label}
                className={`relative grid h-10 min-w-0 flex-1 place-items-center rounded-full text-zinc-600 transition-colors duration-200 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 dark:text-zinc-300 dark:hover:text-white sm:h-11 ${selected ? "text-white dark:text-zinc-950" : ""}`}
              >
                {selected && (
                  <motion.span
                    layoutId="active-navigation-pill"
                    className="absolute inset-0 rounded-full bg-zinc-900 shadow-sm dark:bg-white"
                    transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.8 }}
                  />
                )}
                <Icon className="relative z-10" size={18} strokeWidth={selected ? 2.4 : 2} />
              </a>
            );
          })}
        </div>
        <span className="h-6 w-px shrink-0 bg-zinc-300/80 dark:bg-white/20" />
        <motion.button
          type="button"
          whileTap={{ scale: 0.9, rotate: 12 }}
          transition={{ type: "spring", stiffness: 420, damping: 24 }}
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle color theme"}
          title={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle color theme"}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-zinc-300/80 bg-white/90 text-zinc-900 shadow-sm transition-colors duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 dark:border-white/15 dark:bg-white/10 dark:text-amber-200 dark:hover:bg-white/20 sm:h-11 sm:w-11"
        >
          <motion.span
            key={mounted ? (isDark ? "sun" : "moon") : "loading"}
            initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {mounted ? (isDark ? <Sun size={17} strokeWidth={2} /> : <Moon size={17} strokeWidth={2} />) : <span className="block h-4 w-4 rounded-full border-2 border-current opacity-70" />}
          </motion.span>
        </motion.button>
      </nav>
    </motion.header>
  );
}
