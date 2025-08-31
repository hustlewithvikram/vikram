"use client";
import { motion } from "framer-motion";
import {
	MdLanguage,
	MdCode,
	MdLayers,
	MdBolt,
	MdDashboard,
	MdPhoneAndroid,
	MdDevices,
} from "react-icons/md";

const timelineData = [
	{
		id: "1",
		date: "Jan 2021",
		title: "First Steps in Web",
		description:
			"Started with HTML, CSS, and JS — learning how the web really works.",
		icon: <MdLanguage />,
	},
	{
		id: "2",
		date: "Jun 2021",
		title: "Enter React.js",
		description:
			"Built my first dynamic UIs with components, hooks, and props.",
		icon: <MdCode />,
	},
	{
		id: "3",
		date: "Dec 2021",
		title: "Modern Frontend Tools",
		description:
			"Adopted Tailwind + component-driven design → faster, cleaner builds.",
		icon: <MdLayers />,
	},
	{
		id: "4",
		date: "Jul 2022",
		title: "Next.js Journey",
		description: "Mastered SSR, API routes, and performance optimizations.",
		icon: <MdBolt />,
	},
	{
		id: "5",
		date: "Nov 2023",
		title: "Full-stack Projects",
		description:
			"Built authenticated dashboards & e-commerce apps with NextAuth/Clerk.",
		icon: <MdDashboard />,
	},
	{
		id: "6",
		date: "Apr 2024",
		title: "Exploring Mobile",
		description:
			"Experimented with mobile dev, broadening my reach beyond web.",
		icon: <MdPhoneAndroid />,
	},
	{
		id: "7",
		date: "Jul 2025",
		title: "Transition to React Native",
		description:
			"Now building polished, cross-platform apps with React Native.",
		icon: <MdDevices />,
	},
];

export default function Timeline() {
	return (
		<div className="relative mx-auto max-w-5xl px-6 py-24">
			{/* Center line - subtle, no glow */}
			<div className="absolute left-1/2 top-0 -ml-0.5 h-full w-px bg-neutral-300 dark:bg-neutral-700" />

			<div className="flex flex-col gap-20">
				{timelineData.map((item, index) => {
					const isLeft = index % 2 === 0;

					return (
						<motion.div
							key={item.id}
							className={`flex items-center ${
								isLeft ? "justify-start" : "justify-end"
							}`}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.6,
								delay: index * 0.1,
							}}
							viewport={{ once: true }}
						>
							{/* Card */}
							<div className="relative w-[320px] rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur-sm shadow-md p-6 border border-neutral-200 dark:border-neutral-800">
								<div className="flex items-center gap-2 text-neutral-800 dark:text-neutral-200 font-medium">
									<span className="text-2xl">
										{item.icon}
									</span>
									<span className="tracking-wide text-sm uppercase opacity-70">
										{item.date}
									</span>
								</div>
								<h3 className="mt-3 text-xl font-semibold text-neutral-900 dark:text-neutral-100 leading-snug">
									{item.title}
								</h3>
								<p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
									{item.description}
								</p>

								{/* Connector Dot - simple black/white */}
								<span
									className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-neutral-300 dark:border-neutral-700 bg-neutral-900 dark:bg-neutral-100 ${
										isLeft ? "-right-10" : "-left-10"
									}`}
								/>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
