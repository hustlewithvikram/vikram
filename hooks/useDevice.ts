// src/hooks/useDevice.tsx
import { useEffect, useState } from "react";

export default function useDevice() {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const onResize = () => setIsMobile(window.innerWidth < 900);
		onResize();
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);
	return { isMobile };
}
