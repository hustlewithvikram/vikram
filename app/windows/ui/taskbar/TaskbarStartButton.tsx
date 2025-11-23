import { motion } from "framer-motion";

interface TaskbarStartButtonProps {
	onClick?: (e: React.MouseEvent) => void;
	active?: boolean;
}

export function TaskbarStartButton({
	onClick,
	active = false,
}: TaskbarStartButtonProps) {
	return (
		<motion.button
			aria-label="Start"
			title="Start"
			onClick={onClick}
			className={`w-10 h-10 rounded-[8px] flex items-center justify-center transition-all duration-100 ${
				active ? "bg-white/60" : "hover:bg-white/40 active:bg-white/30"
			}`}
			whileTap={{ scale: 0.95 }}
		>
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
				<rect
					x="3"
					y="3"
					width="9"
					height="9"
					rx="1"
					fill="currentColor"
					className="text-[#0067C0]"
				/>
				<rect
					x="14"
					y="3"
					width="9"
					height="9"
					rx="1"
					fill="currentColor"
					className="text-[#0067C0]"
				/>
				<rect
					x="3"
					y="14"
					width="9"
					height="9"
					rx="1"
					fill="currentColor"
					className="text-[#0067C0]"
				/>
				<rect
					x="14"
					y="14"
					width="9"
					height="9"
					rx="1"
					fill="currentColor"
					className="text-[#0067C0]"
				/>
			</svg>
		</motion.button>
	);
}
