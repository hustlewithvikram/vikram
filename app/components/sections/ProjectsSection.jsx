import React from "react";
import Project from "@/app/components/ui/Project";

const ProjectList = [
  {
    id: 1,
    title: "Tron Userbot",
    description:
      "It gives all Telegram bot power in the hand of Telegram users, from generating images to managing your group without the help of a regular bot.",
    src: "https://picsum.photos/seed/1/2000",
  },
  {
    id: 2,
    title: "DeepNotes",
    description:
      "A secure note-taking app with Google authentication and cloud sync, allowing users to store and access their notes from anywhere.",
    src: "https://picsum.photos/seed/2/2000",
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
    <div className="flex md:flex-row flex-col gap-y-4 justify-center gap-6 py-28 mx-6 bg-background dark:bg-[#111]">
      {ProjectList.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
}
