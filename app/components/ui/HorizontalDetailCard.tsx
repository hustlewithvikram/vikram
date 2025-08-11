"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { FaRocket } from "react-icons/fa";

type HorizontalDetailCardProps = {
	title: string;
	description: string;
	icon?: ReactNode;
};

const slideUpVariants = {
	initial: { y: 150 },
	hover: { y: 0 },
};

const HorizontalDetailCard = ({
	title,
	description,
	icon = <FaRocket size={28} />,
}: HorizontalDetailCardProps) => {
	return (
		<motion.div
			initial="initial"
			whileHover="hover"
			transition={{ duration: 0.3 }}
			className="relative w-full hover:cursor-pointer h-auto overflow-hidden group border-b border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-6 py-5 rounded-4xl shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1"
		>
			{/* Text Content */}
			<div className="relative z-10 flex flex-col justify-center h-full gap-2">
				<h2 className="z-30 font-poppins text-2xl md:text-6xl font-semibold text-neutral-600 dark:text-gray-300 tracking-tight transition-colors group-hover:text-orange-400 dark:group-hover:text-orange-400">
					{title}
				</h2>
				<p className="text-base text-neutral-600 z-40 dark:text-zinc-400 max-w-[90%] leading-relaxed">
					{description}
				</p>
			</div>

			{/* Icon */}
			<div className="absolute top-5 right-6 z-10 md:text-orange-500 opacity-20 md:opacity-70 group-hover:opacity-60 transition-opacity duration-300">
				<div className="absolute inset-0 rounded-full bg-orange-200/20 dark:bg-orange-500/10 blur-lg -z-10"></div>
				{icon}
			</div>

			{/* Slide-Up Effect Background */}
			<motion.div
				variants={slideUpVariants}
				transition={{ duration: 0.4, ease: "easeInOut" }}
				className="absolute bottom-0 left-0 w-full h-full bg-orange-100 dark:bg-orange-300 opacity-0 group-hover:opacity-20 backdrop-blur-sm transition-opacity duration-300 z-0"
			/>
		</motion.div>
	);
};

export default HorizontalDetailCard;
