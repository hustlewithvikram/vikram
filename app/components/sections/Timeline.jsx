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
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full min-h-[230px] flex-col overflow-hidden rounded-[1.65rem] border border-zinc-200/80 bg-white p-5 shadow-[0_4px_18px_rgba(15,23,42,0.035)] transition duration-300 hover:-translate-y-1 hover:border-orange-300/80 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-orange-400/30 dark:hover:shadow-black/20 sm:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-50 text-2xl text-orange-700 dark:bg-orange-400/10 dark:text-orange-300" aria-hidden="true">
          {item.icon}
        </span>
        <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
          {item.date}
        </span>
      </div>
      <div className="mt-5 flex items-center gap-2">
        <span className="text-[11px] font-bold tracking-[0.18em] text-orange-700 dark:text-orange-400">{item.id}</span>
        <span className="h-px w-7 bg-zinc-200 dark:bg-zinc-700" />
        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{item.tag}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-xl">{item.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{item.description}</p>
      <div className="mt-5 flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800">
        <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500">Milestone {index + 1} / {timelineData.length}</span>
        <MdArrowOutward className="text-lg text-zinc-400 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-600 dark:group-hover:text-orange-400" />
      </div>
    </motion.article>
  );
}

export default function Timeline() {
  return (
    <section id="journey" aria-labelledby="journey-heading" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mb-9 flex flex-col gap-5 sm:mb-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow"><span className="eyebrow-dot" /> The path so far</p>
          <h2 id="journey-heading" className="section-heading mt-5">My Journey<span className="accent-text">.</span></h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-base">
            From first lines of HTML to shipping web and mobile products — each chapter added a new tool, perspective, and reason to keep building.
          </p>
        </div>
        <div className="flex gap-2 sm:gap-3">
          {[{ value: "2021", label: "Started" }, { value: "07", label: "Milestones" }, { value: "∞", label: "Still learning" }].map((stat) => (
            <div key={stat.label} className="min-w-0 rounded-2xl border border-zinc-200 bg-zinc-50/80 px-3 py-3 dark:border-zinc-800 dark:bg-zinc-900/70 sm:min-w-[104px] sm:px-4">
              <p className="text-lg font-bold tracking-tight text-zinc-950 dark:text-white sm:text-xl">{stat.value}</p>
              <p className="mt-0.5 text-[10px] font-medium text-zinc-500 dark:text-zinc-400 sm:text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
        {timelineData.map((item, index) => <JourneyCard key={item.id} item={item} index={index} />)}
      </div>
    </section>
  );
}
