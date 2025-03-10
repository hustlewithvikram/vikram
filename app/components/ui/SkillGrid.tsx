"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { useEffect, useState } from "react";
import { HiCode } from "react-icons/hi";

const skills = [
	{
		name: "React",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
		description:
			"I have extensive experience in React, building dynamic web applications with state management, hooks, and reusable components.",
	},
	{
		name: "Next.js",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
		description:
			"I use Next.js for production-ready applications, handling SSR, SSG, API routes, and optimizing performance and SEO.",
	},
	{
		name: "Tailwind CSS",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
		description:
			"I utilize Tailwind CSS for modern, responsive designs, leveraging its utility classes to build sleek UI layouts efficiently.",
	},
	{
		name: "Python",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
		description:
			"I am proficient in Python, using it for scripting, backend development, and data handling.",
	},
	{
		name: "Java",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
		description:
			"I have a strong grasp of Java, especially for Android development with Jetpack Compose and backend services.",
	},
	{
		name: "Node.js",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
		description:
			"I am at an intermediate level in Node.js, learning backend development, API handling, and authentication.",
	},
	{
		name: "MongoDB",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
		description:
			"I have worked with MongoDB for NoSQL database management, ensuring scalability and efficient data handling in web applications.",
	},
	{
		name: "MySQL",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
		description:
			"I am at an intermediate level in MySQL, managing relational databases, optimizing queries, and handling structured data.",
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
			<div className="flex items-center gap-x-4 mx-12 px-4 py-2 rounded-full text-lg bg-black text-white w-fit">
				<HiCode className="size-6" />
				<h1>Programming Languages</h1>
			</div>
			{/* Grid Layout Fix */}
			<BentoGrid className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-auto my-20">
				{shuffledSkills.map((skill, index) => (
					<BentoGridItem
						className="h-full m-4 flex flex-col items-center justify-center bg-gray-100 rounded-3xl hover:shadow-none"
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
