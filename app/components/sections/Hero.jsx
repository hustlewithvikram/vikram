/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiMail } from "react-icons/hi";
import HoverButton from "../ui/HoverButton";
import { openUrl } from "../../utils/utils";
import { GridPattern } from "../../../components/magicui/grid-pattern";
import { cn } from "../../../lib/utils";
import DownloadResume from "../ui/DownloadResume";

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
		<main
			className="h-[calc(100vh-32px)] px-6 md:px-10 py-10 m-4 rounded-[2rem] bg-[#080808] overflow-hidden inverted-radius"
			role="main"
		>
			<div className="flex flex-col md:flex-row justify-between items-center gap-10 h-full">
				{/* LEFT SECTION */}
				<article className="flex flex-col justify-center items-start text-left max-w-2xl w-full space-y-6">
					<GridPattern
						width={80}
						height={80}
						x={-1}
						y={-1}
						className={cn(
							"[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
						)}
						aria-hidden="true"
						role="presentation"
					/>

					<motion.h1
						variants={fadeInItem}
						initial="hidden"
						animate="show"
						custom={0}
						className="text-xl md:text-2xl text-gray-100 font-normal"
					>
						Hi, I'm Vikram
					</motion.h1>

					<motion.p
						variants={fadeInItem}
						initial="hidden"
						animate="show"
						custom={1}
						className="text-xl md:text-5xl text-neutral-300 leading-tight flex flex-col gap-y-6"
					>
						Junior Flutter Developer
						<motion.span
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
							className="w-fit text-neutral-300 py-2 text-sm md:text-6xl"
						>
							<span className="text-red-500 font-bold">
								Built 5+
							</span>{" "}
							Projects
						</motion.span>
					</motion.p>

					{/* BUTTONS */}
					<motion.div
						variants={fadeInItem}
						initial="hidden"
						animate="show"
						custom={2}
						className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
					>
						<HoverButton
							text="Reach out"
							icon={<HiMail />}
							onClick={() => openUrl("mailto:vs423502@gmail.com")}
							aria-label="Reach out via email"
						/>
						<DownloadResume />
					</motion.div>
				</article>

				{/* RIGHT SECTION */}
				<aside className="relative md:w-[420px] md:h-[420px] w-screen h-[380px] rounded-t-full md:rounded-full overflow-hidden flex-shrink-0 bg-themeColor">
					<motion.div
						variants={fadeInItem}
						initial="hidden"
						animate="show"
						custom={3}
						className="w-full h-full rounded-full overflow-hidden"
					>
						<Image
							src="/images/vikram_transparent.png"
							alt="Portrait of Vikram"
							fill
							className="object-cover"
							priority
						/>
					</motion.div>
				</aside>
			</div>
		</main>
	);
}
