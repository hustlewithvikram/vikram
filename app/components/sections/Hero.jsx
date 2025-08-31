/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiMail, HiCode, HiLocationMarker } from "react-icons/hi";
import { FaReact, FaMobile } from "react-icons/fa";
import {
	SiNextdotjs,
	SiExpo,
	SiTypescript,
	SiTailwindcss,
} from "react-icons/si";
import { ArrowRight, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const fadeInItem = {
	hidden: { opacity: 0, y: 20 },
	show: (i = 0) => ({
		opacity: 1,
		y: 0,
		transition: { delay: 0.2 + i * 0.15, duration: 0.6, ease: "easeOut" },
	}),
};

const FloatingBlob = ({ className, delay = 0 }) => (
	<motion.div
		initial={{ opacity: 0, scale: 0.8 }}
		animate={{ opacity: 0.2, scale: 1 }}
		transition={{ delay, duration: 1.5, ease: "easeOut" }}
		whileInView={{
			y: [0, 20, 0],
			transition: { repeat: Infinity, duration: 8, ease: "easeInOut" },
		}}
		className={`absolute rounded-full blur-3xl ${className}`}
		aria-hidden="true"
	/>
);

const TechPill = ({ icon: Icon, text, delay }) => (
	<motion.div
		initial={{ opacity: 0, scale: 0.8 }}
		animate={{ opacity: 1, scale: 1 }}
		transition={{ delay, duration: 0.5 }}
		className="flex items-center gap-2 bg-white dark:bg-neutral-800 px-3 py-2 rounded-full border border-gray-200 dark:border-neutral-700 shadow-sm"
	>
		<Icon className="text-blue-600 dark:text-blue-400 text-lg" />
		<span className="text-sm text-gray-700 dark:text-gray-300">{text}</span>
	</motion.div>
);

const HoverButton = ({
	text,
	icon,
	onClick,
	ariaLabel,
	variant = "primary",
}) => (
	<motion.button
		whileTap={{ scale: 0.96 }}
		onClick={onClick}
		className={`group flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
			variant === "primary"
				? "bg-black text-white dark:bg-white dark:text-black"
				: "bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-neutral-700 hover:shadow-md"
		}`}
		aria-label={ariaLabel}
	>
		<span className="inline-flex">{icon || <ArrowRight size={16} />}</span>
		{text}
	</motion.button>
);

export default function Hero() {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [darkMode]);

	const openUrl = (url) => {
		window.open(url, "_blank");
	};

	return (
		<section className="min-h-screen px-4 md:px-8 py-8 md:h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-black relative overflow-hidden">
			{/* Background Blobs */}
			<FloatingBlob
				className="w-96 h-96 -top-20 -left-32 bg-blue-200 dark:bg-blue-900"
				delay={0.2}
			/>
			<FloatingBlob
				className="w-80 h-80 bottom-0 right-0 bg-purple-200 dark:bg-purple-900"
				delay={0.4}
			/>
			<FloatingBlob
				className="w-64 h-64 top-1/2 -right-16 bg-pink-200 dark:bg-pink-900"
				delay={0.6}
			/>

			<div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 max-w-6xl w-full z-10">
				{/* LEFT SECTION */}
				<div className="flex flex-col justify-center items-start text-left max-w-2xl w-full space-y-6">
					<motion.h2
						variants={fadeInItem}
						initial="hidden"
						animate="show"
						custom={1}
						className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
					>
						ReactJs & React Native
						<br />
						<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							Developer
						</span>
					</motion.h2>

					<motion.p
						variants={fadeInItem}
						initial="hidden"
						animate="show"
						custom={2}
						className="text-base md:text-lg text-gray-600 dark:text-gray-300"
					>
						I design and build responsive, user-friendly web and
						mobile applications. Leveraging the React ecosystem, I
						deliver performant solutions that create exceptional
						experiences.
					</motion.p>

					{/* Location & Availability */}
					<motion.div
						variants={fadeInItem}
						initial="hidden"
						animate="show"
						custom={2.5}
						className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
					>
						<HiLocationMarker className="text-blue-600 dark:text-blue-400" />
						<span>Based in India</span>
						<span className="mx-2">•</span>
						<span className="flex items-center">
							<span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
							Available for new projects
						</span>
					</motion.div>

					{/* Tech stack */}
					<motion.div
						variants={fadeInItem}
						initial="hidden"
						animate="show"
						custom={3}
						className="flex flex-wrap gap-3 mt-3"
					>
						<TechPill icon={FaReact} text="React.js" delay={0.1} />
						<TechPill
							icon={SiNextdotjs}
							text="Next.js"
							delay={0.2}
						/>
						<TechPill
							icon={FaMobile}
							text="React Native"
							delay={0.3}
						/>
						<TechPill icon={SiExpo} text="Expo" delay={0.4} />
						<TechPill
							icon={SiTypescript}
							text="TypeScript"
							delay={0.5}
						/>
						<TechPill
							icon={SiTailwindcss}
							text="TailwindCSS"
							delay={0.6}
						/>
					</motion.div>

					{/* Buttons */}
					<motion.div
						variants={fadeInItem}
						initial="hidden"
						animate="show"
						custom={5}
						className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-8"
					>
						<HoverButton
							text="Contact Me"
							icon={<HiMail />}
							onClick={() => openUrl("mailto:vs423502@gmail.com")}
							ariaLabel="Reach out via email"
						/>
						<HoverButton
							text="View Projects"
							icon={<HiCode />}
							onClick={() => {
								scrollToSection("projects");
							}}
							ariaLabel="View projects"
							variant="secondary"
						/>
					</motion.div>
				</div>

				{/* RIGHT SECTION - Profile Image */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8 }}
					className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/20 dark:ring-blue-400/20 flex-shrink-0"
				>
					<Image
						src="/images/vikram.jpg"
						alt="Vikram portrait"
						fill
						className="object-cover"
					/>
				</motion.div>
			</div>
		</section>
	);
}

function scrollToSection(id) {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({ behavior: "smooth" });
	}
}
