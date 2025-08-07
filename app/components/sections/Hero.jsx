/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiMail } from "react-icons/hi";
import HoverButton from "../ui/HoverButton";
import { openUrl } from "../../utils/utils";
import { GridPattern } from "../../../components/magicui/grid-pattern";
import { cn } from "../../../lib/utils";

const fadeInItem = {
	hidden: { opacity: 0, y: 20 },
	show: (i = 0) => ({
		opacity: 1,
		y: 0,
		transition: { delay: 0.2 + i * 0.15, duration: 0.5 },
	}),
};

export default function Hero() {
	return (
		<main className="h-[calc(100vh-32px)] px-6 md:px-10 py-10 m-4 rounded-4xl bg-[#080808] overflow-hidden">
			<div className="flex flex-col md:flex-row justify-between items-center gap-10 h-full">
				{/* LEFT SECTION */}
				<article className="flex flex-col justify-center items-start text-left max-w-xl w-full space-y-6">
					<GridPattern
						width={80}
						height={80}
						x={-1}
						y={-1}
						className={cn(
							"[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
						)}
					/>
					<motion.h1
						variants={fadeInItem}
						initial="hidden"
						animate="show"
						custom={0}
						className="text-xl md:text-2xl text-gray-100"
					>
						Hi, I'm Vikram
					</motion.h1>

					<motion.div
						variants={fadeInItem}
						initial="hidden"
						animate="show"
						custom={1}
						className="text-xl md:text-5xl text-neutral-300 leading-tight flex flex-col gap-y-6"
					>
						I build clean, performant web experiences with a focus
						on UI details and performance.{" "}
						<motion.h1
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
							className="w-fit text-neutral-300 py-2 text-sm md:text-6xl"
						>
							<span className="text-red-500">Built 5+</span>{" "}
							Projects
						</motion.h1>
					</motion.div>

					<motion.div
						whileHover={{ scale: 1.05 }}
						variants={fadeInItem}
						initial="hidden"
						animate="show"
						custom={2}
					>
						<HoverButton
							text="Reach out"
							icon={<HiMail />}
							onClick={() => openUrl("mailto:vs423502@gmail.com")}
						/>
					</motion.div>
				</article>

				{/* RIGHT SECTION */}
				<aside className="relative md:w-[420px] md:h-[420px] w-[380px] h-[380px] rounded-full overflow-hidden flex-shrink-0 bg-themeColor">
					<motion.div
						variants={fadeInItem}
						initial="hidden"
						animate="show"
						custom={3}
						className="w-full h-full rounded-xl overflow-hidden"
					>
						<Image
							src="/images/vikram_transparent.png"
							alt="Vikram"
							fill
							className="object-cover"
						/>
					</motion.div>
				</aside>
			</div>
		</main>
	);
}
