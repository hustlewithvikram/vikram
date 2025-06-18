"use client";

import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { HiCode } from "react-icons/hi";

const skills = [
	{ name: "React", progress: 70 },
	{ name: "Next.js", progress: 75 },
	{ name: "Tailwind CSS", progress: 70 },
	{ name: "Python", progress: 60 },
	{ name: "Java", progress: 55 },
	{ name: "Node.js", progress: 40 },
	{ name: "MongoDB", progress: 55 },
	{ name: "MySQL", progress: 50 },
];

const SkillGrid = () => {
	const [shuffledSkills, setShuffledSkills] = useState(skills);

	// Shuffle skills array on mount
	useEffect(() => {
		setShuffledSkills([...skills].sort(() => Math.random() - 0.5));
	}, []);

	return (
		<div className="flex flex-col mt-12">
			<div className="flex items-center gap-x-4 px-4 py-2 md:mx-28 mx-4 rounded-full text-lg bg-black text-white w-fit">
				<HiCode className="size-6" />
				<h1>Tech Stack</h1>
			</div>
			{/* Grid Layout Fix */}
			<div className="md:px-28 px-4 py-10">
				{skills.map((skill, index) => {
					return (
						<div
							key={index}
							className="bg-gray-100 rounded-[5px] dark:bg-zinc-950 mt-3 px-6 py-4 flex items-center gap-x-5 dark:text-gray-100"
						>
							<span className="whitespace-nowrap">
								{skill.name}
							</span>
							<Progress value={skill.progress} max={100} />
							<span className="font-semibold">
								{skill.progress}%
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SkillGrid;
