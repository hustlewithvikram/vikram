import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";

interface ProjectProps {
	id: number;
	src: string;
	title: string;
	description: string;
	className?: string;
}

export default function Project(props: ProjectProps) {
	return (
		<div
			className={`group rounded-2xl border overflow-hidden cursor-pointer relative w-full bg-gray-100 dark:bg-[#111] dark:border-zinc-700 text-white ${props.className} flex flex-col gap-y-4 justify-between p-4`}
		>
			{/* Image Section */}
			<div className="w-full">
				<img
					src={props.src}
					alt={props.title}
					height={300}
					width={300}
					className="w-full h-full object-cover rounded-full p-8 md:group-hover:scale-110 duration-700"
				/>
			</div>

			{/* Info Section */}
			<div className="dark:bg-[#111] bg-gray-100 text-black dark:text-gray-50 flex flex-col justify-center">
				<div className="flex justify-between items-center">
					<div>
						<h1 className="text-xl md:text-2xl font-semibold">
							{props.title}
						</h1>
						<p>{props.description}</p>
					</div>
					<IconArrowUpRight className="size-12 md:size-32" />
				</div>
			</div>
		</div>
	);
}
