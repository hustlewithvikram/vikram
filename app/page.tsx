"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import DarkMode from "./components/ui/DarkMode";
import SkillGrid from "./components/ui/SkillGrid";
import Footer from "@/app/components/sections/Footer";

import FloatNavBar from "./components/ui/FloatNavBar";
import Skills from "./components/sections/Skills";
import ScrollToTop from "./components/ui/ScrollToTop";
import Timeline from "./components/sections/Timeline";

export default function Home() {
	const [isMobile, setIsMobile] = useState(false);
	const scrollRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		// Check screen size
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

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

		AOS.init();

		// Cleanup function
		return () => {
			locoScroll?.destroy();
			window.removeEventListener("resize", checkScreenSize);
		};
	}, [isMobile]);

	return (
		<div
			data-scroll-container
			ref={scrollRef}
			className={`bg-background dark:bg-[#111] transition-all md:duration-700 ${
				isMobile ? "scroll-smooth" : ""
			}`}
		>
			{/* absolute components */}
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
