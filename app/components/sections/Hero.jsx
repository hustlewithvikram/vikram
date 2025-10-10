"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { sendEmail } from "../../../lib/utils";
import {
	ArrowRight,
	ArrowRightAltRounded,
	Download,
	Mail,
} from "@mui/icons-material";
import { ArrowRightToLine } from "lucide-react";

const Hero = () => {
	const fadeUp = {
		hidden: { opacity: 0, y: 20 },
		show: (i = 0) => ({
			opacity: 1,
			y: 0,
			transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
		}),
	};

	const downloadResume = () => {
		// Update the path below with your resume file (e.g. public/resume.pdf)
		const link = document.createElement("a");
		link.href =
			"/documents/Vikram Vishwakarma - React & React Native Resume.pdf";
		link.download = "Vikram Vishwakarma - React & React Native Resume.pdf";
		link.click();
	};

	return (
		<div className="min-h-screen w-full flex items-center justify-center px-6 py-12">
			<div className="max-w-6xl w-full flex flex-col md:flex-row gap-12 md:gap-20 items-center">
				{/* Image Section */}
				<motion.div
					className="relative w-full max-w-[15rem] md:max-w-[26rem] aspect-square overflow-hidden" // aspect-square keeps it square
					initial={{ opacity: 0, scale: 0.6 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						type: "spring",
						stiffness: 100,
						damping: 10,
						bounce: 1,
						duration: 1,
					}}
				>
					<svg
						className="absolute w-full h-full"
						viewBox="0 0 400 400" // set proper viewBox for scaling
						preserveAspectRatio="xMidYMid slice"
					>
						<mask id="mask">
							<motion.g
								initial={{ rotate: 0 }}
								animate={{ rotate: 360 }}
								transition={{
									duration: 30,
									repeat: Infinity,
									ease: "linear",
								}}
							>
								<image
									href="/images/nonagon.svg"
									width="100%"
									height="100%"
								/>
							</motion.g>
						</mask>

						<image
							href="/images/vikram.jpg"
							width="100%"
							height="100%"
							mask="url(#mask)"
							preserveAspectRatio="xMidYMid slice"
						/>
					</svg>
				</motion.div>

				{/* Text Section */}
				<motion.div
					initial="hidden"
					animate="show"
					variants={fadeUp}
					className="space-y-6 text-center md:text-left"
				>
					<motion.h1
						variants={fadeUp}
						custom={0}
						className="text-2xl sm:text-2xl md:text-5xl lg:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white"
					>
						Vikram Vishwakarma
					</motion.h1>

					<motion.h2
						variants={fadeUp}
						custom={1}
						className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light"
					>
						<span className="text-blue-600 dark:text-blue-400 font-normal">
							React
						</span>{" "}
						<span className="font-normal">&</span>{" "}
						<span className="text-indigo-600 dark:text-indigo-400 font-normal">
							React Native
						</span>{" "}
						<span className="font-normal">Developer</span>
					</motion.h2>

					<motion.p
						variants={fadeUp}
						custom={2}
						className="text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs md:max-w-lg mx-auto md:mx-0"
					>
						I craft modern digital products with React ecosystems —
						focused on performance, clarity, and user delight.
					</motion.p>

					<motion.div
						variants={fadeUp}
						custom={3}
						className="flex flex-wrap justify-center md:justify-start gap-2 text-sm text-gray-700 dark:text-gray-300"
					>
						{["React", "React Native", "UI/UX"].map((skill) => (
							<span
								key={skill}
								className="px-3 py-1 rounded-full bg-blue-200 dark:bg-blue-950"
							>
								{skill}
							</span>
						))}
					</motion.div>

					<motion.div className="mt-8 flex items-center md:justify-start justify-center gap-4">
						{/* --- Email Button --- */}
						<motion.button
							variants={fadeUp}
							custom={1}
							whileHover={{ scale: 0.95 }}
							whileTap={{ scale: 0.85 }}
							onClick={() =>
								sendEmail(
									"Potential Collaboration",
									"Hello Vikram, I'd like to discuss a project opportunity..."
								)
							}
							className="flex items-center justify-center bg-blue-300 md:hover:bg-blue-400 text-white rounded-full p-3 transition-all"
						>
							<Mail size={24} />
						</motion.button>

						<motion.button
							variants={fadeUp}
							custom={2}
							whileHover={{ scale: 0.97 }}
							whileTap={{ scale: 0.85 }}
							onClick={downloadResume}
							className="flex items-center gap-2 bg-purple-100 md:hover:bg-purple-200 text-neutral-800 font-medium px-5 py-3 rounded-full transition-all"
						>
							<Download className="w-5 h-5" />
							Download Resume
						</motion.button>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

export default Hero;
