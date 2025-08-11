"use client";

import { CodeOffRounded } from "@mui/icons-material";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const skills = [
	{ name: "Next.js", progress: 65 },
	{ name: "React", progress: 70 },
	{ name: "Tailwind CSS", progress: 65 },
	{ name: "Redux / RTK", progress: 40 },
	{ name: "JavaScript", progress: 65 },
	{ name: "TypeScript", progress: 45 },
	{ name: "Node.js", progress: 48 },
	{ name: "Express", progress: 30 },
	{ name: "MongoDB", progress: 35 },
	{ name: "REST APIs", progress: 36 },
	{ name: "Auth (NextAuth)", progress: 42 },
	{ name: "Python", progress: 78 },
	{ name: "Java", progress: 55 },
	{ name: "MySQL", progress: 40 },
	{ name: "Git & GitHub", progress: 60 },
	{ name: "Cloudinary / CDN", progress: 40 },
];

const getColorClass = (progress: number, isDark: boolean) => {
	if (progress <= 25) return isDark ? "bg-red-400" : "bg-red-500";
	if (progress <= 50) return isDark ? "bg-orange-400" : "bg-orange-500";
	if (progress <= 75) return isDark ? "bg-yellow-300" : "bg-yellow-400";
	return isDark ? "bg-green-400" : "bg-green-500";
};

function SkillItem({
	skill,
	isMobile,
}: {
	skill: { name: string; progress: number };
	isMobile: boolean;
}) {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
	const [animatedProgress, setAnimatedProgress] = useState(0);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const animateProgress = (target: number) => {
		if (intervalRef.current) clearInterval(intervalRef.current);
		let current = animatedProgress;
		const step = (target - current) / 20;
		intervalRef.current = setInterval(() => {
			current += step;
			if (
				(step > 0 && current >= target) ||
				(step < 0 && current <= target)
			) {
				current = target;
				if (intervalRef.current) clearInterval(intervalRef.current);
			}
			setAnimatedProgress(Math.round(current));
		}, 20);
	};

	const resetProgress = () => {
		if (intervalRef.current) clearInterval(intervalRef.current);
		setAnimatedProgress(0);
	};

	// Animate automatically when in view
	useEffect(() => {
		if (inView) animateProgress(skill.progress);
	}, [inView, skill.progress]);

	const isDark =
		typeof document !== "undefined" &&
		document.documentElement.classList.contains("dark");

	return (
		<motion.div
			ref={ref}
			className="bg-white group dark:bg-zinc-950 rounded-full px-5 py-4 flex items-center justify-between gap-4 shadow-sm select-none"
			variants={{
				hidden: { opacity: 0, y: 20 },
				show: { opacity: 1, y: 0 },
			}}
			onClick={() => {
				if (isMobile) {
					if (animatedProgress > 0) resetProgress();
					else animateProgress(skill.progress);
				}
			}}
			role="progressbar"
			aria-valuenow={animatedProgress}
			aria-valuemin={0}
			aria-valuemax={100}
			aria-label={`${skill.name} skill level ${animatedProgress}%`}
		>
			<span className="text-sm font-medium text-gray-800 dark:text-gray-200 min-w-[90px]">
				{skill.name}
			</span>
			<div className="w-full h-full bg-gray-300 dark:bg-zinc-800 rounded-full overflow-hidden">
				<motion.div
					className={`h-full rounded-full ${getColorClass(
						skill.progress,
						isDark
					)}`}
					style={{ width: `${animatedProgress}%` }}
					transition={{ duration: 0.3, ease: "easeOut" }}
				/>
			</div>
			<motion.span
				key={animatedProgress}
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.2 }}
				className="text-md font-semibold w-12 text-right text-gray-700 dark:text-gray-300"
			>
				{animatedProgress}%
			</motion.span>
		</motion.div>
	);
}

export default function SkillGrid() {
	const [shuffledSkills, setShuffledSkills] = useState(skills);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setShuffledSkills([...skills].sort(() => Math.random() - 0.5));
		setIsMobile(window.innerWidth < 768);
		const onResize = () => setIsMobile(window.innerWidth < 768);
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	return (
		<div id="skills" className="flex flex-col mt-16">
			{/* Header */}
			<div className="flex items-center gap-x-4 px-4 py-2 md:mx-12 mx-4 rounded-full text-lg bg-black text-white w-fit">
				<CodeOffRounded className="size-6" />
				<h1 className="font-semibold">Tech Stack</h1>
			</div>

			{/* Grid */}
			<motion.div
				className="md:px-12 px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
				initial="hidden"
				animate="show"
				variants={{
					hidden: { opacity: 0 },
					show: { opacity: 1, transition: { staggerChildren: 0.08 } },
				}}
			>
				{shuffledSkills.map((skill) => (
					<SkillItem
						key={skill.name}
						skill={skill}
						isMobile={isMobile}
					/>
				))}
			</motion.div>
		</div>
	);
}
