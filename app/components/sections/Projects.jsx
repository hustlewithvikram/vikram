import React from "react";
import Project from "@/app/components/ui/Project";
import { HiCode } from "react-icons/hi";

const ProjectList = [
	{
		id: 1,
		title: "Tron Userbot",
		description: "Telegram user automation and botless power.",
		src: "/images/tron-round.png",
		width: "60%",
	},
	{
		id: 2,
		title: "DeepNotes",
		description: "Secure notes with cloud sync.",
		src: "/images/deepnotes.png",
		width: "calc(100% - 60% - 24px)",
	},
	{
		id: 3,
		title: "XLauncher",
		description: "Minimal, fast Android launcher.",
		src: "https://picsum.photos/seed/3/2000",
		width: "calc(100% - 60% - 24px)",
	},
	{
		id: 4,
		title: "ShopAnything",
		description: "Modern e-commerce experience.",
		src: "https://picsum.photos/seed/4/2000",
		width: "60%",
	},
];

export default function Projects() {
	return (
		<div>
			<div className="flex items-center gap-x-4 px-4 py-2 md:mx-28 mx-4 rounded-full text-lg bg-black text-white w-fit">
				<HiCode className="size-6" />
				<h1>Tech Stack</h1>
			</div>
			<div className="max-w-7xl mx-auto py-16 px-4">
				<div className="flex flex-wrap gap-6 justify-start">
					{ProjectList.map((project) => (
						<div
							key={project.id}
							style={{
								width: project.width,
								height: "300px",
							}}
						>
							<Project {...project} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
