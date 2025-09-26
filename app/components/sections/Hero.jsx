"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { sendEmail } from "../../../lib/utils";
import { ArrowRight, ArrowRightAltRounded } from "@mui/icons-material";
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

	return (
		<div className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-black px-6 py-12">
			<div className="max-w-6xl w-full flex flex-col md:flex-row gap-12 md:gap-20 items-center">
				{/* Image Section */}
				<motion.div
					variants={fadeUp}
					custom={1}
					initial="hidden"
					animate="show"
					className="flex justify-center"
				>
					<div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 overflow-hidden">
						<Image
							src="/images/vikram_nonagon.png"
							alt="Vikram Vishwakarma"
							fill
							className="object-cover "
						/>
					</div>
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
						React & React Native Developer
					</motion.h2>

					<motion.p
						variants={fadeUp}
						custom={2}
						className="text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs mx-auto md:mx-0"
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

					<motion.button
						variants={fadeUp}
						custom={4}
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.98 }}
						onClick={() =>
							sendEmail(
								"Potential Collaboration",
								"Hello Vikram, I'd like to discuss a project opportunity..."
							)
						}
						className="mt-6 inline-flex items-center gap-3 justify-center px-6 py-3 rounded-full bg-purple-300 font-medium mx-auto md:mx-0"
					>
						<span>Start a Project</span>
						<ArrowRightToLine />
					</motion.button>
				</motion.div>
			</div>
		</div>
	);
};

export default Hero;
