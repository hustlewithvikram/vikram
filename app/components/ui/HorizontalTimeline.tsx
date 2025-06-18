import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
	const timelineRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const sections = gsap.utils.toArray(".timeline-item");

			// Timeline scroll effect
			const scrollTween = gsap.to(sections, {
				xPercent: -100 * (sections.length - 1),
				ease: "none",
				scrollTrigger: {
					id: "horizontalScroll",
					trigger: containerRef.current,
					pin: true,
					scrub: 1,
					snap: 1 / (sections.length - 1),
					end: "+=1000", // Reduced scroll distance here
				},
			});

			// Zoom effect
			sections.forEach((section: any) => {
				gsap.fromTo(
					section,
					{ scale: 0.85, opacity: 0.5 },
					{
						scale: 1,
						opacity: 1,
						scrollTrigger: {
							trigger: section,
							containerAnimation: scrollTween,
							start: "left center",
							end: "right center",
							scrub: true,
						},
					}
				);
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<div
			id="portfolio"
			ref={containerRef}
			className="relative w-full h-screen overflow-hidden bg-transparent"
		>
			<div ref={timelineRef} className="flex w-max h-full">
				{events.map((event, index) => (
					<div
						key={index}
						className="timeline-item flex-shrink-0 w-screen h-full flex flex-col items-center justify-center p-10"
					>
						<FaStar className="w-8 h-8 text-black dark:text-white rounded-full mb-4 shadow-md" />
						<div className="text-lg font-bold text-gray-800 dark:text-gray-50">
							{event.date}
						</div>
						<div className="text-md text-gray-700 dark:text-gray-400">
							{event.title}
						</div>
						{event.description && (
							<div className="text-sm text-gray-500 mt-2 text-center max-w-xs">
								{event.description}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default HorizontalTimeline;
