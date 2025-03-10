/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import Project from "./components/ui/Project";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialButton from "./components/ui/SocialButton";
import IntroAnimation from "./components/ui/ScreenReveal";
import LocomotiveScroll from "locomotive-scroll";
import Skill from "./components/ui/Skill";
import AboutSection from "./components/sections/AboutSection";
import AchievementSection from "./components/sections/AchievementSection";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "@/app/components/sections/SkillsSection";
import { openUrl } from "./utils/utils";
import ScreenReveal from "./components/ui/ScreenReveal";
import DarkMode from "./components/ui/DarkMode";
import ScrollToTop from "./components/ui/ScrollToTop";
import SkillGrid from "./components/ui/SkillGrid";
import LoadingStartup from "./components/ui/LoadingStartup";
import { Progress } from "../components/ui/progress";

const github_url = "https://github.com/vikramisdev/";
const email_url = "vs423502@gmail.com";
const mobile_number = "+918805469136";

export default function Home() {
  const [animationEnded, setAnimationEnded] = useState(false);

  useEffect(() => {
    animationEnded
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");

    new LocomotiveScroll({
      lenisOptions: {
        wrapper: window,
        content: document.documentElement,
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

    AOS.init();
  }, []);

  return (
		<div className="bg-background dark:bg-[#111] transition-all md:duration-700 scroll-smooth">
			<DarkMode />
			<ScrollToTop />

			{/* Hero Section */}
			<HeroSection />
			{/* About Section */}
			<AboutSection />
			{/* Achievements Section */}
			<AchievementSection />
			{/* Projects Section */}
			<ProjectsSection />
			{/* Skills Section */}
			<SkillGrid />

			<footer className="md:px-24 md:py-32 px-6 py-12 bg-black text-white">
				<h2 className="text-2xl font-semibold">Contact Me</h2>
				<div className="mt-10">
					<p>
						<strong>Mobile:</strong> {mobile_number}
					</p>
					<p>
						<strong>Email:</strong> {email_url}
					</p>
				</div>
				<div className="grid grid-cols-2 gap-5 md:flex md:gap-x-5 mt-5">
					<SocialButton
						onClick={() =>
							openUrl("https://instagram.com/vikramisdev")
						}
						text="Instagram"
						iconName="bi bi-instagram"
					/>
					<SocialButton
						onClick={() =>
							openUrl("https://facebook.com/vikramisdev")
						}
						text="Facebook"
						iconName="bi bi-facebook"
					/>
					<SocialButton
						onClick={() => openUrl("https://x.com/vikramisdev")}
						text="Twitter"
						iconName="bi bi-twitter"
					/>
					<SocialButton
						onClick={() => openUrl(github_url)}
						text="Github"
						iconName="bi bi-github"
					/>
				</div>
			</footer>
		</div>
  );
}
