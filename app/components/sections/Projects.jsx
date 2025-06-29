"use client";

import React from "react";
import Project from "@/app/components/ui/Project";
import { FaSuitcase } from "react-icons/fa6";

const ProjectList = [
	{
		id: 1,
		title: "Tron Userbot",
		description: "Telegram user automation and botless power.",
		src: "/images/tron-round.png",
		isLarge: true,
		url: "https://github.com/TronUb/Tron",
	},
	{
		id: 2,
		title: "DeepNotes",
		description: "Secure notes with cloud sync.",
		src: "/images/deepnotes.png",
		isLarge: false,
		url: "https://github.com/vikramisdev/deepnotes",
	},
	{
		id: 3,
		title: "XLauncher",
		description: "Minimal, fast Android launcher.",
		src: "/images/xlauncher.png",
		isLarge: false,
		url: "https://github.com/vikramisdev/xlauncher",
	},
	{
		id: 4,
		title: "Shop Now",
		description: "Modern e-commerce experience.",
		src: "/images/shopnow18.png",
		isLarge: true,
		url: "https://github.com/vikramisdev/shopnow",
	},
];

export default function Projects() {
	return (
		<section className="py-20 px-4 md:px-12">
			{/* Header */}
			<div className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-full w-fit mb-10 md:mx-20 text-lg">
				<FaSuitcase className="size-4" />
				<h2 className="font-semibold">Projects</h2>
			</div>

			{/* Layout */}
			<div className="max-w-7xl mx-auto flex flex-wrap gap-6">
				{ProjectList.map((project, idx) => (
					<div
						key={project.id}
						className={`
              w-full aspect-[4/3] md:aspect-[8/3]
              ${project.isLarge ? "md:basis-[60%]" : "md:basis-[38%]"}
              rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]
              dark:border dark:border-gray-500
            `}
					>
						<Project {...project} />
					</div>
				))}
			</div>
		</section>
	);
}
