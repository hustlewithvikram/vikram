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
    <section id="skills" className="border-y border-zinc-200/80 bg-zinc-50/80 px-4 py-14 transition-colors duration-500 dark:border-zinc-800 dark:bg-zinc-900/35 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="section-container">
        <div className="mb-7 flex flex-col justify-between gap-3 sm:mb-9 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> The toolkit</p>
            <h2 className="section-heading mt-4">Tools of the <span className="accent-text">trade.</span></h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:leading-7">
            A practical mix of technologies I use to design, develop, debug and ship products.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {groups.map(({ icon: Icon, title, detail, skills }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="surface-card min-w-0 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-300/70 hover:shadow-[0_12px_28px_rgba(15,23,42,0.06)] dark:hover:border-orange-400/30 sm:p-5"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-orange-100 text-orange-700 dark:bg-orange-400/10 dark:text-orange-300">
                  <Icon size={19} />
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-zinc-950 dark:text-white">{title}</h3>
                  <p className="truncate text-[11px] text-zinc-500 dark:text-zinc-400">{detail}</p>
                </div>
                <span className="ml-auto shrink-0 text-[10px] font-semibold tabular-nums text-zinc-400 dark:text-zinc-500">{String(skills.length).padStart(2, "0")}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-lg border border-zinc-200/90 bg-zinc-50 px-2.5 py-1.5 text-[11px] font-medium leading-none text-zinc-700 transition-colors duration-300 dark:border-zinc-700/80 dark:bg-zinc-800/75 dark:text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
