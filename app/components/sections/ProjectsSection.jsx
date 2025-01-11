import React from "react";
import Project from "@/app/components/ui/Project";

const ProjectList = [
  {
    title: "Projects",
    number: 1,
    src: "https://picsum.photos/2000",
  },
  {
    title: "Projects",
    number: 2,
    src: "https://picsum.photos/2000",
  },
  {
    title: "Projects",
    number: 3,
    src: "https://picsum.photos/2000",
  },
  {
    title: "Projects",
    number: 4,
    src: "https://picsum.photos/2000",
  },
];

import clsx from "clsx";

export default function ProjectsSection() {
  return (
    <div className="flex justify-center gap-x-6 py-28 mx-6">
      {ProjectList.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          number={project.number}
          src={project.src}
        />
      ))}
    </div>
  );
}


