import { Search } from "lucide-react";
import { motion } from "framer-motion";

interface TaskbarSearchProps {
	onClick?: () => void;
}

export function TaskbarSearch({ onClick }: TaskbarSearchProps) {
	return (
		<motion.button
			onClick={onClick}
			className="h-8 px-3 pr-4 rounded-[20px] bg-white/60 hover:bg-white/70 active:bg-white/50 transition-all flex items-center gap-2 border border-black/[0.05] shadow-sm"
			whileTap={{ scale: 0.98 }}
		>
			<Search className="w-4 h-4 text-gray-600" strokeWidth={2} />
			<span className="text-[13px] text-gray-700">Search</span>
		</motion.button>
	);
}
