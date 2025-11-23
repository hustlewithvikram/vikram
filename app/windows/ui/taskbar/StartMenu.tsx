import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { AppMeta } from "./types";
import { useState, useEffect, useRef } from "react";

interface StartMenuProps {
	isOpen: boolean;
	onClose: () => void;
	pinnedApps: AppMeta[];
	runningApps: AppMeta[];
	onAppClick: (id: string) => void;
}

export function StartMenu({
	isOpen,
	onClose,
	pinnedApps,
	runningApps,
	onAppClick,
}: StartMenuProps) {
	const [menuHeight, setMenuHeight] = useState("h-[680px]");
	const [isFullscreen, setIsFullscreen] = useState(false);
	const numOfRecentApps = isFullscreen ? 3 : 2;
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const checkScreenSize = () => {
			if (typeof window === "undefined") return;

			const fullscreen = window.innerHeight > 800;
			setIsFullscreen(fullscreen);
			setMenuHeight(fullscreen ? "h-[680px]" : "h-[520px]");
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);
		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	// Click outside handler for the StartMenu itself
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target as Node)
			) {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<motion.div
			ref={menuRef}
			initial={{ opacity: 0, y: 20, scale: 0.95 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			exit={{ opacity: 0, y: 20, scale: 0.95 }}
			transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
			className={`w-[600px] ${menuHeight} bg-[#f3f3f3]/[0.92] backdrop-blur-[80px] rounded-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.24)] border border-black/[0.08] overflow-hidden`}
			onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
		>
			{/* Rest of your StartMenu content remains the same */}
			<div className="p-9 pb-5">
				<div className="relative">
					<Search
						className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-600"
						strokeWidth={2.5}
					/>
					<input
						type="text"
						placeholder="Search for apps, settings, and documents"
						className="w-full h-[44px] pl-11 pr-4 rounded-[8px] bg-white/90 border border-black/[0.08] text-[14px] text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0067C0]/40 focus:border-[#0067C0]/40 transition-all shadow-sm"
						autoFocus
					/>
				</div>
			</div>

			{/* Pinned Apps */}
			<div className="px-9">
				<div className="flex items-center justify-between mb-4">
					<h3 className="text-[13px] font-semibold text-gray-800">
						Pinned
					</h3>
					<button className="px-3 py-1 text-[12px] text-gray-700 hover:bg-white/50 active:bg-white/70 rounded transition-all flex items-center gap-1">
						All apps
						<ChevronRightIcon />
					</button>
				</div>

				<div
					className={`grid gap-x-2 gap-y-3 ${
						isFullscreen ? "grid-cols-6" : "grid-cols-5"
					}`}
				>
					{pinnedApps.slice(0, isFullscreen ? 12 : 10).map((app) => (
						<button
							key={app.id}
							onClick={() => {
								onAppClick(app.id);
								onClose();
							}}
							className="flex flex-col items-center gap-2 p-3 rounded-[8px] hover:bg-white/50 active:bg-white/70 transition-all group"
						>
							<div className="w-[36px] h-[36px] rounded-[8px] bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-[18px] shadow-sm">
								{app.icon}
							</div>
							<span className="text-[11px] text-gray-800 text-center font-normal leading-tight max-w-[60px] truncate">
								{app.name}
							</span>
						</button>
					))}
				</div>
			</div>

			{/* Recommended - Only show in fullscreen mode */}
			<div className="px-9 py-5 mt-4 border-t border-black/[0.06]">
				<div className="flex items-center justify-between mb-3">
					<h3 className="text-[13px] font-semibold text-gray-800">
						Recommended
					</h3>
					<button className="px-3 py-1 text-[12px] text-gray-700 hover:bg-white/50 active:bg-white/70 rounded transition-all flex items-center gap-1">
						More
						<ChevronRightIcon />
					</button>
				</div>

				<div className="space-y-1">
					{runningApps.slice(0, numOfRecentApps).map((app, idx) => (
						<button
							key={app.id}
							onClick={() => {
								onAppClick(app.id);
								onClose();
							}}
							className="w-full flex items-center gap-3 p-2.5 rounded-[6px] hover:bg-white/50 active:bg-white/70 transition-all text-left"
						>
							<div className="w-[32px] h-[32px] rounded-[6px] bg-white/80 flex items-center justify-center shadow-sm">
								<DocumentIcon />
							</div>
							<div className="flex-1 min-w-0">
								<div className="text-[13px] font-normal text-gray-900 truncate">
									{app.name}
								</div>
								<div className="text-[11px] text-gray-600 truncate">
									{idx === 0
										? "2 minutes ago"
										: idx === 1
										? "1 hour ago"
										: "Yesterday"}
								</div>
							</div>
						</button>
					))}
				</div>
			</div>

			{/* Footer */}
			<div className="absolute bottom-0 left-0 right-0 px-9 py-4 bg-[#f3f3f3]/60 backdrop-blur-sm border-t border-black/[0.06] flex items-center justify-between">
				<button className="flex items-center gap-3 px-3 py-2 rounded-[8px] hover:bg-white/50 active:bg-white/70 transition-all">
					<div className="w-[32px] h-[32px] rounded-full bg-gradient-to-br from-[#0078D4] to-[#00BCF2] flex items-center justify-center text-white text-[13px] font-semibold shadow-sm">
						U
					</div>
					<span className="text-[13px] font-normal text-gray-900">
						User
					</span>
				</button>
				<button
					className="p-2.5 rounded-[8px] hover:bg-white/50 active:bg-white/70 transition-all"
					title="Power"
				>
					<PowerIcon />
				</button>
			</div>
		</motion.div>
	);
}

// Helper icons
function ChevronRightIcon() {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
		>
			<path d="M9 18l6-6-6-6" />
		</svg>
	);
}

function DocumentIcon() {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			className="text-[#0067C0]"
		>
			<path
				d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2Z"
				fill="currentColor"
				opacity="0.8"
			/>
			<path
				d="M14,2V8H20"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function PowerIcon() {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			className="text-gray-700"
		>
			<path
				d="M18.36 6.64a9 9 0 1 1-12.73 0M12 2v10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
