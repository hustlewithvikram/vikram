import { useState, useEffect } from "react";

function openUrl(url) {
    window.open(url, "_blank");
}

function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false); // Initial state is false (avoids SSR mismatch)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= breakpoint);

        checkMobile(); // Run once after mount to set correct value
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, [breakpoint]);

    return isMobile;
}

export { useIsMobile, openUrl };
