"use client";

import { motion } from "framer-motion";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

export default function DarkMode() {
	return (
		<motion.div
			whileTap={{ scale: 0.8 }}
			className="fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full sm:right-6 sm:top-6 lg:right-8 lg:top-8"
		>
			<AnimatedThemeToggler className="cursor-pointer rounded-full bg-gray-800 p-2 text-white dark:bg-purple-300 dark:text-black" />
		</motion.div>
	);
}
