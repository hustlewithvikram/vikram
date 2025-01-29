"use client";

import { useState } from "react";
import { FaReact, FaPython, FaJava, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql } from "react-icons/si";

const skills = {
  Frontend: [
    { name: "React", icon: <FaReact size={40} className="text-blue-500" /> },
    { name: "Next.js", icon: <SiNextdotjs size={40} className="text-black" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={40} className="text-blue-400" />,
    },
  ],
  Backend: [
    {
      name: "Node.js",
      icon: <FaNodeJs size={40} className="text-green-500" />,
    },
    {
      name: "Python",
      icon: <FaPython size={40} className="text-yellow-500" />,
    },
    { name: "Java", icon: <FaJava size={40} className="text-red-500" /> },
  ],
  Databases: [
    {
      name: "MongoDB",
      icon: <SiMongodb size={40} className="text-green-600" />,
    },
    { name: "MySQL", icon: <SiMysql size={40} className="text-blue-600" /> },
  ],
};

type SkillCategory = keyof typeof skills; // Frontend | Backend | Databases

const BentoGrid = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>("Frontend");

  return (
    <div className="bg-neutral-800 p-6">
      {/* Tabs */}
      <div className="flex justify-center space-x-6 mb-8">
        {Object.keys(skills).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category as SkillCategory)} // Type assertion to `SkillCategory`
            className={`text-white py-2 px-4 rounded-full transition-all ${
              activeTab === category ? "bg-blue-500" : "bg-neutral-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Bento Grid for active tab */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills[activeTab].map((skill, index) => (
          <div
            key={index}
            className={`group flex flex-col items-center justify-center bg-neutral-900 text-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:scale-105 ${
              index % 2 === 0 ? "col-span-2" : "col-span-1"
            }`}
          >
            {skill.icon}
            <p className="mt-2 text-sm font-medium group-hover:text-blue-400">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
