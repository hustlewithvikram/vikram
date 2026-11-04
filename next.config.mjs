/** @type {import('next').NextConfig} */
const nextConfig = {
    // This portfolio is fully static; avoid generating a Netlify server function.
    output: 'export',
    images: {
        // Required for Next.js static export (no on-demand image optimization server).
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'assets.aceternity.com',
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
            }
        ],
    },
};

export default nextConfig;
