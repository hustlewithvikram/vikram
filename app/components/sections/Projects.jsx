"use client";

import React from "react";
import Project from "@/app/components/ui/Project";
import { Web } from "@mui/icons-material";

const categories = [
	{
		title: "ReactJS Projects",
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
];

export default function Projects() {
	return (
		<section id="projects" className="py-20 px-4 md:px-12">
			{/* Categories */}
			<div className="space-y-16">
				{categories.map((category, index) => (
					<div key={index}>
						{/* Category Header */}
						<div className="flex items-center gap-3 mb-8 px-4">
							<h3 className="text-xs font-semibold text-amber-800 bg-amber-100 dark:text-amber-900 dark:bg-amber-400 px-3 py-2 rounded-full">
								{category.title}
							</h3>
						</div>

						{/* Category Projects */}
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-16 gap-10">
							{category.projects.map((project) => (
								<div
									key={project.id}
									className="bg-white dark:bg-neutral-900 rounded-[30px] shadow-sm border border-gray-200 dark:border-neutral-700 overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg hover:border-black/20 group"
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
