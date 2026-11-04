"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  { number: "01", title: "Location Dots", category: "Android · Kotlin · Jetpack Compose", description: "A location timeline that turns everyday movement into a thoughtful visual history of places visited.", image: null, links: [{ label: "GitHub", href: "https://github.com/hustlewithvikram/location-dots" }] },
  { number: "02", title: "Expressive Island", category: "Android · Kotlin · System UI", description: "A flexible Dynamic Island-inspired Android experience with live activities, gestures and expressive interactions.", image: null, links: [{ label: "GitHub", href: "https://github.com/hustlewithvikram/expressive-island" }] },
  { number: "03", title: "NearShare", category: "Android · Kotlin · Connectivity", description: "A nearby sharing app focused on making local device-to-device transfers simple and approachable.", image: null, links: [{ label: "GitHub", href: "https://github.com/hustlewithvikram/nearshare" }] },
  { number: "04", title: "Shop Now", category: "Next.js · React · MongoDB", description: "An e-commerce experience focused on clear product discovery and a streamlined shopping flow.", image: "/images/projects/shopnowlogo.png", links: [{ label: "GitHub", href: "https://github.com/hustlewithvikram/shopnow" }] },
  { number: "05", title: "Advit Design Studio", category: "Next.js · React · Resend", description: "A studio portfolio website designed to present creative work through a clean, considered interface.", image: "/images/projects/advitdesignstudio.jpg", links: [{ label: "GitHub", href: "https://github.com/hustlewithvikram/advit" }] },
  { number: "06", title: "Deep Notes", category: "Android · Kotlin · Room · Jetpack Compose", description: "A note-taking app inspired by Google Keep, with local storage, dynamic color, swipe actions and content search.", image: null, links: [{ label: "GitHub", href: "https://github.com/hustlewithvikram/deepnotes" }] },
  { number: "07", title: "Task Management", category: "Angular · Express · Node.js", description: "A full-stack task management application with an Angular interface and an Express backend.", image: null, links: [{ label: "GitHub", href: "https://github.com/hustlewithvikram/task-management" }] },
];

export default function Projects() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new IntersectionObserver((entries) => {
      const mostVisible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (mostVisible) {
        const index = Number(mostVisible.target.dataset.index);
        if (Number.isFinite(index)) setActiveIndex(index);
      }
    }, { root: track, threshold: [0.35, 0.55, 0.7, 0.85] });
    Array.from(track.children).forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const moveTo = (index) => {
    const track = trackRef.current;
    const card = track?.children[index];
    if (card) card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <section id="projects" className="section-space overflow-hidden">
      <div className="section-container">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> Selected work</p>
            <h2 className="section-heading mt-5">Things I’ve <span className="accent-text">built.</span></h2>
          </div>
          <div className="flex items-end justify-between gap-4 sm:max-w-sm">
            <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">A collection of real projects, experiments and products — made through curiosity, problem-solving and plenty of iteration.</p>
            <a href="https://github.com/hustlewithvikram?tab=repositories" target="_blank" rel="noreferrer" className="hidden shrink-0 items-center gap-1 text-xs font-semibold text-orange-700 hover:text-orange-800 dark:text-orange-400 sm:inline-flex">All repositories <ArrowUpRight size={14} /></a>
          </div>
        </div>

        <div className="hidden gap-5 md:grid md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article key={project.number} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.45, delay: (index % 3) * 0.06 }} className="group flex min-w-0 flex-col overflow-hidden rounded-[1.65rem] border border-zinc-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-black/20">
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                {project.image ? <Image src={project.image} alt={`${project.title} project preview`} fill sizes="(max-width: 1280px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" /> : <div className="absolute inset-0 grid place-items-center bg-zinc-950"><span className="text-6xl font-semibold tracking-[-0.08em] text-white/90">{project.title.split(" ").map((word) => word[0]).join("")}<span className="text-orange-400">.</span></span><span className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.22em] text-white/45">Concept · Build · Iterate</span></div>}
                <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-black/35 px-3 py-1.5 text-[11px] font-semibold tracking-widest text-white backdrop-blur">{project.number}</span>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-[10px] font-semibold uppercase leading-5 tracking-[0.15em] text-orange-700 dark:text-orange-400">{project.category}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-zinc-950 dark:text-white">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">{project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="inline-flex min-h-9 items-center gap-2 rounded-full border border-zinc-200 px-3.5 text-xs font-semibold text-zinc-800 transition hover:border-orange-400 hover:text-orange-700 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-orange-400 dark:hover:text-orange-300"><Github size={13} />{link.label}<ArrowUpRight size={13} /></a>)}</div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="md:hidden">
          <div ref={trackRef} className="project-carousel -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-[9vw] pb-5 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {projects.map((project, index) => (
              <motion.article key={project.number} data-index={index} animate={{ scale: activeIndex === index ? 1 : 0.9, opacity: activeIndex === index ? 1 : 0.68 }} transition={{ type: "spring", stiffness: 260, damping: 26 }} className="group flex w-[82vw] max-w-[360px] shrink-0 snap-center flex-col overflow-hidden rounded-[1.65rem] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  {project.image ? <Image src={project.image} alt={`${project.title} project preview`} fill sizes="82vw" className="object-cover" /> : <div className="absolute inset-0 grid place-items-center bg-zinc-950"><span className="text-6xl font-semibold tracking-[-0.08em] text-white/90">{project.title.split(" ").map((word) => word[0]).join("")}<span className="text-orange-400">.</span></span><span className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.22em] text-white/45">Concept · Build · Iterate</span></div>}
                  <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-black/35 px-3 py-1.5 text-[11px] font-semibold tracking-widest text-white backdrop-blur">{project.number}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[10px] font-semibold uppercase leading-5 tracking-[0.14em] text-orange-700 dark:text-orange-400">{project.category}</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-zinc-950 dark:text-white">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="inline-flex min-h-9 items-center gap-2 rounded-full border border-zinc-200 px-3.5 text-xs font-semibold text-zinc-800 dark:border-zinc-700 dark:text-zinc-200"><Github size={13} />{link.label}<ArrowUpRight size={13} /></a>)}</div>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mt-1 flex items-center justify-between px-1">
            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Swipe to explore <span className="text-orange-600 dark:text-orange-400">· {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span></p>
            <div className="flex gap-2">
              <button type="button" onClick={() => moveTo(Math.max(0, activeIndex - 1))} aria-label="Previous project" className="grid h-9 w-9 place-items-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:border-orange-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"><ChevronLeft size={17} /></button>
              <button type="button" onClick={() => moveTo(Math.min(projects.length - 1, activeIndex + 1))} aria-label="Next project" className="grid h-9 w-9 place-items-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:border-orange-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"><ChevronRight size={17} /></button>
            </div>
          </div>
          <a href="https://github.com/hustlewithvikram?tab=repositories" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-orange-700 dark:text-orange-400">Explore all GitHub repositories <ArrowUpRight size={14} /></a>
        </div>
      </div>
    </section>
  );
}
