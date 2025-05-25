import React from "react";
import { HiHome } from "react-icons/hi";
import { FaUser, FaBriefcase, FaEnvelope, FaFileAlt } from "react-icons/fa";

const FloatBar: React.FC = () => {
	// Function to scroll to a section
	const scrollToSection = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<nav className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-50 dark:bg-[#111] dark:border-white border-2 dark:border-none text-black dark:text-white p-2 rounded-full flex gap-6 shadow-lg">
			{/* Home */}
			<button
				onClick={() => scrollToSection("home")}
				className="flex items-center gap-x-2 px-3 py-2 rounded-full transition-colors duration-200 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
			>
				<HiHome />
				<span className="hidden md:inline">Home</span>
			</button>

			{/* About */}
			<button
				onClick={() => scrollToSection("about")}
				className="flex items-center gap-x-2 px-3 py-2 rounded-full transition-colors duration-200 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
			>
				<FaUser />
				<span className="hidden md:inline">About</span>
			</button>

			{/* Portfolio */}
			<button
				onClick={() => scrollToSection("portfolio")}
				className="flex items-center gap-x-2 px-3 py-2 rounded-full transition-colors duration-200 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
			>
				<FaBriefcase />
				<span className="hidden md:inline">Portfolio</span>
			</button>

			{/* Resume */}
			{/* <button
				onClick={() => scrollToSection("resume")}
				className="flex items-center gap-x-2 px-3 py-2 rounded-full transition-colors duration-200 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
			>
				<FaFileAlt />
				<span className="hidden md:inline">Resume</span>
			</button> */}

			{/* Contact */}
			<button
				onClick={() => scrollToSection("contact")}
				className="flex items-center gap-x-2 px-3 py-2 rounded-full transition-colors duration-200 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
			>
				<FaEnvelope />
				<span className="hidden md:inline">Contact</span>
			</button>
		</nav>
	);
};

export default FloatBar;
