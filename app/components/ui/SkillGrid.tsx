"use client";

import { useEffect, useState } from "react";
import { FaReact, FaPython, FaJava, FaNodeJs, FaCode } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={40} className="text-blue-500" /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} className="text-black" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={40} className="text-blue-400" />,
  },
  { name: "Python", icon: <FaPython size={40} className="text-yellow-500" /> },
  { name: "Java", icon: <FaJava size={40} className="text-red-500" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-600" /> },
  { name: "MySQL", icon: <SiMysql size={40} className="text-blue-600" /> },
];

const SkillGrid = () => {
  const [shuffledSkills, setShuffledSkills] = useState(skills);

  // Shuffle skills array on mount
  useEffect(() => {
    setShuffledSkills([...skills].sort(() => Math.random() - 0.5));
  }, []);

  return (
		<div className="h-screen flex flex-col justify-center">
			<div className="flex items-center gap-x-4 mx-6 px-4 py-2 rounded-full textlg bg-black text-white w-fit">
				<HiCode className="size-6" />
				<h1>Programming Languages</h1>
			</div>
			<div className="flex flex-wrap gap-2 p-6 h-44">
				{shuffledSkills.map((skill, index) => (
					<div
						key={index}
						className="group flex items-center rounded-full justify-center gap-x-4 bg-neutral-900 text-white shadow-lg p-4 flex-1 duration-700 transition-all"
					>
						{skill.icon}
						<p className="text-sm font-medium">{skill.name}</p>
					</div>
				))}
			</div>
		</div>
  );
};

export default SkillGrid;
