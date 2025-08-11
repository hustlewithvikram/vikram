import { useState, useEffect } from "react";

function openUrl(url) {
    window.open(url, "_blank");
}

async function downloadMedia(url, filename) {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch file, status: " + res.status);
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = filename || "download.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
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

export { useIsMobile, openUrl, downloadMedia };
