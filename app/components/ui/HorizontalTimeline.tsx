"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

type TimelineEvent = {
	date: string;
	title: string;
	description?: string;
};

interface TimelineProps {
	events: TimelineEvent[];
}

const HorizontalTimeline: React.FC<TimelineProps> = ({ events }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const trackRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		const track = trackRef.current;

		if (!container || !track) return;

		ScrollTrigger.killAll(); // Clean previous triggers

		const totalCards = events.length;

		// Animate the horizontal scroll
		gsap.to(track, {
			x: () => `-${window.innerWidth * (totalCards - 1)}`,
			ease: "none",
			scrollTrigger: {
				trigger: container,
				start: "top top",
				end: () => `+=${window.innerWidth * totalCards * 0.35}`, // faster scroll
				pin: true,
				scrub: 0.2,
				snap: 1 / (totalCards - 1),
				invalidateOnRefresh: true,
			},
		});

		return () => {
			ScrollTrigger.getAll().forEach((t) => t.kill());
		};
	}, [events.length]);

	return (
		<section
			id="portfolio"
			ref={containerRef}
			className="relative w-full h-screen overflow-hidden bg-transparent"
		>
			<div
				ref={trackRef}
				className="flex h-full items-center px-[calc(50vw-50%)]"
				style={{
					width: `${events.length * 100}vw`,
					willChange: "transform",
				}}
			>
				{events.map((event, i) => (
					<motion.div
						key={i}
						className="timeline-item w-screen h-full flex-shrink-0 flex flex-col justify-center items-center px-6"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: i * 0.05 }}
						viewport={{ once: true }}
					>
						<FaStar className="w-8 h-8 text-black dark:text-white mb-4" />
						<h2 className="text-xl font-bold text-gray-800 dark:text-white">
							{event.date}
						</h2>
						<p className="text-md text-gray-700 dark:text-gray-300 font-medium">
							{event.title}
						</p>
						{event.description && (
							<p className="text-sm text-center text-gray-500 mt-2 max-w-xs">
								{event.description}
							</p>
						)}
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default HorizontalTimeline;
