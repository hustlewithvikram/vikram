import { motion } from "framer-motion";
import { AppMeta } from "./types";

interface TaskbarAppIconProps {
	app: AppMeta;
	isRunning?: boolean;
	isActive?: boolean;
	onClick?: () => void;
	onContextMenu?: (e: React.MouseEvent) => void;
}

export function TaskbarAppIcon({
	app,
	isRunning = false,
	isActive = false,
	onClick,
	onContextMenu,
}: TaskbarAppIconProps) {
	const getAppColor = (id: string): string => {
		const colors: Record<string, string> = {
			vikram: "bg-blue-500", // Professional blue
			timeline: "bg-purple-600", // Rich purple
			skills: "bg-red-500", // Bold red
			projects: "bg-green-600", // Vibrant green
			"reach-out": "bg-amber-500", // Warm amber
			edge: "bg-blue-600", // Deep blue
			explorer: "bg-amber-400", // Bright amber
			chrome: "bg-red-400", // Chrome red
			vscode: "bg-blue-500", // VS Code blue
			spotify: "bg-green-500", // Spotify green
			teams: "bg-purple-500", // Teams purple
		};
		return colors[id] || "from-gray-400 to-gray-500";
	};

	return (
		<div className="relative group">
			<motion.button
				onClick={onClick}
				onContextMenu={onContextMenu}
				className={`w-10 h-10 flex items-center justify-center transition-all duration-100 ${
					isActive
						? "bg-white/40"
						: "hover:bg-white/30 active:bg-white/20"
				} rounded-md mx-[2px]`}
				whileTap={{ scale: 0.95 }}
			>
				<div
					className={`w-6 h-6 rounded-[6px] bg-gradient-to-br ${getAppColor(
						app.id
					)} flex items-center justify-center text-[15px] shadow-sm`}
				>
					{app.icon}
				</div>
				{app.badge?.type === "count" && (
					<div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-white text-[10px] font-semibold flex items-center justify-center border border-[#f3f3f3]">
						{app.badge.value}
					</div>
				)}
			</motion.button>

			{/* Running indicator */}
			{isRunning && (
				<div
					className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] rounded-full transition-all duration-200 ${
						isActive
							? "w-[18px] bg-[#005FB8]"
							: "w-[4px] bg-[#605E5C]"
					}`}
				/>
			)}

			{/* Tooltip */}
			<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-[#2b2b2b]/95 backdrop-blur-sm text-white text-[12px] rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg">
				{app.name}
				<div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#2b2b2b]/95" />
			</div>
		</div>
	);
}
