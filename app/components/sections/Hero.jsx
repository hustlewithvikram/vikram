/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import HoverButton from "../ui/HoverButton";
import { HiMail } from "react-icons/hi";
import { openUrl } from "../../utils/utils";

const fadeUp = {
	hidden: { opacity: 0, y: 40 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.8, 0.25, 1],
		},
	},
};

const Hero = () => {
	return (
		<section
			id="home"
			className="relative dark:bg-[#111] min-h-screen max-h-screen bg-background flex flex-col items-center justify-end px-4 md:px-12 overflow-hidden"
		>
			{/* 🔠 Big name background text */}
			<h1 className="absolute md:text-[90vw] text-[70vh] font-bold text-red-800 bottom-0 text-center dark:text-black opacity-10 pointer-events-none select-none leading-none">
				VIKRAM
			</h1>

			{/* 👤 Centered personal image and content */}
			<motion.div
				initial="hidden"
				animate="show"
				variants={{
					hidden: {},
					show: {
						transition: {
							staggerChildren: 0.2,
							delayChildren: 0.2,
						},
					},
				}}
				className="flex flex-col items-center text-center z-10"
			>
				<motion.span
					variants={fadeUp}
					className="absolute bottom-6 left-6 md:top-16 md:left-10 font-semibold text-[4vw] md:text-[2vw]"
				>
					<span className="text-red-600 font-fugaz-one">5+</span>{" "}
					<span className="dark:text-gray-300">Projects</span>
				</motion.span>

				<motion.span
					variants={fadeUp}
					className="text-[10vw] md:absolute left-10 top-10"
				>
					<span className="md:absolute left-0 md:text-[6vw] md:top-32 top-6 dark:text-gray-400">
						Hey There,
					</span>
					<br />
					<span className="dark:text-gray-100">I'm </span>
					<span className="font-semibold italic text-[12vw] dark:text-gray-100">
						Vikram
					</span>
				</motion.span>

				<div className="md:absolute left-5 bottom-6 flex flex-col items-center md:items-start gap-y-6">
					<motion.p
						variants={fadeUp}
						className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-xl text-base sm:text-lg mix-blend-difference"
					>
						I’m a full-stack developer and designer who loves
						crafting smooth, interactive digital experiences — from
						frontend to backend.
					</motion.p>

					<motion.div variants={fadeUp} className="md:ml-6">
						<HoverButton
							text="Reach out"
							icon={<HiMail />}
							onClick={() =>
								openUrl(
									"mailto:vs423502@gmail.com?&subject=Regarding%20your%20portfolio%20or%20work."
								)
							}
						/>
					</motion.div>
				</div>

				<div className="size-[20rem] md:size-[30rem] relative bg-transparent">
					<motion.div
						variants={fadeUp}
						className="relative h-full w-full"
					>
						<Image
							src="/images/vikram_transparent.png"
							alt="Vikram's Photo"
							fill
							className="object-cover drop-shadow-[0_0_6rem_black]"
							priority
						/>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
};

export default Hero;
