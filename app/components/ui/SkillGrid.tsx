"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { useEffect, useState } from "react";
import { HiCode } from "react-icons/hi";

const skills = [
	{
		name: "React",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
		description:
			"A JavaScript library for building interactive UIs efficiently.",
	},
	{
		name: "Next.js",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
		description:
			"A React framework for production-ready web applications with SSR & SSG.",
	},
	{
		name: "Tailwind CSS",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
		description:
			"A utility-first CSS framework for rapidly building modern designs.",
	},
	{
		name: "Python",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
		description:
			"A versatile programming language known for its simplicity and vast ecosystem.",
	},
	{
		name: "Java",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
		description:
			"A popular, object-oriented programming language used in enterprise applications.",
	},
	{
		name: "Node.js",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
		description:
			"A runtime that allows JavaScript to run on the server side for backend development.",
	},
	{
		name: "MongoDB",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
		description:
			"A NoSQL database known for its flexibility and scalability.",
	},
	{
		name: "MySQL",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
		description:
			"A relational database management system widely used for web applications.",
	},
];

const SkillGrid = () => {
	const [shuffledSkills, setShuffledSkills] = useState(skills);

	// Shuffle skills array on mount
	useEffect(() => {
		setShuffledSkills([...skills].sort(() => Math.random() - 0.5));
	}, []);

	return (
		<div className="flex flex-col">
			<div className="flex items-center gap-x-4 mx-6 px-4 py-2 rounded-full text-lg bg-black text-white w-fit">
				<HiCode className="size-6" />
				<h1>Programming Languages</h1>
			</div>
			{/* Grid Layout Fix */}
			<BentoGrid className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-8 max-w-6xl mx-auto my-20">
				{shuffledSkills.map((skill, index) => (
					<BentoGridItem
						className="w-full h-full flex flex-col items-center justify-center bg-gray-100 rounded-3xl shadow-md"
						key={index}
						title={skill.name}
						description={skill.description}
						icon={
							<img
								src={skill.icon}
								alt={skill.name}
								className="w-16 h-16 mb-2"
							/>
						}
					/>
				))}
			</BentoGrid>
		</div>
	);
};

export default SkillGrid;
