"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiMail } from "react-icons/hi";
import { email_url } from "@/app/constants/constants";
import { openUrl } from "@/app/utils/utils";
import HoverButton from "../ui/HoverButton";
import Image from "next/image";

// Card data
const cards = [
	{
		title: "Web Designer",
		description:
			"Crafting clean and modern UI designs using Figma and CSS tricks.",
		image: "/images/slide1.gif",
	},
	{
		title: "Frontend Dev",
		description:
			"Building responsive apps using React, Next.js, and Tailwind CSS.",
		image: "/images/slide2.gif",
	},
	{
		title: "Backend Dev",
		description:
			"Creating fast APIs with Node.js, Express, and integrating databases.",
		image: "/images/slide3.gif",
	},
	{
		title: "Python / Java",
		description:
			"Automating tasks and solving problems with Python and Java.",
		image: "/images/slide4.gif",
	},
];

// Animation variants for stagger
const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 40 },
	show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

const Hero = () => {
	const [hoveredIndex, setHoveredIndex] = useState(null);

	return (
		<section
			id="home"
			className="relative dark:bg-[#111] bg-[#fdfaf1] min-h-screen flex flex-col justify-center items-center text-[#aaa] font-['PP Neue Montreal'] px-6 md:px-32"
		>
			{/* Carousel Cards */}
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="show"
				className="flex md:gap-4 gap-[8px] w-full max-w-6xl overflow-hidden py-5 h-[55vh]"
			>
				{cards.map((card, idx) => (
					<motion.div
						key={idx}
						variants={cardVariants}
						onMouseEnter={() => setHoveredIndex(idx)}
						onMouseLeave={() => setHoveredIndex(null)}
						className="relative flex-1 group hover:flex-[2] transition-all duration-500 ease-in-out overflow-hidden rounded-2xl bg-white dark:bg-zinc-900"
						animate={{
							opacity:
								hoveredIndex === null
									? 1
									: hoveredIndex === idx
									? 1
									: 0.1,
						}}
					>
						<Image
							src={card.image}
							alt={card.title}
							fill
							unoptimized
							className="object-cover md:object-top absolute inset-0 transition-opacity duration-500"
						/>
					</motion.div>
				))}
			</motion.div>

			{/* Name & Contact */}
			<div className="text-center space-y-4 flex flex-col items-center">
				<h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white font-princess">
					Web Designer & Developer
				</h2>
				<p className="text-zinc-600 dark:text-zinc-400">
					Turning ideas into beautiful, functional web experiences
				</p>
				<HoverButton
					onClick={() => openUrl("mailto:" + email_url)}
					text="Reach Me Out"
					icon={<HiMail />}
				/>
			</div>
		</section>
	);
};

export default Hero;
