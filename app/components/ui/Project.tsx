import Image from "next/image";

interface ProjectProps {
	id: number;
	src: string;
	title: string;
	description: string;
	className?: string;
}

export default function Project({
	src,
	title,
	description,
	className = "",
}: ProjectProps) {
	return (
		<div
			tabIndex={0}
			className={`relative w-full h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-2xl ${className}`}
			aria-label={`${title} project card`}
		>
			<div
				className="
          relative w-full h-full rounded-2xl overflow-hidden
          shadow-xl border border-gray-300 dark:border-gray-700
          bg-white/30 dark:bg-black/30 backdrop-blur-sm
          transition-transform duration-300 ease-in-out
          hover:scale-[1.03] hover:shadow-2xl
        "
			>
				<Image
					src={src}
					alt={title}
					fill
					sizes="(max-width: 768px) 100vw, 300px"
					className="object-cover transition-opacity duration-300 ease-in-out"
					priority
				/>

				{/* Bottom overlay text */}
				<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3">
					<h2 className="text-lg font-semibold text-white drop-shadow-sm">
						{title}
					</h2>
					<p className="text-sm text-gray-200 line-clamp-2">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
}
