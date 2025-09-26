"use client";

import { Moon, SunDim } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

type Props = {
	className?: string;
};

export const AnimatedThemeToggler = ({ className }: Props) => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const buttonRef = useRef<HTMLButtonElement | null>(null);

	// On mount, read saved theme from localStorage
	useEffect(() => {
		if (typeof window !== "undefined") {
			const savedTheme = localStorage.getItem("theme");
			if (savedTheme) {
				const dark = savedTheme === "dark";
				setIsDarkMode(dark);
				document.documentElement.classList.toggle("dark", dark);
			}
		}
	}, []);

	const changeTheme = async () => {
		if (!buttonRef.current || typeof document === "undefined") return;

		const doThemeChange = () => {
			flushSync(() => {
				const dark = document.documentElement.classList.toggle("dark");
				setIsDarkMode(dark);
				localStorage.setItem("theme", dark ? "dark" : "light"); // persist theme
			});
		};

		// Animate with View Transitions if supported
		if (document.startViewTransition) {
			await document.startViewTransition(doThemeChange).ready;
		} else {
			doThemeChange(); // fallback
		}

		const { top, left, width, height } =
			buttonRef.current.getBoundingClientRect();
		const y = top + height / 2;
		const x = left + width / 2;

		const right = window.innerWidth - left;
		const bottom = window.innerHeight - top;
		const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

		document.documentElement.animate(
			{
				clipPath: [
					`circle(0px at ${x}px ${y}px)`,
					`circle(${maxRad}px at ${x}px ${y}px)`,
				],
			},
			{
				duration: 700,
				easing: "ease-in-out",
				pseudoElement: "::view-transition-new(root)",
			}
		);
	};

	return (
		<button ref={buttonRef} onClick={changeTheme} className={cn(className)}>
			{isDarkMode ? (
				<SunDim />
			) : (
				<Moon className="text-white dark:text-black" />
			)}
		</button>
	);
};
