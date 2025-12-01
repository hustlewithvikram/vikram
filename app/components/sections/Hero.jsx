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
		link.href =
			"/documents/Vikram Vishwakarma - React & React Native Resume.pdf";
		link.download = "Vikram Vishwakarma - React & React Native Resume.pdf";
		link.click();
	};

	return (
		<section className="min-h-screen w-full flex items-center justify-center px-6 py-12 bg-white dark:bg-[#0b0b0e]">
			<div className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
				{/* Left text column */}
				<motion.div
					className="w-full md:w-1/2 relative pl-0 md:pl-8"
					initial="hidden"
					animate="show"
					variants={fadeUp}
				>
					{/* Vertical left marker (role + year) */}
					<div className="hidden md:flex absolute -left-10 top-24 flex-col items-center gap-6">
						<div className="transform -rotate-90 origin-left text-sm text-gray-400 dark:text-gray-500 tracking-wide select-none">
							Fullstack Developer
						</div>
						<div className="h-[120px] border-l border-gray-200 dark:border-gray-800" />
						<div className="transform -rotate-90 origin-left text-sm text-gray-400 dark:text-gray-500 select-none">
							2002
						</div>
					</div>

					{/* Metrics */}
					<motion.div
						variants={fadeUp}
						custom={0}
						className="hidden md:flex gap-8 mb-8 items-center"
					>
						<div className="text-center">
							<div className="text-2xl font-semibold text-gray-900 dark:text-white">
								+20
							</div>
							<div className="text-sm text-gray-500 dark:text-gray-400">
								Projects completed
							</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-semibold text-gray-900 dark:text-white">
								+50
							</div>
							<div className="text-sm text-gray-500 dark:text-gray-400">
								Milestones Achieved
							</div>
						</div>
					</motion.div>

					{/* Headline */}
					<motion.h1
						variants={fadeUp}
						custom={1}
						className="text-[5.5rem] sm:text-[6.5rem] md:text-[7.5rem] leading-[0.88] font-extrabold tracking-tight text-gray-900 dark:text-white"
						style={{ lineHeight: 0.95 }}
					>
						Hello
					</motion.h1>

					<motion.p
						variants={fadeUp}
						custom={2}
						className="mt-3 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl"
					>
						— It's Vikram. I craft modern digital products with
						React ecosystems — focused on performance, clarity, and
						user delight.
					</motion.p>

					<motion.div
						variants={fadeUp}
						custom={3}
						className="mt-8 flex flex-wrap gap-3 items-center"
					>
						<button
							onClick={() =>
								sendEmail(
									"Potential Collaboration",
									"Hello Vikram, I'd like to discuss a project opportunity..."
								)
							}
							className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2 shadow-sm"
						>
							<Mail fontSize="small" />
							Email
						</button>

						<button
							onClick={downloadResume}
							className="flex items-center gap-2 bg-white/80 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white rounded-full px-4 py-2 shadow-sm"
						>
							<Download fontSize="small" />
							Download Resume
						</button>

						<div className="hidden sm:flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
							{["React", "React Native", "UI/UX"].map((s) => (
								<span
									key={s}
									className="px-3 py-1 rounded-full bg-blue-50 dark:bg-white/5 text-xs"
								>
									{s}
								</span>
							))}
						</div>
					</motion.div>
				</motion.div>

				{/* Right image column */}
				<motion.div
					className="w-full md:w-1/3 flex items-center justify-center bg-white pt-16 rounded-full overflow-hidden h-[50vh] md:h-full"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<div className="relative w-[80vw] h-[100vw] max-w-[520px] sm:max-w-[560px] md:w-[500px] md:h-[580px]">
						{/* rotating nonagon mask + image */}
						<Image
							src="/images/vikram_vishwakarma.png"
							alt="Vikram portrait"
							fill
							style={{
								objectFit: "cover",
								objectPosition: "top",
							}}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
