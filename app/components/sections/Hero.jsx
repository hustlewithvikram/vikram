/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { Mail } from "@mui/icons-material";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { sendEmail } from "../../../lib/utils";

const Hero = () => {
	const isMobile = useMediaQuery("(max-width:768px)");

	// Animation dictionaries
	const leftShapeVariants = isMobile
		? {
				hidden: { x: "-100%", y: 0, opacity: 0, rotate: 0 },
				show: { x: 0, y: 0, opacity: 1, rotate: 0 },
		  }
		: {
				hidden: { x: "-100%", y: "-100%", opacity: 0, rotate: 35 },
				show: { x: "-50%", y: "-50%", opacity: 1, rotate: 35 },
		  };

	const rightShapeVariants = isMobile
		? {
				hidden: { x: "100%", y: 0, opacity: 0, rotate: 0 },
				show: { x: 0, y: 0, opacity: 1, rotate: 0 },
		  }
		: {
				hidden: { x: "100%", y: "100%", opacity: 0, rotate: 35 },
				show: { x: "50%", y: "50%", opacity: 1, rotate: 35 },
		  };

	return (
		<div className="h-screen w-full relative overflow-hidden">
			{/* Left diagonal shape (top-left) */}
			<motion.div
				variants={leftShapeVariants}
				initial="hidden"
				animate="show"
				transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
				className={`absolute top-0 left-0 bg-blue-200 md:border-[30px] border-blue-50 dark:bg-blue-300
					${
						isMobile
							? "h-[40vh] w-screen rounded-b-full flex justify-center"
							: "md:h-[80vh] md:w-[110vw] rounded-r-full flex md:justify-end items-center"
					}`}
			>
				<Image
					src="/images/vikram.jpg"
					alt="vikram vishwakarma"
					width={400}
					height={400}
					className={`${
						isMobile
							? "size-[180px] mt-8"
							: "md:size-[300px] md:rotate-[-35deg] mr-32"
					} rounded-full`}
				/>
			</motion.div>

			{/* Right diagonal shape (bottom-right) */}
			<motion.div
				variants={rightShapeVariants}
				initial="hidden"
				animate="show"
				transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
				className={`absolute bottom-0 right-0 bg-purple-200 md:border-[30px] md:border-purple-50 dark:bg-purple-300
					${
						isMobile
							? "h-[40vh] pt-8 w-screen rounded-t-full flex justify-center border-none"
							: "md:h-[80vh] md:w-[110vw] rounded-l-full flex md:justify-start justify-end items-center"
					}`}
			>
				<div
					className={`${
						isMobile
							? "text-center mt-4 px-4"
							: "md:rotate-[-35deg] ml-32"
					}`}
				>
					<h1 className="text-4xl md:font-bold font-poppins">
						Vikram Vishwakarma
					</h1>
					<h1 className="text-opacity-65">
						ReactJs & React Native Developer
					</h1>
					<div className="h-3" />
					<motion.button
						onClick={() => {
							sendEmail(
								"Regarding some service",
								"Hey vikram, I wanted to know that ..."
							);
						}}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.8 }}
						className="px-3 py-2 rounded-full flex bg-white md:mx-0 mx-auto"
					>
						<Mail className="mr-2" />
						<span>Let's Work</span>
					</motion.button>
				</div>
			</motion.div>
		</div>
	);
};

export default Hero;
