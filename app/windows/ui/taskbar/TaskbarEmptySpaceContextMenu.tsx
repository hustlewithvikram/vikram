import { motion } from "framer-motion";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";

interface TaskbarEmptySpaceContextMenuProps {
	onClose: () => void;
	onTaskbarSettings: () => void;
	onTaskManager: () => void;
	onShowDesktop: () => void;
}

export function TaskbarEmptySpaceContextMenu({
	onClose,
	onTaskbarSettings,
	onTaskManager,
	onShowDesktop,
}: TaskbarEmptySpaceContextMenuProps) {
	const menuItems = [
		{
			label: "Task Manager",
			action: onTaskManager,
			icon: (
				<MonitorHeartOutlinedIcon style={{ height: 20, width: 20 }} />
			),
		},
		{ type: "separator" },
		{
			label: "Taskbar settings",
			action: onTaskbarSettings,
			icon: <SettingsOutlinedIcon style={{ height: 20, width: 20 }} />,
		},
	];

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.95 }}
			transition={{ duration: 0.1 }}
			className="bg-[#f8f8f8]/95 backdrop-blur-[40px] rounded-[6px] shadow-[0_4px_24px_rgba(0,0,0,0.12)] border border-white/20 overflow-hidden py-[2px] px-[2px]"
			onClick={(e) => e.stopPropagation()}
		>
			{menuItems.map((item, index) => {
				if (item.type === "separator") {
					return (
						<div
							key={`separator-${index}`}
							className="h-[1px] bg-gray-300/50 my-1"
						/>
					);
				}

				return (
					<button
						key={item.label}
						onClick={() => {
							item.action();
							onClose();
						}}
						className="rounded-[6px] w-full px-3 py-1 text-left text-[14px] text-gray-700 hover:bg-[#0067C0] hover:text-white transition-colors flex items-center justify-between group"
					>
						<div className="flex items-center gap-2">
							<span className="material-symbols-rounded text-gray-600 group-hover:text-current">
								{item.icon}
							</span>
							<span className="font-semibold">{item.label}</span>
						</div>
					</button>
				);
			})}
		</motion.div>
	);
}
