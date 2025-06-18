"use client";

import { useLayoutEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { FaArrowUp } from "react-icons/fa6";
import { email_url } from "@/app/constants/constants";
import { openUrl } from "@/app/utils/utils";
import HoverButton from "../ui/HoverButton";

const HeroSection = () => {
	const containerRef = useRef(null);
	const scrollRef = useRef(null);
	const [isMobile, setIsMobile] = useState(false);

	useLayoutEffect(() => {
		const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		if (!isMobile && containerRef.current) {
			scrollRef.current = new LocomotiveScroll({
				el: containerRef.current,
				smooth: true,
				inertia: 0.5,
			});
		}

		return () => {
			window.removeEventListener("resize", checkScreenSize);
			scrollRef.current?.destroy();
		};
	}, [isMobile]);

	return (
		<div
			id="home"
			ref={containerRef}
			data-scroll-container
			className="relative dark:bg-[#111] bg-[#f8f8f8] min-h-screen flex flex-col justify-center text-[#aaa] font-['PP Neue Montreal'] px-6 md:px-32"
		>
			{/* Left Absolute Element */}
			<div className="absolute -left-20 top-60 transform -translate-y-1/2 text-sm md:text-lg text-zinc-500 font-semibold rotate-90">
				AI is going to take over the world !
			</div>

			<div className="p-8">
				<h1 className="text-[calc(100vw/15)] md:text-[calc(100vw/25)] font-light text-black bg-red-300 rounded-r-full w-fit pl-2 pr-8">
					You can call me a
				</h1>
				<h1 className="text-[calc(100vw/12)] md:text-[calc(100vw/25)] font-bold dark:text-gray-100 text-black">
					FULL STACK
				</h1>
				<h1 className="text-[calc(100vw/10)] font-bold text-black bg-orange-300 rounded-r-full pl-2">
					DEVELOPER,
				</h1>
				<h1 className="text-[calc(100vw/15)] md:text-[calc(100vw/25)] font-light dark:text-zinc-500 text-black">
					Or whatever you like!
				</h1>
			</div>

			<div className="md:pt-6 pl-8">
				<HoverButton
					onClick={() => openUrl("mailto:" + email_url)}
					text="Know me More"
					icon={<FaArrowUp />}
				/>
			</div>
		</div>
	);
};

export default HeroSection;
