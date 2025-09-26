"use client";

import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

export default function DarkMode() {
	return (
		<div className="fixed top-10 right-10 z-50 rounded-full h-7 w-7 flex justify-center items-center">
			<AnimatedThemeToggler className="bg-gray-800 dark:bg-purple-300 text-white dark:text-black rounded-full p-2 cursor-pointer" />
		</div>
	);
}
