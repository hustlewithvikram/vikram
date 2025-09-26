"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	MdLanguage,
	MdCode,
	MdLayers,
	MdBolt,
	MdDashboard,
	MdPhoneAndroid,
	MdDevices,
	MdKeyboardArrowDown,
	MdChevronLeft,
	MdChevronRight,
} from "react-icons/md";
import { useState, useCallback } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const timelineData = [
	{
		id: "1",
		date: "Jan 2021",
		title: "First Steps in Web",
		description:
			"Started with HTML, CSS, and JS — learning how the web really works.",
		icon: <MdLanguage />,
		color: "from-blue-500 to-cyan-500",
	},
	{
		id: "2",
		date: "Jun 2021",
		title: "Enter React.js",
		description:
			"Built my first dynamic UIs with components, hooks, and props.",
		icon: <MdCode />,
		color: "from-purple-500 to-pink-500",
	},
	{
		id: "3",
		date: "Dec 2021",
		title: "Modern Frontend Tools",
		description:
			"Adopted Tailwind + component-driven design → faster, cleaner builds.",
		icon: <MdLayers />,
		color: "from-amber-500 to-orange-500",
	},
	{
		id: "4",
		date: "Jul 2022",
		title: "Next.js Journey",
		description: "Mastered SSR, API routes, and performance optimizations.",
		icon: <MdBolt />,
		color: "from-green-500 to-teal-500",
	},
	{
		id: "5",
		date: "Nov 2023",
		title: "Full-stack Projects",
		description:
			"Built authenticated dashboards & e-commerce apps with NextAuth/Clerk.",
		icon: <MdDashboard />,
		color: "from-indigo-500 to-blue-500",
	},
	{
		id: "6",
		date: "Apr 2024",
		title: "Exploring Mobile",
		description:
			"Experimented with mobile dev, broadening my reach beyond web.",
		icon: <MdPhoneAndroid />,
		color: "from-red-500 to-pink-500",
	},
	{
		id: "7",
		date: "Jul 2025",
		title: "Transition to React Native",
		description:
			"Now building polished, cross-platform apps with React Native.",
		icon: <MdDevices />,
		color: "from-violet-500 to-purple-500",
	},
];

// Optimized card component
const TimelineCard = React.memo(({ item, isActive, onClick, isMobile }) => {
	if (isMobile) {
		return (
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3 }}
				className="relative"
			>
				<div className="absolute flex justify-center items-center -left-8 top-12 w-6 h-6 rounded-full bg-purple-300 dark:bg-gray-50 dark:text-black text-white text-sm z-10 shadow-lg">
					{item.id}
				</div>

				<button
					onClick={() => onClick(item.id)}
					className={`w-full text-left rounded-2xl p-5 transition-all duration-300 backdrop-blur-sm border ${
						isActive
							? "bg-white/90 dark:bg-neutral-950/50 shadow-xl border-white/20"
							: "bg-white/70 dark:bg-neutral-900/90 shadow-md hover:shadow-lg border-white/10"
					}`}
				>
					<div className="flex items-center justify-between mb-3">
						<div className="h-fit gap-3">
							<span className="text-sm font-semibold text-neutral-600 dark:text-neutral-300 bg-white/50 dark:bg-neutral-800/50 py-1 rounded-full">
								{item.date}
							</span>
						</div>
						<motion.span
							animate={{ rotate: isActive ? 180 : 0 }}
							transition={{ duration: 0.3 }}
							className="text-neutral-500"
						>
							<MdKeyboardArrowDown />
						</motion.span>
					</div>

					<h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
						{item.title}
					</h3>

					<AnimatePresence>
						{isActive && (
							<motion.p
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: "auto", opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{ duration: 0.3 }}
								className="text-neutral-600 dark:text-neutral-400 overflow-hidden"
							>
								{item.description}
							</motion.p>
						)}
					</AnimatePresence>
				</button>
			</motion.div>
		);
	}

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.4 }}
			className="h-full"
		>
			<div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-6 h-full border border-neutral-100 dark:border-neutral-700 hover:shadow-2xl transition-all duration-300">
				<div className="flex items-center gap-4 mb-5">
					<span
						className={`text-3xl p-3 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-md`}
					>
						{item.icon}
					</span>
					<span className="text-sm font-semibold text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-700/50 py-1.5 px-4 rounded-full">
						{item.date}
					</span>
				</div>

				<h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
					{item.title}
				</h3>

				<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
					{item.description}
				</p>

				<div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-700">
					<span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
						Milestone {item.id}/7
					</span>
				</div>
			</div>
		</motion.div>
	);
});

