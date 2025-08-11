"use client";

import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

export default function DarkMode() {
	return (
		<div className="fixed top-10 right-10 z-50 rounded-full border border-black dark:border-white h-7 w-7 flex justify-center items-center">
			<AnimatedThemeToggler />
		</div>
	);
}
