import React, { useCallback } from "react";
import { motion } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

type SocialLinks = {
	github?: string;
	linkedin?: string;
	email?: string;
};

type Project = {
	title: string;
	description: string;
	onClick?: () => void;
};

type VikramAppProps = {
	windowId: string;
	name?: string;
	title?: string;
	bio?: string[];
	avatarUrl?: string;
	location?: string;
	resumeHref?: string;
	skills?: string[];
	socials?: SocialLinks;
	projects?: Project[];
};

export function VikramApp({
	windowId,
	name = "Vikram Vishwakarma",
	title = "Full-Stack Developer",
	bio = [
		"Welcome to my portfolio — built with React + Next.js.",
		"I design and implement web apps, focus on UX, animations and maintainable code.",
	],
	avatarUrl,
	location = "India",
	resumeHref = "/resume.pdf",
	skills = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"],
	socials = {},
	projects = [
		{
			title: "Portfolio Launcher",
			description: "Window system, taskbar & animations.",
		},
		{
			title: "3D Showcase",
			description:
				"WebGL-powered product previews and micro-interactions.",
		},
	],
}: VikramAppProps) {
	const handleEmailClick = useCallback(
		(e: React.MouseEvent) => {
			e.stopPropagation();
			if (socials.email) {
				window.location.href = `mailto:${socials.email}`;
			}
		},
		[socials.email]
	);

	const handleResumeDownload = useCallback((e: React.MouseEvent) => {
		e.stopPropagation();
		// Analytics or tracking could be added here
	}, []);

	const handleSocialClick = useCallback(
		(e: React.MouseEvent, platform: string) => {
			e.stopPropagation();
			// Analytics or tracking could be added here
			console.log(`Social link clicked: ${platform}`);
		},
		[]
	);

	const handleProjectClick = useCallback(
		(project: Project, index: number) => {
			if (project.onClick) {
				project.onClick();
			} else {
				// Default project click behavior
				console.log(
					`Project clicked: ${project.title} at index ${index}`
				);
			}
		},
		[]
	);

	const getInitials = useCallback((fullName: string) => {
		return fullName
			.split(" ")
			.map((n) => n[0])
			.slice(0, 2)
			.join("")
			.toUpperCase();
	}, []);

	return (
		<motion.section
			id={windowId}
			initial={{ opacity: 0, y: 6 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 6 }}
			transition={{ duration: 0.18, ease: "easeOut" }}
			className="h-full w-full bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 rounded-md overflow-auto focus:outline-none scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-600"
			aria-labelledby={`${windowId}-title`}
			role="main"
			tabIndex={-1}
		>
			<div className="p-4 sm:p-6 max-w-4xl mx-auto">
				{/* Header Section */}
				<header className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
					<div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 flex-shrink-0 shadow-sm">
						{avatarUrl ? (
							<img
								src={avatarUrl}
								alt={`${name} avatar`}
								className="h-full w-full object-cover"
								loading="lazy"
								decoding="async"
							/>
						) : (
							<div className="h-full w-full flex items-center justify-center text-lg sm:text-xl font-bold bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 text-blue-600 dark:text-blue-400">
								{getInitials(name)}
							</div>
						)}
					</div>

					<div className="flex-1 min-w-0 space-y-2">
						<h1
							id={`${windowId}-title`}
							className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight tracking-tight"
						>
							{name}
						</h1>
						<p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 flex flex-wrap items-center gap-1">
							<span>{title}</span>
							<span className="text-zinc-400 mx-1">•</span>
							<span className="flex items-center gap-1">
								<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
								{location}
							</span>
						</p>

						{/* Action Buttons */}
						<div className="flex flex-wrap gap-2 items-center pt-1">
							<a
								href={resumeHref}
								download
								onClick={handleResumeDownload}
								className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 bg-[#0067C0] text-white hover:bg-[#0055a3] focus:ring-2 focus:ring-[#0067C0] focus:ring-offset-2 transition-colors duration-200 shadow-sm disabled:opacity-60 font-medium"
								aria-label="Download resume"
							>
								<DownloadIcon fontSize="small" />
								<span className="text-sm">Resume</span>
							</a>

							<button
								onClick={handleEmailClick}
								disabled={!socials.email}
								className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 transition-colors duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed font-medium"
								aria-label={
									socials.email
										? "Contact via email"
										: "Email not available"
								}
							>
								<MailOutlineIcon fontSize="small" />
								<span className="text-sm">Contact</span>
							</button>

							<div className="flex items-center gap-1 ml-auto">
								{socials.github && (
									<a
										href={socials.github}
										target="_blank"
										rel="noopener noreferrer"
										onClick={(e) =>
											handleSocialClick(e, "github")
										}
										aria-label="GitHub profile"
										className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200 focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
									>
										<GitHubIcon fontSize="small" />
									</a>
								)}
								{socials.linkedin && (
									<a
										href={socials.linkedin}
										target="_blank"
										rel="noopener noreferrer"
										onClick={(e) =>
											handleSocialClick(e, "linkedin")
										}
										aria-label="LinkedIn profile"
										className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200 focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
									>
										<LinkedInIcon fontSize="small" />
									</a>
								)}
							</div>
						</div>
					</div>
				</header>

				<hr className="my-5 border-zinc-200 dark:border-zinc-800" />

				{/* Main Content */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* Bio & Projects */}
					<div className="md:col-span-2 space-y-6">
						<div className="space-y-3">
							{bio.map((paragraph, index) => (
								<motion.p
									key={index}
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: index * 0.1 }}
									className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300"
								>
									{paragraph}
								</motion.p>
							))}
						</div>

						<section>
							<h2 className="text-sm font-semibold mb-3 text-zinc-900 dark:text-zinc-100">
								Featured Projects
							</h2>
							<div className="grid gap-3 sm:grid-cols-2">
								{projects.map((project, index) => (
									<motion.article
										key={project.title}
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1 }}
										onClick={() =>
											handleProjectClick(project, index)
										}
										onKeyDown={(e) => {
											if (
												e.key === "Enter" ||
												e.key === " "
											) {
												e.preventDefault();
												handleProjectClick(
													project,
													index
												);
											}
										}}
										className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:shadow-md hover:scale-[1.02] active:scale-[1.01] transition-all duration-200 cursor-pointer bg-white dark:bg-zinc-800/50 group"
										role="button"
										tabIndex={0}
										aria-label={`Open ${project.title} project`}
									>
										<h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-[#0067C0] dark:group-hover:text-blue-400 transition-colors">
											{project.title}
										</h3>
										<p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
											{project.description}
										</p>
									</motion.article>
								))}
							</div>
						</section>
					</div>

					{/* Skills Sidebar */}
					<aside className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-4 bg-white dark:bg-zinc-800/50 shadow-sm">
						<h2 className="text-sm font-semibold mb-3 text-zinc-900 dark:text-zinc-100">
							Skills & Technologies
						</h2>
						<div className="flex flex-wrap gap-2">
							{skills.map((skill, index) => (
								<motion.span
									key={skill}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: index * 0.05 }}
									className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-600 transition-colors duration-150"
								>
									{skill}
								</motion.span>
							))}
						</div>

						<div className="mt-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30">
							<p className="text-xs text-blue-700 dark:text-blue-300">
								<strong className="font-semibold">
									Open to:
								</strong>{" "}
								Full-time, Contract, Freelance
							</p>
						</div>
					</aside>
				</div>

				{/* Footer */}
				<footer className="mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-800">
					<p className="text-xs text-zinc-500 dark:text-zinc-400 text-center">
						Built with ❤️ — keep iterating, ship small, learn fast.
					</p>
				</footer>
			</div>
		</motion.section>
	);
}
