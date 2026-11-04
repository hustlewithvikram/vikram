"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Layers3, Smartphone } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Web development", text: "Building fast, maintainable interfaces and full-stack experiences." },
  { icon: Smartphone, title: "Mobile experiences", text: "Creating practical, polished Android and cross-platform apps." },
  { icon: Layers3, title: "Product thinking", text: "Balancing visual detail, usability and engineering decisions." },
];

export default function About() {
  return (
    <section id="about" className="section-space border-y border-zinc-200/80 bg-zinc-50/80 dark:border-zinc-800 dark:bg-zinc-900/35">
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> A little about me</p>
            <h2 className="section-heading mt-5">A developer with a <span className="accent-text">builder’s mindset.</span></h2>
          </div>
          <div>
            <p className="max-w-3xl text-lg leading-8 text-zinc-700 dark:text-zinc-300 sm:text-xl sm:leading-9">
              I’m a Computer Science graduate from Maharashtra, India, working in Quality Engineering & Assurance while continuing to build software outside the day job. I enjoy the space where thoughtful design meets reliable engineering.
            </p>
            <p className="mt-5 max-w-3xl leading-8 text-zinc-600 dark:text-zinc-400">
              My work spans React, React Native, JavaScript, Python and Android development. I like understanding how products work end to end — from the first interface sketch to the systems that make the experience dependable.
            </p>
            <a href="#projects" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 transition hover:gap-3 dark:text-orange-400">Explore selected work <ArrowUpRight size={16} /></a>
          </div>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, title, text }, index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.08 }} className="surface-card p-6 sm:p-7">
              <span className="mb-8 grid h-11 w-11 place-items-center rounded-2xl bg-orange-100 text-orange-700 dark:bg-orange-400/10 dark:text-orange-300"><Icon size={21} /></span>
              <h3 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
