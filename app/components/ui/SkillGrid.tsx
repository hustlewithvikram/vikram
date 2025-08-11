"use client";

import { CodeOffRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";

// ✅ Move skills outside to avoid redefinition on each render
const skills = [
	{ name: "Next.js", progress: 65 },
	{ name: "React", progress: 70 },
	{ name: "Tailwind CSS", progress: 65 },
	{ name: "Redux / RTK", progress: 40 },
	{ name: "JavaScript", progress: 65 },
	{ name: "TypeScript", progress: 45 },
	{ name: "Node.js", progress: 48 },
	{ name: "Express", progress: 30 },
	{ name: "MongoDB", progress: 35 },
	{ name: "REST APIs", progress: 36 },
	{ name: "Auth (NextAuth)", progress: 42 },
	{ name: "Python", progress: 78 },
	{ name: "Java", progress: 55 },
	{ name: "MySQL", progress: 40 },
	{ name: "Git & GitHub", progress: 60 },
	{ name: "Cloudinary / CDN", progress: 40 },
];

const SkillGrid = () => {
	const [shuffledSkills, setShuffledSkills] = useState(skills);

	useEffect(() => {
		// Shuffle only once on mount
		const shuffled = [...skills].sort(() => Math.random() - 0.5);
		setShuffledSkills(shuffled);
	}, []);

	return (
		<div id="skills" className="flex flex-col mt-16">
			{/* Header */}
			<div className="flex items-center gap-x-4 px-4 py-2 md:mx-12 mx-4 rounded-full text-lg bg-black text-white w-fit">
				<CodeOffRounded className="size-6" />
				<h1 className="font-semibold">Tech Stack</h1>
			</div>

			{/* Grid Layout */}
			<div className="md:px-12 px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{shuffledSkills.map((skill, index) => (
					<div
						key={index}
						className="bg-white group dark:bg-zinc-950 rounded-full hover:cursor-pointer px-5 py-4 flex items-center justify-between gap-4 shadow-sm"
					>
						<span className="text-sm font-medium text-gray-800 dark:text-gray-200 min-w-[90px]">
							{skill.name}
						</span>
						<div className="w-full h-full bg-gray-300 dark:bg-zinc-800 rounded-full overflow-hidden">
							<div
								className={`h-full transition-all rounded-full duration-300 ${
									skill.progress <= 25
										? "bg-red-500"
										: skill.progress <= 50
										? "bg-orange-500"
										: skill.progress <= 75
										? "bg-yellow-400"
										: "bg-green-500"
								}`}
								style={{ width: `${skill.progress}%` }}
							/>
						</div>

						<span className="text-md font-semibold w-12 text-right text-gray-700 dark:text-gray-300">
							{skill.progress}%
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default SkillGrid;
