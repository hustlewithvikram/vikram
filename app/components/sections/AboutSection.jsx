import React, { useEffect, useRef, useState } from "react";
import HyperText from "@/components/ui/hyper-text";
import { Lens } from "../../../components/ui/lens";
import { useIsMobile } from "../../utils/utils";

const AboutSection = () => {
	const isMobile = useIsMobile();

	return (
		<div className="dark:bg-[#111] bg-[#f8f8f8] py-12 md:px-32 px-12 h-screen duration-1000 text-gray-300 flex md:flex-row md:items-center md:gap-x-28 flex-col gap-y-12 items-center relative">
			<img
				src="/images/vikram.jpg"
				alt="line"
				data-aos={isMobile ? "fade-up" : "fade-right"}
				data-aos-duration="2000"
				width={500}
				height={500}
				className="rounded-full grayscale contrast-100 outline-dashed outline-offset-[30px] size-48 md:size-[500px]"
			/>
			<section
				data-aos={isMobile ? "fade-up" : "fade-left"}
				data-aos-duration="2000"
				className="flex-1"
			>
				<h1 className="text-3xl font-semibold text-black dark:text-inherit w-fit mb-2 uppercase">
					Introduction ?!
				</h1>
				<p className="text-xl text-justify md:text-2xl text-black dark:text-inherit">
					Hey There, My name is Vikram Vishwakarma and I belong from
					Maharashtra, India. I have recently completed my degree in
					the field of computer science, I like to design and build
					websites that are responsive and beautiful. I use softwares
					like figma & adobe illustrator to design & for the building
					part I use various web frameworks to build my website. I
					always try to make the websites clean, minimal, responsive &
					user friendly with smooth animations and transitions.
				</p>
			</section>
		</div>
	);
};

export default AboutSection;
