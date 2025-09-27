"use client";

import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LocomotiveScroll from "locomotive-scroll";

// Sections & UI components
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Timeline from "./components/sections/Timeline";
import Footer from "@/app/components/sections/Footer";
import DarkMode from "./components/ui/DarkMode";
import ScrollToTop from "./components/ui/ScrollToTop";

export default function Home() {
	const [isMobile, setIsMobile] = useState(false);
	const scrollRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768);

		handleResize();
		window.addEventListener("resize", handleResize);

		let locoScroll: LocomotiveScroll | null = null;

		// Initialize Locomotive Scroll only if not mobile
		if (!isMobile && scrollRef.current) {
			locoScroll = new LocomotiveScroll({
				lenisOptions: {
					lerp: 0.1,
					duration: 1.2,
					orientation: "vertical",
					gestureOrientation: "vertical",
					smoothWheel: true,
					wheelMultiplier: 1,
					touchMultiplier: 2,
					easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
				},
			});
		}

		AOS.init({ once: true, duration: 800 });

		return () => {
			locoScroll?.destroy();
			window.removeEventListener("resize", handleResize);
		};
	}, [isMobile]);

	return (
		<div
			data-scroll-container
			ref={scrollRef}
			className={`bg-white dark:bg-[#0b0b0b] transition-colors duration-700 ${
				isMobile ? "scroll-smooth" : ""
			}`}
		>
			{/* UI Components */}
			<DarkMode />
			<ScrollToTop />

			{/* Sections */}
			<Hero />
			<About />
			<Timeline />
			<Projects />
			<Skills />

			{/* Footer */}
			<Footer />
		</div>
	);
}
