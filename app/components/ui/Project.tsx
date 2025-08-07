import Image from "next/image";
import { useRouter } from "next/navigation";

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
			className={`group cursor-pointer w-full mx-auto rounded-3xl p-2 overflow-hidden bg-white md:hover:shadow-md dark:bg-zinc-900 ${className}`}
		>
			{/* Image */}
			<div className="relative w-full h-60 overflow-hidden rounded-3xl">
				<Image
					src={src}
					alt={title}
					fill
					className="object-cover bg-[#222] dark:bg-black rounded-3xl group-hover:scale-110 duration-300"
					priority
				/>
			</div>

			{/* Text + Button */}
			<div className="p-4 space-y-3">
				<h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">
					{title}
				</h3>
				<p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed line-clamp-3">
					{description}
				</p>

				{/* Visit Button */}
				<div className="flex items-center justify-between">
					{/* Tags */}
					{tags.length > 0 && (
						<div className="flex flex-wrap gap-2 pt-2">
							{tags.map((tag, idx) => (
								<span
									key={idx}
									className="px-2 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 dark:text-gray-300 text-[#222]"
								>
									{tag}
								</span>
							))}
						</div>
					)}
					<a
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block mt-2 text-sm font-medium px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-white hover:scale-105 transition-transform duration-150"
						onClick={(e) => {
							e.stopPropagation();
							router.push(url);
						}}
					>
						{buttonText}
					</a>
				</div>
			</div>
		</div>
	);
}
