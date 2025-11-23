/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { Search, Mic, Settings, HelpCircle } from "lucide-react";
import { AppMeta } from "./types";
import { useState, useEffect } from "react";

interface SearchMenuProps {
	isOpen: boolean;
	onClose: () => void;
	pinnedApps: AppMeta[];
	onAppClick: (id: string) => void;
}

const appColors: Record<string, string> = {
	edge: "bg-blue-500",
	explorer: "bg-amber-400",
	chrome: "bg-red-400",
	vscode: "bg-blue-500",
	spotify: "bg-green-500",
	teams: "bg-purple-500",
	default: "bg-slate-600",
};

export function TaskbarSearchMenu({
	isOpen,
	onClose,
	pinnedApps,
	onAppClick,
}: SearchMenuProps) {
	const [searchQuery, setSearchQuery] = useState("");
	const [menuHeight, setMenuHeight] = useState("h-[680px]");
	const [isFullscreen, setIsFullscreen] = useState(false);

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

	// Filter apps based on search query
	const filteredApps = pinnedApps.filter((app) =>
		app.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	// Top apps (always shown when no search)
	const topApps = pinnedApps.slice(0, 6);

	// Recent searches (mock data)
	const recentSearches = [
		{ query: "Visual Studio Code", type: "App" },
		{ query: "Google Chrome", type: "App" },
		{ query: "File Explorer", type: "App" },
		{ query: "Settings", type: "Settings" },
	];

	// Quick searches (mock data) - Only show in fullscreen
	const quickSearches = [
		{ label: "Weather", query: "weather", icon: "🌤️" },
		{ label: "Top news", query: "news", icon: "📰" },
		{ label: "Today in history", query: "history", icon: "📅" },
		{ label: "Latest sports", query: "sports", icon: "⚽" },
	];

	// Get app color with fallback
	const getAppColor = (appId: string) => {
		return appColors[appId] || appColors.default;
	};

	if (!isOpen) return null;

	return (
		<motion.div
			initial={{ opacity: 0, y: 20, scale: 0.95 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			exit={{ opacity: 0, y: 20, scale: 0.95 }}
			transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
			className={`w-[580px] ${menuHeight} bg-[#fafafa]/95 backdrop-blur-[80px] rounded-[8px] shadow-[0_16px_40px_rgba(0,0,0,0.16)] border border-white/40 flex flex-col`}
			onClick={(e) => e.stopPropagation()}
		>
			{/* Search Header - Fixed */}
			<div className="flex-shrink-0 p-4 border-b border-gray-200/50">
				<div className="relative">
					<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
					<input
						type="text"
						placeholder="Type here to search"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="w-full h-12 pl-10 pr-12 rounded-[6px] bg-white border border-gray-300/80 text-[15px] text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
						autoFocus
					/>
					<button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-gray-100/80 transition-colors">
						<Mic className="w-4 h-4 text-gray-500" />
					</button>
				</div>
			</div>

			{/* Search Results - Scrollable with custom scrollbar */}
			<div className="flex-1 overflow-hidden">
				<div
					className="h-full overflow-y-auto
					[&::-webkit-scrollbar]:w-2
					[&::-webkit-scrollbar-track]:bg-transparent
					[&::-webkit-scrollbar-thumb]:bg-gray-300/50
					[&::-webkit-scrollbar-thumb]:rounded-full
					[&::-webkit-scrollbar-thumb]:hover:bg-gray-400/50
					[&::-webkit-scrollbar-thumb]:transition-colors
					[&::-webkit-scrollbar]:hover:w-3
					[&::-webkit-scrollbar]:transition-all"
				>
					{searchQuery ? (
						// Search Results View
						<div className="p-4">
							{filteredApps.length > 0 && (
								<h3 className="text-[13px] font-semibold text-gray-700 mb-3 px-2">
									Apps
								</h3>
							)}
							<div className="space-y-1">
								{filteredApps.map((app) => (
									<button
										key={app.id}
										onClick={() => {
											onAppClick(app.id);
											onClose();
										}}
										className="w-full flex items-center gap-3 p-2 rounded-[6px] hover:bg-gray-100/80 active:bg-gray-200/60 transition-all text-left group"
									>
										<div
											className={`flex-shrink-0 w-8 h-8 rounded-[4px] ${getAppColor(
												app.id
											)} flex items-center justify-center text-white text-[14px] shadow-sm group-hover:shadow-md transition-shadow`}
										>
											{app.icon}
										</div>
										<div className="flex-1 min-w-0">
											<div className="text-[14px] font-normal text-gray-900 truncate">
												{app.name}
											</div>
											<div className="text-[12px] text-gray-500 truncate">
												App
											</div>
										</div>
									</button>
								))}
								{filteredApps.length === 0 && (
									<div className="flex flex-col items-center justify-center py-16 text-gray-500">
										<Search className="w-12 h-12 text-gray-300 mb-4" />
										<div className="text-[15px] font-medium mb-1 text-center">
											No results found
										</div>
										<div className="text-[13px] text-center max-w-[300px]">
											Try searching for apps, settings, or
											web content
										</div>
									</div>
								)}
							</div>
						</div>
					) : (
						// Default View - Windows 11 Style
						<div className="space-y-0">
							{/* Top Apps */}
							<div className="p-4">
								<h3 className="text-[13px] font-semibold text-gray-700 mb-3 px-2">
									Top apps
								</h3>
								<div className="grid grid-cols-6 gap-2">
									{topApps.map((app) => (
										<button
											key={app.id}
											onClick={() => {
												onAppClick(app.id);
												onClose();
											}}
											className="flex flex-col items-center gap-2 p-2 rounded-[6px] hover:bg-gray-100/80 active:bg-gray-200/60 transition-all group"
										>
											<div
												className={`w-12 h-12 rounded-[6px] ${getAppColor(
													app.id
												)} flex items-center justify-center text-white text-[16px] shadow-sm group-hover:shadow-md transition-shadow`}
											>
												{app.icon}
											</div>
											<span className="text-[11px] text-gray-700 text-center font-normal leading-tight max-w-[60px] truncate">
												{app.name}
											</span>
										</button>
									))}
								</div>
							</div>

							{/* Recent Searches */}
							<div className="p-4 border-t border-gray-200/50">
								<h3 className="text-[13px] font-semibold text-gray-700 mb-3 px-2">
									Recent
								</h3>
								<div className="space-y-1">
									{recentSearches.map((search, index) => (
										<button
											key={index}
											onClick={() =>
												setSearchQuery(search.query)
											}
											className="w-full flex items-center gap-3 p-2 rounded-[6px] hover:bg-gray-100/80 active:bg-gray-200/60 transition-all text-left group"
										>
											<Search className="w-4 h-4 text-gray-500 flex-shrink-0" />
											<div className="flex-1 min-w-0">
												<div className="text-[14px] font-normal text-gray-900 truncate">
													{search.query}
												</div>
												<div className="text-[12px] text-gray-500 truncate">
													{search.type}
												</div>
											</div>
										</button>
									))}
								</div>
							</div>

							{/* Quick Searches - Only show in fullscreen */}
							{isFullscreen && (
								<div className="p-4 border-t border-gray-200/50">
									<h3 className="text-[13px] font-semibold text-gray-700 mb-3 px-2">
										Quick searches
									</h3>
									<div className="grid grid-cols-2 gap-2">
										{quickSearches.map((search, index) => (
											<button
												key={index}
												onClick={() =>
													setSearchQuery(search.query)
												}
												className="p-3 rounded-[6px] bg-white border border-gray-200/80 hover:bg-gray-50/80 active:bg-gray-100/60 transition-all text-left group"
											>
												<div className="flex items-center gap-2 mb-1">
													<span className="text-[14px] flex-shrink-0">
														{search.icon}
													</span>
													<div className="text-[13px] font-medium text-gray-900 group-hover:text-blue-600 transition-colors truncate">
														{search.label}
													</div>
												</div>
												<div className="text-[11px] text-gray-500 text-left">
													Web
												</div>
											</button>
										))}
									</div>
								</div>
							)}
						</div>
					)}
				</div>
			</div>

			{/* Footer - Fixed */}
			<div className="flex-shrink-0 border-t border-gray-200/50 bg-white/50 backdrop-blur-sm">
				<div className="flex items-center justify-between p-3">
					<div className="flex items-center gap-2">
						<button className="flex items-center gap-2 px-3 py-1.5 rounded-[4px] hover:bg-gray-100/80 transition-colors text-[13px] text-gray-700">
							<Settings className="w-4 h-4" />
							Search settings
						</button>
						<button className="flex items-center gap-2 px-3 py-1.5 rounded-[4px] hover:bg-gray-100/80 transition-colors text-[13px] text-gray-700">
							<HelpCircle className="w-4 h-4" />
							Get Help
						</button>
					</div>
					<div className="text-[11px] text-gray-500 flex-shrink-0">
						© Microsoft
					</div>
				</div>
			</div>
		</motion.div>
	);
}
