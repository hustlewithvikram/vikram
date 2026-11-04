"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";
import { motion } from "framer-motion";
import {
  Code2, FolderKanban, Home, Mail, Milestone, Moon, Sun, UserRound,
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
    const elements = sections
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    const updateActive = () => {
      const marker = window.innerHeight * 0.38;
      let current = elements[0]?.id ?? "home";
      for (const element of elements) {
        if (element.getBoundingClientRect().top <= marker) current = element.id;
        else break;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = elements[elements.length - 1]?.id ?? current;
      }
      setActive(current);
    };

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        updateActive();
        frame = 0;
      });
    };
    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
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
      if (currentY < 80) setVisible(true);
      else if (Math.abs(delta) > 7) setVisible(delta < 0);
      previousScrollY.current = currentY;
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
  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    const transitionDocument = document as Document & {
      startViewTransition?: (callback: () => void) => unknown;
    };
    if (transitionDocument.startViewTransition) {
      transitionDocument.startViewTransition(() => flushSync(() => setTheme(nextTheme)));
    } else {
      setTheme(nextTheme);
    }
  };

  return (
    <motion.header
      initial={false}
      animate={visible ? { y: 0, scale: 1 } : { y: 34, scale: 0.78 }}
      transition={{ type: "spring", stiffness: 380, damping: 36, mass: 0.85 }}
      style={{ transformOrigin: "center center", willChange: "transform" }}
      className="fixed inset-x-0 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 md:bottom-auto md:top-0 md:pt-5"
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-[85%] max-w-[34rem] items-center gap-1 rounded-full border border-white/75 bg-white/90 p-2.5 shadow-[0_10px_36px_rgba(15,23,42,0.16)] backdrop-blur-2xl backdrop-saturate-150 dark:border-white/15 dark:bg-zinc-950/90 dark:shadow-black/35 sm:gap-2 sm:p-3"
      >
        <div className="flex min-w-0 flex-1 items-center gap-0.5 sm:gap-1">
          {sections.map(({ id, label, icon: Icon }) => {
            const selected = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => {
                  setActive(id);
                  ignoreNavigationScroll.current = true;
                  setVisible(true);
                  if (navigationResetTimer.current) clearTimeout(navigationResetTimer.current);
                  navigationResetTimer.current = setTimeout(() => {
                    ignoreNavigationScroll.current = false;
                    previousScrollY.current = window.scrollY;
                  }, 900);
                }}
                aria-label={label}
                aria-current={selected ? "location" : undefined}
                title={label}
                className={`relative isolate grid h-11 min-w-0 flex-1 place-items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:h-12 ${selected ? "text-white dark:text-zinc-950" : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"}`}
              >
                {selected && (
                  <motion.span
                    layoutId="active-navigation-pill"
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 rounded-full bg-zinc-900 shadow-[0_2px_8px_rgba(0,0,0,0.16)] dark:bg-white"
                    transition={{ type: "spring", stiffness: 520, damping: 40, mass: 0.75 }}
                  />
                )}
                <Icon size={19} strokeWidth={selected ? 2.35 : 1.9} />
              </a>
            );
          })}
        </div>
        <span className="h-7 w-px shrink-0 bg-zinc-300/80 dark:bg-white/20" />
        <motion.button
          type="button"
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          onClick={toggleTheme}
          aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle color theme"}
          title={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle color theme"}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-zinc-300/80 bg-white/90 text-zinc-900 shadow-sm transition-colors duration-200 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 dark:border-white/15 dark:bg-white/10 dark:text-amber-200 dark:hover:bg-white/20 sm:h-12 sm:w-12"
        >
          <motion.span
            key={mounted ? (isDark ? "sun" : "moon") : "loading"}
            initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {mounted ? (isDark ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />) : <span className="block h-4 w-4 rounded-full border-2 border-current opacity-70" />}
          </motion.span>
        </motion.button>
      </nav>
    </motion.header>
  );
}
