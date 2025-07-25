"use client";

import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import {
	Folder,
	Home,
	Mail,
	Person,
	Stars,
	Timeline,
} from "@mui/icons-material";

const sections = [
	{ id: "home", icon: <Home />, label: "Home" },
	{ id: "about", icon: <Person />, label: "About" },
	{ id: "timeline", icon: <Timeline />, label: "Timeline" },
	{ id: "projects", icon: <Folder />, label: "Projects" },
	{ id: "skills", icon: <Stars />, label: "Skills" },
	{ id: "contact", icon: <Mail />, label: "Contact" },
];

const FloatNavBar = () => {
	const [activeSection, setActiveSection] = useState("home");
	const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });
	const [scaleY, setScaleY] = useState(1);
	const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);

	const scrollToSection = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.6 }
		);

		sections.forEach(({ id }) => {
			const section = document.getElementById(id);
			if (section) observer.observe(section);
		});

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		const index = sections.findIndex((s) => s.id === activeSection);
		const btn = btnRefs.current[index];
		if (btn) {
			setIndicatorStyle({
				top: btn.offsetTop,
				height: btn.offsetHeight,
			});
		}
	}, [activeSection]);

	useEffect(() => {
		setScaleY(1.1); // Stretch effect
		const timeout = setTimeout(() => setScaleY(1), 220); // Bounce back
		return () => clearTimeout(timeout);
	}, [indicatorStyle.top]);

	return (
		<div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-50 pointer-events-none">
			<nav
				className="relative flex flex-col items-center
        backdrop-blur-md border border-gray-300 dark:border-gray-700 rounded-full
        px-2 py-2 pointer-events-auto"
			>
				{/* Vertical sliding indicator */}
				<div
					className="absolute left-1.5 right-1.5 bg-black dark:bg-white rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,1.5,0.5,1)] transform-gpu"
					style={{
						top: indicatorStyle.top,
						height: indicatorStyle.height,
						transform: `scaleY(${scaleY})`,
						zIndex: 0,
					}}
				/>

				{/* Buttons */}
				{sections.map(({ id, icon, label }, index) => (
					<button
						key={id}
						ref={(el) => {
							btnRefs.current[index] = el;
						}}
						onClick={() => scrollToSection(id)}
						className={clsx(
							"relative z-10 flex items-center justify-center mb-2 p-3 rounded-full transition-all duration-200",
							activeSection === id
								? "text-white dark:text-black"
								: "text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10"
						)}
						aria-label={label}
					>
						{icon}
					</button>
				))}
			</nav>
		</div>
	);
};

export default FloatNavBar;
