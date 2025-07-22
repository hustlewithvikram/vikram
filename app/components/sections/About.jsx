/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.2,
		},
	},
};

const fadeUp = {
	hidden: { opacity: 0, y: 40 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.8, 0.25, 1], // easeInOutExpo-like
		},
	},
};

const About = () => {
	return (
		<section
			id="about"
			className="dark:bg-[#111] bg-[#f8f8f8] min-h-screen flex items-center justify-center px-6 md:px-24 lg:px-40 py-20"
		>
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				className="flex flex-col md:flex-row items-center gap-12 max-w-7xl w-full"
			>
				{/* Profile Picture */}
				<motion.div variants={fadeUp} className="relative">
					<div className="relative size-48 md:size-80 rounded-4xl outline-dashed outline-2 outline-offset-8 outline-orange-400 overflow-hidden grayscale hover:grayscale-0 transition duration-500">
						<Image
							src="/images/vikram.png"
							alt="Vikram Vishwakarma"
							fill
							className="object-cover"
							priority
						/>
					</div>
				</motion.div>

				{/* Text Content */}
				<motion.article
					variants={fadeUp}
					className="flex-1 text-left space-y-5"
				>
					<h3 className="text-2xl md:text-3xl font-semibold text-black dark:text-white">
						Hi, I'm{" "}
						<span className="text-orange-500">
							Vikram Vishwakarma
						</span>
					</h3>

					<motion.p
						variants={fadeUp}
						className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
					>
						Based in Maharashtra, India — I recently completed my
						degree in Computer Science and I’m deeply passionate
						about crafting elegant interfaces and smooth digital
						experiences.
					</motion.p>

					<motion.p
						variants={fadeUp}
						className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
					>
						I specialize in building responsive, accessible, and
						high-performance websites. My design process starts in{" "}
						<span className="font-medium dark:text-white">
							Figma
						</span>
						, then I bring it to life with{" "}
						<span className="font-medium">React</span>,{" "}
						<span className="font-medium">Tailwind</span> and{" "}
						<span className="font-medium">Next.js</span>.
					</motion.p>

					<motion.p
						variants={fadeUp}
						className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
					>
						I’m always looking to push boundaries and create
						websites that don’t just work — they{" "}
						<span className="italic dark:text-white">feel</span>{" "}
						good. Clean, minimal, and motion-enhanced design is my
						jam.
					</motion.p>
				</motion.article>
			</motion.div>
		</section>
	);
};

export default About;
