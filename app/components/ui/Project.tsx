import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProjectProps {
	id: number;
	src: string;
	title: string;
	description: string;
	url: string;
	className?: string;
}

export default function Project({
	src,
	title,
	description,
	url,
	className = "",
}: ProjectProps) {
	const router = useRouter();

	return (
		<div
			tabIndex={0}
			onClick={() => router.push(url)}
			className={`group cursor-pointer w-full max-w-sm mx-auto rounded-3xl p-6 overflow-hidden bg-white dark:bg-zinc-900 ${className}`}
		>
			{/* Image */}
			<div className="relative w-full h-60 overflow-hidden rounded-3xl">
				<Image
					src={src}
					alt={title}
					fill
					className="object-cover bg-black rounded-3xl group-hover:scale-110 duration-300"
					priority
				/>
			</div>

			{/* Text */}
			<div className="p-4 space-y-2">
				<h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
					{title}
				</h3>
				<p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed line-clamp-3">
					{description}
				</p>
			</div>
		</div>
	);
}
