"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface HoverButtonProps {
	text: string;
	icon?: ReactNode;
	onClick?: () => void;
	className?: string;
}

export default function HoverButton({
	text,
	icon,
	onClick,
	className = "",
}: HoverButtonProps) {
	return (
		<motion.button
			onClick={onClick}
			whileHover="hover"
			initial="rest"
			animate="rest"
			className={clsx(
				"relative group overflow-hidden group px-2 py-2 h-12 w-40 rounded-full text-neutral-100 dark:text-white bg-black dark:bg-neutral-900 font-semibold flex items-center gap-3",
				className
			)}
		>
			{/* Static Content */}
			<span className="relative flex items-center gap-2">
				{icon && (
					<div className="relative w-10 h-10">
						{/* Static Icon (Always Visible) */}
						<span className="absolute inset-0 z-10 text-7xl transition-all flex items-center justify-center text-lg bg-white text-black p-2 rounded-full">
							{icon}
						</span>

						{/* Animated Hover Overlay */}
						<div className="absolute inset-0 flex items-center justify-center text-lg bg-white text-white p-2 rounded-full scale-0 group-hover:scale-[8] transition-transform duration-500 ease-in-out"></div>
					</div>
				)}

				{/* Text */}
				<span className="px-2 group-hover:text-black z-10">{text}</span>
			</span>
		</motion.button>
	);
}
