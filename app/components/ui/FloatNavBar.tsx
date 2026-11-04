"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
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
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-18% 0px -58% 0px", threshold: [0, 0.15, 0.35, 0.6] });

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [pathname]);

  const isDark = resolvedTheme === "dark";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-5xl items-center justify-center gap-2 rounded-full border border-white/70 bg-white/65 px-2 py-2 shadow-[0_8px_32px_rgba(15,23,42,0.10)] backdrop-blur-2xl backdrop-saturate-150 supports-[backdrop-filter]:bg-white/55 dark:border-white/10 dark:bg-zinc-950/55 dark:shadow-black/25 sm:gap-3 sm:px-3"
      >
        <div className="flex min-w-0 flex-1 items-center justify-center gap-0.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-1">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              className={`shrink-0 rounded-full px-3 py-2.5 text-[11px] font-semibold transition-all duration-300 sm:px-4 sm:text-xs ${active === id
                ? "bg-zinc-900 text-white shadow-sm dark:bg-white dark:text-zinc-950"
                : "text-zinc-600 hover:bg-white/70 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
        <span className="h-6 w-px shrink-0 bg-zinc-300/70 dark:bg-white/15" />
        <button
          type="button"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle color theme"}
          title={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle color theme"}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-zinc-300/70 bg-white/70 text-zinc-800 shadow-sm transition duration-300 hover:scale-105 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 dark:border-white/10 dark:bg-white/10 dark:text-amber-200 dark:hover:bg-white/15"
        >
          {mounted ? (isDark ? <Sun size={17} strokeWidth={2} /> : <Moon size={17} strokeWidth={2} />) : <span className="h-4 w-4 rounded-full border-2 border-current opacity-60" />}
        </button>
      </nav>
    </header>
  );
}
