"use client";

import React from "react";
import Project from "@/app/components/ui/Project";
import { FaSuitcase } from "react-icons/fa6";

const ProjectList = [
	{
		id: 1,
		title: "Tron Userbot",
		description: "Telegram user automation and botless power.",
		src: "/images/tron.png",
		url: "https://github.com/TronUb/Tron",
	},
	{
		id: 2,
		title: "DeepNotes",
		description: "Secure notes with cloud sync.",
		src: "/images/deepnotes.png",
		url: "https://github.com/vikramisdev/deepnotes",
	},
	{
		id: 3,
		title: "XLauncher",
		description: "Minimal, fast Android launcher.",
		src: "/images/xlauncher.png",
		url: "https://github.com/vikramisdev/xlauncher",
	},
	{
		id: 4,
		title: "Shop Now",
		description: "Modern e-commerce experience.",
		src: "/images/shopnowlogo.png",
		url: "https://github.com/vikramisdev/shopnow",
	},
];

export default function Projects() {
	return (
		<section id="projects" className="py-20 px-4 md:px-12">
			{/* Section Header */}
			<div className="md:mx-20 flex justify-start">
				<div className="flex items-center gap-3 w-fit md:mb-12 mb-6 px-6 py-3 rounded-full bg-neutral-900 text-white">
					<FaSuitcase className="size-5" />
					<h2 className="text-xl font-semibold">Projects</h2>
				</div>
			</div>

			{/* Project Grid */}
			<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-16 gap-10">
				{ProjectList.map((project) => (
					<div
						key={project.id}
						className="bg-white dark:bg-neutral-900 rounded-[30px] shadow-sm border border-gray-200 dark:border-neutral-700 overflow-hidden transition-transform hover:border-black/20 hover:shadow-neutral-500/20 group"
					>
						<Project {...project} />
					</div>
				))}
			</div>
		</section>
	);
}
