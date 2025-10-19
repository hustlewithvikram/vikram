"use client";
import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	MdLanguage,
	MdCode,
	MdLayers,
	MdBolt,
	MdDashboard,
	MdPhoneAndroid,
	MdDevices,
	MdChevronLeft,
	MdChevronRight,
} from "react-icons/md";
import useMediaQuery from "@mui/material/useMediaQuery";

const timelineData = [
	{
		id: "1",
		date: "Jan 2021",
		title: "First Steps in Web",
		description:
			"Started with HTML, CSS, and JS — learning how the web really works.",
		icon: <MdLanguage />,
		color: "bg-blue-500",
	},
	{
		id: "2",
		date: "Jun 2021",
		title: "Enter React.js",
		description:
			"Built my first dynamic UIs with components, hooks, and props.",
		icon: <MdCode />,
		color: "bg-purple-500",
	},
	{
		id: "3",
		date: "Dec 2021",
		title: "Modern Frontend Tools",
		description:
			"Adopted Tailwind + component-driven design → faster, cleaner builds.",
		icon: <MdLayers />,
		color: "bg-amber-500",
	},
	{
		id: "4",
		date: "Jul 2022",
		title: "Next.js Journey",
		description: "Mastered SSR, API routes, and performance optimizations.",
		icon: <MdBolt />,
		color: "bg-green-500",
	},
	{
		id: "5",
		date: "Nov 2023",
		title: "Full-stack Projects",
		description:
			"Built authenticated dashboards & e-commerce apps with NextAuth/Clerk.",
		icon: <MdDashboard />,
		color: "bg-indigo-500",
	},
	{
		id: "6",
		date: "Apr 2024",
		title: "Exploring Mobile",
		description:
			"Experimented with mobile dev, broadening my reach beyond web.",
		icon: <MdPhoneAndroid />,
		color: "bg-red-500",
	},
	{
		id: "7",
		date: "Jul 2025",
		title: "Transition to React Native",
		description:
			"Now building polished, cross-platform apps with React Native.",
		icon: <MdDevices />,
		color: "bg-violet-500",
	},
];

// Timeline card for desktop
const TimelineCard = React.memo(({ item }) => {
	return (
		<div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 h-full border border-neutral-200 dark:border-neutral-700 transition-all duration-300">
			<div className="flex items-center gap-4 mb-5">
				<span
					className={`text-3xl p-3 bg-orange-100 dark:text-black rounded-full`}
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
					Milestone {item.id}/{timelineData.length}
				</span>
			</div>
		</div>
	);
});

TimelineCard.displayName = "TimelineCard";

export default function Timeline() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const isMobile = useMediaQuery("(max-width:768px)");

	const nextCard = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % timelineData.length);
	}, []);

	const prevCard = useCallback(() => {
		setCurrentIndex((prev) =>
			prev === 0 ? timelineData.length - 1 : prev - 1
		);
	}, []);

	const selectCard = useCallback((index) => {
		setCurrentIndex(index);
	}, []);

	if (isMobile) {
		// Mobile accordion view (keep your previous one)
		return (
			<div className="mx-auto max-w-2xl px-5 py-10">
				<h2 className="text-md mb-10 bg-blue-200 dark:bg-blue-950 text-blue-950 dark:text-blue-200 w-fit px-4 py-2 rounded-full">
					My Journey
				</h2>
				<div className="flex flex-col gap-6">
					{timelineData.map((item, index) => (
						<div key={item.id} className="relative">
							<TimelineCardMobile
								item={item}
								isActive={currentIndex === index}
								onClick={() => selectCard(index)}
							/>
						</div>
					))}
				</div>
			</div>
		);
	}

	// Desktop view
	return (
		<div className="relative w-full max-w-7xl mx-auto px-6 py-16 flex gap-8">
			{/* Left - small chips */}
			<div className="flex flex-col gap-4">
				{timelineData.map((item, index) => (
					<motion.button
						key={item.id}
						onClick={() => selectCard(index)}
						className={`flex items-center gap-4 px-4 py-3 rounded-full text-sm font-medium text-neutral-700 dark:text-neutral-300 transition-all duration-300 ${
							currentIndex === index
								? "dark:border-white bg-orange-50 dark:bg-neutral-700/50"
								: ""
						}`}
					>
						<span
							className={`text-xl bg-orange-100 dark:text-black p-3 rounded-full`}
						>
							{item.icon}
						</span>
						<span>{item.date}</span>
					</motion.button>
				))}
			</div>

			{/* Right - big card */}
			<div className="flex-1 relative">
				<AnimatePresence mode="wait">
					<motion.div
						key={currentIndex}
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -50 }}
						transition={{ duration: 0.4 }}
					>
						<TimelineCard item={timelineData[currentIndex]} />
					</motion.div>
				</AnimatePresence>

				{/* Progress bar */}
				<div className="absolute bottom-0 left-0 w-full flex items-center justify-center mt-8 gap-x-3">
					<div className="flex justify-center w-full max-w-3xl">
						<div className="relative h-2 w-full bg-neutral-300 dark:bg-neutral-700 rounded-full overflow-hidden">
							<motion.div
								className="absolute top-0 left-0 h-full bg-black dark:bg-white rounded-full"
								initial={{ width: 0 }}
								animate={{
									width: `${
										((currentIndex + 1) /
											timelineData.length) *
										100
									}%`,
								}}
								transition={{ duration: 0.4, ease: "easeOut" }}
							/>
						</div>
					</div>

					{/* Navigation arrows */}
					<motion.button
						whileTap={{ scale: 0.9 }}
						onClick={prevCard}
						className="bg-white dark:bg-neutral-800 rounded-full p-3 border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all"
					>
						<MdChevronLeft className="text-2xl text-neutral-700 dark:text-neutral-300" />
					</motion.button>
					<motion.button
						whileTap={{ scale: 0.9 }}
						onClick={nextCard}
						className="bg-white dark:bg-neutral-800 rounded-full p-3 border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all"
					>
						<MdChevronRight className="text-2xl text-neutral-700 dark:text-neutral-300" />
					</motion.button>
				</div>
			</div>
		</div>
	);
}

// Mobile timeline card
function TimelineCardMobile({ item, isActive, onClick }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
			transition={{ duration: 0.3 }}
			className="relative flex"
		>
			{/* Timeline dot and line */}
			<div className="flex flex-col items-center mr-4">
				<div className="w-6 h-6 rounded-full bg-purple-300 dark:bg-gray-50 dark:text-black text-white flex justify-center items-center text-sm z-10 shadow-lg">
					{item.id}
				</div>
				{item.id != timelineData.length && (
					<div className="flex-1 w-1 bg-neutral-300 dark:bg-neutral-700" />
				)}
			</div>

			{/* Card */}
			<button
				onClick={onClick}
				className={`flex-1 text-left rounded-2xl p-5 transition-all duration-300 backdrop-blur-sm border ${
					isActive
						? "bg-white/90 dark:bg-neutral-950/50 border dark:border-white/15"
						: "bg-white/70 dark:bg-neutral-900/90 border dark:border-white/50"
				}`}
			>
				<div className="flex items-center justify-between mb-3">
					<span className="text-sm font-semibold text-neutral-600 dark:text-neutral-300 bg-white/50 dark:bg-neutral-800/50 py-1 px-2 rounded-full">
						{item.date}
					</span>
				</div>

				<h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
					{item.title}
				</h3>

				{/* Animate the description */}
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
