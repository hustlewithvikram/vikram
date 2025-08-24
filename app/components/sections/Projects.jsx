"use client";

import React from "react";
import Project from "@/app/components/ui/Project";
import { Folder, Android, Code, Web } from "@mui/icons-material";

const categories = [
	{
		title: "Android Apps",
		icon: <Android className="text-gray-800 dark:text-gray-200" />,
		projects: [
			{
				id: 1,
				title: "DeepNotes",
				description: "Secure notes with cloud sync.",
				src: "/images/projects/deepnotes.png",
				url: "https://github.com/vikramisdev/deepnotes",
				tags: ["Kotlin", "Firebase", "Notes App"],
				buttonText: "Source",
			},
			{
				id: 2,
				title: "XLauncher",
				description: "Minimal, fast Android launcher.",
				src: "/images/projects/xlauncher.png",
				url: "https://github.com/vikramisdev/xlauncher",
				tags: ["Kotlin", "Kotlin-Compose", "Material Design 3"],
				buttonText: "Source",
			},
		],
	},
	{
		title: "Web Apps & Websites",
		icon: <Web className="text-gray-800 dark:text-gray-200" />,
		projects: [
			{
				id: 3,
				title: "Shop Now",
				description: "Modern e-commerce experience.",
				src: "/images/projects/shopnowlogo.png",
				url: "https://github.com/vikramisdev/shopnow",
				tags: ["ReactJs", "MongoDB", "NextJs", "NextAuth"],
				buttonText: "Source",
			},
			{
				id: 4,
				title: "Advit Design Studio",
				description: "Portfolio website for design studio.",
				src: "/images/projects/advitdesignstudio.jpg",
				url: "https://github.com/vikramisdev/advit",
				tags: ["ReactJs", "Resend", "NextJs"],
				buttonText: "Source",
			},
		],
	},
	{
		title: "Python Automation",
		icon: <Code className="text-gray-800 dark:text-gray-200" />,
		projects: [
			{
				id: 5,
				title: "Tron Userbot",
				description: "Telegram user automation and botless power.",
				src: "/images/projects/tron.png",
				url: "https://github.com/TronUb/Tron",
				tags: ["Python", "Telegram API", "Userbot"],
				buttonText: "Source",
			},
		],
	},
];

export default function Projects() {
	return (
		<section id="projects" className="py-20 px-4 md:px-12">
			{/* Section Header */}
			{/* <div className="flex justify-start mb-12">
				<div className="flex items-center gap-3 w-fit px-6 py-3 rounded-full bg-neutral-900 text-white">
					<Folder className="size-5" />
					<h2 className="text-xl font-semibold">Projects</h2>
				</div>
			</div> */}

			{/* Categories */}
			<div className="space-y-16">
				{categories.map((category, index) => (
					<div key={index}>
						{/* Category Header */}
						<div className="flex items-center gap-3 mb-8 px-4">
							{category.icon}
							<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
								{category.title}
							</h3>
						</div>

						{/* Category Projects */}
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-16 gap-10">
							{category.projects.map((project) => (
								<div
									key={project.id}
									className="bg-white dark:bg-neutral-900 rounded-[30px] shadow-sm border border-gray-200 dark:border-neutral-700 overflow-hidden transition-transform hover:border-black/20 hover:shadow-neutral-500/20 group"
								>
									<Project {...project} />
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
