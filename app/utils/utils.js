import { useState, useEffect } from "react";

function openUrl(url) {
    window.open(url, "_blank");
}

async function downloadMedia(url, filename) {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch file');
    const blob = await res.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = filename || 'download';
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(blobUrl);
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
