"use client";

import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";
import { email_url } from "@/app/constants/constants";
import { openUrl } from "@/app/utils/utils";
import HoverButton from "../ui/HoverButton";

const fadeIn = (delay = 0) => ({
	initial: { opacity: 0, y: 40 },
	animate: {
		opacity: 1,
		y: 0,
		transition: { delay, duration: 0.6, ease: "easeOut" },
	},
});

const Hero = () => {
	return (
		<section
			id="home"
			className="relative dark:bg-[#111] bg-[#f8f8f8] min-h-screen flex flex-col justify-center text-[#aaa] font-['PP Neue Montreal'] px-6 md:px-32"
		>
			{/* Left Rotated Text */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.5 }}
				transition={{ delay: 1.4 }}
				className="absolute -left-20 top-1/2 -translate-y-1/2 text-sm md:text-base text-zinc-500 font-semibold rotate-90"
			>
				AI is going to take over the world!
			</motion.div>

			{/* Hero Text */}
			<div className="p-6 md:p-8 max-w-6xl space-y-2">
				<motion.h1
					className="text-[clamp(1.2rem,6vw,4rem)] font-light text-black dark:text-white bg-red-300 rounded-r-full w-fit pl-2 pr-8"
					{...fadeIn(0)}
				>
					You can call me a
				</motion.h1>
				<motion.h1
					className="text-[clamp(2rem,7.5vw,5rem)] font-bold dark:text-gray-100 text-black"
					{...fadeIn(0.1)}
				>
					FULL STACK
				</motion.h1>
				<motion.h1
					className="text-[clamp(2.8rem,9vw,6rem)] font-bold text-black bg-orange-300 rounded-r-full pl-2"
					{...fadeIn(0.2)}
				>
					DEVELOPER,
				</motion.h1>
				<motion.h1
					className="text-[clamp(1.8rem,6vw,4rem)] font-light text-black dark:text-zinc-400"
					{...fadeIn(0.3)}
				>
					Or whatever you like!
				</motion.h1>
			</div>

			{/* Call to Action */}
			<motion.div className="pl-8 md:pl-16 pt-4 md:pt-6" {...fadeIn(0.5)}>
				<HoverButton
					onClick={() => openUrl("mailto:" + email_url)}
					text="Know me More"
					icon={<FaArrowUp />}
				/>
			</motion.div>
		</section>
	);
};

export default Hero;
