"use client";

import { motion } from "framer-motion";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

export default function DarkMode() {
  return (
    <motion.div whileTap={{ scale: 0.9 }} className="fixed right-4 top-4 z-[60] flex h-10 w-10 items-center justify-center sm:right-6 sm:top-6">
      <AnimatedThemeToggler aria-label="Toggle color theme" className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-zinc-200 bg-white/90 p-2 text-zinc-800 shadow-sm backdrop-blur transition hover:border-orange-300 dark:border-zinc-700 dark:bg-zinc-900/90 dark:text-zinc-100 dark:hover:border-orange-400" />
    </motion.div>
  );
}
