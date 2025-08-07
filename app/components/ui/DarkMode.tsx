"use client";

import { useTheme } from "next-themes";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Nightlight, Sunny } from "@mui/icons-material";

const themes = [
	{ key: "light", icon: <Sunny fontSize="small" /> },
	{ key: "dark", icon: <Nightlight fontSize="small" /> },
	{ key: "system", icon: <Monitor fontSize="small" /> },
] as const;

type Theme = "light" | "dark" | "system";

export default function DarkModeToggle() {
	const { theme, setTheme, resolvedTheme } = useTheme();
	const [isMounted, setIsMounted] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const effectiveTheme = theme === "system" ? resolvedTheme : theme;

	const currentIcon = isMounted
		? themes.find((t) => t.key === effectiveTheme)?.icon
		: null;

	const changeTheme = (mode: Theme) => {
		setTheme(mode);
		setIsOpen(false);
	};

	return (
		<div ref={containerRef} className="fixed z-50 top-6 right-6">
			<div className="relative flex items-center justify-end">
				{/* Toggle Button */}
				<motion.button
					onClick={() => setIsOpen((prev) => !prev)}
					className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 shadow-md text-black dark:text-white"
					whileTap={{ scale: 0.95 }}
				>
					{currentIcon}
				</motion.button>

				{/* Expanding Menu */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{
								opacity: 0,
								clipPath: "inset(0 100% 0 0 round 999px)",
							}}
							animate={{
								opacity: 1,
								clipPath: "inset(0 0% 0 0 round 999px)",
							}}
							exit={{
								opacity: 0,
								clipPath: "inset(0 100% 0 0 round 999px)",
							}}
							transition={{ duration: 0.3, ease: "easeInOut" }}
							className="absolute right-full mr-3 flex items-center gap-2 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-full p-2 shadow-xl"
						>
							{themes.map((t) => (
								<button
									key={t.key}
									onClick={() => changeTheme(t.key)}
									className={`w-9 h-9 flex items-center justify-center rounded-full transition-transform hover:scale-105
									${
										t.key === theme
											? "bg-zinc-200 dark:bg-zinc-700 border-2 border-blue-500"
											: "bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-600"
									}`}
								>
									{t.icon}
								</button>
							))}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}
