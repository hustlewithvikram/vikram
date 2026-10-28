/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { sendEmail } from "../../../lib/utils";
import { Download, Mail } from "@mui/icons-material";

const Hero = () => {
	const fadeUp = {
		hidden: { opacity: 0, y: 20 },
		show: (i = 0) => ({
			opacity: 1,
			y: 0,
			transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
		}),
	};

	const downloadResume = () => {
		const link = document.createElement("a");
		link.href = "/documents/Vikram Vishwakarma - React & React Native Resume.pdf";
		link.download = "Vikram Vishwakarma - React & React Native Resume.pdf";
		link.click();
	};

	return (
		<section id="home" className="flex min-h-[100svh] w-full items-center justify-center bg-white px-4 py-16 dark:bg-[#0b0b0e] sm:px-6 sm:py-20 lg:px-8">
			<div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-8 md:flex-row md:gap-10 lg:gap-16">
				<motion.div
					className="relative w-full min-w-0 md:w-3/5 md:pl-6 lg:pl-8"
					initial="hidden"
					animate="show"
					variants={fadeUp}
				>
					<div className="absolute -left-8 top-24 hidden flex-col items-center gap-6 xl:flex">
						<div className="origin-left -rotate-90 select-none text-sm tracking-wide text-gray-400 dark:text-gray-500">Fullstack Developer</div>
						<div className="h-[120px] border-l border-gray-200 dark:border-gray-800" />
						<div className="origin-left -rotate-90 select-none text-sm text-gray-400 dark:text-gray-500">2002</div>
					</div>

					<motion.div variants={fadeUp} custom={0} className="mb-5 hidden items-center gap-6 sm:flex md:mb-7 md:gap-8">
						<div>
							<div className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">+20</div>
							<div className="text-xs text-gray-500 dark:text-gray-400 sm:text-sm">Projects completed</div>
						</div>
						<div>
							<div className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">+50</div>
							<div className="text-xs text-gray-500 dark:text-gray-400 sm:text-sm">Milestones achieved</div>
						</div>
					</motion.div>

					<motion.h1
						variants={fadeUp}
						custom={1}
						className="text-[clamp(3.75rem,12vw,7.5rem)] font-extrabold leading-[0.95] tracking-tight text-gray-900 dark:text-white"
					>
						Hello
					</motion.h1>

					<motion.p variants={fadeUp} custom={2} className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg lg:text-xl">
						— It&apos;s Vikram. I craft modern digital products with React ecosystems — focused on performance, clarity, and user delight.
					</motion.p>

					<motion.div variants={fadeUp} custom={3} className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
						<button
							onClick={() => sendEmail("Potential Collaboration", "Hello Vikram, I'd like to discuss a project opportunity...")}
							className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm text-white shadow-sm transition-colors hover:bg-blue-700 sm:text-base"
						>
							<Mail fontSize="small" /> Email
						</button>
						<button
							onClick={downloadResume}
							className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm text-gray-900 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-white sm:text-base"
						>
							<Download fontSize="small" /> Download Resume
						</button>
						<div className="flex flex-wrap items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
							{["React", "React Native", "UI/UX"].map((s) => (
								<span key={s} className="rounded-full bg-blue-50 px-3 py-1 text-xs dark:bg-white/5">{s}</span>
							))}
						</div>
					</motion.div>
				</motion.div>

				<motion.div
					className="flex w-full max-w-[min(76vw,340px)] items-center justify-center overflow-hidden rounded-full bg-white sm:max-w-[380px] md:w-2/5 md:max-w-none md:shrink-0"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<div className="relative aspect-[4/5] w-full max-w-[440px]">
						<Image
							src="/images/vikram_vishwakarma.png"
							alt="Vikram portrait"
							fill
							priority
							className="object-cover object-top"
								sizes="(max-width: 640px) 76vw, (max-width: 1024px) 380px, 440px"
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
