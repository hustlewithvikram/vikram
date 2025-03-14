import React from "react";
import Project from "@/app/components/ui/Project";
import { HiCode } from "react-icons/hi";
import { FaProjectDiagram } from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";
import { RiVipDiamondLine } from "react-icons/ri";

const ProjectList = [
	{
		id: 1,
		title: "Tron Userbot",
		description:
			"It gives all Telegram bot power in the hand of Telegram users, from generating images to managing your group without the help of a regular bot.",
		src: "/images/tron-round.png",
	},
	{
		id: 2,
		title: "DeepNotes",
		description:
			"A secure note-taking app with Google authentication and cloud sync, allowing users to store and access their notes from anywhere.",
		src: "/images/deepnotes.png",
	},
	{
		id: 3,
		title: "XLauncher",
		description:
			"A lightweight and customizable Android launcher focused on performance, minimalism, and deep customization options.",
		src: "https://picsum.photos/seed/3/2000",
	},
	{
		id: 4,
		title: "ShopAnything",
		description:
			"An e-commerce platform that allows users to buy and sell products with a seamless shopping experience and secure payment options.",
		src: "https://picsum.photos/seed/4/2000",
	},
];

export default function ProjectsSection() {
	return (
		<div className="mt-12">
			<div className="flex items-center gap-x-4 mx-6 px-4 py-2 rounded-full text-lg bg-black text-white w-fit">
				<RiVipDiamondLine className="size-6" />
				<h1>Personal Projects</h1>
			</div>
			<div className="flex md:flex-row flex-col gap-y-4 justify-center gap-6 py-6 mx-6 bg-background dark:bg-[#111]">
				{ProjectList.map((project) => (
					<Project data-aos="fade-up" key={project.id} {...project} />
				))}
			</div>
		</div>
	);
}
