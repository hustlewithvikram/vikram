"use client";

import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";
import { email_url } from "@/app/constants/constants";
import { openUrl } from "@/app/utils/utils";
import HoverButton from "../ui/HoverButton";
import Image from "next/image";
import { FaMailBulk } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { HiMail } from "react-icons/hi";

const cards = [
	{
		title: "Web Designer",
		description:
			"Crafting clean and modern UI designs using Figma and CSS tricks.",
		image: "/images/vikram_l1.webp",
	},
	{
		title: "Frontend Dev",
		description:
			"Building responsive apps using React, Next.js, and Tailwind CSS.",
		image: "/images/vikram_l2.webp",
	},
	{
		title: "Backend Dev",
		description:
			"Creating fast APIs with Node.js, Express, and integrating databases.",
		image: "/images/vikram_l3.webp",
	},
	{
		title: "Python / Java",
		description:
			"Automating tasks and solving problems with Python and Java.",
		image: "/images/vikram_l4.webp",
	},
];

const Hero = () => {
	return (
		<section
			id="home"
			className="relative dark:bg-[#111] bg-[#f8f8f8] min-h-screen flex flex-col justify-center items-center text-[#aaa] font-['PP Neue Montreal'] px-6 md:px-32"
		>
			{/* Carousel Cards - Expandable like Android 16 Wallpaper */}
			<div className="flex md:gap-4 gap-[8px] w-full max-w-6xl overflow-hidden py-5 h-[55vh]">
				{cards.map((card, idx) => (
					<motion.div
						key={idx}
						className="relative flex-1 group hover:flex-[2] transition-all duration-500 ease-in-out overflow-hidden rounded-2xl bg-white dark:bg-zinc-900"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 + idx * 0.1 }}
					>
						<Image
							src={card.image}
							alt={card.title}
							fill
							className="md:object-cover md:object-top absolute inset-0 group-hover:opacity-60 transition-opacity duration-500"
						/>
					</motion.div>
				))}
			</div>

			{/* Name & Contact */}
			<div className="text-center space-y-4 flex flex-col items-center">
				<h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
					Vikram – Web Designer & Full Stack Developer
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
