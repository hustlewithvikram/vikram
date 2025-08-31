"use client";

import { CodeOffRounded } from "@mui/icons-material";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

// ✅ Cleaned skill list: only web-dev + essential tools
const skills = [
	{ name: "Next.js", progress: 70 },
	{ name: "React", progress: 75 },
	{ name: "JavaScript", progress: 70 },
	{ name: "TypeScript", progress: 50 },
	{ name: "Tailwind CSS", progress: 68 },
	{ name: "Redux / RTK", progress: 45 },
	{ name: "Node.js", progress: 55 },
	{ name: "Express", progress: 42 },
	{ name: "MongoDB", progress: 48 },
	{ name: "REST APIs", progress: 52 },
	{ name: "Auth (NextAuth)", progress: 46 },
	{ name: "Git & GitHub", progress: 65 },
	{ name: "Cloudinary / CDN", progress: 45 },
];

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

	useEffect(() => {
		if (inView) animateProgress(skill.progress);
	}, [inView, skill.progress]);

	return (
		<motion.div
			ref={ref}
			className="bg-white dark:bg-zinc-900 rounded-xl px-5 py-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition-all duration-200"
			variants={{
				hidden: { opacity: 0, y: 20 },
				show: { opacity: 1, y: 0 },
			}}
			onClick={() => {
				if (isMobile) {
					if (animatedProgress > 0) setAnimatedProgress(0);
					else animateProgress(skill.progress);
				}
			}}
			role="progressbar"
			aria-valuenow={animatedProgress}
			aria-valuemin={0}
			aria-valuemax={100}
			aria-label={`${skill.name} skill level ${animatedProgress}%`}
		>
			{/* Label + % */}
			<div className="flex items-center justify-between">
				<span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
					{skill.name}
				</span>
				<motion.span
					key={animatedProgress}
					initial={{ scale: 0.9, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.2 }}
					className="text-sm font-semibold text-zinc-600 dark:text-zinc-300"
				>
					{animatedProgress}%
				</motion.span>
			</div>

			{/* Progress bar */}
			<div className="w-full h-10 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
				<motion.div
					className="h-full rounded-full bg-black dark:bg-gray-200"
					style={{ width: `${animatedProgress}%` }}
					transition={{ duration: 0.4, ease: "easeOut" }}
				/>
			</div>
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
		<div id="skills" className="flex flex-col mt-20">
			{/* Header */}
			<div className="flex items-center gap-x-3 px-6 py-2 md:mx-12 mx-4 w-fit">
				<CodeOffRounded className="size-5" />
				<h1 className="font-medium">Tech Stack</h1>
			</div>

			{/* Grid */}
			<motion.div
				className="md:px-12 px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
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
