import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

// Helper component
const DataSection = ({ title, children }) => {
  return (
    <section>
      <h1 className="text-4xl font-semibold opacity-95">{title}</h1>
      <br></br>
      <p className="text-xl opacity-90">{children}</p>
    </section>
  );
};

// Timeline data
const TimelineData = [
  {
    title: "2021",
    content: (
      <div className="text-black dark:text-neutral-100 md:text-2xl space-y-16">
        <DataSection title="My Journey in Computer Science">
          I embarked on my journey in Computer Science by enrolling in a B.Sc.
          program at KTHM College, Nashik, Maharashtra, in 2021. This decision
          marked the beginning of my academic exploration, sparking my curiosity
          about technology and its vast potential.
        </DataSection>
        <DataSection title="Academic Foundations">
          During my first year, I focused on building a strong base in
          fundamental concepts, including programming basics, data structures,
          and problem-solving techniques. This phase laid the groundwork for my
          understanding of the core principles in computer science.
        </DataSection>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div className="text-black dark:text-neutral-100 md:text-2xl space-y-16">
        <DataSection title="Achievements in 2024">
          In 2024, I dedicated myself to enhancing my web development skills by
          focusing on the fundamentals, including design theories, layouts, and
          other essential concepts. This year, I took a deep dive into mastering
          the basics of web design and development, ensuring a strong foundation
          for creating responsive and user-friendly websites.
          <br></br>
          <br></br> Along with my self-improvement, I also participated in
          several internships and real-world projects, which allowed me to gain
          practical industry experience and apply my knowledge in a professional
          setting. These experiences helped me not only refine my technical
          skills but also develop a better understanding of the industry&rsquo;s
          demands and best practices.
        </DataSection>
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div className="text-black dark:text-neutral-100 md:text-2xl space-y-16">
        <DataSection title="Plans for 2025">
          In 2025, I plan to enhance my technical skills in machine learning,
          blockchain, and DevOps. I aim to apply my knowledge through real-world
          projects and gain hands-on experience. Participating in hackathons
          will help me improve problem-solving under pressure. I also want to
          contribute to open-source projects and collaborate with diverse
          developers.
          <br></br>
          <br></br>To strengthen my industry readiness, I will pursue relevant
          certifications and internships. These experiences will help me grow my
          professional network. My goal is to stay ahead in the rapidly evolving
          tech landscape.
        </DataSection>
      </div>
    ),
  },
];

// Main Component
const AchievementSection = () => {
  return (
    <div className="w-full">
      <Timeline data={TimelineData} />
    </div>
  );
};

export default AchievementSection;
