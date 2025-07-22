"use client";

import React, { useEffect, useRef, useState } from "react";
import { HiHome } from "react-icons/hi";
import { FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";
import clsx from "clsx";
import {
	RiProjector2Fill,
	RiProjectorFill,
	RiStarSFill,
	RiTimeLine,
} from "react-icons/ri";
import {
	FaFaceGrinStars,
	FaFolder,
	FaHand,
	FaRegStar,
	FaStarOfLife,
} from "react-icons/fa6";
import { IconStars } from "@tabler/icons-react";

const sections = [
	{ id: "home", icon: <HiHome size={20} />, label: "Home" },
	{ id: "about", icon: <FaUser size={18} />, label: "About" },
	{ id: "portfolio", icon: <RiTimeLine size={18} />, label: "Portfolio" },
	{ id: "projects", icon: <FaFolder size={18} />, label: "Projects" },
	{ id: "skills", icon: <IconStars size={18} />, label: "Skills" },
	{ id: "contact", icon: <FaEnvelope size={18} />, label: "Contact" },
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
				className="relative flex flex-col items-center bg-white/70 dark:bg-black/70
        backdrop-blur-md border border-gray-300 dark:border-gray-700 rounded-full shadow-md
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
							"relative z-10 flex items-center justify-center mb-2 px-[12px] py-[15px] rounded-full transition-all duration-200",
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