TimelineCard.displayName = "TimelineCard";

export default function Timeline() {
	const [expandedItem, setExpandedItem] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const isMobile = useMediaQuery("(max-width:768px)");

	const toggleItem = useCallback((id) => {
		setExpandedItem((prev) => (prev === id ? null : id));
	}, []);

	const nextCard = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % timelineData.length);
	}, []);

	const prevCard = useCallback(() => {
		setCurrentIndex((prev) =>
			prev === 0 ? timelineData.length - 1 : prev - 1
		);
	}, []);

	// Mobile Accordion View
	if (isMobile) {
		return (
			<div className="mx-auto max-w-2xl px-5 py-10">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-md mb-10 bg-blue-200 dark:bg-blue-950 text-blue-950 dark:text-blue-200 w-fit px-4 py-2 rounded-full"
				>
					My Journey
				</motion.h2>

				<div className="relative">
					{/* Animated vertical line */}
					<motion.div
						initial={{ height: 0 }}
						animate={{ height: "100%" }}
						transition={{ duration: 1, delay: 0.2 }}
						className="absolute left-0 top-0 w-1 bg-neutral-800"
					/>

					<div className="flex flex-col gap-6">
						{timelineData.map((item, index) => (
							<div key={item.id} className="pl-[22px] relative">
								<TimelineCard
									item={item}
									isActive={expandedItem === item.id}
									onClick={toggleItem}
									isMobile={true}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}

	// Desktop View - Android Style Carousel
	return (
		<div className="relative w-full max-w-5xl mx-auto px-6 py-16">
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-center mb-12"
			>
				<h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
					Development Journey
				</h2>
				<p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
					From my first steps in web development to building
					cross-platform applications
				</p>
			</motion.div>

			<div className="relative flex items-center justify-center mb-8">
				{/* Carousel Container */}
				<div className="w-full max-w-2xl">
					<AnimatePresence mode="wait">
						<motion.div
							key={currentIndex}
							initial={{ opacity: 0, x: 100, rotateY: -15 }}
							animate={{ opacity: 1, x: 0, rotateY: 0 }}
							exit={{ opacity: 0, x: -100, rotateY: 15 }}
							transition={{ duration: 0.5 }}
							className="w-full"
						>
							<TimelineCard
								item={timelineData[currentIndex]}
								isActive={true}
								isMobile={false}
							/>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>

			{/* Progress indicator */}
			<div className="relative flex items-center justify-center gap-x-3 mt-10 w-full">
				<div className="flex justify-center" style={{ width: "40vw" }}>
					<div className="relative h-10 w-full bg-neutral-300 dark:bg-neutral-700 rounded-full overflow-hidden">
						<motion.div
							className="absolute top-0 left-0 h-full bg-black dark:bg-white rounded-full"
							initial={{ width: 0 }}
							animate={{
								width: `${
									((currentIndex + 1) / timelineData.length) *
									100
								}%`,
							}}
							transition={{ duration: 0.5, ease: "easeOut" }}
						/>
					</div>
				</div>

				{/* Navigation Arrows with cool design */}
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					onClick={prevCard}
					className="bg-white dark:bg-neutral-800 rounded-full p-3 border border-neutral-200 dark:border-neutral-700 hover:shadow-2xl transition-all"
				>
					<MdChevronLeft className="text-2xl text-neutral-700 dark:text-neutral-300" />
				</motion.button>

				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					onClick={nextCard}
					className="bg-white dark:bg-neutral-800 rounded-full p-3 border border-neutral-200 dark:border-neutral-700 hover:shadow-2xl transition-all"
				>
					<MdChevronRight className="text-2xl text-neutral-700 dark:text-neutral-300" />
				</motion.button>
			</div>
		</div>
	);
}
