import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowOutward } from "@mui/icons-material";

interface ProjectProps {
	id: number;
	src: string;
	title: string;
	description: string;
	url: string;
	tags: string[];
	buttonText: string;
	className?: string;
}

export default function Project({
	src,
	title,
	description,
	url,
	buttonText,
	className = "",
	tags,
}: ProjectProps) {
	const router = useRouter();

	return (
		<div
			tabIndex={0}
			className={`group cursor-pointer w-full mx-auto rounded-2xl overflow-hidden
        bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800
        hover:shadow-md transition-all duration-200 focus:outline-none
        focus-visible:ring-2 focus-visible:ring-blue-500/60 ${className}`}
			onClick={() => router.push(url)}
		>
			{/* Image */}
			<div className="relative w-full h-52">
				<Image
					src={src}
					alt={title}
					fill
					className="object-cover bg-[#222] dark:bg-black rounded-t-2xl"
					priority
				/>
			</div>

			{/* Content */}
			<div className="p-5 space-y-3">
				<h3 className="text-lg font-semibold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
					{title}
				</h3>

				<p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed line-clamp-3">
					{description}
				</p>

				<div className="flex items-center justify-between mt-3">
					{/* Tags */}
					{tags.length > 0 && (
						<div className="flex flex-wrap gap-2">
							{tags.map((tag, idx) => (
								<span
									key={idx}
									className="px-2 py-0.5 text-xs font-medium rounded-full bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-gray-300"
								>
									{tag}
								</span>
							))}
						</div>
					)}

					{/* Button */}
					<a
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-full
              border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-white
              hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900
              transition-colors duration-150"
						onClick={(e) => e.stopPropagation()}
					>
						{buttonText}
						<ArrowOutward fontSize="small" />
					</a>
				</div>
			</div>
		</div>
	);
}
