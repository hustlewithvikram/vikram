"use client";

import { motion } from "framer-motion";

const skillGroups = [
	{
		name: "Frontend",
		skills: ["Next.js", "React", "JavaScript", "TypeScript", "Tailwind CSS", "Redux / RTK"],
	},
	{
		name: "Backend",
		skills: ["Node.js", "Express", "REST APIs", "Auth (NextAuth)"],
	},
	{
		name: "Data & Tools",
		skills: ["MongoDB", "Git & GitHub", "Cloudinary / CDN"],
	},
];

export default function SkillGrid() {
	return (
		<section id="skills" className="mx-auto mt-14 w-full max-w-7xl px-4 sm:mt-16 sm:px-6 lg:px-8">
			<div className="mb-5 flex flex-wrap items-end justify-between gap-3 sm:mb-6">
				<div>
					<span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800 dark:bg-red-950/60 dark:text-red-200">
						Tech Stack
					</span>
					<h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-2xl">
						Tools I work with
					</h2>
				</div>
				<p className="max-w-sm text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
					A compact overview of my core technologies.
				</p>
			</div>

			<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
				{skillGroups.map((group, index) => (
					<motion.div
						key={group.name}
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.15 }}
						transition={{ duration: 0.3, delay: index * 0.06 }}
						className="min-w-0 rounded-2xl border border-zinc-200/80 bg-white/80 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70 sm:p-5"
					>
						<div className="mb-3 flex items-center justify-between gap-2">
							<h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{group.name}</h3>
							<span className="shrink-0 text-xs tabular-nums text-zinc-400 dark:text-zinc-500">
								{group.skills.length.toString().padStart(2, "0")}
							</span>
						</div>
						<div className="flex flex-wrap gap-2">
							{group.skills.map((skill) => (
								<span
									key={skill}
									className="inline-flex max-w-full items-center rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 text-xs font-medium leading-4 text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-800 sm:text-[13px]"
								>
									{skill}
								</span>
							))}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
