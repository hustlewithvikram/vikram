import { useIsMobile } from "@/app/utils/utils";
import { ReactNode } from "react";

interface SocialButtonInterface {
	text: String;
	icon: ReactNode;
	onClick?: () => void;
}

export default function SocialButton(props: SocialButtonInterface) {
	const isMobile = useIsMobile();

	return (
		<button
			onClick={props.onClick}
			className="flex group items-center hover:bg-white outline-white px-3 py-2 mt-8 rounded-full relative overflow-hidden gap-x-2"
		>
			{!isMobile && (
				<h1 className="group-hover:z-10 transition-all group-hover:text-black">
					{props.text}
				</h1>
			)}
			{isMobile && props.icon}
		</button>
	);
}
