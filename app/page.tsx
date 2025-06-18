"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import About from "./components/sections/About";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import DarkMode from "./components/ui/DarkMode";
import SkillGrid from "./components/ui/SkillGrid";

import FloatNavBar from "./components/ui/FloatNavBar";
import HorizontalTimeline from "./components/ui/HorizontalTimeline";
import ScrollToTop from "./components/ui/ScrollToTop";

const sampleEvents = [
	{ date: "Jan 2021", title: "Started Learning Web Development" },
	{
		date: "Jun 2021",
		title: "Built My First Website",
		description:
			"Created a portfolio site using HTML, CSS, and basic JavaScript.",
	},
	{
		date: "Dec 2021",
		title: "Learned React & Tailwind",
		description:
			"Dived deep into modern front-end development and component-based design.",
	},
	{
		date: "May 2022",
		title: "Landed Freelance Projects",
		description:
			"Started taking on real-world work, building sites and apps for clients.",
	},
	{
		date: "Nov 2023",
		title: "Built Fullstack Projects",
		description:
			"Integrated backend with Next.js and databases to create dynamic applications.",
	},
];

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
			<HorizontalTimeline events={sampleEvents} />
			<Projects />
			<SkillGrid />

			{/* Float bar */}
			<FloatNavBar />

			{/* Footer */}
			<Footer />
		</div>
	);
}
