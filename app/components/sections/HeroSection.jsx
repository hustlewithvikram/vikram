"use client";
import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { email_url } from "@/app/constants/constants";
import { openUrl } from "@/app/utils/utils";
import HoverButton from "../ui/HoverButton";
import { FaArrowUp, FaGgCircle } from "react-icons/fa6";
import { useScrollProgress } from "../../../hooks/useScrollProgress";

const HeroSection = () => {
	const containerRef = useRef(null);
	const scrollProgress = useScrollProgress();
	const [isMobile, setIsMobile] = useState(false);
	const scrollRef = useRef(null);

	useEffect(() => {
		// Check if the screen width is small (mobile devices)
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
		};

		checkScreenSize(); // Run once
		window.addEventListener("resize", checkScreenSize); // Listen for screen resize

		// Initialize Locomotive Scroll only if NOT mobile
		if (!isMobile) {
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
			ref={containerRef}
			data-scroll-container
			className={`dark:bg-[#111] bg-[#f8f8f8] h-screen flex text-[#aaa] font-bebas ${
				isMobile ? "overflow-auto" : "transition-all duration-1000"
			}`}
		>
			{/* Left Section */}
			{!isMobile && (
				<section
					className={`fixed top-0 flex items-center pl-24 gap-x-16 bg-transparent rotate-90 left-20 origin-top-left w-[100vh] h-20 transition-opacity duration-700 ${
						scrollProgress < 1.5 ? "opacity-100" : "opacity-0"
					}`}
				>
					<div className="dark:bg-[#aaa] bg-black w-[3px] h-[100px] rotate-90 z-40"></div>
					<div className="font-roboto w-60 dark:text-[#aaa] text-black flex items-center gap-x-4">
						<h1>UI/UX Designer &</h1>
					</div>
					<div className="bg-red-600 w-[3px] h-[320px] rotate-90 z-40"></div>
				</section>
			)}

			{/* Middle Section */}
			<section className="flex-1 flex flex-col justify-end md:justify-center md:px-32">
				<div className={`${!isMobile && "pl-16"} px-5 md:pl-0`}>
					<h1
						data-aos="flip-up"
						data-aos-duration="1000"
						className="md:text-[14rem] dark:text-gray-50 text-6xl text-black flex items-center tracking-[0.5rem]"
					>
						FRONTEND
					</h1>
					<h1
						data-aos="flip-up"
						data-aos-duration="1000"
						className="md:text-[14rem] text-6xl dark:text-zinc-500 text-black flex items-center tracking-[0.5rem]"
					>
						DEVELOPER
					</h1>
				</div>

				<div className={`${!isMobile && "pl-16"} px-5 md:pl-0 pb-3`}>
					<div className="flex items-center gap-x-2 py-4 md:py-4">
						<FaGgCircle className="size-8 md:hover:rotate-45 transition-all text-black dark:text-gray-200" />
						<h1 className="font-sans md:text-xl dark:opacity-55 text-neutral-900 dark:text-neutral-100">
							It&rsquo;s Vikram Vishwakarma, a design Enthusiast.
						</h1>
					</div>
					<HoverButton
						onClick={() => openUrl("mailto:" + email_url)}
						text="Get in touch"
						icon={<FaArrowUp />}
					/>
				</div>
			</section>
		</div>
	);
};

export default HeroSection;
