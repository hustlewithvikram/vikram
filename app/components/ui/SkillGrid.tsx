"use client";

import { motion } from "framer-motion";
import { Braces, Database, Smartphone, Wrench } from "lucide-react";

const groups = [
  { icon: Braces, title: "Frontend", detail: "Interfaces & experiences", skills: ["React", "Next.js", "React Native", "JavaScript", "TypeScript", "Tailwind CSS"] },
  { icon: Database, title: "Backend & data", detail: "Services & persistence", skills: ["Node.js", "Python", "Express", "MongoDB", "REST APIs", "Firebase"] },
  { icon: Smartphone, title: "Mobile", detail: "Native & cross-platform", skills: ["Kotlin", "Jetpack Compose", "Android", "Gradle", "Room", "ADB"] },
  { icon: Wrench, title: "Tools & workflow", detail: "Build, ship & iterate", skills: ["Git", "GitHub", "Linux", "Figma", "Postman", "VS Code"] },
];

export default function SkillGrid() {
  return (
    <section id="skills" className="section-space border-y border-zinc-200/80 bg-zinc-50/80 dark:border-zinc-800 dark:bg-zinc-900/35">
      <div className="section-container">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
          <div><p className="eyebrow"><span className="eyebrow-dot" /> The toolkit</p><h2 className="section-heading mt-5">Tools of the <span className="accent-text">trade.</span></h2></div>
          <p className="max-w-sm text-sm leading-7 text-zinc-600 dark:text-zinc-400">A practical mix of technologies I use to design, develop, debug and ship products.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {groups.map(({ icon: Icon, title, detail, skills }, index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.06 }} className="surface-card p-5 sm:p-7">
              <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-100 text-orange-700 dark:bg-orange-400/10 dark:text-orange-300"><Icon size={19} /></span><div><h3 className="font-semibold text-zinc-950 dark:text-white">{title}</h3><p className="text-xs text-zinc-500 dark:text-zinc-400">{detail}</p></div><span className="ml-auto text-xs tabular-nums text-zinc-400">{String(skills.length).padStart(2, "0")}</span></div>
              <div className="mt-6 flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-200">{skill}</span>)}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
