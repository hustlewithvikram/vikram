/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";

const container = {
	hidden: {},
	show: {
		transition: { staggerChildren: 0.15, delayChildren: 0.2 },
	},
};

const fadeUp = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] },
	},
};

const About = () => {
	return (
		<section
			id="about"
			className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-20 bg-gradient-to-b bg-white dark:bg-[#0b0b0b] transition-colors"
		>
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				className="max-w-7xl mx-auto flex flex-col gap-12"
			>
				{/* Heading */}
				<motion.div variants={fadeUp} className="space-y-6">
					<div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 text-sm font-medium">
						About Me
					</div>

					<h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white">
						Hi, I’m{" "}
						<span className="text-blue-400">
							Vikram Vishwakarma
						</span>
					</h1>

					<p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
						Based in Maharashtra, India — I’m a{" "}
						<span className="font-semibold">
							Computer Science graduate
						</span>{" "}
						and{" "}
						<span className="font-semibold text-gray-900 dark:text-white">
							React.js & React Native Developer
						</span>{" "}
						passionate about crafting clean, modern, and
						user-focused digital experiences.
					</p>
				</motion.div>

				{/* Body */}
				<motion.div
					variants={fadeUp}
					className="space-y-6 text-lg md:text-xl"
				>
					<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
						I build{" "}
						<span className="font-medium">scalable web apps</span>{" "}
						with{" "}
						<span className="font-semibold text-blue-600 dark:text-blue-400">
							React.js
						</span>{" "}
						and{" "}
						<span className="font-medium">
							cross-platform mobile apps
						</span>{" "}
						with{" "}
						<span className="font-semibold text-indigo-600 dark:text-indigo-400">
							React Native
						</span>
						. My expertise spans UI/UX, animations, Firebase
						integrations, and seamless backend connections.
					</p>

					<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
						My philosophy:{" "}
						<span className="italic text-gray-900 dark:text-white">
							design simplicity
						</span>{" "}
						+ <span className="italic">engineering excellence</span>
						. I strive to build apps that not only work flawlessly
						but feel natural and delightful to use.
					</p>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default About;
