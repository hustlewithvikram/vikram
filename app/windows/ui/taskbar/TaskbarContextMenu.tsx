import { motion } from "framer-motion";
import { AppMeta } from "./types";

interface ContextMenuProps {
	app: AppMeta;
	isPinned: boolean;
	isRunning: boolean;
	onClose: () => void;
	onPin: (id: string) => void;
	onUnpin: (id: string) => void;
	onCloseWindow: (id: string) => void;
	onOpenNewWindow: (id: string) => void;
}

// Discriminated union for safe typing
type MenuItem =
	| { type: "separator" }
	| {
			type: "item";
			label: string;
			action: () => void;
			icon?: string;
			bold?: boolean;
			disabled?: boolean;
			danger?: boolean;
	  };

export function TaskbarContextMenu({
	app,
	isPinned,
	isRunning,
	onClose,
	onPin,
	onUnpin,
	onCloseWindow,
	onOpenNewWindow,
}: ContextMenuProps) {
	const menuItems: MenuItem[] = [
		{
			type: "item",
			label: app.name,
			action: () => console.log(`Open ${app.name}`),
			icon: "play_arrow",
			bold: true,
		},
		{
			type: "item",
			label: "Open new window",
			action: () => onOpenNewWindow(app.id),
			icon: "open_in_new",
		},
		{ type: "separator" },
		{
			type: "item",
			label: isPinned ? "Unpin from taskbar" : "Pin to taskbar",
			action: () => (isPinned ? onUnpin(app.id) : onPin(app.id)),
			icon: isPinned ? "push_pin" : "push_pin",
		},
		{ type: "separator" },
		{
			type: "item",
			label: "Close window",
			action: () => onCloseWindow(app.id),
			disabled: !isRunning,
			icon: "close",
			danger: true,
		},
	];

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.95 }}
			transition={{ duration: 0.1 }}
			className="min-w-[220px] bg-[#f8f8f8]/95 backdrop-blur-[40px] rounded-[6px] shadow-[0_4px_24px_rgba(0,0,0,0.12)] border border-white/20 overflow-hidden py-1"
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
							if (item.disabled) return;
							item.action();
							onClose();
						}}
						disabled={item.disabled}
						className={`w-full px-3 py-2 text-left text-[13px] transition-colors flex items-center gap-3 group ${
							item.disabled
								? "text-gray-400 cursor-not-allowed"
								: item.danger
								? "text-gray-700 hover:bg-red-500 hover:text-white"
								: "text-gray-700 hover:bg-[#0067C0] hover:text-white"
						} ${item.bold ? "font-semibold" : "font-normal"}`}
					>
						<span
							className={`material-symbols-rounded text-[18px] ${
								item.disabled ? "text-gray-400" : "text-gray-600"
							} group-hover:text-current`}
						>
							{item.icon}
						</span>
						<span className="flex-1">{item.label}</span>
					</button>
				);
			})}
		</motion.div>
	);
}
