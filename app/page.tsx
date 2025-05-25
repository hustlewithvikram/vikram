"use client";

import { useState, useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "./components/sections/HeroSection";
import SkillGrid from "./components/ui/SkillGrid";
import ProjectsSection from "./components/sections/ProjectsSection";
import AchievementSection from "./components/sections/AchievementSection";
import AboutSection from "./components/sections/AboutSection";
import DarkMode from "./components/ui/DarkMode";
import SocialButton from "./components/ui/SocialButton";
import { openUrl } from "./utils/utils";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import ScrollToTop from "./components/ui/ScrollToTop";
import FloatBar from "./components/ui/FloatBar";
import HorizontalTimeline from "./components/ui/HorizontalTimeline";

const github_url = "https://github.com/vikramisdev/";
const email_url = "vs423502@gmail.com";
const mobile_number = "+918805469136";

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
			<HeroSection />
			<AboutSection />
			<HorizontalTimeline events={sampleEvents} />
			<ProjectsSection />
			<SkillGrid />

			{/* Float bar */}
			<FloatBar />

			{/* Footer */}
			<footer
				id="contact"
				className="md:px-24 md:py-32 px-6 py-12 bg-black text-white"
			>
				<h2 className="text-2xl font-semibold">Contact Me</h2>
				<div className="mt-10">
					<p>
						<strong>Mobile:</strong> {mobile_number}
					</p>
					<p>
						<strong>Email:</strong> {email_url}
					</p>
				</div>
				<div className="flex md:gap-x-5 mt-5">
					<SocialButton
						onClick={() =>
							openUrl("https://instagram.com/vikramisdev")
						}
						text="Instagram"
						icon={<FaInstagram className="text-white text-3xl" />}
					/>
					<SocialButton
						onClick={() =>
							openUrl("https://facebook.com/vikramisdev")
						}
						text="Facebook"
						icon={<FaFacebook className="text-white text-3xl" />}
					/>
					<SocialButton
						onClick={() => openUrl("https://x.com/vikramisdev")}
						text="Twitter"
						icon={<FaTwitter className="text-white text-3xl" />}
					/>
					<SocialButton
						onClick={() => openUrl(github_url)}
						text="Github"
						icon={<FaGithub className="text-white text-3xl" />}
					/>
				</div>
			</footer>
		</div>
	);
}
