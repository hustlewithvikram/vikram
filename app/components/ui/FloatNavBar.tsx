"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Stack" },
  { id: "contact", label: "Contact" },
];

export default function FloatNavBar() {
  const [active, setActive] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.15, 0.35, 0.6] });

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav aria-label="Main navigation" className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-zinc-200/80 bg-white/85 px-4 py-2.5 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/80 sm:px-5">
        <a href="#home" className="text-sm font-bold tracking-tight text-zinc-950 dark:text-white">V<span className="text-orange-600 dark:text-orange-400">.</span></a>
        <div className="flex max-w-[calc(100%-3rem)] items-center gap-0.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-1">
          {sections.map(({ id, label }) => <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} className={`shrink-0 rounded-full px-2.5 py-2 text-[11px] font-medium transition sm:px-3 sm:text-xs ${active === id ? "bg-orange-600 text-white" : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"}`}>{label}</a>)}
        </div>
      </nav>
    </header>
  );
}
