"use client";

import { motion } from "framer-motion";
import { Braces, Database, Smartphone, Wrench, Sparkles, ArrowUpRight } from "lucide-react";

const groups = [
  { icon: Braces, title: "Frontend", detail: "Interfaces & experiences", tone: "orange", skills: ["React", "Next.js", "React Native", "JavaScript", "TypeScript", "Tailwind CSS"] },
  { icon: Database, title: "Backend & data", detail: "Services & persistence", tone: "blue", skills: ["Node.js", "Python", "Express", "MongoDB", "REST APIs", "Firebase"] },
  { icon: Smartphone, title: "Mobile", detail: "Native & cross-platform", tone: "violet", skills: ["Kotlin", "Jetpack Compose", "Android", "Gradle", "Room", "ADB"] },
  { icon: Wrench, title: "Tools & workflow", detail: "Build, ship & iterate", tone: "green", skills: ["Git", "GitHub", "Linux", "Figma", "Postman", "VS Code"] },
];

const tones: Record<string, string> = {
  orange: "bg-orange-100 text-orange-800 dark:bg-orange-400/15 dark:text-orange-300",
  blue: "bg-sky-100 text-sky-800 dark:bg-sky-400/15 dark:text-sky-300",
  violet: "bg-violet-100 text-violet-800 dark:bg-violet-400/15 dark:text-violet-300",
  green: "bg-emerald-100 text-emerald-800 dark:bg-emerald-400/15 dark:text-emerald-300",
};

export default function SkillGrid() {
  return (
    <section id="skills" className="relative overflow-hidden border-y border-zinc-200/80 bg-zinc-50/80 px-4 py-14 transition-colors duration-500 dark:border-zinc-800 dark:bg-zinc-900/35 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="section-container">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> The toolkit</p>
            <h2 className="section-heading mt-4">Tools of the <span className="accent-text">trade.</span></h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:leading-7">A practical mix of technologies I use to design, develop, debug and ship products.</p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {groups.map(({ icon: Icon, title, detail, tone, skills }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.055 }}
              className="group relative min-w-0 overflow-hidden rounded-[1.75rem] border border-zinc-200/90 bg-white p-5 shadow-[0_4px_20px_rgba(24,24,27,0.035)] transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:shadow-black/20 sm:p-6"
            >
              <div className="flex items-start justify-between">
                <span className={`grid h-12 w-12 place-items-center rounded-[1.15rem] ${tones[tone]}`}><Icon size={21} strokeWidth={1.9} /></span>
                <span className="rounded-full bg-zinc-100 px-3 py-1.5 text-[10px] font-semibold tabular-nums text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">{String(skills.length).padStart(2, "0")} skills</span>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-white">{title}</h3>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{detail}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill, skillIndex) => (
                  <span key={skill} className={`rounded-full border px-3 py-2 text-[11px] font-medium leading-none transition-colors ${skillIndex === 0 ? "border-orange-200 bg-orange-50 text-orange-800 dark:border-orange-400/20 dark:bg-orange-400/10 dark:text-orange-300" : "border-zinc-200/90 bg-zinc-50 text-zinc-700 dark:border-zinc-700/80 dark:bg-zinc-800/75 dark:text-zinc-300"}`}>{skill}</span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400">Core toolkit</span>
                <ArrowUpRight size={15} className="text-zinc-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-600 dark:text-zinc-600 dark:group-hover:text-orange-400" />
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400"><Sparkles size={14} className="text-orange-600 dark:text-orange-400" /> Tools are chosen around the problem, not the trend.</div>
      </div>
    </section>
  );
}
