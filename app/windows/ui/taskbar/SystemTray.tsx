import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	Wifi,
	Volume2,
	Battery,
	ChevronUp,
	Palette,
	Sun,
	Moon,
} from "lucide-react";
import {
	Accessibility,
	AirplaneTicket,
	Bluetooth,
	Settings,
} from "@mui/icons-material";

interface SystemTrayProps {
	onToggleQuick?: () => void;
}

export function SystemTray({ onToggleQuick }: SystemTrayProps) {
	const [quickSettingsOpen, setQuickSettingsOpen] = useState(false);
	const quickSettingsRef = useRef<HTMLDivElement>(null);
	const quickSettingsButtonRef = useRef<HTMLButtonElement>(null);

	const currentTime = new Date().toLocaleTimeString("en-US", {
		hour: "numeric",
		minute: "2-digit",
		hour12: true,
	});

	const currentDate = new Date()
		.toLocaleDateString("en-IN", {
			day: "numeric",
			month: "numeric",
			year: "numeric",
		})
		.replaceAll("/", "-");

	// Click outside handler for quick settings
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				quickSettingsRef.current &&
				!quickSettingsRef.current.contains(event.target as Node) &&
				quickSettingsButtonRef.current &&
				!quickSettingsButtonRef.current.contains(event.target as Node)
			) {
				setQuickSettingsOpen(false);
			}
		};

		if (quickSettingsOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [quickSettingsOpen]);

	const handleQuickSettingsClick = () => {
		setQuickSettingsOpen(!quickSettingsOpen);
		onToggleQuick?.();
	};

	return (
		<div className="flex items-center">
			{/* Show desktop peek button */}
			<button className="w-[1px] h-full hover:bg-blue-400/30 active:bg-blue-500/40 transition-all ml-1" />

			<button className="w-7 h-7 rounded flex items-center justify-center hover:bg-white/30 active:bg-white/20 transition-all mr-1">
				<ChevronUp
					className="w-[14px] h-[14px] text-[#1f1f1f]"
					strokeWidth={2.5}
				/>
			</button>

			<div>
				<button
					ref={quickSettingsButtonRef}
					onClick={handleQuickSettingsClick}
					className={`h-7 px-1.5 rounded flex items-center gap-[6px] transition-all ${
						quickSettingsOpen
							? "bg-white/40"
							: "hover:bg-white/30 active:bg-white/20"
					}`}
				>
					<Wifi
						className="w-[15px] h-[15px] text-[#1f1f1f]"
						strokeWidth={2.2}
					/>
					<Volume2
						className="w-[15px] h-[15px] text-[#1f1f1f]"
						strokeWidth={2.2}
					/>
					<Battery
						className="w-[15px] h-[15px] text-[#1f1f1f]"
						strokeWidth={2.2}
					/>
				</button>

				<AnimatePresence>
					{quickSettingsOpen && (
						<>
							{/* Overlay backdrop */}
							<div
								className="fixed inset-0 z-40"
								onClick={() => setQuickSettingsOpen(false)}
							/>
							{/* Quick Settings Panel - Aligned to right edge */}
							<motion.div
								ref={quickSettingsRef}
								initial={{ opacity: 0, y: 10, scale: 0.98 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								exit={{ opacity: 0, y: 10, scale: 0.98 }}
								transition={{
									duration: 0.1,
									ease: [0.25, 0.1, 0.25, 1],
								}}
								className="absolute right-1 bottom-[42px] w-[360px] bg-[#f3f3f3]/[0.92] backdrop-blur-[80px] rounded-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.24)] border border-black/[0.08] overflow-hidden z-50"
								onClick={(e) => e.stopPropagation()}
							>
								<QuickSettingsPanel
									onClose={() => setQuickSettingsOpen(false)}
								/>
							</motion.div>
						</>
					)}
				</AnimatePresence>
			</div>

			{/* Time and Date - Moved to the far right */}
			<div className="h-7 px-2 rounded hover:bg-white/30 active:bg-white/20 transition-all flex flex-col items-end justify-center ml-[2px] cursor-default">
				<div className="text-[11px] font-normal text-[#1f1f1f] leading-[1.1]">
					{currentTime}
				</div>
				<div className="text-[11px] font-normal text-[#1f1f1f] leading-[1.1]">
					{currentDate}
				</div>
			</div>
		</div>
	);
}

function QuickSettingsPanel({ onClose }: { onClose?: () => void }) {
	const [quickActions, setQuickActions] = useState([
		{ id: "wifi", icon: Wifi, label: "WiFi", active: true },
		{ id: "bluetooth", icon: Bluetooth, label: "Bluetooth", active: false },
		{
			id: "airplane",
			icon: AirplaneTicket,
			label: "Airplane mode",
			active: false,
		},
		{ id: "battery", icon: Battery, label: "Battery saver", active: false },
		{ id: "focus", icon: Moon, label: "Focus assist", active: false },
		{
			id: "accessibility",
			icon: Accessibility,
			label: "Accessibility",
			active: false,
		},
	]);

	const [volume, setVolume] = useState(70);
	const [brightness, setBrightness] = useState(80);

	const toggleQuickAction = (id: string) => {
		setQuickActions((actions) =>
			actions.map((action) =>
				action.id === id
					? { ...action, active: !action.active }
					: action
			)
		);
	};

	return (
		<div className="p-4">
			{/* Quick Actions Grid - 3x2 */}
			<div className="grid grid-cols-3 gap-2 mb-6">
				{quickActions.map((action) => {
					const IconComponent = action.icon;
					return (
						<button
							key={action.id}
							onClick={() => toggleQuickAction(action.id)}
							className={`h-20 rounded-[6px] transition-all flex flex-col items-center justify-center gap-2 p-2 ${
								action.active
									? "bg-blue-500 text-white shadow-sm"
									: "bg-white/70 hover:bg-white/80 active:bg-white/90 text-gray-700 border border-gray-200/50"
							}`}
						>
							<IconComponent
								className="w-5 h-5"
								strokeWidth={1.5}
							/>
							<span className="text-[11px] font-medium leading-tight text-center">
								{action.label}
							</span>
						</button>
					);
				})}
			</div>

			{/* Sliders Section */}
			<div className="space-y-5 mb-6">
				{/* Volume Slider */}
				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<Volume2
								className="w-4 h-4 text-gray-700"
								strokeWidth={1.5}
							/>
							<span className="text-[13px] font-normal text-gray-700">
								Volume
							</span>
						</div>
						<span className="text-[12px] font-medium text-gray-600">
							{volume}%
						</span>
					</div>
					<input
						type="range"
						min="0"
						max="100"
						value={volume}
						onChange={(e) => setVolume(Number(e.target.value))}
						className="w-full h-1 bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-sm"
					/>
				</div>

				{/* Brightness Slider */}
				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<Sun
								className="w-4 h-4 text-gray-700"
								strokeWidth={1.5}
							/>
							<span className="text-[13px] font-normal text-gray-700">
								Brightness
							</span>
						</div>
						<span className="text-[12px] font-medium text-gray-600">
							{brightness}%
						</span>
					</div>
					<input
						type="range"
						min="0"
						max="100"
						value={brightness}
						onChange={(e) => setBrightness(Number(e.target.value))}
						className="w-full h-1 bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-sm"
					/>
				</div>
			</div>

			{/* Settings Row */}
			<div className="flex items-center justify-between pt-4 border-t border-gray-200/60">
				<button className="flex items-center gap-2 px-3 py-2 rounded-[6px] hover:bg-gray-100/80 transition-colors">
					<Palette className="w-4 h-4 text-gray-700" />
					<span className="text-[13px] font-normal text-gray-700">
						Theme
					</span>
				</button>

				<button className="flex items-center gap-2 px-3 py-2 rounded-[6px] hover:bg-gray-100/80 transition-colors">
					<Settings className="w-4 h-4 text-gray-700" />
					<span className="text-[13px] font-normal text-gray-700">
						All settings
					</span>
				</button>
			</div>

			{/* Battery Info */}
			<div className="mt-4 p-3 bg-white/50 rounded-[6px] border border-gray-200/50">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Battery
							className="w-4 h-4 text-gray-700"
							strokeWidth={1.5}
						/>
						<span className="text-[13px] font-medium text-gray-700">
							Battery
						</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-[12px] text-gray-600">58%</span>
						<div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
							<div
								className="h-full bg-green-500 rounded-full transition-all duration-300"
								style={{ width: "58%" }}
							/>
						</div>
					</div>
				</div>
				<div className="mt-1 text-[11px] text-gray-500">
					Estimated time remaining: 3h 45m
				</div>
			</div>
		</div>
	);
}
