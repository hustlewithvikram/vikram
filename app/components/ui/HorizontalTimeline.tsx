"use client";

import React from "react";
import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineOppositeContent,
} from "@mui/lab";
import { motion } from "framer-motion";

import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SecurityIcon from "@mui/icons-material/Security";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";

const sampleEvents: {
	date: string;
	title: string;
	description: string;
	color: string;
	icon: React.ElementType;
}[] = [
	{
		date: "Jan 2021",
		title: "Started Learning Web Development",
		description:
			"Driven by curiosity about how websites work, I began exploring HTML, CSS, and JavaScript.",
		color: "#f4a261",
		icon: CodeIcon,
	},
	{
		date: "Jun 2021",
		title: "Built My First Website",
		description:
			"My first portfolio was rough—bad layout, awkward colors. But it marked the beginning.",
		color: "#bde0fe",
		icon: LanguageIcon,
	},
	{
		date: "Dec 2021",
		title: "Learned ReactJs & Tailwind",
		description:
			"I explored modern frontend tools like React.js and Tailwind CSS through tutorials.",
		color: "#4ade80",
		icon: IntegrationInstructionsIcon,
	},
	{
		date: "Jul 2022",
		title: "Dived Into Next.js and Advanced UI",
		description:
			"I began mastering Next.js for SSR, routing, and integrated Figma for design systems.",
		color: "#60a5fa",
		icon: RocketLaunchIcon,
	},
	{
		date: "Nov 2023",
		title: "Built Fullstack Projects",
		description:
			"Deployed 'ShopNow' (e-commerce app) with authentication, cart, filters, admin panel.",
		color: "#c084fc",
		icon: DashboardIcon,
	},
	{
		date: "Apr 2024",
		title: "Started Learning Auth and Security",
		description:
			"Worked on nextjs nextauth authentication as well as clerk auth as well as traditional one's.",
		color: "#f87171",
		icon: SecurityIcon,
	},
	{
		date: "Jul 2025",
		title: "Building With Refined Skills",
		description:
			"Now confident across frontend & backend. Focused on UI, performance, and clean code.",
		color: "#34d399",
		icon: BuildCircleIcon,
	},
];

const TimelineContentBlock = ({
	event,
	index,
}: {
	event: (typeof sampleEvents)[0];
	index: number;
}) => {
	const Icon = event.icon;

	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, delay: index * 0.2 }}
		>
			<TimelineItem position={index % 2 === 0 ? "right" : "left"}>
				<TimelineOppositeContent
					sx={{ m: "20px 0 0 0" }}
					align={index % 2 === 0 ? "left" : "right"}
					variant="body2"
					color="text.secondary"
					className="dark:text-gray-300 text-sm md:text-base"
				>
					{event.date}
				</TimelineOppositeContent>

				<TimelineSeparator>
					<TimelineConnector />
					<TimelineDot
						sx={{
							backgroundColor: event.color,
							width: 48,
							height: 48,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
						className="dark:text-gray-100 md:hover:-translate-y-4 cursor-pointer transition-transform duration-300 ease-in-out"
					>
						<Icon sx={{ color: "#444", fontSize: 24 }} />
					</TimelineDot>
					<TimelineConnector className="h-16" />
				</TimelineSeparator>

				<TimelineContent sx={{ py: "12px", px: 2 }}>
					<span className="dark:text-gray-100 md:text-2xl text-lg font-semibold">
						{event.title}
					</span>
					<br />
					<span className="dark:text-gray-300 md:text-base text-sm">
						{event.description}
					</span>
				</TimelineContent>
			</TimelineItem>
		</motion.div>
	);
};

const HorizontalTimeline = () => {
	return (
		<Timeline id="portfolio" position="alternate">
			{sampleEvents.map((event, idx) => (
				<TimelineContentBlock key={idx} event={event} index={idx} />
			))}
		</Timeline>
	);
};

export default HorizontalTimeline;
