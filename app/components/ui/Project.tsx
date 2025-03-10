import {
  IconArrowBarRight,
  IconArrowCurveRight,
  IconArrowUpRight,
} from "@tabler/icons-react";
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
			className={`group rounded-2xl overflow-hidden cursor-pointer relative min-w-360 w-full h-[calc(100vh-4rem)] text-white ${props.className}`}
		>
			<img
				src={props.src}
				alt={props.title}
				className={`w-full h-full bg-gray-50 px-4`}
				style={{ objectFit: "contain" }}
			/>
			<div className="dark:md:bg-[#111] md:bg-gray-100 text-black dark:text-gray-50 group-hover:translate-y-full duration-700 h-full w-full transition-all group-hover:bg-opacity-0 group-hover:bg-gray-700 absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center">
				<div className="flex justify-center items-center flex-1 text-9xl font-normal group-hover:text-white">
					<h1>{props.id}</h1>
				</div>
				<div className="flex justify-between items-center w-full md:px-8 md:py-8 py-4 px-3 h-fit group-hover:text-white">
					<div>
						<h1 className="text-2xl font-semibold">
							{props.title}
						</h1>
						<p>{props.description}</p>
					</div>
					<IconArrowUpRight className="size-32" />
				</div>
			</div>
		</div>
	);
}
