"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HoverButton from "../ui/HoverButton";
import { HiMail } from "react-icons/hi";
import SpeedDribbleButton from "../ui/HoverButton";
import { FaRocket } from "react-icons/fa6";
import CTAButton from "../ui/HoverButton";
import SpeedButton from "../ui/HoverButton";
import SpeedButtonGoo from "../ui/HoverButton";
import { openUrl } from "../../utils/utils";

// Card data
const cards = [
	{ title: "Web", image: "/images/slide1.gif" },
	{ title: "Designer", image: "/images/slide2.gif" },
	{ title: "&", image: "/images/slide3.gif" },
	{ title: "Developer", image: "/images/slide4.gif" },
];

const Hero = () => {
	const [hoveredIndex, setHoveredIndex] = useState(0);

	return (
		<section
			id="home"
			className="dark:bg-[#111] bg-background min-h-screen flex flex-col items-center justify-center px-4 md:px-12 py-16"
		>
			{/* Card layout */}
			<div className="flex flex-col md:flex-row w-full max-w-7xl gap-4 h-[90vh] md:h-[65vh]">
				{cards.map((card, idx) => {
					const isHovered = hoveredIndex === idx;
					const isAnyHovered = hoveredIndex !== null;

					return (
						<motion.div
							key={idx}
							layout
							initial={{ opacity: 0, y: 30 }}
							animate={{
								opacity: isAnyHovered && !isHovered ? 0.3 : 1,
								y: 0,
							}}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.4, ease: "easeInOut" }}
							onMouseEnter={() => setHoveredIndex(idx)}
							onMouseLeave={() => setHoveredIndex(null)}
							className="relative flex-1 overflow-hidden rounded-2xl cursor-pointer"
							style={{
								flex: isHovered ? 6 : isAnyHovered ? 1 : 1,
								transition: "flex 0.6s ease-in-out",
							}}
						>
							<Image
								src={card.image}
								alt={card.title}
								fill
								unoptimized
								className="object-cover object-center"
							/>
							{isHovered && (
								<div className="absolute inset-0 bg-black/30 backdrop-blur-sm text-white flex justify-center md:justify-start items-center text-5xl md:text-[12rem] font-semibold">
									{card.title}
								</div>
							)}
						</motion.div>
					);
				})}
			</div>

			{/* Slogan and button below the cards */}
			<div className="text-center flex flex-col items-center max-w-3xl mt-10 px-4 space-y-5">
				<p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
					I turn ideas into experiences — beautiful websites, powerful
					backend systems, and pixel-perfect designs.
				</p>
				<HoverButton
					text="Reach out"
					icon={<HiMail />}
					onClick={() =>
						openUrl(
							"mailto:vs423502@gmail.com?&subject=Regarding%20your%20portfolio%20or%20work."
						)
					}
				/>
			</div>
		</section>
	);
};

export default Hero;
