"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MdLanguage, MdCode, MdLayers, MdBolt, MdDashboard,
  MdPhoneAndroid, MdDevices, MdArrowOutward, MdClose,
} from "react-icons/md";

const timelineData = [
  { id: "01", date: "Jan 2021", title: "First Steps in Web", description: "Started with HTML, CSS, and JavaScript, learning the foundations of how the web works.", details: "The first milestone was understanding how websites are structured, styled and made interactive. Small experiments with HTML, CSS and JavaScript built the foundation for everything that followed.", icon: <MdLanguage />, tag: "The beginning", skills: ["HTML", "CSS", "JavaScript"] },
  { id: "02", date: "Jun 2021", title: "Enter React.js", description: "Built dynamic interfaces with reusable components, hooks, and props.", details: "React changed the way I approached interfaces. I started thinking in components, managing state, composing reusable UI and building experiences that respond to user input.", icon: <MdCode />, tag: "Frontend", skills: ["React", "JSX", "Hooks", "Component design"] },
  { id: "03", date: "Dec 2021", title: "Modern Frontend Tools", description: "Adopted Tailwind CSS and component-driven design to build cleaner interfaces faster.", details: "I began combining utility-first styling with reusable components and a more deliberate approach to spacing, typography, responsive layouts and visual consistency.", icon: <MdLayers />, tag: "Design systems", skills: ["Tailwind CSS", "Bootstrap", "Responsive UI"] },
  { id: "04", date: "Jul 2022", title: "Next.js Journey", description: "Explored server-side rendering, API routes, and performance-focused web development.", details: "Moving into Next.js introduced routing, rendering strategies, API integration and the importance of performance and discoverability in production web applications.", icon: <MdBolt />, tag: "Full stack", skills: ["Next.js", "React", "REST APIs"] },
  { id: "05", date: "Nov 2023", title: "Full-stack Projects", description: "Built authenticated dashboards and e-commerce experiences using modern web tools.", details: "I moved from isolated interfaces to complete product flows: connecting frontend screens to backend services, working with databases and handling real application state.", icon: <MdDashboard />, tag: "Building products", skills: ["Node.js", "Express", "MongoDB", "Authentication"] },
  { id: "06", date: "Apr 2024", title: "Exploring Mobile", description: "Expanded beyond the browser and began exploring mobile application development.", details: "Android development opened a new space for building experiences that interact closely with device capabilities, system UI and native platform patterns.", icon: <MdPhoneAndroid />, tag: "Mobile", skills: ["Kotlin", "Android", "Jetpack Compose"] },
  { id: "07", date: "Jul 2025", title: "Cross-platform Apps", description: "Moved into building polished mobile experiences and exploring cross-platform development.", details: "The focus shifted toward complete mobile products, thoughtful interaction design, platform integration, release workflows and maintaining apps beyond the first build.", icon: <MdDevices />, tag: "Next chapter", skills: ["React Native", "Jetpack Compose", "Gradle", "GitHub Actions"] },
];

function JourneyCard({ item, index, onOpen }) {
  return (
    <motion.button
      type="button"
      layoutId={`journey-card-${item.id}`}
      onClick={onOpen}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.38, delay: (index % 4) * 0.045, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.985 }}
      className={`group relative flex min-h-[190px] w-full min-w-0 flex-col items-start overflow-hidden rounded-[1.6rem] border border-zinc-200/80 bg-white p-5 text-left shadow-[0_4px_18px_rgba(15,23,42,0.035)] transition-colors hover:border-orange-300 hover:shadow-xl hover:shadow-orange-950/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-orange-400/50 sm:min-h-[210px] sm:p-6 ${index === 0 || index === 4 ? "sm:col-span-2" : ""}`}
    >
      <div className="flex w-full items-start justify-between gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-100 text-2xl text-orange-800 dark:bg-orange-400/10 dark:text-orange-300">{item.icon}</span>
        <span className="rounded-full bg-zinc-100 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">{item.date}</span>
      </div>
      <div className="mt-auto w-full pt-7">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-[10px] font-bold tracking-[0.18em] text-orange-700 dark:text-orange-400">{item.id}</span>
          <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          <span className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400">{item.tag}</span>
          <MdArrowOutward className="ml-auto text-lg text-zinc-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-600 dark:text-zinc-500" />
        </div>
        <h3 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-xl">{item.title}</h3>
        <p className="mt-1.5 max-w-2xl text-xs leading-5 text-zinc-600 dark:text-zinc-400 sm:text-sm sm:leading-6">{item.description}</p>
      </div>
    </motion.button>
  );
}

export default function Timeline() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => { if (event.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <section id="journey" aria-labelledby="journey-heading" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mb-7 flex flex-col gap-4 sm:mb-9 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow"><span className="eyebrow-dot" /> The path so far</p>
          <h2 id="journey-heading" className="section-heading mt-4">My Journey<span className="accent-text">.</span></h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:text-base sm:leading-7">From first lines of HTML to shipping web and mobile products — each chapter added a new tool, perspective, and reason to keep building.</p>
        </div>
        <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 sm:pb-1"><span className="font-semibold text-zinc-900 dark:text-white">2021</span> — Started <span className="mx-2 text-zinc-300 dark:text-zinc-700">·</span> <span className="font-semibold text-zinc-900 dark:text-white">07</span> — Milestones <span className="mx-2 text-zinc-300 dark:text-zinc-700">·</span> Tap a card to explore</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
        {timelineData.map((item, index) => <JourneyCard key={item.id} item={item} index={index} onOpen={() => setSelected(item)} />)}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-zinc-950/35 p-4 backdrop-blur-xl sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}
            role="presentation"
          >
            <motion.div
              layoutId={`journey-card-${selected.id}`}
              role="dialog"
              aria-modal="true"
              aria-labelledby="journey-dialog-title"
              className="relative my-auto w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/70 bg-white p-6 shadow-[0_30px_100px_rgba(0,0,0,0.28)] dark:border-zinc-700 dark:bg-zinc-900 sm:p-8"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button type="button" onClick={() => setSelected(null)} aria-label="Close details" className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-zinc-100 text-zinc-700 transition hover:bg-orange-100 hover:text-orange-800 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-orange-400/15 dark:hover:text-orange-300"><MdClose size={20} /></button>
              <div className="flex items-center gap-4 pr-12">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-orange-100 text-3xl text-orange-800 dark:bg-orange-400/10 dark:text-orange-300">{selected.icon}</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-700 dark:text-orange-400">{selected.date} · {selected.tag}</p>
                  <h3 id="journey-dialog-title" className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-3xl">{selected.title}</h3>
                </div>
              </div>
              <p className="mt-7 text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">{selected.details}</p>
              <div className="mt-7">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">What I explored</p>
                <div className="flex flex-wrap gap-2">{selected.skills.map((skill) => <span key={skill} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">{skill}</span>)}</div>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-zinc-200 pt-5 dark:border-zinc-800">
                <span className="text-xs font-semibold tracking-[0.15em] text-zinc-400">MILESTONE {selected.id} / 07</span>
                <button type="button" onClick={() => setSelected(null)} className="rounded-full bg-orange-600 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-orange-700">Done</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
