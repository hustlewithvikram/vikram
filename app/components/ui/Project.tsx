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
			className={`relative w-full h-full cursor-pointer rounded-2xl group ${className}`}
		>
			{/* Image */}
			<div className="relative w-full h-full rounded-2xl overflow-hidden group-hover:shadow-2xl transition-transform duration-300">
				<Image
					src={src}
					alt={title}
					fill
					className="object-cover w-full h-full"
					sizes="(max-width: 768px) 100vw, 33vw"
					priority
				/>
				{/* Overlay */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
				{/* Text */}
				<div className="absolute bottom-0 left-0 right-0 z-20 px-4 py-3">
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
