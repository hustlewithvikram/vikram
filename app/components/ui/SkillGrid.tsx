"use client";

import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { HiCode } from "react-icons/hi";

// ✅ Move skills outside to avoid redefinition on each render
const skills = [
  { name: "Next.js", progress: 85 },
  { name: "React", progress: 80 },
  { name: "Tailwind CSS", progress: 85 },
  { name: "Redux / RTK", progress: 80 },
  { name: "JavaScript", progress: 80 },
  { name: "TypeScript", progress: 75 },
  { name: "Node.js", progress: 60 },
  { name: "Express", progress: 60 },
  { name: "MongoDB", progress: 65 },
  { name: "REST APIs", progress: 75 },
  { name: "Auth (NextAuth)", progress: 75 },
  { name: "Python", progress: 60 },
  { name: "Java", progress: 55 },
  { name: "MySQL", progress: 50 },
  { name: "Git & GitHub", progress: 80 },
  { name: "Cloudinary / CDN", progress: 70 },
];

const SkillGrid = () => {
  const [shuffledSkills, setShuffledSkills] = useState(skills);

  useEffect(() => {
    // Shuffle only once on mount
    const shuffled = [...skills].sort(() => Math.random() - 0.5);
    setShuffledSkills(shuffled);
  }, []);

  return (
    <div className="flex flex-col mt-16">
      {/* Header */}
      <div className="flex items-center gap-x-4 px-4 py-2 md:mx-28 mx-4 rounded-full text-lg bg-black text-white w-fit">
        <HiCode className="size-6" />
        <h1 className="font-semibold">Tech Stack</h1>
      </div>

      {/* Grid Layout */}
      <div className="md:px-28 px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {shuffledSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-zinc-950 rounded-lg px-5 py-4 flex items-center justify-between gap-4 shadow-sm"
          >
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200 min-w-[90px]">
              {skill.name}
            </span>
            <Progress
              value={skill.progress}
              max={100}
              className="flex-grow h-2 bg-gray-300 dark:bg-zinc-800"
            />
            <span className="text-xs font-semibold w-12 text-right text-gray-700 dark:text-gray-300">
              {skill.progress}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillGrid;
