"use client";

import { motion } from "framer-motion";
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
  { id: "01", date: "Jan 2021", title: "First Steps in Web", description: "Started with HTML, CSS, and JavaScript, learning the foundations of how the web works.", icon: <MdLanguage />, tag: "The beginning" },
  { id: "02", date: "Jun 2021", title: "Enter React.js", description: "Built dynamic interfaces with reusable components, hooks, and props.", icon: <MdCode />, tag: "Frontend" },
  { id: "03", date: "Dec 2021", title: "Modern Frontend Tools", description: "Adopted Tailwind CSS and component-driven design to build cleaner interfaces faster.", icon: <MdLayers />, tag: "Design systems" },
  { id: "04", date: "Jul 2022", title: "Next.js Journey", description: "Explored server-side rendering, API routes, and performance-focused web development.", icon: <MdBolt />, tag: "Full stack" },
  { id: "05", date: "Nov 2023", title: "Full-stack Projects", description: "Built authenticated dashboards and e-commerce experiences using modern web tools.", icon: <MdDashboard />, tag: "Building products" },
  { id: "06", date: "Apr 2024", title: "Exploring Mobile", description: "Expanded beyond the browser and began exploring mobile application development.", icon: <MdPhoneAndroid />, tag: "Mobile" },
  { id: "07", date: "Jul 2025", title: "Cross-platform Apps", description: "Moved into building polished mobile experiences and exploring cross-platform development.", icon: <MdDevices />, tag: "Next chapter" },
];

function JourneyCard({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.35, delay: (index % 4) * 0.045, ease: [0.22, 1, 0.36, 1] }}
      className="group flex min-w-0 items-center gap-3 rounded-2xl border border-zinc-200/80 bg-white p-3 shadow-[0_3px_14px_rgba(15,23,42,0.03)] transition duration-300 hover:-translate-y-0.5 hover:border-orange-300/80 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-orange-400/30 sm:h-full sm:items-start sm:gap-0 sm:rounded-[1.4rem] sm:p-4"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-orange-50 text-xl text-orange-700 dark:bg-orange-400/10 dark:text-orange-300 sm:h-11 sm:w-11 sm:rounded-2xl sm:text-2xl" aria-hidden="true">
        {item.icon}
      </span>
      <div className="min-w-0 flex-1 sm:mt-3">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="text-[10px] font-bold tracking-[0.14em] text-orange-700 dark:text-orange-400">{item.id}</span>
          <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          <span className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400">{item.date}</span>
          <span className="ml-auto hidden rounded-full bg-zinc-100 px-2 py-1 text-[9px] font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 sm:inline-flex">{item.tag}</span>
        </div>
        <h3 className="mt-1 text-sm font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-base">{item.title}</h3>
        <p className="mt-1 line-clamp-2 text-xs leading-5 text-zinc-600 dark:text-zinc-400">{item.description}</p>
      </div>
      <MdArrowOutward className="ml-auto shrink-0 text-base text-zinc-300 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-600 dark:text-zinc-600 dark:group-hover:text-orange-400 sm:hidden" />
    </motion.article>
  );
}

export default function Timeline() {
  return (
    <section id="journey" aria-labelledby="journey-heading" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mb-7 flex flex-col gap-4 sm:mb-9 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow"><span className="eyebrow-dot" /> The path so far</p>
          <h2 id="journey-heading" className="section-heading mt-4">My Journey<span className="accent-text">.</span></h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:text-base sm:leading-7">
            From first lines of HTML to shipping web and mobile products — each chapter added a new tool, perspective, and reason to keep building.
          </p>
        </div>
        <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 sm:pb-1">
          <span className="font-semibold text-zinc-900 dark:text-white">2021</span> — Started
          <span className="mx-2 text-zinc-300 dark:text-zinc-700">·</span>
          <span className="font-semibold text-zinc-900 dark:text-white">07</span> — Milestones
          <span className="mx-2 text-zinc-300 dark:text-zinc-700">·</span>
          Still learning
        </p>
      </div>
      <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3 xl:grid-cols-4">
        {timelineData.map((item, index) => <JourneyCard key={item.id} item={item} index={index} />)}
      </div>
    </section>
  );
}
