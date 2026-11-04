"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  { number: "01", title: "Location Dots", category: "Android · Kotlin · Jetpack Compose", description: "A location timeline that turns everyday movement into a thoughtful visual history of places visited.", image: null, links: [{ label: "GitHub", href: "https://github.com/hustlewithvikram/location-dots" }] },
  { number: "02", title: "Expressive Island", category: "Android · Kotlin · System UI", description: "A flexible Dynamic Island-inspired Android experience with live activities, gestures and expressive interactions.", image: null, links: [{ label: "GitHub", href: "https://github.com/hustlewithvikram/expressive-island" }] },
  { number: "03", title: "NearShare", category: "Android · Kotlin · Connectivity", description: "A nearby sharing app concept focused on making local device-to-device transfers simple and approachable.", image: null, links: [{ label: "GitHub", href: "https://github.com/hustlewithvikram/nearshare" }] },
  { number: "04", title: "Shop Now", category: "Next.js · React · MongoDB", description: "A modern e-commerce experience with a focus on clear product discovery and a streamlined shopping flow.", image: "/images/projects/shopnowlogo.png", links: [{ label: "GitHub", href: "https://github.com/vikramisdev/shopnow" }] },
  { number: "05", title: "Advit Design Studio", category: "Next.js · React · Resend", description: "A studio portfolio website designed to present creative work through a clean, considered interface.", image: "/images/projects/advitdesignstudio.jpg", links: [{ label: "GitHub", href: "https://github.com/vikramisdev/advit" }] },
];

export default function Projects() {
  return (
    <section id="projects" className="section-space">
      <div className="section-container">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end">
          <div><p className="eyebrow"><span className="eyebrow-dot" /> Selected work</p><h2 className="section-heading mt-5">Things I’ve <span className="accent-text">built.</span></h2></div>
          <p className="max-w-sm text-sm leading-7 text-zinc-600 dark:text-zinc-400">A selection of experiments and products shaped by curiosity, problem-solving and plenty of iteration.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article key={project.number} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.45, delay: (index % 2) * 0.08 }} className={`group min-w-0 overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 ${index === 0 ? "md:col-span-2 md:grid md:grid-cols-[1.2fr_0.8fr]" : ""}`}>
              <div className={`relative overflow-hidden bg-zinc-100 dark:bg-zinc-800 ${index === 0 ? "aspect-[16/9] md:aspect-auto md:min-h-[360px]" : "aspect-[16/10]"}`}>
                {project.image ? <Image src={project.image} alt={`${project.title} project preview`} fill sizes={index === 0 ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 50vw"} className="object-cover transition duration-700 group-hover:scale-[1.035]" /> : <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_70%_25%,rgba(234,88,12,0.22),transparent_42%),linear-gradient(135deg,#27272a,#09090b)]"><span className="text-[clamp(2.5rem,7vw,5rem)] font-semibold tracking-[-0.08em] text-white/90">{project.title.split(" ").map((word) => word[0]).join("")}<span className="text-orange-400">.</span></span><span className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.22em] text-white/45">Concept · Build · Iterate</span></div>}
                <span className="absolute left-5 top-5 rounded-full border border-white/50 bg-black/35 px-3 py-1.5 text-xs font-semibold tracking-widest text-white backdrop-blur">{project.number}</span>
              </div>
              <div className="flex flex-col justify-between p-6 sm:p-7">
                <div><p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-orange-700 dark:text-orange-400">{project.category}</p><h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">{project.title}</h3><p className="mt-3 max-w-lg text-sm leading-7 text-zinc-600 dark:text-zinc-400">{project.description}</p></div>
                <div className="mt-8 flex flex-wrap gap-2">{project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-full border border-zinc-200 px-4 text-xs font-semibold text-zinc-800 transition hover:border-orange-400 hover:text-orange-700 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-orange-400 dark:hover:text-orange-300"><Github size={14} />{link.label}<ArrowUpRight size={14} /></a>)}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
