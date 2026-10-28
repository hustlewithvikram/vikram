"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MdLanguage,
  MdCode,
  MdLayers,
  MdBolt,
  MdDashboard,
  MdPhoneAndroid,
  MdDevices,
  MdArrowOutward,
} from "react-icons/md";

const timelineData = [
  {
    id: "01",
    date: "Jan 2021",
    title: "First Steps in Web",
    description:
      "Started with HTML, CSS, and JavaScript, learning the foundations of how the web works.",
    icon: <MdLanguage />,
    tone: "blue",
    tag: "The beginning",
  },
  {
    id: "02",
    date: "Jun 2021",
    title: "Enter React.js",
    description:
      "Built dynamic interfaces with reusable components, hooks, and props.",
    icon: <MdCode />,
    tone: "violet",
    tag: "Frontend",
  },
  {
    id: "03",
    date: "Dec 2021",
    title: "Modern Frontend Tools",
    description:
      "Adopted Tailwind CSS and component-driven design to build cleaner interfaces faster.",
    icon: <MdLayers />,
    tone: "amber",
    tag: "Design systems",
  },
  {
    id: "04",
    date: "Jul 2022",
    title: "Next.js Journey",
    description:
      "Explored server-side rendering, API routes, and performance-focused web development.",
    icon: <MdBolt />,
    tone: "emerald",
    tag: "Full stack",
  },
  {
    id: "05",
    date: "Nov 2023",
    title: "Full-stack Projects",
    description:
      "Built authenticated dashboards and e-commerce experiences using modern web tools.",
    icon: <MdDashboard />,
    tone: "indigo",
    tag: "Building products",
  },
  {
    id: "06",
    date: "Apr 2024",
    title: "Exploring Mobile",
    description:
      "Expanded beyond the browser and began exploring mobile application development.",
    icon: <MdPhoneAndroid />,
    tone: "rose",
    tag: "Mobile",
  },
  {
    id: "07",
    date: "Jul 2025",
    title: "Cross-platform Apps",
    description:
      "Moved into building polished mobile experiences and exploring cross-platform development.",
    icon: <MdDevices />,
    tone: "cyan",
    tag: "Next chapter",
  },
];

const toneClasses = {
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-400/15 dark:text-blue-300",
  violet: "bg-violet-100 text-violet-700 dark:bg-violet-400/15 dark:text-violet-300",
  amber: "bg-amber-100 text-amber-800 dark:bg-amber-400/15 dark:text-amber-300",
  emerald: "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300",
  indigo: "bg-indigo-100 text-indigo-700 dark:bg-indigo-400/15 dark:text-indigo-300",
  rose: "bg-rose-100 text-rose-700 dark:bg-rose-400/15 dark:text-rose-300",
  cyan: "bg-cyan-100 text-cyan-800 dark:bg-cyan-400/15 dark:text-cyan-300",
};

function JourneyCard({ item, index, compact = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.045, 0.2) }}
      className="group relative h-full overflow-hidden rounded-3xl border border-neutral-200/80 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700 sm:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-2xl ${toneClasses[item.tone]}`}
          aria-hidden="true"
        >
          {item.icon}
        </span>
        <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-semibold tracking-wide text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
          {item.date}
        </span>
      </div>

      <div className="mt-5 flex items-center gap-2">
        <span className="text-xs font-bold tracking-[0.16em] text-neutral-400 dark:text-neutral-500">
          {item.id}
        </span>
        <span className="h-px w-6 bg-neutral-200 dark:bg-neutral-700" />
        <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
          {item.tag}
        </span>
      </div>

      <h3 className={`mt-3 font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 ${compact ? "text-lg" : "text-xl"}`}>
        {item.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:text-[0.925rem]">
        {item.description}
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4 dark:border-neutral-800">
        <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500">
          Milestone {index + 1} of {timelineData.length}
        </span>
        <MdArrowOutward className="text-lg text-neutral-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-700 dark:group-hover:text-neutral-200" />
      </div>
    </motion.article>
  );
}

export default function Timeline() {
  const [expandedId, setExpandedId] = useState("01");

  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-12">
        <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-600 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          The path so far
        </span>
        <h2
          id="journey-heading"
          className="mt-4 text-3xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-4xl lg:text-5xl"
        >
          My Journey<span className="text-blue-600 dark:text-blue-400">.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:text-base sm:leading-7">
          Every milestone taught me something new. Here’s how curiosity turned
          into a journey of building for the web and beyond.
        </p>
      </div>

      <div className="mb-6 grid grid-cols-3 gap-2 sm:mb-8 sm:gap-3">
        {[
          { value: "2021", label: "Started coding" },
          { value: "7", label: "Key milestones" },
          { value: "Ongoing", label: "Always learning" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-neutral-200/80 bg-neutral-50/80 px-2 py-3 text-center dark:border-neutral-800 dark:bg-neutral-900/70 sm:rounded-3xl sm:px-4 sm:py-4"
          >
            <p className="text-sm font-bold text-neutral-900 dark:text-neutral-100 sm:text-xl">
              {stat.value}
            </p>
            <p className="mt-1 text-[10px] leading-4 text-neutral-500 dark:text-neutral-400 sm:text-xs">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="hidden grid-cols-2 gap-4 md:grid lg:grid-cols-3 lg:gap-5">
        {timelineData.map((item, index) => (
          <JourneyCard key={item.id} item={item} index={index} />
        ))}
      </div>

      <div className="flex flex-col gap-3 md:hidden">
        {timelineData.map((item, index) => {
          const isExpanded = expandedId === item.id;
          return (
            <motion.div
              key={item.id}
              layout
              className={`overflow-hidden rounded-2xl border transition-colors ${isExpanded
                ? "border-neutral-300 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900"
                : "border-neutral-200 bg-neutral-50/80 dark:border-neutral-800 dark:bg-neutral-900/50"
              }`}
            >
              <button
                type="button"
                aria-expanded={isExpanded}
                onClick={() => setExpandedId(isExpanded ? "" : item.id)}
                className="flex w-full items-center gap-3 p-4 text-left sm:p-5"
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl ${toneClasses[item.tone]}`}
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-medium text-neutral-500 dark:text-neutral-400">
                    {item.date} · Milestone {index + 1}
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-neutral-900 dark:text-neutral-100 sm:text-base">
                    {item.title}
                  </span>
                </span>
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg text-neutral-500 transition-transform dark:text-neutral-400 ${isExpanded ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    key="description"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 pb-5 pl-[4.5rem] text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:pl-[5rem]">
                      {item.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
