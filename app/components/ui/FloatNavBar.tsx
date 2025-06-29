"use client";

import React, { useEffect, useRef, useState } from "react";
import { HiHome } from "react-icons/hi";
import { FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";
import clsx from "clsx";

const sections = [
	{ id: "home", icon: <HiHome size={20} />, label: "Home" },
	{ id: "about", icon: <FaUser size={18} />, label: "About" },
	{ id: "portfolio", icon: <FaBriefcase size={18} />, label: "Portfolio" },
	{ id: "contact", icon: <FaEnvelope size={18} />, label: "Contact" },
];

const FloatNavBar = () => {
	const [activeSection, setActiveSection] = useState("home");
	const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
	const [scaleX, setScaleX] = useState(1);
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
				left: btn.offsetLeft,
				width: btn.offsetWidth,
			});
		}
	}, [activeSection]);

	useEffect(() => {
		setScaleX(1.25); // Stretch effect
		const timeout = setTimeout(() => setScaleX(1), 250); // Bounce back
		return () => clearTimeout(timeout);
	}, [indicatorStyle.left]);

	return (
		<div className="hidden fixed bottom-5 left-0 w-full z-50 md:flex justify-center pointer-events-none">
			<nav
				className="relative flex items-center bg-white/70 dark:bg-black/70 backdrop-blur-md
        border border-gray-300 dark:border-gray-700 rounded-full shadow-md
        px-4 py-2 pointer-events-auto"
			>
				{/* Sliding indicator with stretch animation */}
				<div
					className="absolute top-1.5 bottom-1.5 bg-black dark:bg-white rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,1.5,0.5,1)] transform-gpu"
					style={{
						left: indicatorStyle.left,
						width: indicatorStyle.width,
						transform: `scaleX(${scaleX})`,
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
							"relative z-10 flex items-center gap-2 px-4 py-2 text-sm rounded-full transition-all duration-200",
							activeSection === id
								? "text-white dark:text-black"
								: "text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10"
						)}
						aria-label={label}
					>
						{icon}
						<span className="hidden md:inline">{label}</span>
					</button>
				))}
			</nav>
		</div>
	);
};

export default FloatNavBar;
