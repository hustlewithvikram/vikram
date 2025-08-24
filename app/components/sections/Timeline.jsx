"use client";

import HorizontalDetailCard from "../ui/HorizontalDetailCard";
import {
	Code as CodeIcon,
	Language as LanguageIcon,
	IntegrationInstructions as IntegrationInstructionsIcon,
	RocketLaunch as RocketLaunchIcon,
	Dashboard as DashboardIcon,
	Security as SecurityIcon,
	BuildCircle as BuildCircleIcon,
	TimelineOutlined,
} from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";

const iconSize = 48;

const sampleEvents = [
	{
		date: "Jan 2021",
		title: "Started Learning Web Development",
		description:
			"Curiosity about how websites are built pushed me to start with the basics — HTML, CSS, and JavaScript.",
		icon: <CodeIcon style={{ fontSize: iconSize }} />,
	},
	{
		date: "Jun 2021",
		title: "Discovered React.js",
		description:
			"I built my first interactive UIs using React.js — components, hooks, and props opened a whole new world.",
		icon: <LanguageIcon style={{ fontSize: iconSize }} />,
	},
	{
		date: "Dec 2021",
		title: "Mastered Modern Frontend Tools",
		description:
			"Styled projects with Tailwind CSS and explored component-driven design. This boosted my speed and confidence.",
		icon: <IntegrationInstructionsIcon style={{ fontSize: iconSize }} />,
	},
	{
		date: "Jul 2022",
		title: "Next.js & Advanced Concepts",
		description:
			"Leveled up with Next.js — SSR, API routes, and routing. Started focusing on performance and developer experience.",
		icon: <RocketLaunchIcon style={{ fontSize: iconSize }} />,
	},
	{
		date: "Nov 2023",
		title: "Fullstack & Auth Projects",
		description:
			"Built fullstack apps with authentication (NextAuth, Clerk) and deployed e-commerce & dashboards.",
		icon: <DashboardIcon style={{ fontSize: iconSize }} />,
	},
	{
		date: "Apr 2024",
		title: "Exploring Mobile Development",
		description:
			"Curiosity led me beyond the web — I started exploring mobile frameworks to expand my reach.",
		icon: <SecurityIcon style={{ fontSize: iconSize }} />,
	},
	{
		date: "Jul 2025",
		title: "Transitioned to Flutter",
		description:
			"Now focusing on Flutter for cross-platform apps. Blending my frontend background with mobile to deliver smooth, scalable, and modern experiences.",
		icon: <BuildCircleIcon style={{ fontSize: iconSize }} />,
	},
];


const Timeline = () => {
	const containerRef = useRef(null);
	const firstDotRef = useRef(null);
	const lastDotRef = useRef(null);
	const [lineStyles, setLineStyles] = useState({ top: 0, height: 0 });

	useEffect(() => {
		if (firstDotRef.current && lastDotRef.current && containerRef.current) {
			const containerRect = containerRef.current.getBoundingClientRect();
			const firstRect = firstDotRef.current.getBoundingClientRect();
			const lastRect = lastDotRef.current.getBoundingClientRect();

			const top =
				firstRect.top - containerRect.top + firstRect.height / 2;
			const height =
				lastRect.top +
				lastRect.height / 2 -
				(firstRect.top + firstRect.height / 2);

			setLineStyles({ top, height });
		}
	}, []);

	return (
		<section id="timeline" className="px-6 md:px-12 py-16 relative">
			{/* Header */}
			<div className="flex mb-12">
				<div className="flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-900 text-white shadow-lg shadow-neutral-800/30">
					<TimelineOutlined className="size-5" />
					<h2 className="text-xl font-semibold">Timeline</h2>
				</div>
			</div>

			{/* Timeline Content */}
			<div ref={containerRef} className="relative">
				{/* Vertical Line */}
				<div
					className="absolute left-1/2 -translate-x-1/2 dark:bg-white/40 bg-black/20 hidden md:block"
					style={{
						width: "2px",
						top: lineStyles.top,
						height: lineStyles.height,
					}}
				/>

				{/* Events */}
				<div className="flex flex-col gap-12">
					{sampleEvents.map((event, index) => (
						<div
							key={index}
							className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
								index % 2 === 0 ? "md:flex-row-reverse" : ""
							}`}
						>
							{/* Dot */}
							<div
								ref={(el) => {
									if (index === 0) firstDotRef.current = el;
									if (index === sampleEvents.length - 1)
										lastDotRef.current = el;
								}}
								className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10"
							>
								<div className="w-6 h-6 bg-orange-400 rounded-full border-4 border-orange-200" />
							</div>

							{/* Card */}
							<div className="flex-1 max-w-xl">
								<HorizontalDetailCard
									title={`${event.date} — ${event.title}`}
									description={event.description}
									icon={event.icon}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Timeline;
