import { ReactNode } from "react";

interface HoverButtonInterface {
	text: String;
	icon: ReactNode;
	onClick?: () => any;
}

export default function HoverButton(props: HoverButtonInterface) {
	return (
		<button
			onClick={props.onClick}
			className="flex group items-center px-4 py-2 dark:hover:border-gray-100 border border-gray-600 rounded-full relative pr-12 overflow-hidden w-fit"
		>
			<h1 className="group-hover:z-10 dark:group-hover:text-black group-hover:text-white text-neutral-900 dark:text-neutral-100 transition-all delay-75 font-sans">
				{props.text}
			</h1>
			<span
				className={`absolute transition-all text-md dark:text-black group-hover:justify-end group-hover:pr-3 group-hover:right-0 group-hover:size-full duration-300 ml-2 rounded-full dark:bg-white bg-black text-white size-8 flex justify-center items-center right-1`}
			>
				{props.icon}
			</span>
		</button>
	);
}
